
import { AST, GrammarParser } from '../compile';
import { DATAType, RunTime } from '../runtime';
/**
 * 解析器
 */
export class Interpreter {

	private synaticParser: GrammarParser;
	private runtime: RunTime;

	constructor() {
		this.synaticParser = new GrammarParser();
		this.runtime = new RunTime();
	}

	public delete(name: string) {
		this.runtime.deleteVariable(name);
	}

	public update(name: string, value: DATAType) {
		this.runtime.updateVariable(name, value);
	}

	public getInnerConstant() {
		return this.runtime.getInnerConstant();
	}

	public clearAll() {
		this.runtime.clearAllVariable();
	}

	public getAllVariables() {
		const array = Array<Variable>();
		this.runtime.getAllVariables().forEach((value: DATAType, key: string) => {
			array.push({
				type: ResultType.NORMAL,
				name: key,
				value: value
			});
		});
		return array;
	}

	public switchFigure(id: string | undefined) {
		if (id) {
			this.runtime.switchFigure(id);
			return;
		}
		this.runtime.switchFigure('default');
	}

	public deleteFigure(id: string) {
		this.runtime.deleteFirgure(id);
	}

	public getAllFigure() {
		return this.runtime.getAllFigure();
	}

	public hold(on: boolean) {
		this.runtime.hold(on);
	}

	/**
	 * 解析
	 * @param str
	 * @returns
	 */
	public parser(content: string) {

		try {
			const tree = this.synaticParser.parser(content);
			console.log(tree);
			const ast = AST.buildAST(tree);
			console.log(ast);
			return this.runtime.run(ast);
		} catch (e: any) {
			console.log(e);
			return [{
				type: ResultType.ERROR,
				name: 'error',
				value: [e.message]
			}]
		}
	}
}

export interface Variable {
	type: ResultType;
	name: string;
	value: DATAType | any;
}

export enum ResultType {
	NORMAL,
	NO,
	PLOT,
	ERROR,
}
