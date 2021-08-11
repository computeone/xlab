
import { Token } from 'moo';
import React from 'react';
import { ASTType, TerminalMooLexer } from '../../core/compile';
import { ARRAY, NUMBERType, STRING, Type } from '../../core/runtime';
import { arrayVistor } from '../../core/runtime/Util';
import { HighLight } from './HighLight';
import styles from './index.module.scss';
import { calcGap, formatNumber } from './Utils';

export class HistoryText {
	protected text;

	constructor(text: string) {
		this.text = text;
	}

	public getText() {
		return this.text;
	}

}
// 表达式文本
export class HistoryExpressionText extends HistoryText {

	private tokens: Token[];

	constructor(text: string) {
		super(text);
		try {
			this.tokens = Array.from(TerminalMooLexer.reset(text.replaceAll('\n', '')));
		} catch (e) {
			this.tokens = [];
			this.tokens.push({
				type: ASTType.STRING,
				value: text,
				offset: 0,
				text: text,
				line: 0,
				lineBreaks: 1,
				col: 0
			});
		}
	}

	public getTokens() {
		return this.tokens;
	}

	public getLineNumber() {
		return 1;
	}
}

/**
 * ans输出
 */
export class HistoryAnsText extends HistoryText {

	protected ansText: string[] = [];
	constructor(_: string) {
		super('');
	}

	public getAnsText() {
		return this.ansText;
	}

	public getLineNumber() {
		return 1;
	}
}

export class HistoryAnsBasicText extends HistoryAnsText {
	constructor(name: string, data: STRING | NUMBERType) {
		super(name);
		this.ansText.push(name);
		if (data.type === Type.COMPLEX) {
			this.ansText.push(data.value[0] + ' + ' + data.value[1] + 'i');
			return;
		}
		this.ansText.push(data.type === Type.STRING ? data.value : formatNumber(data as any, 4).toString());
	}

	public getLineNumber() {
		return 5;
	}
}

export class HistoryAnsDocumentText extends HistoryAnsText {

	protected width: number;
	protected gap: number;
	protected count: number;
	constructor(name: string, width: number, text: string[]) {
		super(name);

		this.width = width - 10;
		this.gap = calcGap(text, this.calcLen);
		this.count = Math.floor((width) / this.gap);
		const newText = this.row(text, Math.max(1, this.count));

		for (let i = 0; i < newText.length; i++) {
			this.ansText.push(newText[i]);
		}

	}

	private calcLen(value: string) {
		return value.length;
	}

	// 一维数组划分块显示
	private row(arr: Array<any>, count: number) {
		const items: Array<any> = [];
		const groupCount = Math.ceil(arr.length / count);
		for (let i = 0; i < groupCount; i++) {
			items.push([]);
			for (let j = 0; j < Math.min(count, arr.length - i * count); j++) {
				items[i].push(arr[i * count + j]);
			}
		}
		return items;
	}

	public getGap() {
		return this.gap;
	}

	public getWidth() {
		return this.width;
	}

	public getLineNumber() {
		return this.ansText.length + 1;
	}
}

export class HistoryAnsArrayText extends HistoryAnsText {

	protected width: number;
	protected lineNumber: number;
	protected gap: number;
	protected count: number;
	protected eps: number = 0;
	constructor(name: string, arr: ARRAY, width: number, gap: number = 60) {
		super(name);
		this.ansText.push(name);

		// 这个10是hisotry的padding
		this.width = width - 10;
		this.gap = this.calcGap(arr);
		this.count = Math.floor((width) / this.gap);

		let value: any;
		if (arr.dim.length === 1) {
			value = this.row(arr.value, Math.max(1, this.count));
		} else {
			value = this.rowAndColumn(arr);
		}

		for (let i = 0; i < value.length; i++) {
			this.ansText.push(value[i]);
		}

		this.lineNumber = value.length + 4;
	}

	// 获取gap可能的最大长度
	private calcGap(arr: ARRAY) {
		let length = 1;
		let eps: number = 0;
		for (let i = 0; i < arr.value.length; i++) {
			if (arr.value[i].toString().length > length) {
				const value = formatNumber(arr.value[i], 4)
				if (value.toString().length < length) {
					continue;
				}
				length = value.toString().length;

				const frag = value.toString().split('.');
				if (frag[1] && frag[1].length > eps) {
					eps = frag[1].length;
				}
			}


		}
		this.eps = eps;

		switch (length) {
			case 1:
				return 50;
			case 2:
				return 55;
			case 3:
				return 60;
			case 4:
				return 65;
			case 5:
				return 70;
			default:
				return length * 5 + 50;
		}
	}

	// 一维数组划分块显示
	private row(arr: Array<any>, count: number) {
		const items: Array<any> = [];
		const groupCount = Math.ceil(arr.length / count);
		for (let i = 0; i < groupCount; i++) {
			items.push([]);
			for (let j = 0; j < Math.min(count, arr.length - i * count); j++) {
				items[i].push(arr[i * count + j]);
			}
		}
		return items;
	}

