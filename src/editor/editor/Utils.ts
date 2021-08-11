import { DATAType } from "../../core/runtime";

export const formatNumber = (data: DATAType | number, eps: number = 4) => {

    let value = data;
    if ((data as DATAType).value) {
        value = (data as DATAType).value;
    }

    const splits = value.toString().split('.');
    if (splits[1] && splits[1].length > eps) {
        return (value as number).toFixed(eps);
    }

    return value;

}

// 获取gap可能的最大长度
export const calcGap = (arr: Array<any>, calLen: (value: any) => number) => {
    let len = 1;
    for (let i = 0; i < arr.length; i++) {
        len = Math.max(len, calLen(arr[i]));
    }

    switch (len) {
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
            return len * 5 + 50;
    }
}
