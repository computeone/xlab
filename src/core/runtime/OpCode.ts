import { ASTNode, ASTType } from "../compile";
import { parseNumber } from "./Util";


const OpCodeMap = {
	iconst: '0x00',
	fconst: '0x01',
	dconst: '0x02',
	sconst: '0x03',
	vconst: '0x04',
	aconst: '0x05',
	caconst: '0x06',
	cconst: '0x7',
	load: '0x08',
	aload: '0x09',
	store: '0x09',
	astore: '0x0a',
	call: '0x0b',
	vecAdd: '0x0c',
	vecSub: '0x0d',
	vecMul: '0x0f',
	vecDiv: '0x10',
	vecPow: '0x11',
	vecTrans: '0x12',
}

/**
 * 定义操作码
 */
export class OpCode {
	private instructionCode: string; // 指令码
	private name: string; // 助记符
	private operand: any[]; // 需要的操作数

	constructor(instructionCode: string, name: string, operand: any[] = []) {
		this.instructionCode = instructionCode;
		this.name = name;
		this.operand = operand;
	}

	public getInstructionCode() {
		return this.instructionCode;
	}

	public getName() {
		return this.name;
	}

	public getOperand() {
		return this.operand;
	}

}

const handleASTNode: any = {

	/**
	 * 基本数据结构创建
	 */

	[ASTType.INT]: (node: ASTNode, opCodes: OpCode[]) => {
		opCodes.push(new OpCode(OpCodeMap['dconst'], 'dconst', [parseNumber(node.getValue()?.getText()!)]));
	},
	[ASTType.FLOAT]: (node: ASTNode, opCodes: OpCode[]) => {
		const text = node.getValue()?.getText();
		const splits = text?.split(/[e E]/);

		if (splits?.length === 1) {
			opCodes.push(new OpCode(OpCodeMap['dconst'], 'dconst', [parseNumber(node.getValue()?.getText()!)]));
			return;
		}
		const base = parseNumber(splits![0]);
		const exponent = parseNumber(splits![1]);
		opCodes.push(new OpCode(OpCodeMap['dconst'], 'dconst', [base * Math.pow(10, exponent)]));
	},
	[ASTType.COMPLEX]: (node: ASTNode, opCodes: OpCode[]) => {
		opCodes.push(new OpCode(OpCodeMap['dconst'], 'dconst', [parseNumber(node.getValue()!.getText()!.replace('i', ''))]));
	},
	[ASTType.STRING]: (node: ASTNode, opCodes: OpCode[]) => {
		opCodes.push(new OpCode(OpCodeMap['sconst'], 'sconst', [node.getValue()?.getText()?.replaceAll('\'', '')]));
	},
	[ASTType.VAR]: (node: ASTNode, opCodes: OpCode[]) => {
		opCodes.push(new OpCode(OpCodeMap['vconst'], 'vconst', [node.getValue()?.getText()]));
		opCodes.push(new OpCode(OpCodeMap['load'], 'load'));
	},

	//创建数组
	[ASTType.ARRAY]: (node: ASTNode, opCodes: OpCode[]) => {
		let dim1 = 1;
		let dim2 = 0;
		const dim = [];;
		node.getChildren().forEach(element => {
			if (element.getType() === ASTType.SEMI_COLON) {
				dim1++;
			}

			if (element.getType() === ASTType.XPR_TREE && dim1 === 1) {
				dim2++;
			}
		})

		dim.push(dim1, dim2);

		for (let i = 0; i < node.getChildren().length; i++) {
			visit(node.getChildren()[i], opCodes);
		}
		opCodes.push(new OpCode(OpCodeMap['aconst'], 'aconst', [dim]));
	},

	//数组索引操作符
	[ASTType.ARRAY_INDEX]: (node: ASTNode, opCodes: OpCode[]) => {
		let len = 0;

		if (node.getChildren()[0].getType() === ASTType.VAR) {
			visit(node.getChildren()[0], opCodes);
		}

		for (let i = node.getChildren().length - 1; i > 0; i--) {

			if (node.getChildren()[i].getType() === ASTType.XPR_TREE || node.getChildren()[i].getType() === ASTType.ARRAY_INDEX_ALL) {
				visit(node.getChildren()[i], opCodes);
				len++;
			}
		}
		opCodes.push(new OpCode(OpCodeMap['iconst'], 'iconst', [len]));
		opCodes.push(new OpCode(OpCodeMap['aload'], 'aload'));
	},

	//数组操作符冒号
	[ASTType.ARRAY_INDEX_ALL]: (node: ASTNode, opCodes: OpCode[]) => {
		opCodes.push(new OpCode(OpCodeMap['sconst'], 'sconst', [node.getValue()?.getText()]));
	},

	//分配运算符
	[ASTType.ST_ASSIGN]: (node: ASTNode, opCodes: OpCode[]) => {

		const length = node.getChildren().length;
		visit(node.getChildren()[length - 1], opCodes);

		// 普通变量赋值
		if (node.getChildren()[0].getType() === ASTType.VAR) {
			opCodes.push(new OpCode(OpCodeMap['vconst'], 'vconst', [node.getChildren()[0].getValue()?.getText()]));
			opCodes.push(new OpCode(OpCodeMap['store'], 'store'));
		}

		// 数组赋值
		if (node.getChildren()[0].getType() === ASTType.ARRAY_INDEX) {
			const arrayIndexNode = node.getChildren()[0];
			let len = 0;
			for (let i = arrayIndexNode.getChildren().length - 1; i > 0; i--) {
				if (arrayIndexNode.getChildren()[i].getType() === ASTType.XPR_TREE || arrayIndexNode.getChildren()[i].getType() === ASTType.ARRAY_INDEX_ALL) {
					visit(arrayIndexNode.getChildren()[i], opCodes);
					len++;
				}
			}
			opCodes.push(new OpCode(OpCodeMap['iconst'], 'iconst', [len]));
			opCodes.push(new OpCode(OpCodeMap['vconst'], 'vconst', [arrayIndexNode.getChildren()[0].getValue()?.getText()]));
			opCodes.push(new OpCode(OpCodeMap['store'], 'astore'));
		}

		//数组解耦
		if (node.getChildren()[0].getType() === ASTType.LBRACK) {
			for (let i = length - 1; i > 0; i--) {
				if (node.getChildren()[i].getType() === ASTType.VAR) {
					opCodes.push(new OpCode(OpCodeMap['vconst'], 'vconst', [node.getChildren()[i].getValue()?.getText()]));
					opCodes.push(new OpCode(OpCodeMap['store'], 'store'));
				}
			}
		}
	},

	// 函数
	[ASTType.FUNCTION]: (node: ASTNode, opCodes: OpCode[]) => {
		let argv = 0;
		for (let i = node.getChildren().length - 1; i > 0; i--) {
			if (node.getChildren()[i].getType() === ASTType.XPR_TREE) {
				argv++;
			}
			visit(node.getChildren()[i], opCodes);
		}
		opCodes.push(new OpCode(OpCodeMap['iconst'], 'iconst', [argv]))
		opCodes.push(new OpCode(OpCodeMap['vconst'], 'vconst', [node.getChildren()[0].getValue()?.getText()]));
		opCodes.push(new OpCode(OpCodeMap['call'], 'call'));
	},

	//冒号
	[ASTType.COLON]: (node: ASTNode, opCodes: OpCode[]) => {
		const child = node.getChildren()[0];
		// 带间隔的冒号表达式
		if (child.getChildren().length === 3 && child.getChildren()[1].getType() === ASTType.COLON) {
			visit(child.getChildren()[0], opCodes);
			visit(child.getChildren()[2], opCodes);
			visit(node.getChildren()[2], opCodes);
			opCodes.push(new OpCode(OpCodeMap['caconst'], 'caconst'));
			return;
		}
		visit(node.getChildren()[0], opCodes);
		opCodes.push(new OpCode(OpCodeMap['iconst'], 'iconst', [1]))
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['caconst'], 'caconst'));
	},

	// 算术操作符
	[ASTType.PLUS]: (node: ASTNode, opCodes: OpCode[]) => {
		if (node.getChildren().length === 2) {
			visit(node.getChildren()[1], opCodes);
			return;
		}

		if (node.getChildren()[2].getChildren()[0].getType() === ASTType.COMPLEX) {
			visit(node.getChildren()[0], opCodes);
			visit(node.getChildren()[2], opCodes);
			opCodes.push(new OpCode(OpCodeMap['cconst'], 'cconst', []));
			return;
		}

		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecAdd'], 'vecAdd'));
	},
	[ASTType.MINUS]: (node: ASTNode, opCodes: OpCode[]) => {

		if (node.getChildren().length === 2) {
			opCodes.push(new OpCode(OpCodeMap['dconst'], 'dconst', [-1]));
			visit(node.getChildren()[1], opCodes);
			opCodes.push(new OpCode(OpCodeMap['vecMul'], 'vecMul'));
			return;
		}

		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecSub'], 'vecSub'));
	},
	[ASTType.MUL]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecMul'], 'vecMul'));
	},
	[ASTType.DIV]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecDiv'], 'vecDiv'));
	},
	[ASTType.POW]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecPow'], 'vecPow'));
	},
	[ASTType.ELEMENT_MUL]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecMul'], 'vecMul'));
	},
	[ASTType.ELEMENT_DIV]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecDiv'], 'vecDiv'));
	},
	[ASTType.ELEMENT_POW]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecPow'], 'vecPow'));
	},
	[ASTType.TRANSPOSE]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecTrans'], 'vecTrans'));
	},
	[ASTType.ELEMENT_TRANSPOSE]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		visit(node.getChildren()[2], opCodes);
		//opCodes.push(new OpCode(OpCodeMap['vecTrans'], 'vecTrans'));
		throw new Error("不支持'\\'");
	},
	[ASTType.ELEMENT_DOT]: (node: ASTNode, opCodes: OpCode[]) => {
		visit(node.getChildren()[0], opCodes);
		opCodes.push(new OpCode(OpCodeMap['vecTrans'], 'vecTrans'));
	},
}

// visit ASTNode
export function visit(node: ASTNode, opCodes: OpCode[]) {

	if (node.getType() === ASTType.ST_ASSIGN) {
		handleASTNode[node.getType()](node, opCodes);
		return;
	}

	// 解析二元操作符  正负号和转置操作符
	if (node.getChildren().length === 2) {
		if (node.getChildren()[1].getType() === ASTType.ELEMENT_DOT) {
			handleASTNode[node.getChildren()[1].getType()](node, opCodes);
			return;
		}
		handleASTNode[node.getChildren()[0].getType()](node, opCodes);
		return;
	}

	// 解析三元操作符
	if (node.getChildren().length === 3 && handleASTNode[node.getChildren()[1].getType()]) {
		handleASTNode[node.getChildren()[1].getType()](node, opCodes);
		return;
	}

	if (handleASTNode[node.getType()]) {
		handleASTNode[node.getType()](node, opCodes);
		return;
	}

	for (let i = 0; i < node.getChildren().length; i++) {
		visit(node.getChildren()[i], opCodes);
	}
}


