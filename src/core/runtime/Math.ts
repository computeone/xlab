import { ARRAY, DATAType, Type } from "./Type";
import { arrayVistor, calcArrayIndex, calcDim, checkArrayDimEqual, expandARRAY, genArrayIndexList } from "./Util";


/**
 * 基本算术
 */
export const sum = (A: DATAType) => {
    if (A.type === Type.ARRAY) {
        return A.value.reduce((acc: number, value: number) => {
            return acc += value;
        }, 0);
    }

    return A.value;
}

export const cumsum = (array: ARRAY) => {

    let csum = 0;
    const newValue = [];
    for (let i = 0; i < array.value.length; i++) {
        csum += array.value[i];
        newValue.push(csum);
    }

    return {
        type: Type.ARRAY,
        dim: [...array.dim],
        elementType: array.elementType,
        value: newValue
    }
}

const movsum = () => {

}

export const prod = (A: DATAType) => {
    if (A.type === Type.ARRAY) {
        return A.value.reduce((acc: number, value: number) => {
            return acc *= value;
        }, 1);
    }

    return A.value;
}

export const cumprod = (array: ARRAY) => {
    let csum = 1;
    const newValue = [];
    for (let i = 0; i < array.value.length; i++) {
        csum *= array.value[i];
        newValue.push(csum);
    }

    return {
        type: Type.ARRAY,
        dim: [...array.dim],
        elementType: array.elementType,
        value: newValue
    }
}

const pagemtimes = () => {

}

const pagetranspose = () => {

}

const pagectranspose = () => {

}

export const uminus = (x: number) => {
    return x * -1;
}

export const uplus = (x: number) => {
    return x;
}

export const mod = (x: number, y: number) => {
    return x % y;
}

export const rem = (x: number, y: number) => {
    return x % y;
}

const idivide = () => {

}

export const ceil = (x: number) => {
    return Math.ceil(x);
}

export const fix = (x: number) => {
    if (x <= 0) {
        return Math.ceil(x);
    }
    return Math.floor(x);
}

export const floor = (x: number) => {
    return Math.floor(x);
}

export const round = (x: number) => {
    return Math.round(x);
}

/**
 * 基本数学函数
 * @param x
 * @returns
 */

export const sin = (x: number) => {
    return Math.sin(x);
}

export const sind = (x: number) => {
    return Math.sin(x * Math.PI / 180);
}

export const sinpi = (x: number) => {
    return Math.sin(x * Math.PI);
}

export const asin = (x: number) => {
    return Math.asin(x);
}

export const asind = (x: number) => {
    return Math.asin(x * Math.PI / 180);
}

export const sinh = (x: number) => {
    return Math.sinh(x);
}

export const asinh = (x: number) => {
    return Math.asinh(x);
}

export const cos = (x: number) => {
    return Math.cos(x);
}

export const cosd = (x: number) => {
    return Math.cos(x * Math.PI / 180);
}

export const cospi = (x: number) => {
    return Math.cos(x * Math.PI);
}

export const acos = (x: number) => {
    return Math.acos(x);
}

export const acosd = (x: number) => {
    return Math.acos(x * Math.PI / 180);
}

export const cosh = (x: number) => {
    return Math.cosh(x);
}

export const acosh = (x: number) => {
    return Math.acosh(x);
}

export const tan = (x: number) => {
    return Math.tan(x);
}

export const tand = (x: number) => {
    return Math.tan(x * Math.PI / 180);
}

export const atan = (x: number) => {
    return Math.atan(x);
}

export const atand = (x: number) => {
    return Math.atan(x * Math.PI / 180);
}

export const atan2 = (x: number, y: number) => {
    return Math.atan2(x, y);
}

export const atan2d = (x: number, y: number) => {
    return Math.atan2(x * Math.PI / 180, y * Math.PI / 180);
}

export const tanh = (x: number) => {
    return Math.tanh(x);
}

export const atanh = (x: number) => {
    return Math.atanh(x);
}

export const csc = (x: number) => {
    return 1 / Math.sin(x);
}

export const cscd = (x: number) => {
    return 1 / Math.sin(x * Math.PI / 180);
}

export const acsc = (x: number) => {
    return 1 / Math.asin(x);
}

export const acscd = (x: number) => {
    return 1 / Math.asin(x * Math.PI / 180);
}

export const csch = (x: number) => {
    return 1 / Math.sinh(x);
}

export const acsch = (x: number) => {
    return 1 / Math.asinh(x);
}

export const sec = (x: number) => {
    return 1 / Math.cos(x);
}

