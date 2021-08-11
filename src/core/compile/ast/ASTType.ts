
export enum ASTType {

    // 基本算术操作符
    PLUS = 'plus',
    MINUS = 'minus',
    MUL = 'mul',
    DIV = 'div',
    POW = 'pow',
    ASSIGN = 'assign',
    ST_ASSIGN = 'st_assign',
    TRANSPOSE = 'transpose', // 转置
    DOT = 'DOT',

    // 逐元素操作符
    ELEMENT_DIV = 'element_div',
    ELEMENT_POW = 'element_pow',
    ELEMENT_DOT = 'element_dot',
    ELEMENT_MUL = 'element_mul',
    ELEMENT_TRANSPOSE = 'element_transpose',

    // 数据类型
    INT = 'int',
    FLOAT = 'float',
    COMPLEX = 'complex',
    STRING = 'string',
    VAR = 'var',
    ARRAY = 'array',

    // 其他字符
    COMMA = 'comma', // ,
    COLON = 'colon',
    SEMI_COLON = 'semi_colon', //;
    LPAREN = 'lparen', // (
    RPAREN = 'rparen', // )
    LBRACK = 'lbrack', // [
    RBRACK = 'rbrack',// ]
    LBRACE = 'lbrace',// {
    RBRACE = 'rbrace',//}
    XPR_TREE = 'xpr_tree',
    ARRAY_INDEX = 'array_index',
    ARRAY_INDEX_ALL = 'array_index_all',
    FUNCTION = 'function',
}
