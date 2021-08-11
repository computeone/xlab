grammar matlab;

@lexer::members {

}

//// LEXER RULES

// Match all newline characters
NL: ('\r' '\n' | '\r' | '\n') -> channel(HIDDEN);

// Match comments and send them to the HIDDEN channel
BLOCKCOMMENT: '%{' .*? '%}' -> channel(HIDDEN);
COMMENT: '%' .*? NL -> channel(HIDDEN);

// Match whitespace characters and skip
WS: [ \t] -> skip;

// Match the multiline break and skip it
ELLIPSIS: '...' -> skip;

// Two Character Operators
ELE_DIV: './';
ELE_POW: '.^';
ELE_MULT: '.*';
ELE_TRANS: '.\\';
ELE_DOT: '.\'';

// Single Character Operators
ASSIGN: '=';
COLON: ':';
DIV: '/';
MINUS: '-';
PLUS: '+';
POW: '^';
MULT: '*';
TRANS: '\\';

// Special Characters
COMMA: ',';
DOT: '.';
SEMI_COLON: ';';
LPAREN: '(';
LBRACK: '[';
RPAREN: ')';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';

// Atoms - identifiers, strings, numbers, whitespace
ID: [a-zA-Z] [a-zA-Z0-9_]*;

fragment DIGIT: [0-9];

fragment EXPONENT: ('e' | 'E') ('+' | '-')? DIGIT+;
IMAGINARY: INT 'i' | FLOAT 'i';

INT: DIGIT+;

FLOAT:
	DIGIT+ '.' DIGIT+ EXPONENT?
	| DIGIT+ EXPONENT
	| '.' DIGIT+ EXPONENT?;

STRING: '\'' (~('\'' | '\r' | '\n') | '\'\'')* '\'';

//// Parser Rules //// ////////////////////

// Atoms // /////////
atom_element_div: ELE_DIV;
atom_element_pow: ELE_POW;
atom_element_mult: ELE_MULT;
atom_element_transpose: ELE_TRANS;
atom_element_dot: ELE_DOT;

// Single Character Operators
atom_assign: ASSIGN;
atom_colon: COLON;
atom_div: DIV;
atom_minus: MINUS;
atom_plus: PLUS;
atom_pow: POW;
atom_mult: MULT;
atom_transpose: TRANS;

// Special Characters
atom_comma: COMMA;
atom_dot: DOT;
atom_semi_colon: SEMI_COLON;
atom_lparen: LPAREN;
atom_rparen: RPAREN;
atom_lbrack: LBRACK;
atom_rbrack: RBRACK;
atom_lbrace: LBRACE;
atom_rbrace: RBRACE;

atom_boolean: 'true' | 'false';
atom_empty_array: LBRACK RBRACK;
atom_empty_cell: LBRACE RBRACE;
atom_float: FLOAT;
atom_imaginary: IMAGINARY;
atom_index_all: COLON;
atom_integer: INT;
atom_string: STRING;
atom_var: ID;

// # Statements

entry: st_assign | xpr_tree;

// MATLAB does allow for return values to be specified without a COMMA, e.g. [h w] = size(X);
// However, it does give a warning saying this is not recommended. Thus we don't parse this kind of
// assignment.
st_assign: (
		atom_var
		| xpr_array_index
		| xpr_cell_index
		| xpr_field
	) atom_assign (atom_empty_cell | xpr_tree)
	| atom_lbrack (
		| atom_var
		| xpr_array_index
		| xpr_cell_index
		| xpr_field
	) (
		COMMA (
			| atom_var
			| xpr_array_index
			| xpr_cell_index
			| xpr_field
		)
	)* atom_rbrack atom_assign (atom_empty_cell | xpr_tree);

// ## Expression Trees
// 
// Expression trees model a generic expression in MATLAB. The difference between `xpr_tree` and
// `xpr_tree_` (with underscore) is that `xpr_tree_` includes the `end` keyword can can be used for
// array or cell indexing. To make this work we also need `xpr_array_` and `xpr_cell_` which are
// analogous.
xpr_tree:
	atom_boolean
	| atom_empty_array
	| atom_float
	| atom_imaginary
	| atom_integer
	| atom_string
	| atom_var
	| xpr_function
	| xpr_array
	| xpr_array_index
	| xpr_cell
	| xpr_cell_index
	| xpr_field
	| atom_lparen xpr_tree atom_rparen
	| xpr_tree (atom_element_transpose | atom_transpose) xpr_tree
	| xpr_tree (atom_element_pow | atom_pow) xpr_tree
	| (atom_plus | atom_minus) xpr_tree
	| xpr_tree (atom_dot | atom_element_dot)
	| xpr_tree (atom_element_mult | atom_element_div) xpr_tree
	| xpr_tree (atom_mult | atom_div) xpr_tree
	| xpr_tree (atom_plus | atom_minus) xpr_tree
	| xpr_tree atom_colon xpr_tree;

// Apparently MATLAB doesn't care whether you add commas to an array definition or not. E.g. [0 0 8]
// [[0 0 8] [9 0 8]] [[0 0 8],[9 0 8]] [[0 0, 8],[9 0 8]] and [0 8 9, 10, 40 50 60] are all valid
// matlab expressions. The caveat is that you can't have two simultaneous commas. That throws an
// error. E.g. [0,,1] is not allowed.
xpr_array:
	atom_lbrack xpr_tree (COMMA? xpr_tree)* atom_rbrack
	| atom_lbrack xpr_tree (COMMA? xpr_tree)* (
		atom_semi_colon xpr_tree (COMMA? xpr_tree)*
	)* atom_rbrack;

xpr_cell:
	atom_lbrace (xpr_tree) (COMMA? (xpr_tree))* atom_rbrace
	| atom_lbrace (xpr_tree) (COMMA? (xpr_tree))* (
		atom_semi_colon (xpr_tree) (COMMA? (xpr_tree))*
	)* atom_rbrace;

// An array_index expression in MATLAB is an expression that takes an array and indexes it to give
// some subset of the array. This can work on multidimentional arrays or cell arrays. SYNTAX
// identifier (index_express [, indexexpression] ...)
xpr_array_index: (xpr_cell_index | atom_var) atom_lparen (
		atom_index_all
		| xpr_tree
	) (COMMA (atom_index_all | xpr_tree))* atom_rparen;

xpr_cell_index:
	atom_var atom_lbrace (atom_index_all | xpr_tree) (
		COMMA (atom_index_all | xpr_tree)
	)* atom_rbrace;

// a.b == identifier DOT identifier a.b.c == (a.b).c == field_access DOT identifier a.b.c.f() ==
// ((a.b).c).f()
xpr_field:
	atom_var DOT atom_var
	| atom_var DOT xpr_array_index
	| atom_var DOT xpr_cell_index
	| atom_var DOT xpr_function
	| xpr_array_index DOT atom_var
	| xpr_array_index DOT xpr_array_index
	| xpr_array_index DOT xpr_cell_index
	| xpr_array_index DOT xpr_function
	| xpr_cell_index DOT atom_var
	| xpr_cell_index DOT xpr_array_index
	| xpr_cell_index DOT xpr_cell_index
	| xpr_cell_index DOT xpr_function
	| xpr_field DOT atom_var
	| xpr_field DOT xpr_array_index
	| xpr_field DOT xpr_cell_index
	| xpr_field DOT xpr_function;

xpr_function:
	atom_var atom_lparen (
		(xpr_tree | atom_empty_cell) (
			COMMA (xpr_tree | atom_empty_cell)
		)*
	)? atom_rparen;

// https://github.com/antlr/grammars-v4/tree/master/matlab
