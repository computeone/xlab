import { AST } from '../compile';
import { ResultType, Variable } from '../interpreter/Interpreter';
import CallStack from './CallStack';
import Heap from './Heap';
import { instructionSet } from './InstructionSet';
import { OpCode, visit } from './OpCode';
import { ARRAY, DATAType } from './Type';
/**
 * 虚拟机运行时
 */
class RunTime {

	private heap: Heap; // 运行时堆
	private callStack: CallStack; // 运行时栈
	constructor() {
		this.heap = new Heap();
		this.callStack = new CallStack();
	}

	public push(operand: DATAType) {
		this.callStack.push(operand);
	}

	public pop(): DATAType {
		if (this.callStack.size() === 0) {
			throw new Error('未知错误!');
		}

		return this.callStack.pop()!;
	}

	/**
	 * 加载常量进入运行栈
	 * a = 100
	 * @param key
	 */
	public load(key: string) {
		return this.heap.load(key, this);
	}

	/**
	 * 加载匿名数组中的元素进入运行栈
	 * [1,2,3]
	 */
	public aload(array: ARRAY, arrayIndex: any[]) {
		this.heap.aload(array, arrayIndex, this);
	}

	/**
	 * 保存常量和数组到heap中
	 * a = 100
	 */
	public store() {
		this.heap.store(this);
	}

	/**
	 * 修改数组元素
	 * [1,2,3]
	 */
	public astore(name: string, arrayIndex: any[]) {
		this.heap.astore(name, arrayIndex, this);
	}

	public hold(on: boolean) {
		const figure = this.getCurrentFigure();
		this.updateFigure({
			type: ResultType.PLOT,
			name: figure.name,
			value: {
				data: figure.value.data,
				config: {
					hold: on
				}
			}
		});

	}

	// 切换figure id
	public switchFigure(id: string) {
		this.heap.currentFigureId = id;
		this.heap.recentUpdateFigure = this.heap.currentFigureId;
	}

	public deleteFirgure(id: string) {

		if (this.heap.plotMap.has(id) && id !== 'default') {
			this.heap.plotMap.delete(id);
			this.heap.currentFigureId = 'default';
			this.heap.recentUpdateFigure = this.heap.currentFigureId;
		}
	}

	public updateFigure(plot2d: Variable) {
		this.heap.recentUpdateFigure = this.heap.currentFigureId;
		const figure = this.getCurrentFigure();

		this.heap.plotMap.set(this.heap.currentFigureId, {
			type: ResultType.PLOT,
			name: plot2d.name,
			value: {
				data: plot2d.value.data,
				config: {
					...figure ? figure.value.config : '',
					...plot2d.value.config
				}
			}
		})

	}

	public getCurrentFigure() {
		if (!this.heap.plotMap.has(this.heap.currentFigureId)) {
			this.heap.plotMap.set(this.heap.currentFigureId, {
				type: ResultType.PLOT,
				name: this.heap.currentFigureId,
				value: {
					data: [],
					config: {
					}
				}
			})
		}
		return this.heap.plotMap.get(this.heap.currentFigureId)!;
	}

	public getAllFigure() {
		return this.heap.plotMap;
	}

	public getAllVariables() {
		return this.heap.getAllVariables();
	}

	public updateVariable(name: string, value: DATAType) {
		this.heap.updateVariable(name, value);
	}

	public deleteVariable(name: string) {
		this.heap.deleteVariable(name);
	}

	public getInnerConstant() {
		return this.heap.constant;
	}

	public clearAllVariable() {
		this.heap.clearAll();
	}
	/**
	 * 开始处理AST
	 * @param ast
	 */
	public run(ast: AST): Variable[] {

		this.callStack.clear();
		this.heap.recentCreateVariable = [];
		this.heap.recentUpdateVariable = '';
		this.heap.recentUpdateFigure = '';

		const opCodes: OpCode[] = [];
		visit(ast.getRoot(), opCodes);

		console.log(opCodes);
		for (let i = 0; i < opCodes.length; i++) {
			instructionSet[opCodes[i].getName()](this, opCodes[i]);
		}

		// 堆栈没有内容
		if (this.callStack.size() === 0) {

			// 进行了绘图返回null
			if (this.heap.recentUpdateFigure != '') {
				return [{
					type: ResultType.PLOT,
					name: '',
					value: this.heap.currentFigureId
				}];

			}

			const result: Variable[] = [];
			//最近创建的
			for (let i = this.heap.recentCreateVariable.length - 1; i >= 0; i--) {
				result.push({
					type: ResultType.NORMAL,
					name: this.heap.recentCreateVariable[i],
					value: this.heap.getVariable(this.heap.recentCreateVariable[i]),
				})
			}

			// 最近访问的
			if (result.length === 0 && this.heap.recentUpdateVariable !== '') {
				result.push({
					type: ResultType.NORMAL,
					name: this.heap.recentUpdateVariable,
					value: this.heap.getVariable(this.heap.recentUpdateVariable),
				})
			}

			return result;
		}

		let result = this.pop();
		console.log(result);
		console.log("heap:", this.heap);
		console.log('callStack:', this.callStack);

		if (opCodes.length === 2 && opCodes[0].getInstructionCode() === '0x04' && opCodes[1].getInstructionCode() === '0x08') {

			return [{
				type: ResultType.NORMAL,
				name: this.heap.recentUpdateVariable,
				value: this.heap.getVariable(this.heap.recentUpdateVariable),
			}]
		}

		if (opCodes.length === 5 && opCodes[2].getOperand()[0] === ':' && opCodes[4].getInstructionCode() === '0x09') {

			return [{
				type: ResultType.NORMAL,
				name: this.heap.recentUpdateVariable,
				value: this.heap.getVariable(this.heap.recentUpdateVariable),
			}]
		}

		this.heap.updateVariable('ans', result!);

		return [{
			type: ResultType.NORMAL,
			name: 'ans',
			value: result,
		}]
	}

}

export default RunTime;
