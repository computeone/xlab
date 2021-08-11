import { CompositeDecorator, ContentBlock, ContentState, DraftHandleValue, Editor as DraftEditor, EditorState, getDefaultKeyBinding } from 'draft-js';
import { Token } from 'moo';
import React, { useEffect, useRef } from 'react';
import { ASTType, LexParser } from '../../core/compile';
import { KeyWord } from './Command';
import { HighLightOperation, HightLightCommand, HightLightFunction, HightLightNumber, HightLightString, HightLightVar, OperationType } from './HighLight';
import styles from './index.module.scss';

interface Props {
	lineHeight: number;
	setNewLine: (newLine: boolean) => void;
	editorState: EditorState;
	setEditorState: (editorState: EditorState) => void;
	setRef: (ref: HTMLDivElement) => void;
}

/**
 * 命令行编辑
 * @param props
 * @returns
 */
const Terminal: React.FC<Props> = (props: Props) => {

	const editor = useRef<any>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		props.setRef(editor.current);
	}, [])

	const myKeyBindingFn = (e: any): string | null => {
		if (e.keyCode === 13) {
			props.setNewLine(true);
		}
		return getDefaultKeyBinding(e);
	};

	const onChange = (editorState: EditorState) => {
		props.setEditorState(editorState);
	};

	const handleKeyCommand = (command: string): DraftHandleValue => {
		if (command === 'myeditor-save') {
			return 'handled';
		}
		return 'not-handled';
	};

	const onFocus = () => {
		editor.current.focus();
	};


	return (
		<div className={styles['terminal']} ref={contentRef} onClick={onFocus}>
			<div className={styles['terminal-label']} >
				<span>{'>>'}</span>
			</div>
			<div className={styles['terminal-input']} >
				<DraftEditor
					ref={editor}
					editorState={props.editorState}
					onChange={onChange}
					keyBindingFn={myKeyBindingFn}
					handleKeyCommand={handleKeyCommand}
					onFocus={onFocus}
				/>
			</div>
		</div>
	);
};

const createEditorState = (content = '', lex: LexParser) => {
	const compositeDecorator = new CompositeDecorator([
		{
			strategy: (block: ContentBlock, callback: (start: number, end: number) => void) => {
				try {
					const tokens = lex.parser(block.getText());
					console.log(tokens);

					tokens.forEach((token: Token) => {
						if (token.type === ASTType.INT || token.type === ASTType.FLOAT) {
							callback(token.offset, token.offset + token.text.length);
						}
					});

				} catch (error: any) {
					console.log(error);
				}
			},
			component: HightLightNumber,
		},
		{
			strategy: (_: ContentBlock, callback: (start: number, end: number) => void) => {

				try {
					const tokens = lex.getTokens();
					tokens.forEach((token: Token) => {
						if (token.type === ASTType.STRING) {
							callback(token.offset, token.offset + token.text.length);
						}
					});
				} catch (error) {
					console.error(error);
				}
			},
			component: HightLightString,
		},
		{
			strategy: (_: ContentBlock, callback: (start: number, end: number) => void) => {

				try {
					const tokens = lex.getTokens();
					tokens.forEach((token: Token) => {
						if (token.type === ASTType.VAR) {
							callback(token.offset, token.offset + token.text.length);
						}
					});
				} catch (error) {
					console.error(error);
				}
			},
			component: HightLightVar,
		},
		{
			strategy: (_: ContentBlock, callback: (start: number, end: number) => void) => {

				try {
					const tokens = lex.getTokens();
					tokens.forEach((token: Token) => {
						if (OperationType.find((item: ASTType) => item === token.type)) {
							callback(token.offset, token.offset + token.text.length);
						}
					});
				} catch (error) {
					console.error(error);
				}
			},
			component: HighLightOperation,
		},
		{
			strategy: (_: ContentBlock, callback: (start: number, end: number) => void) => {

				try {
					const tokens = lex.getTokens();
					tokens.forEach((token: Token) => {
						if (token.type === ASTType.FUNCTION) {
							callback(token.offset, token.offset + token.text.length);
						}
					});
				} catch (error) {
					console.error(error);
				}
			},
			component: HightLightFunction,
		},
		{
			strategy: (_: ContentBlock, callback: (start: number, end: number) => void) => {

				try {
					const tokens = lex.getTokens();
					tokens.forEach((token: Token) => {
						if (token.type === KeyWord) {
							callback(token.offset, token.offset + token.text.length);
						}
					});
				} catch (error) {
					console.error(error);
				}
			},
			component: HightLightCommand,
		},

	]);
	return EditorState.moveFocusToEnd(EditorState.createWithContent(ContentState.createFromText(content), compositeDecorator));
};

export { Terminal, createEditorState };

