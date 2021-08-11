import { CommandType } from "../../../editor/editor/Command";
import { StandardLibrary } from "../../runtime";
import { ASTType } from "../ast/ASTType";

// 终端命令行词法
export const grammar = {

	keyword: Object.values(CommandType),
	function: Object.keys(StandardLibrary),

	// General rules
	NL: { match: /\r\n | \r | \n/, lineBreaks: true },
	_skip: /[^\S\r\n]+/,
	COMMENT: /'%' | \.\.\. \.*?/,
	ESC: '\'\'',
	[ASTType.FLOAT]: /(?:[0-9]+\.[0-9]+)|(?:[0-9]+[eE][0-9]+)/,
	[ASTType.INT]: /[0-9]+/,
	[ASTType.VAR]: /[a-zA-Z0-9_]+/,
	[ASTType.STRING]: /".*"|'.*'/,
	[ASTType.COMMA]: ',',
	[ASTType.SEMI_COLON]: ';',

	// Symbols
	[ASTType.ELEMENT_DIV]: './',
	[ASTType.ELEMENT_MUL]: '.*',
	[ASTType.ELEMENT_POW]: '.^',
	[ASTType.ELEMENT_DOT]: '.\'',
	[ASTType.ELEMENT_TRANSPOSE]: '.\\',
	[ASTType.ASSIGN]: '=',
	[ASTType.PLUS]: '+',
	[ASTType.MINUS]: '-',
	[ASTType.DOT]: '.',
	[ASTType.LPAREN]: '(',
	[ASTType.RPAREN]: ')',
	[ASTType.LBRACE]: '{',
	[ASTType.RBRACE]: '}',
	[ASTType.LBRACK]: '[',
	[ASTType.RBRACK]: ']',
	[ASTType.MUL]: '*',
	[ASTType.DIV]: '/',
	[ASTType.POW]: '^',
	[ASTType.COLON]: ':',
	[ASTType.TRANSPOSE]: '\\',

};
