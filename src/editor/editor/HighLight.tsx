
import type { Token } from 'moo';
import React from 'react';
import { ASTType } from '../../core/compile';
import { KeyWord } from './Command';

interface Props {
	children?: any;
	token?: Token;
}

export const OperationType = [
	ASTType.ASSIGN, ASTType.SEMI_COLON, ASTType.COLON, ASTType.ELEMENT_DOT,
	ASTType.PLUS, ASTType.MINUS, ASTType.MUL, ASTType.DIV, ASTType.POW, ASTType.TRANSPOSE,
	ASTType.ELEMENT_MUL, ASTType.ELEMENT_DIV, ASTType.ELEMENT_POW, ASTType.ELEMENT_TRANSPOSE,
	ASTType.LBRACE, ASTType.RBRACE, ASTType.LPAREN, ASTType.RPAREN, ASTType.LBRACK, ASTType.RBRACK
]
/**
 * 语法高亮显示
 */

export const HighLight: React.FC<Props> = (props: Props) => {

	const { token } = props;

	const render = () => {
		const type = token?.type;

		if (type === ASTType.INT || type === ASTType.FLOAT) {
			return <HightLightNumber token={token} />;
		}
		if (type === ASTType.STRING) {
			return <HightLightString token={token} />;
		}
		if (type === ASTType.VAR) {
			return <HightLightVar token={token} />;
		}
		if (type === ASTType.FUNCTION) {
			return <HightLightFunction token={token} />;
		}
		if (type === KeyWord) {
			return <HightLightCommand token={token} />;
		}
		if (OperationType.find((item: ASTType) => item === type)) {
			return <HighLightOperation token={token} />;
		}

		return <span>{token!.value}</span>;
	};
	return (

		<React.Fragment>
			{
				render()
			}
		</React.Fragment>
	);

};

/**
 * 操作符高亮
 * @param props
 * @returns
 */
export const HighLightOperation: React.FC<Props> = (props: Props) => {
	return (
		<React.Fragment>
			<span style={{ color: '#aa0000' }}>
				{props.children ? props.children : props.token!.text}
			</span>
		</React.Fragment>
	);
};


/**
 * 数字类型高亮
 * @param props
 * @returns
 */
export const HightLightNumber: React.FC<Props> = (props: Props) => {
	return (
		<React.Fragment>
			<span style={{ color: '#aaaa00' }}>
				{props.children ? props.children : props.token!.text}
			</span>
		</React.Fragment>
	)
}

/**
 * 字符串类型高亮
 * @param props
 * @returns
 */
export const HightLightString: React.FC<Props> = (props: Props) => {
	return (
		<React.Fragment>
			<span style={{ color: '#ff8c00' }}>
				{props.children ? props.children : props.token!.text}
			</span>
		</React.Fragment>
	)
}
/**
 * 变量类型高亮
 * @param props
 * @returns
 */
export const HightLightVar: React.FC<Props> = (props: Props) => {
	return (
		<React.Fragment>
			<span style={{ color: 'blue' }}>
				{props.children ? props.children : props.token!.text}
			</span>
		</React.Fragment>
	)
}

/**
 * 函数高亮
 * @param props
 * @returns
 */
export const HightLightFunction: React.FC<Props> = (props: Props) => {
	return (
		<span style={{ color: 'green' }}>
			{props.children ? props.children : props.token!.text}
		</span>
	);
};

/**
 * 命令高亮
 * @param props
 * @returns
 */
export const HightLightCommand: React.FC<Props> = (props: Props) => {
	return (
		<span style={{ color: '#2209bd' }}>
			{props.children ? props.children : props.token!.text}
		</span>
	);
};

