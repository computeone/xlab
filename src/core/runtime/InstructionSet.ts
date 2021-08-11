import { transpose } from './Math';
import { OpCode } from './OpCode';
import type RunTime from './Runtime';
import { ARRAY, DATAType, INT32, Type } from './Type';
import { calcDim, call, checkArrayDimEqual, completeArrayIndex, multipleMatrix } from './Util';

/**
 * 执行指令集
 */
export const instructionSet: any = {

	// int 常量压入运行栈
	'iconst': (runtime: RunTime, instruction: OpCode) => {
		runtime.push({
			type: Type.INT32,
			value: instruction.getOperand()[0]
		});
	},

	// float 常量压入运行栈
	'fconst': (runtime: RunTime, instruction: OpCode) => {
		runtime.push({
			type: Type.FLOAT,
			value: instruction.getOperand()[0]
		});
	},

	// double 常量压入运行栈
	'dconst': (runtime: RunTime, instruction: OpCode) => {
		runtime.push({
			type: Type.DOUBLE,
			value: instruction.getOperand()[0]
		});
	},

	//string 常量压入运行栈
	'sconst': (runtime: RunTime, instruction: OpCode) => {
		runtime.push({
			type: Type.STRING,
			value: instruction.getOperand()[0]
		});
	},

	// 加载变量进入运行栈
	'vconst': (runtime: RunTime, instruction: OpCode) => {
		runtime.push({
			type: Type.VAR,
			value: instruction.getOperand()[0]
		});

	},

	// 创建一个多维数组
	'aconst': (runtime: RunTime, instruction: OpCode) => {
		const length = calcDim(instruction.getOperand()[0]);
		const arr = new Array<any>();
		for (let i = 0; i < length; i++) {
			const value = runtime.pop();
			if (value.type === Type.ARRAY) {
				arr.unshift(...value.value);
				continue;
			}
			arr.unshift(value.value);
		}
		runtime.push({
			type: Type.ARRAY,
			elementType: Type.DOUBLE,
			value: arr,
			dim: instruction.getOperand()[0]
		});
	},
	// 复数常量压入运行栈
	'cconst': (runtime: RunTime) => {
		const [imaginary, real] = [runtime.pop(), runtime.pop()];
		runtime.push({
			type: Type.COMPLEX,
			value: [real.value, imaginary.value]
		});
	},
	// 通过冒号表达式，创建一个多维数组
	'caconst': (runtime: RunTime) => {

		const end = runtime.pop().value;
		const inc = runtime.pop().value;
		const start = runtime.pop().value;
		const value = new Array<any>();
		for (let i = start; i <= end; i += inc) {
			value.push(i);
		}
		runtime.push({
			type: Type.ARRAY,
			elementType: Type.DOUBLE,
			value: value,
			dim: [1, value.length]
		});
	},
	// 赋值表达式
	'store': (runtime: RunTime) => {
		runtime.store();
	},

	// 数组通过索引修改数据
	'astore': (runtime: RunTime) => {
		/**
		 * dim 数组维度
		 * arrayIndex 数组索引
		 */
		const [name, dim] = [runtime.pop(), runtime.pop()];
		const arrayIndex = [];
		for (let i = 0; i < dim.value; i++) {
			arrayIndex.push(runtime.pop().value);
		}

		runtime.astore(name.value, arrayIndex);
	},

	// 加载变量到运行栈
	'load': (runtime: RunTime) => {
		const operand = runtime.pop();
		if (operand && operand.type === Type.VAR) {
			runtime.load(operand.value);
		}
	},

	// 数组通过索引访问
	'aload': (runtime: RunTime) => {
		/**
		 * 通过索引访问多维数组
		 */
		const len = runtime.pop().value;
		const arrayIndex: any[] = [];
		for (let i = 0; i < len; i++) {
			const index = runtime.pop();
			if (index.type === Type.ARRAY || index.type === Type.STRING) {
				arrayIndex.push(index.value);
				continue;
			}
			arrayIndex.push((index as INT32).value);
		}
		const array = runtime.pop();

		// 补全索引，例如,冒号索引
		runtime.aload(array as ARRAY, completeArrayIndex((array as ARRAY).dim.length, arrayIndex));
	},

	'call': (runtime: RunTime) => {
		const operand = [runtime.pop(), runtime.pop()];

		// 获取函数调用参数，并且调用函数
		if (operand[0] && operand[1]) {
			const argv = [];
			for (let i = 0; i < operand[1].value; i++) {
				argv.push(runtime.pop());
			}
			const result = call(operand[0].value, argv, runtime);
			if (result) {
				if (result instanceof Array) {
					for (let i = 0; i < result.length; i++) {
						runtime.push(result[i]);
					}

					return;
				}
				runtime.push(result as any);
			}
		}
	},

	'vecAdd': (runtime: RunTime) => {
		const operand = [runtime.pop(), runtime.pop()];

		if (operand[0].type === Type.ARRAY && operand[1].type === Type.DOUBLE) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[0].dim,
				value: operand[0].value.map((item: number) => {
					return operand[1].value + item;
				})
			})
			return;
		}

		if (operand[1].type === Type.ARRAY && operand[0].type === Type.DOUBLE) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number) => {
					return operand[0].value + item;
				})
			})
			return;
		}

		// 两者为数组
		if (operand[1].type === Type.ARRAY && operand[0].type === Type.ARRAY) {

			if (!checkArrayDimEqual(operand[0].dim, operand[1].dim)) {
				throw new Error('矩阵维度必须一致。');
			}

			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number, index: number) => {
					return operand[0].value[index] + item;
				})
			})
			return;
		}

		runtime.push({
			type: Type.DOUBLE,
			value: operand[1].value + operand[0].value
		})
	},
	'vecSub': (runtime: RunTime) => {
		const operand = [runtime.pop(), runtime.pop()];

		if (operand[0].type === Type.ARRAY && operand[1].type === Type.DOUBLE) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[0].dim,
				value: operand[0].value.map((item: number) => {
					return operand[1].value - item;
				})
			})
			return;
		}

		if (operand[1].type === Type.ARRAY && operand[0].type === Type.DOUBLE) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number) => {
					return operand[0].value - item;
				})
			})
			return;
		}

		// 两者为数组
		if (operand[1].type === Type.ARRAY && operand[0].type === Type.ARRAY) {

			if (!checkArrayDimEqual(operand[0].dim, operand[1].dim)) {
				throw new Error('矩阵维度必须一致。');
			}

			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number, index: number) => {
					return operand[0].value[index] - item;
				})
			})
			return;
		}
		runtime.push({
			type: Type.DOUBLE,
			value: operand[1].value - operand[0].value
		})
	},
	'vecMul': (runtime: RunTime) => {
		const operand = [runtime.pop(), runtime.pop()];

		if (operand[0].type === Type.ARRAY && operand[1].type === Type.DOUBLE) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[0].dim,
				value: operand[0].value.map((item: number) => {
					return operand[1].value * item;
				})
			})
			return;
		}

		if (operand[1].type === Type.ARRAY && operand[0].type === Type.DOUBLE) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number) => {
					return operand[0].value * item;
				})
			})
			return;
		}

		// 两者为数组
		if (operand[1].type === Type.ARRAY && operand[0].type === Type.ARRAY) {

			const dim1 = operand[0].dim;
			const dim2 = operand[1].dim;

			if (dim1.length === 2 && dim2.length == 2 && dim1[1] === dim2[0]) {
				runtime.push(multipleMatrix(operand[1] as any, operand[0] as any) as any);
				return;
			}

			if (!checkArrayDimEqual(operand[0].dim, operand[1].dim)) {
				throw new Error('矩阵维度必须一致。');
			}

			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number, index: number) => {
					return operand[0].value[index] * item;
				})
			})
			return;
		}

		runtime.push({
			type: Type.DOUBLE,
			value: operand[1].value * operand[0].value
		})
	},
	'vecDiv': (runtime: RunTime) => {
		const operand = [runtime.pop(), runtime.pop()];
		if (operand[0].type === Type.ARRAY && operand[1].type === Type.DOUBLE) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[0].dim,
				value: operand[0].value.map((item: number) => {
					return operand[1].value / item;
				})
			})
			return;
		}

		if (operand[1].type === Type.ARRAY && operand[0].type === Type.DOUBLE) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number) => {
					return operand[0].value / item;
				})
			})
			return;
		}

		// 两者为数组
		if (operand[1].type === Type.ARRAY && operand[0].type === Type.ARRAY) {

			if (!checkArrayDimEqual(operand[0].dim, operand[1].dim)) {
				throw new Error('矩阵维度必须一致。');
			}

			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number, index: number) => {
					return operand[0].value[index] / item;
				})
			})
			return;
		}

		runtime.push({
			type: Type.DOUBLE,
			value: operand[1].value / operand[0].value
		})
	},
	'vecPow': (runtime: RunTime) => {
		const operand = [runtime.pop(), runtime.pop()];
		if (operand[1].type === Type.ARRAY) {
			runtime.push({
				type: Type.ARRAY,
				elementType: Type.DOUBLE,
				dim: operand[1].dim,
				value: operand[1].value.map((item: number) => {
					return Math.pow(item, operand[0]!.value);
				})
			})
			return;
		}

		runtime.push({
			type: Type.DOUBLE,
			value: Math.pow(operand[1].value as number, operand[0].value)
		})

	},
	'vecTrans': (runtime: RunTime) => {
		const operand = runtime.pop();
		const result = transpose(operand as any)
		runtime.push(result as DATAType);
	}
}
