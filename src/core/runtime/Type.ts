
export enum Type {
    INT8,
    INT16,
    INT32,
    INT64,
    UINT8,
    UINT16,
    UINT32,
    UINT64,
    FLOAT,
    DOUBLE,
    COMPLEX,
    STRING,
    VAR,
    ARRAY,
}

export interface INT8 {
    type: Type.INT8;
    value: number;
}

export interface INT16 {
    type: Type.INT16;
    value: number
}

export interface INT32 {
    type: Type.INT32;
    value: number
}

export interface INT64 {
    type: Type.INT64;
    value: number;
}
export interface UINT8 {
    type: Type.UINT8;
    value: number;
}

export interface UINT16 {
    type: Type.UINT16;
    value: number;
}

export interface UINT32 {
    type: Type.UINT32;
    value: number;
}

export interface UINT64 {
    type: Type.UINT64;
    value: number;
}

export interface FLOAT {
    type: Type.FLOAT;
    value: number;
}

export interface DOUBLE {
    type: Type.DOUBLE;
    value: number;
}

export interface COMPLEX {
    type: Type.COMPLEX,
    value: number[],
}

export interface STRING {
    type: Type.STRING;
    value: string;
}

export interface VAR {
    type: Type.VAR;
    value: string;
}

export interface ARRAY {
    type: Type.ARRAY;
    elementType: ElementType; // 数组元素类型
    dim: number[]; // 数组维度
    value: any;
}

export type ElementType = Type.UINT8 | Type.UINT16 | Type.UINT32 | Type.UINT64 | Type.INT8 | Type.INT16 | Type.INT32 | Type.INT64 | Type.FLOAT | Type.DOUBLE | Type.STRING | Type.COMPLEX;

export type NUMBERType = UINT8 | UINT16 | UINT32 | UINT64 | INT8 | INT16 | INT32 | INT64 | FLOAT | DOUBLE | COMPLEX;

export type DATAType = NUMBERType | STRING | VAR | ARRAY;