export const secd = (x: number) => {
    return 1 / Math.cos(x * Math.PI / 180);
}

export const asec = (x: number) => {
    return 1 / Math.acos(x);
}
export const asecd = (x: number) => {
    return 1 / Math.acos(x * Math.PI / 180);
}

export const sech = (x: number) => {
    return 1 / Math.cosh(x);
}

export const asech = (x: number) => {
    return 1 / Math.acosh(x);
}

export const cot = (x: number) => {
    return 1 / Math.tan(x);
}

export const cotd = (x: number) => {
    return 1 / Math.tan(x * Math.PI / 180);
}

export const acot = (x: number) => {
    return 1 / Math.atan(x * Math.PI / 180);
}

export const acotd = (x: number) => {
    return 1 / Math.tan(x * Math.PI / 180);
}

export const coth = (x: number) => {
    return 1 / Math.tanh(x);
}

export const acoth = (x: number) => {
    return 1 / Math.atanh(x);
}

export const hypot = () => {

}

export const deg2rad = (x: number) => {
    return x * Math.PI / 180;
}

export const rad2rad = (x: number) => {
    return x * 180 / Math.PI;
}

export const cart2pol = () => {

}

export const cart2sph = () => {

}

export const pol2cart = () => {

}

export const sph2cart = () => {

}

/**
 * 指数和对数
 */

export const exp = (x: number) => {
    return Math.exp(x);
}

export const expm1 = () => {

}

export const log = (x: number) => {
    return Math.log(x);
}

export const log10 = (x: number) => {
    return Math.log10(x);
}

export const log1p = () => {

}

export const log2 = (x: number) => {
    return Math.log2(x);
}

export const nextpow2 = () => {

}

export const nthroot = () => {

}

export const pow2 = (x: number, y: number = 2) => {
    return {
        type: Type.DOUBLE,
        value: Math.pow(y, x)
    }
}

export const reallog = (x: number) => {
    return Math.log(x);
}

export const realpow = (x: number, y: number) => {
    return Math.pow(x, y);
}

export const realsqrt = (x: number) => {
    return Math.sqrt(x);
}

export const sqrt = (x: number) => {
    return Math.sqrt(x);
}


/**
 * 复数
 */
export const abs = (x: number[]) => {
    if (x.length === 2) {
        return Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2));
    }
    return Math.abs(x[0]);
}

export const angle = () => {

}

export const complex = (x: number, y: number) => {
    return {
        type: Type.COMPLEX,
        value: [x, y]
    }
}

export const conj = () => {

}

export const cplxpair = () => {

}

export const imag = (x: number[]) => {
    return x[1];
}

export const isreal = (x: number[]) => {
    return x.length === 2;
}

export const sign = () => {

}

export const unwrap = () => {

}
/**
 * 矩阵数组函数
 */
export const zeros = (dim: number[]) => {
    const arr = [];

    for (let i = 0; i < calcDim(dim); i++) {
        arr.push(0);
    }

    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: dim,
        value: arr,
    }
}

export const ones = (dim: number[]) => {

    const arr = [];

    for (let i = 0; i < calcDim(dim); i++) {
        arr.push(1);
    }

    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: dim,
        value: arr,
    }
}

export const rand = (x?: number) => {
    if (x !== undefined) {

        const arr = [];

        for (let i = 0; i < calcDim([x, x]); i++) {
            arr.push(Math.random());
        }

        return {
            type: Type.ARRAY,
            elementType: Type.DOUBLE,
            dim: [x, x],
            value: arr,
        }
    }
    return Math.random();
}

export const eye = (dim: any[]) => {
    const arr = [];
    const newDim = [dim[0], dim.length === 1 ? dim[0] : dim[1]]
    for (let i = 0; i < newDim[0]; i++) {
        for (let j = 0; j < newDim[1]; j++) {
            if (i == j) {
                arr.push(1);
            } else {
                arr.push(0);
            }
        }
    }
    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: newDim,
        value: arr,
    }
}

export const diag = (array: Array<any>) => {
    const arr = [];
    const newDim = [array.length, array.length];
    for (let i = 0; i < newDim[0]; i++) {
        for (let j = 0; j < newDim[1]; j++) {
            if (i == j) {
                arr.push(array[i]);
            } else {
                arr.push(0);
            }
        }
    }
    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: newDim,
        value: arr,
    }
}

export const blkdiag = () => {

}

