import { CommonTokenStream, InputStream, Recognizer, Token } from 'antlr4';
import matlabLexer from './antlrjs/matlabLexer';
import matlabParser from './antlrjs/matlabParser';
import { Visitor } from './Visitor';

/**
 * 终端命令行语法分析
 */
export class GrammarParser {

	public parser(str: string) {
		const chars = new InputStream(str);
		const lexer = new matlabLexer(chars);
		const tokens = new CommonTokenStream(lexer);
		const parser = new matlabParser(tokens);
		parser.addErrorListener({
			syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: any) {
				throw new Error(msg)
			},
			reportAmbiguity(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any) {

			},
			reportAttemptingFullContext(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any) {

			},
			reportContextSensitivity(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any) {

			},
		});
		parser.buildParseTrees = true;
		const tree = parser.entry();
		tree.accept(new Visitor());
		return tree;
	}
}
