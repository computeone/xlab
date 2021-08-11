import { Variable } from "../interpreter/Interpreter";
import RunTime from "./Runtime";
import { ARRAY, DATAType, Type, VAR } from "./Type";
import { calcArrayIndex, calcDim, expandARRAY, genArrayIndexList } from "./Util";

/**
 * 运行时堆
 */
export default class Heap {

	private variables: Map<string, DATAType>;  // 变量区
	public recentUpdateVariable: string = ''; // 最近访问的变量
	public recentCreateVariable: string[] = []; // 最近创建的变量
	public constant: string[] = ['e', 'E', 'pi', 'PI']; // 内置变量
	public plotMap: Map<string, Variable>; // 绘图数据
	public currentFigureId: string = 'default'; // 默认绘图的figure
	public recentUpdateFigure: string = ''; // 最近更新的绘图figure

	constructor() {
		this.variables = new Map<string, DATAType>();
		this.plotMap = new Map<string, Variable>();

		this.initVariable();
	}

	private initVariable() {
		this.variables.set('e', {
			type: Type.DOUBLE,
			value: Math.E,
		});
		this.variables.set('E', {
			type: Type.DOUBLE,
			value: Math.E,
		});
		this.variables.set('pi', {
			type: Type.DOUBLE,
			value: Math.PI
		});
		this.variables.set('PI', {
			type: Type.DOUBLE,
			value: Math.PI
		});
	}

	/**
	 * 加载变量进入运行栈
	 * @param key
	 * @param runtime
	 * @returns
	 */
	public load(key: string, runtime: RunTime) {
		if (this.variables.has(key)) {
			this.recentUpdateVariable = key;
			runtime.push(this.variables.get(key)!);
			return;
		}
		throw new Error('未定义函数或变量 ' + '\'' + key + '\'');
	}

