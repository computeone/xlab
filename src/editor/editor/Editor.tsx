import { EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Token } from 'moo';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../component';
import { LexParser } from '../../core/compile';
import { ResultType, Variable } from '../../core/interpreter/Interpreter';
import { ARRAY, StandardLibrary, Type } from '../../core/runtime';
import { arrayVistor, genArrayIndexList } from '../../core/runtime/Util';
import { Plot } from '../../plot';
import { interpreter, useVariableStore } from '../../view';
import { CommandType, KeyWord } from './Command';
import { History, HistoryAnsArrayText, HistoryAnsBasicText, HistoryAnsDocumentText, HistoryAnsErrorText, HistoryExpressionText, HistoryText } from './History';
import styles from './index.module.scss';
import { LeftIcon } from './LeftIcon';
import { PlotData, useEditorCommandStore, usePlotStore } from './state';
import { createEditorState, Terminal } from './Terminal';

interface Props {
	setRef?: (ref: HTMLDivElement) => void;
	top: number;
	lineHeight: number;
}

export const lex = new LexParser();
/**
 * 编辑器
 */
const Editor: React.FC<Props> = (props: Props) => {

	const [newLine, setNewLine] = useState(false);
	const [text, setText] = useState<HistoryText[]>([]);
	const [inputHistory, setInputHistory] = useState<HistoryExpressionText[]>([]);
	const [lineNumber, setLineNumber] = useState(1);
	const [upDownIndex, setUpDownIndex] = useState(0); // up down 上下控制
	const [editorState, setEditorState] = useState<EditorState>(createEditorState('', lex));

	const ref = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const editorRef = useRef<HTMLDivElement>(null);
	const [terminalRef, setTerminalRef] = useState<HTMLDivElement>();

	const windowSize = useWindowSize();

	const updateAll = useVariableStore(state => state.updateAll);
	const plots = usePlotStore(state => state.plots);
	const addPlot = usePlotStore(state => state.add);
	const updatePlot = usePlotStore(state => state.update);
	const cmds = useEditorCommandStore(state => state.cmds);
	const deleteCmd = useEditorCommandStore(state => state.delete);
	const deleteAllvariables = useVariableStore(state => state.deleteAll);

	useEffect(() => {
		if (props.setRef) {
			props.setRef(ref.current!);
		}
	}, []);

	useEffect(() => {
		if (contentRef.current) {
			contentRef.current!.style.height = window.innerHeight - props.top + 'px';
		}
	}, [windowSize]);

	useEffect(() => {
		if (cmds.findIndex((name: CommandType) => name === CommandType.CLC) !== -1) {
			createNewLine([], 1);
			deleteCmd(CommandType.CLC);
		}
	}, [cmds]);

	useEffect(() => {

		// 处理新行
		if (newLine) {
			const newText = editorState.getCurrentContent().getPlainText();
			let tokens: Token[] = []
			let result: Variable[] = [];
			try {
				tokens = [...lex.parser(newText.replaceAll('\n', '').substring(0, newText.length - 1))];
			} catch (e) {
				result = [{
					type: ResultType.ERROR,
					name: 'error',
					value: [e.message.split('\n')[0]]
				}]
			}

			// 换行操作
			if (newText === '\n') {
				text.push(new HistoryExpressionText(''));
				createNewLine(text, lineNumber + 1);
				return;
			}

			const expressionText = new HistoryExpressionText(newText);
			text.push(expressionText);
			inputHistory.push(expressionText);

			// 解析命令
			if (result.length == 0) {

				const filteTokens = tokens.filter((token: Token) => token.type !== '_skip');
				//命令操作
				if (filteTokens.length > 0 && filteTokens.findIndex((token: Token) => token.type !== KeyWord) === -1) {
					switch (filteTokens[0].text) {
						case CommandType.CLC:
							createNewLine([], 1);
							return;
						case CommandType.CLEAR:
							deleteAllvariables();
							interpreter.clearAll();
							createNewLine(text, lineNumber + 1);
							return;
						case CommandType.HELP:
							const ansText = new HistoryAnsDocumentText('', editorRef.current?.clientWidth!, [...Object.keys(StandardLibrary)]);
							text.push(ansText);

							createNewLine(text, lineNumber + expressionText.getLineNumber() + ansText!.getLineNumber());
							return;
						case CommandType.FIGURE:
							interpreter.switchFigure(undefined);
							createNewLine(text, lineNumber + 1);
							return;

						case CommandType.HOLD:
							if (filteTokens.length === 2) {

								createNewLine(text, lineNumber + 1);

								if (filteTokens[1].text === CommandType.ON) {
									interpreter.hold(true);
									return;
								}
								if (filteTokens[1].text === CommandType.OFF) {
									interpreter.hold(false);
									return;
								}
							}
							break;
						default:
							break;
					}
				}

				//处理返回数据
				result = interpreter.parser(newText.replaceAll('\n', ''));
				updateAll(interpreter.getAllVariables());
			}

			const cmd = newText.replaceAll(/\s+/g, '');
			if (cmd.length > 0 && cmd[cmd.length - 1] === ';') {
				createNewLine(text, lineNumber + expressionText.getLineNumber());
				return;
			}

			let line = 0;
			line += expressionText.getLineNumber();

			// 解析展示生成的数据
			for (let i = 0; i < result.length; i++) {
				const data = result[i];
				switch (data.type) {

					case ResultType.NORMAL:
						if (data.value.type === Type.ARRAY) {

							if (data.value.dim.length > 2) {
								const newDim = data.value.dim.filter((_: any, index: number) => index > 1);
								const arrayIndexs = genArrayIndexList(newDim);
								for (let j = 0; j < arrayIndexs.length; j++) {
									const arr = arrayVistor(data.value, [':', ':', ...arrayIndexs[j]]);
									const ansText = new HistoryAnsArrayText(data.name + '(' + ':,' + ':' + arrayIndexs[j].map((item: number) => ',' + item) + ')', arr as ARRAY, editorRef.current?.clientWidth!);
									text.push(ansText);
									line += ansText.getLineNumber();
								}

								break;
							}

							const ansText = new HistoryAnsArrayText(data.name, data.value, editorRef.current?.clientWidth!);
							text.push(ansText);
							line += ansText.getLineNumber();
							break;
						}

						const ansText = new HistoryAnsBasicText(data.name, data.value);
						text.push(ansText);
						line += ansText.getLineNumber();
						break;

					case ResultType.ERROR:
						const lexerError = new HistoryAnsErrorText('', data.value);
						text.push(lexerError);
						line += lexerError.getLineNumber();
						break;
					case ResultType.PLOT:

						const id = data.value;
						const plot = interpreter.getAllFigure().get(id);

						if (plot) {
							if (plots.findIndex((plot: PlotData) => plot.id === id) === -1) {
								addPlot({
									id,
									data: plot.value.data,
									config: plot.value.config
								});
							} else {
								updatePlot(id, {
									id,
									data: plot.value.data,
									config: plot.value.config
								})
							}
						}
						break;

					default:
						break;
				}
			}
			createNewLine(text, lineNumber + line);
		}
	}, [newLine]);

	// 创建新行
	const createNewLine = (text: HistoryText[], lineNumber: number) => {
		setLineNumber(lineNumber)
		setNewLine(false);
		setText(text);
		setEditorState(createEditorState('', lex));
		setUpDownIndex(inputHistory.length);
		setInputHistory(inputHistory);
		scrollHandle();
	}
	/**
	 * 默认滑动到底部
	 */
	const scrollHandle = () => {
		const divScroll = contentRef.current!.lastChild as HTMLDivElement;
		divScroll.scrollTop = divScroll.scrollHeight - divScroll.clientHeight;
	};

	const onKeyUp = (event: any) => {
		if (event.key === "ArrowDown") {
			let index = -1;;
			for (let i = upDownIndex + 1; i < inputHistory.length; i++) {
				if (inputHistory[i] instanceof HistoryExpressionText) {
					index = i;
					break;
				}
			}

			setUpDownIndex(index === -1 ? upDownIndex : Math.min(index, inputHistory.length));

			if (index !== -1) {
				const newEditorState = createEditorState(inputHistory[index].getText().replace('\n', ''), lex);
				setEditorState(newEditorState)
				EditorState.moveFocusToEnd(newEditorState);
			}

			return;
		}

		if (event.key === "ArrowUp") {

			let index = -1;
			for (let i = upDownIndex - 1; i >= 0; i--) {
				if (inputHistory[i] instanceof HistoryExpressionText) {
					index = i;
					break;
				}
			}

			setUpDownIndex(index === -1 ? upDownIndex : Math.max(index, -1));

			if (index !== -1) {
				const newEditorState = createEditorState(inputHistory[index].getText().replace('\n', ''), lex);
				setEditorState(newEditorState)
				EditorState.moveFocusToEnd(newEditorState);
			}
		}

		if (event.key === "Enter") {
			terminalRef?.focus();
		}
	}

	useEffect(() => {
		document.addEventListener("keyup", onKeyUp);
		return () => {
			document.removeEventListener("keyup", onKeyUp);
		}
	}, [onKeyUp])

	return (
		<>
			<div className={styles['root']} ref={ref} >
				<div className={styles['editor']}>
					<div className={styles['content']} ref={contentRef}>
						<LeftIcon lineHeight={props.lineHeight} lineNumber={lineNumber} top={props.top} />
						<div className={styles['right']} ref={editorRef} >
							<History text={text} lineHeight={props.lineHeight} />
							<Terminal
								lineHeight={props.lineHeight}
								setNewLine={setNewLine}
								editorState={editorState}
								setEditorState={setEditorState}
								setRef={setTerminalRef}
							/>
						</div>
					</div>
				</div>
			</div>
			{
				plots.map((plot: PlotData) => {
					return <Plot zIndex={10} key={plot.id} plotData={plot} />
				})
			}
		</>
	);
};

export default Editor;