	// 二维数组显示
	private rowAndColumn(arr: ARRAY) {
		const result: any[] = [];
		for (let i = 0; i < arr.dim[0]; i++) {
			if (result[i] !== undefined) {
				result[i].push(this.row(arrayVistor(arr, [i + 1, ':']).value, this.count));
				continue;
			}
			result.push(this.row(arrayVistor(arr, [i + 1, ':']).value, this.count));
		}

		const other: any[] = [];
		// 显示不了的部分截断
		for (let j = 0; j < result[0].length; j++) {
			for (let i = 0; i < result.length; i++) {
				other.push(result[i][j]);
			}
		}

		return other;

	}

	public getEps() {
		return this.eps;
	}

	public getGap() {
		return this.gap;
	}

	public getWidth() {
		return this.width;
	}

	public getLineNumber() {
		return this.lineNumber;
	}
}

/**
 * 语法错误
 */
export class HistoryAnsErrorText extends HistoryAnsText {

	protected ansText: any[] = [];
	constructor(name: string, text: string[]) {
		super(name);
		this.ansText.push(...text);
	}
	public getText() {
		return this.text;
	}

	public getAnsText() {
		return this.ansText;
	}

	public getLineNumber() {
		return this.ansText.length + 1;
	}
}

interface Props {
	text: HistoryText[];
	lineHeight: number;
	width?: number;
}

/**
 * 编辑器历史记录渲染
 * 表达式渲染和Ans结果渲染
 */

export const History: React.FC<Props> = (props: Props) => {
	const { lineHeight, text } = props;

	const renderArray = (arr: any, gap: number, eps: number) => {
		return (
			arr.map((value: any, index: number) => {
				if (index !== 0) {
					return renderArrayRow(value, index, gap, eps);
				}
				return null;
			})
		)
	}

	const renderArrayRow = (arr: any, index: number, gap: number, eps: number) => {
		return (
			<div style={{ display: 'flex' }} key={index}>
				{
					arr.map((item: any, index: number) => {
						return <div key={index} style={{ width: gap + 'px', textAlign: 'right', height: lineHeight + 'px' }}>{!isNaN(item) ? item.toFixed(eps) : item}</div>
					})
				}
			</div>
		)
	}

	let lineNumber = 1;

	return (
		<div className={styles['history']}>
			{
				text.map((value: HistoryText, index: number) => {
					if (value instanceof HistoryExpressionText) {
						return (
							<div key={index} style={{ width: '100%', display: 'flex', whiteSpace: 'pre', height: lineHeight + 'px' }}>
								<span style={{ marginRight: '5px' }}>{'>>'}</span>
								{
									(value as HistoryExpressionText).getTokens().map((token: Token, index: number) => {
										return <HighLight token={token} key={index} />;
									})
								}
							</div>
						);
					}
					if (value instanceof HistoryAnsErrorText) {

						lineNumber = value.getAnsText().length + 1;

						return <div style={{ lineHeight: lineHeight + 'px', whiteSpace: 'pre', color: 'red', height: lineHeight * lineNumber + 'px' }} key={index}>
							{
								value.getAnsText().map((item: string, index: number) => {
									return <div key={index}>{item}</div>
								})
							}
							<br />
						</div>
					}
					if (value instanceof HistoryAnsBasicText) {

						lineNumber = 5;

						return (
							<div style={{ lineHeight: lineHeight + 'px', whiteSpace: 'pre', height: lineHeight * lineNumber + 'px' }} key={index}>
								<br />
								<div>
									<span>{value.getAnsText()[0]}</span>
									<span> =</span>
								</div>
								<br />
								<div style={{ marginLeft: '45px' }}>{value.getAnsText()[1]}</div>
								<br />
							</div>
						)
					}
					if (value instanceof HistoryAnsArrayText) {

						lineNumber = value.getAnsText().length + 3;

						return (
							<div style={{ width: value.getWidth() + 'px', boxSizing: 'border-box', lineHeight: lineHeight + 'px', whiteSpace: 'pre', height: lineHeight * lineNumber + 'px' }} key={index}>

								<br />
								<div>
									<span>{value.getAnsText()[0]}</span>
									<span> =</span>
								</div>
								<br />
								<div style={{ overflow: 'hidden', textOverflow: 'clip' }}>
									{
										renderArray(value.getAnsText(), value.getGap(), value.getEps())
									}
								</div>
								<br />
							</div>
						)
					}
					if (value instanceof HistoryAnsDocumentText) {

						let lineNumber = value.getAnsText().length + 1;

						return (
							<div style={{ width: value.getWidth() + 'px', boxSizing: 'border-box', lineHeight: lineHeight + 'px', whiteSpace: 'pre', color: 'blue', height: lineHeight * lineNumber + 'px' }} key={index}>
								{
									value.getAnsText().map((item: any, index: number) => {
										return (
											<div key={index} style={{ overflow: 'hidden', textOverflow: 'clip', display: 'flex' }}>
												{
													item.map((v: string, i: number) => {
														return <div key={i} style={{ width: value.getGap() + 'px', textAlign: 'right' }}>{v}</div>
													})
												}
												<br />
											</div>
										)

									})
								}
								<br />
							</div>
						)
					}

				})}
		</div >

	);
};