export const cat = (dim: DATAType, A: ARRAY, B: ARRAY) => {

    const newDim = A.dim.map((value: number, index: number) => {
        if (dim.value === index + 1) {
            return value + B.dim[index];
        }
        return value;
    })

    const value = expandARRAY(A, newDim);

    const result: ARRAY = {
        type: Type.ARRAY,
        elementType: A.elementType,
        dim: newDim,
        value
    }

    for (let i = 0; i < B.dim[dim.value - 1]; i++) {

        // 需要被赋值的索引
        const arrayIndex = [...A.dim].map((_: any, index: number) => {
            if (dim.value === index + 1) {
                return i + 1 + A.dim[dim.value - 1];
            }
            return ':';
        })

        // 需要被连接的索引
        const arrayCatindex = [...B.dim].map((_: any, index: number) => {
            if (dim.value === index + 1) {
                return i + 1;
            }
            return ':';
        })

        const arrayIndexList = genArrayIndexList(arrayIndex.map((item: any, index: number) => item === ':' ? result.dim[index] : 1));

        const bValue = arrayVistor(B, arrayCatindex);
        for (let j = 0; j < arrayIndexList.length; j++) {

            //重新生成正确的索引
            const arrayIndex = arrayIndexList[j].map((item: number, index: number) => {
                if (dim.value === index + 1) {
                    return i + A.dim[dim.value - 1];
                }
                return item - 1;
            })
            const index = calcArrayIndex(result.dim, arrayIndex);
            result.value[index] = bValue.value[j];
        }

    }

    return result;
}

export const horzcat = (A: ARRAY, B: ARRAY) => {
    return cat({
        type: Type.DOUBLE,
        value: 2
    }, A, B);
}

export const vertcat = (A: ARRAY, B: ARRAY) => {
    return cat({
        type: Type.DOUBLE,
        value: 1
    }, A, B);
}

const repelem = () => {

}

const repmat = () => {

}

export const linspace = (x1: number, x2: number, n: number = 100) => {
    const inc = (x2 - x1) / (n - 1);
    const arr: any[] = [];
    for (let i = 0; i < n; i++) {
        arr.push(x1 + i * inc);
    }

    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: [1, arr.length],
        value: arr
    }
}

export const logspace = (x1: number, x2: number, n: number = 50) => {
    const inc = Math.pow(10, (x2 - x1) / (n - 1));
    const arr: any[] = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.pow(10, x1) * Math.pow(inc, i));
    }

    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: [1, arr.length],
        value: arr
    }
}

const freqspace = () => {

}

export const meshgrid = (x: number[], y: number[], z: number[] = []) => {

    const XData = [];
    const YData = [];
    for (let i = 0; i < y.length; i++) {
        for (let j = 0; j < x.length; j++) {
            XData.push(x[j]);
            YData.push(y[i]);
        }
    }

    return [{
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: [y.length, x.length],
        value: XData
    }, {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: [y.length, x.length],
        value: YData
    }]

}

const ndgrid = () => {

}

/**
 * 确定数组、矩阵的大小、形状、排序
 */

export const length = (array: ARRAY) => {
    return {
        type: Type.DOUBLE,
        value: Math.max(...array.dim)
    }
}

export const size = (array: ARRAY) => {
    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: [array.dim.length],
        value: [...array.dim],
    }
}

export const ndims = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        return {
            type: Type.DOUBLE,
            value: data.dim.length
        }
    }
    return {
        type: Type.DOUBLE,
        value: 0
    }
}

export const numel = (array: ARRAY) => {
    return {
        type: Type.DOUBLE,
        value: calcDim(array.dim)
    }
}

export const isscalar = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        if (checkArrayDimEqual(data.dim, [1, 1])) {
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }
        return {
            type: Type.DOUBLE,
            value: 0
        }
    }

    return {
        type: Type.DOUBLE,
        value: 1
    }
}

export const issorted = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        if (data.dim.length === 1) {
            if (data.value.length === 0) {
                return {
                    type: Type.DOUBLE,
                    value: 1
                }
            }
            for (let i = 1; i < data.value.length; i++) {
                if (data.value[i - 1] > data.value[i]) {
                    return {
                        type: Type.DOUBLE,
                        value: 0
                    }
                }
            }
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }

        if (data.dim.length === 2) {
            for (let i = 0; i < data.dim[0]; i++) {
                for (let j = 1; j < data.dim[1]; j++) {
                    if (arrayVistor(data, [i + 1, j]) > arrayVistor(data, [i + 1, j + 1])) {
                        return {
                            type: Type.DOUBLE,
                            value: 0
                        }
                    }
                }
            }
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }

    }
    return {
        type: Type.DOUBLE,
        value: 0
    }
}

