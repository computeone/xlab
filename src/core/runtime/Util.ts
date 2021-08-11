import { StandardLibrary } from "./Lib";
import RunTime from "./Runtime";
import { ARRAY, Type } from "./Type";

const parseNumber = (x: string) => {
    return parseFloat(x);
}

const call = (name: string, argv: any[], runtime: RunTime) => {

    if (StandardLibrary[name]) {
        return StandardLibrary[name].call(argv, runtime)
    }
    return undefined;
}


// 多维数组索引映射到一维，从0开始,
const calcArrayIndex = (dim: number[], arrayIndex: number[]) => {
    const index = arrayIndex.reduce((acc: number, value: number, i: number) => {
        let sum = 1;

        //大于二维数组
        if (i > 1) {
            for (let j = 0; j < i; j++) {
                sum *= dim[j];
            }
            acc += sum * value;
            return acc;
        }

        // 二维计算
        for (let j = i + 1; j < Math.min(2, dim.length); j++) {
            sum *= dim[j];
        }
        acc += sum * value;
        return acc;
    }, 0);
    return index;
}

// 计算映射到一维数组的长度
const calcDim = (dim: number[]) => {
    return dim.reduce((acc: number, value: number) => {
        return acc *= value;
    }, 1);
}

//通过索引访问多维数组,索引从1开始,支持冒号表达式
const arrayVistor = (array: ARRAY, arrayIndex: any[]) => {
    const result = [];

    //求得数组维度
    const dim = array.dim.map((item: number, index: number) => {
        if (arrayIndex[index] && arrayIndex[index] instanceof Array) {
            return arrayIndex[index].length
        }
        if (arrayIndex[index] && arrayIndex[index] === ':') {
            return item;
        }
        return 1;
    });

    // 获取选中的多维数组索引
    const generateIndex = genArrayIndexList(dim);

    //获取所选择的数据
    for (let i = 0; i < calcDim(dim); i++) {

        const newIndex = generateIndex[i].map((value: number, index: number) => {
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

    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim,
        value: result
    }
}

// 访问多维数组，获得全部索引
const genArrayIndexList = (dim: number[]) => {

    // 如果为一维数组
    const arrayIndex: Array<number>[] = [];
    if (dim.length === 1) {
        for (let i = 0; i < dim[0]; i++) {
            arrayIndex.push([i + 1]);
        }
        return arrayIndex;
    }

    // 二维数组
    if (dim.length === 2) {
        for (let i = 0; i < dim[0]; i++) {
            for (let j = 0; j < dim[1]; j++) {
                arrayIndex.push([i + 1, j + 1])
            }
        }

        return arrayIndex;
    }

    // 多维数组
    const dim1: Array<number>[] = [];
    for (let i = 0; i < dim[0]; i++) {
        for (let j = 0; j < dim[1]; j++) {
            dim1.push([i + 1, j + 1])
        }
    }

    const dim2: Array<number>[] = [];
    const newDim: number[] = dim.filter((_, index: number) => index > 1)
    let start = newDim.map(() => 1);

    while (true) {
        dim2.push([...start]);
        let find = false;
        for (let i = 0; i < start.length; i++) {

            if (start[i] + 1 > newDim[i]) {
                start[i] = 1;
                continue;
            }

            if (start[i] < newDim[i]) {
                start[i] += 1;
                find = true;
                break;
            }
        }

        if (!find) {
            break;
        }
    }

    for (let i = 0; i < dim2.length; i++) {
        for (let j = 0; j < dim1.length; j++) {
            arrayIndex.push([...dim1[j], ...dim2[i]]);
        }
    }

    return arrayIndex;
}

/**
 * 扩充多维数组
 * @param arr
 * @param newDim
 * @returns
 */
const expandARRAY = (arr: ARRAY, newDim: number[]) => {

    const value = [];
    for (let i = 0; i < calcDim(newDim); i++) {
        value.push(0);
    }

    const arrayIndexs = genArrayIndexList(arr.dim);

    for (let i = 0; i < arrayIndexs.length; i++) {
        const index = calcArrayIndex(arr.dim, arrayIndexs[i].map((item: number) => item - 1));
        const newIndex = calcArrayIndex(newDim, convertArrayIndex(expandArrayIndex(newDim, arrayIndexs[i])));
        value[newIndex] = arr.value[index];
    }

    return value;
}

// 自动补全索引
const completeArrayIndex = (len: number, arrayIndex: any[]) => {

    if (arrayIndex.lastIndexOf(':') === arrayIndex.length - 1) {
        for (let i = arrayIndex.length; i < len; i++) {
            arrayIndex.push(':');
        }
    }

    return arrayIndex;

}

/**
 * 扩展多维数组索引 例如dim=[3,3,3] arrayIndex =[2,2]  返回[2,2,1]
 * @param dim
 * @param arrayIndex
 */
const expandArrayIndex = (dim: number[], arrayIndex: number[]) => {
    return dim.map((_: any, index: number) => {
        if (arrayIndex[index]) {
            return arrayIndex[index];
        }
        return 1;
    });
}


/**
 * 转化数组索引从0开始
 * @param arrayIndex
 */
const convertArrayIndex = (arrayIndex: number[]) => {
    return arrayIndex.map((item: number) => item - 1)
}

// 检查两个数组维度是否一致
const checkArrayDimEqual = (dim1: number[], dim2: number[]) => {

    if (dim1.length !== dim2.length) {
        return false;
    }

    if (calcDim(dim1) !== calcDim(dim2)) {
        return false;
    }

    const index = dim1.findIndex((item: number, index: number) => {
        if (!dim2[index]) {
            return false;
        }
        if (dim2[index] !== item) {
            return false;
        }
        return true;
    })

    if (index === -1) {
        return false;
    }

    return true;
}

// 矩阵乘法
const multipleMatrix = (m1: ARRAY, m2: ARRAY) => {
    var result: any = [];
    for (let i = 0; i < m1.dim[0]; i++) {
        result[i] = [];
        for (let j = 0; j < m2.dim[1]; j++) {
            var sum = 0;
            for (let k = 0; k < m1.dim[1]; k++) {
                const index1 = calcArrayIndex(m1.dim, [i, k]);
                const index2 = calcArrayIndex(m2.dim, [k, j]);
                sum += m1.value[index1] * m2.value[index2];
            }
            result[i][j] = sum;
        }
    }
    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: [m1.dim[0], m2.dim[1]],
        value: result.flat()
    }
}

export {
    parseNumber,
    arrayVistor,
    call,
    calcArrayIndex,
    calcDim,
    genArrayIndexList,
    completeArrayIndex,
    multipleMatrix,
    checkArrayDimEqual,
    expandARRAY,
    expandArrayIndex,
    convertArrayIndex
};