	/**
	 *  加载数组元素进入栈中
	 * @param array
	 * @param arrayIndex
	 * @param runtime
	 */
	public aload(array: ARRAY, arrayIndex: any[], runtime: RunTime) {

		// 检查索引是否非法
		array.dim.forEach((value: number, index: number) => {
			if (arrayIndex[index] !== undefined) {
				if (arrayIndex[index] instanceof Array) {
					arrayIndex[index].forEach((item: any) => {
						if (item < 1) {
							throw new Error('下标索引必须为正整数类型');
						}
						if (item > value) {
							throw new Error('索引超出矩阵维度。');
						}
					});
				}
				if (arrayIndex[index] < 1) {
					throw new Error('下标索引必须为正整数类型');
				}
				if (arrayIndex[index] > value) {
					//throw new Error('索引超出矩阵维度。');
				}
			}
		})
		/*
		单个索引访问
		*/
		if (arrayIndex.length === 1 && arrayIndex[0] !== ':' && !(arrayIndex[0] instanceof Array)) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: [1],
				value: [array.value[arrayIndex[0] - 1]]
			})
			return;
		}

		/*
		 求得数组维度并且收缩维度到输入的最小维度
		 */
		const dim = array.dim.map((item: number, index: number) => {
			if (arrayIndex[index] && arrayIndex[index] instanceof Array) {
				return arrayIndex[index].length
			}
			if (arrayIndex[index] && arrayIndex[index] === ':') {
				return item;
			}
			return 1;
		}).filter((_, index: number) => index <= arrayIndex.length - 1);

		/*
		 获取选中的多维数组索引
		 */
		const newArrayIndexList = genArrayIndexList(dim);
		const result: any[] = []

		/*
		 获取所选择的数据
		 */
		for (let i = 0; i < calcDim(dim); i++) {
			const newIndex = newArrayIndexList[i].map((value: number, index: number) => {
				if (arrayIndex[index] && arrayIndex[index] instanceof Array) {
					return arrayIndex[index][value - 1] - 1;
				}
				if (arrayIndex[index] && arrayIndex[index] !== ':') {
					return arrayIndex[index] - 1;
				}
				return value - 1;
			})

			const index = calcArrayIndex(array.dim, newIndex);
			result.push(array.value[index]);
		}


		runtime.push({
			type: Type.ARRAY,
			elementType: Type.DOUBLE,
			dim,
			value: result
		})
	}

	/**
	 * 给变量赋值
	 * @param runtime
	 */
	public store(runtime: RunTime) {
		const key = (runtime.pop() as VAR).value;
		const value = runtime.pop();
		this.variables.set(key, value!);
		this.recentUpdateVariable = key;
		this.recentCreateVariable.push(key);
	}

	/**
	 * 修改数组元素
	 * @param array
	 * @param arrayIndex
	 * @param runtime
	 */
	public astore(name: string, arrayIndex: any[], runtime: RunTime) {

		const data = runtime.pop();

		// 检查索引是否非法
		arrayIndex.forEach((_, index: number) => {

			if (arrayIndex[index] instanceof Array) {
				let len = 0;
				arrayIndex[index].forEach((item: any) => {
					if (item < 1) {
						throw new Error('下标索引必须为正整数类型');
					}
					len++;
				});
			}
			if (arrayIndex[index] < 1) {
				throw new Error('下标索引必须为正整数类型');
			}
		})

		const array: ARRAY = this.variables.has(name) ? this.variables.get(name) as ARRAY : {
			type: Type.ARRAY,
			elementType: Type.DOUBLE,
			dim: [0],
			value: []
		}

		/*
		输入的索引所代表的最大维度，如果维度大于当前的数组维度，则扩充数组数
		 */
		const dim: number[] = arrayIndex.map((value: any, index: number) => {
			if (value instanceof Array) {
				return value.length;
			}
			if (value === ':') {
				return (this.variables.get(name) as ARRAY).dim[index];
			}
			return value;
		});

		this.recentUpdateVariable = name;

		/*
		创建指定大小多维数组
		*/
		if (array.value.length === 0) {
			for (let i = 0; i < calcDim(array.dim); i++) {
				array.value.push(0);
			}
		}

		/*
		* 多维数组扩充
		*/
		if (calcDim(dim) > calcDim(array.dim)) {
			array.value = expandARRAY(array, dim);
			array.dim = [...dim];
		}

		/*
		求得数组维度,需要替换的数据维度
		*/
		const newDim = array.dim.map((item: number, index: number) => {
			if (arrayIndex[index]) {
				if (arrayIndex[index] instanceof Array) {
					return arrayIndex[index].length;
				}
				if (arrayIndex[index] === ':') {
					return item;
				}
			}
			return 1;
		});


		// 如果为单个元素赋值
		if (calcDim(newDim) === 1) {

			let newValue = undefined;
			if (data?.type === Type.ARRAY && calcDim(data.dim) !== 1) {
				throw new Error('赋值具有的非单一 rhs 维度多于非单一下标数');
			}

			if (data?.type === Type.ARRAY) {
				newValue = data.value[0];
			} else {
				newValue = data?.value;
			}

			if (arrayIndex.length > 1) {
				array.value[calcArrayIndex(array.dim, arrayIndex.map((index: number) => index - 1))] = newValue;
			}
			else if (arrayIndex[0] === ':') {
				array.value[0] = newValue;
			} else {
				array.value[arrayIndex[0] - 1] = newValue;
			}

			if (!this.variables.has(name)) {
				this.variables.set(name, array);
			}
			return;
		}
		/*
		获取选中的多维数组索引
		*/
		const newArrayIndexList = genArrayIndexList(newDim);

		if (calcDim(newDim) !== calcDim((data as any).dim)) {
			throw new Error('赋值具有的非单一 rhs 维度多于非单一下标数');
		}
		/*
		修改选中的数据
		*/
		for (let i = 0, j = 0; i < calcDim(newDim); i++, j++) {

			const newIndex = newArrayIndexList[i].map((value: number, index: number) => {
				if (arrayIndex[index] && arrayIndex[index] instanceof Array) {
					return arrayIndex[index][value - 1] - 1;
				}
				if (arrayIndex[index] && arrayIndex[index] !== ':') {
					return arrayIndex[index] - 1;
				}
				return value - 1;
			})

			const index = calcArrayIndex(array.dim, newIndex);
			array.value[index] = (data as any).value[j];
		}

		if (!this.variables.has(name)) {
			this.variables.set(name, array);
		}
	}

	/**
	 *
	 * @returns
	 */
	public getAllVariables() {
		return this.variables;
	}

	/**
	 *更新变量
	 * @param key
	 * @param value
	 */
	public updateVariable(key: string, value: DATAType) {
		if (this.constant.findIndex((item: string) => item === key) === -1) {
			this.variables.set(key, value);
		}
	}

	/**
	 *
	 * @param key
	 * @returns
	 */
	public getVariable(key: string) {
		if (this.variables.has(key)) {
			return this.variables.get(key);
		}
		return undefined;
	}

	/**
	 *
	 * @param key
	 */
	public deleteVariable(key: string) {
		if (this.variables.has(key) && this.constant.findIndex((item: string) => item === key) === -1) {
			this.variables.delete(key);
		}
	}

	/**
	 *清除
	 */
	public clearAll() {
		this.variables.clear();
		this.initVariable();
	}

}