export const issortedrows = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        if (data.dim.length === 2) {
            for (let i = 0; i < data.dim[0]; i++) {
                for (let j = 1; j < data.dim[1]; j++) {
                    if (arrayVistor(data, [i + 1, j]) > arrayVistor(data, [i + 1, j + 1])) {
                        return {
                            type: Type.DOUBLE,
                            value: 0
                        }
                    }
                }
            }
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }

    }
    return {
        type: Type.DOUBLE,
        value: 0
    }
}

export const isvector = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        if (data.dim.length === 2 && (data.dim[0] === 1 || data.dim[1] === 1)) {
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }
        return {
            type: Type.DOUBLE,
            value: 0
        }
    }
    return {
        type: Type.DOUBLE,
        value: 1
    }
}

export const ismatrix = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        if (data.dim.length === 2) {
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }
        return {
            type: Type.DOUBLE,
            value: 0
        }
    }
    return {
        type: Type.DOUBLE,
        value: 1
    }
}

export const isrow = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        if (data.dim.length === 2 && data.dim[0] === 1) {
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }
    }
    return {
        type: Type.DOUBLE,
        value: 0
    }
}

export const iscolumn = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        if (data.dim.length === 2 && data.dim[1] === 1) {
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }
    }
    return {
        type: Type.DOUBLE,
        value: 0
    }
}

export const isempty = (data: DATAType) => {
    if (data.type === Type.ARRAY) {
        if (calcDim(data.dim) === 0) {
            return {
                type: Type.DOUBLE,
                value: 1
            }
        }
    }
    return {
        type: Type.DOUBLE,
        value: 0
    }
}

const sort = () => {

}

const sortrows = () => {

}

const flip = () => {

}

const fliplr = () => {

}

export const flipud = () => {

}

export const rot90 = () => {

}

export const transpose = (array: ARRAY) => {

    const value: any[] = [];
    const newDim = [array.dim[1], array.dim[0]];
    for (let i = 0; i < calcDim(newDim); i++) {
        value.push(0);
    }

    for (let i = 0; i < array.dim[0]; i++) {
        for (let j = 0; j < array.dim[1]; j++) {
            value[calcArrayIndex(newDim, [j, i])] = array.value[calcArrayIndex(array.dim, [i, j])]
        }
    }

    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: newDim,
        value: value,
    }
}

const ctranspose = () => {

}

export const permute = () => {

}

export const ipermute = () => {

}

export const circshift = () => {

}

export const shiftdim = () => {

}

export const reshape = () => {

}

export const squeeze = () => {

}

const ind2sub = () => {

}

const sub2ind = () => {

}

export const randn = (x: number) => {

}

export const dot = (x: ARRAY, y: ARRAY) => {

    if (checkArrayDimEqual(x.dim, y.dim)) {

        if (x.dim.length === 1 || x.dim[0] === 1 || x.dim[1] === 1) {

            const value = x.value.map((item: number, index: number) => {
                return item * y.value[index];
            });
            return {
                type: Type.ARRAY,
                elementType: Type.DOUBLE,
                dim: [...x.dim],
                value
            }
        }
    }
    throw new Error('向量维度不对!')
}

export const cross = (x: ARRAY, y: ARRAY) => {

    if (checkArrayDimEqual(x.dim, y.dim)) {

        if (x.dim.length === 1 || x.dim[0] === 1 || x.dim[1] === 1) {

            if (calcDim(x.dim) !== 3 && calcDim(y.dim) !== 3) {
                throw new Error('cross向量必须为3分量');
            }

            const x1 = x.value[1] * y.value[2] - x.value[2] * y.value[1];
            const x2 = x.value[2] * y.value[0] - x.value[0] * y.value[2];
            const x3 = x.value[0] * y.value[1] - x.value[1] * y.value[0];

            return {
                type: Type.ARRAY,
                elementType: Type.DOUBLE,
                dim: [...x.dim],
                value: [x1, x2, x3]
            }
        }
    }

    throw new Error('向量维度不对!')
}

export const normalize = (x: ARRAY) => {

    if (x.dim.length !== 1 && x.dim.length !== 2) {
        throw new Error('向量维度不对!')
    }

    if (x.dim.length === 1 || x.dim[0] === 1 || x.dim[1] === 1) {

        let sum = 0;
        for (let i = 0; i < x.value.length; i++) {
            sum += Math.pow(x.value[i], 2);
        }

        sum = Math.sqrt(sum);

        const value = x.value.map((item: number) => {
            return item / sum;
        });
        return {
            type: Type.ARRAY,
            elementType: Type.DOUBLE,
            dim: [...x.dim],
            value
        }
    }

    throw new Error('向量维度不对!')

}

