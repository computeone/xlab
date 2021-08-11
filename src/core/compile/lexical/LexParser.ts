import moo, { Token } from 'moo';
import { grammar } from './LexerRuler';

export const TerminalMooLexer = moo.compile(grammar);
/**
 * 词法分析
 */
export class LexParser {

	private lexer: moo.Lexer;
	private tokens: Token[] = [];
	constructor() {
		this.lexer = moo.compile(grammar);
	}

	public parser(value: string) {
		this.tokens = Array.from(this.lexer.reset(value));
		return this.tokens;
	}

	public getTokens() {
		return this.tokens;
	}
}
