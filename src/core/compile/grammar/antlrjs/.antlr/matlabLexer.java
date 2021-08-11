// Generated from e:\WorkSpace\xlab\src\core\compile\grammar\antlrjs\matlab.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class matlabLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, NL=3, BLOCKCOMMENT=4, COMMENT=5, WS=6, ELLIPSIS=7, ELE_DIV=8, 
		ELE_POW=9, ELE_MULT=10, ELE_TRANS=11, ELE_DOT=12, ASSIGN=13, COLON=14, 
		DIV=15, MINUS=16, PLUS=17, POW=18, MULT=19, TRANS=20, COMMA=21, DOT=22, 
		SEMI_COLON=23, LPAREN=24, LBRACK=25, RPAREN=26, RBRACK=27, LBRACE=28, 
		RBRACE=29, ID=30, IMAGINARY=31, INT=32, FLOAT=33, STRING=34;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "NL", "BLOCKCOMMENT", "COMMENT", "WS", "ELLIPSIS", "ELE_DIV", 
			"ELE_POW", "ELE_MULT", "ELE_TRANS", "ELE_DOT", "ASSIGN", "COLON", "DIV", 
			"MINUS", "PLUS", "POW", "MULT", "TRANS", "COMMA", "DOT", "SEMI_COLON", 
			"LPAREN", "LBRACK", "RPAREN", "RBRACK", "LBRACE", "RBRACE", "ID", "DIGIT", 
			"EXPONENT", "IMAGINARY", "INT", "FLOAT", "STRING"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'true'", "'false'", null, null, null, null, "'...'", "'./'", "'.^'", 
			"'.*'", "'.\\'", "'.''", "'='", "':'", "'/'", "'-'", "'+'", "'^'", "'*'", 
			"'\\'", "','", "'.'", "';'", "'('", "'['", "')'", "']'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "NL", "BLOCKCOMMENT", "COMMENT", "WS", "ELLIPSIS", 
			"ELE_DIV", "ELE_POW", "ELE_MULT", "ELE_TRANS", "ELE_DOT", "ASSIGN", "COLON", 
			"DIV", "MINUS", "PLUS", "POW", "MULT", "TRANS", "COMMA", "DOT", "SEMI_COLON", 
			"LPAREN", "LBRACK", "RPAREN", "RBRACK", "LBRACE", "RBRACE", "ID", "IMAGINARY", 
			"INT", "FLOAT", "STRING"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}





	public matlabLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "matlab.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2$\u00fb\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\4\3\4\3\4\5\4Z\n\4\3\4\3\4\3\5\3\5\3\5\3\5\7\5b\n\5\f\5\16\5e\13"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\7\6n\n\6\f\6\16\6q\13\6\3\6\3\6\3\6\3\6"+
		"\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21"+
		"\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30"+
		"\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37"+
		"\3\37\7\37\u00b4\n\37\f\37\16\37\u00b7\13\37\3 \3 \3!\3!\5!\u00bd\n!\3"+
		"!\6!\u00c0\n!\r!\16!\u00c1\3\"\3\"\3\"\3\"\3\"\3\"\5\"\u00ca\n\"\3#\6"+
		"#\u00cd\n#\r#\16#\u00ce\3$\6$\u00d2\n$\r$\16$\u00d3\3$\3$\6$\u00d8\n$"+
		"\r$\16$\u00d9\3$\5$\u00dd\n$\3$\6$\u00e0\n$\r$\16$\u00e1\3$\3$\3$\3$\6"+
		"$\u00e8\n$\r$\16$\u00e9\3$\5$\u00ed\n$\5$\u00ef\n$\3%\3%\3%\3%\7%\u00f5"+
		"\n%\f%\16%\u00f8\13%\3%\3%\4co\2&\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23"+
		"\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31"+
		"\61\32\63\33\65\34\67\359\36;\37= ?\2A\2C!E\"G#I$\3\2\n\4\2\f\f\17\17"+
		"\4\2\13\13\"\"\4\2C\\c|\6\2\62;C\\aac|\3\2\62;\4\2GGgg\4\2--//\5\2\f\f"+
		"\17\17))\2\u010a\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2"+
		"!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3"+
		"\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2"+
		"\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I"+
		"\3\2\2\2\3K\3\2\2\2\5P\3\2\2\2\7Y\3\2\2\2\t]\3\2\2\2\13k\3\2\2\2\rv\3"+
		"\2\2\2\17z\3\2\2\2\21\u0080\3\2\2\2\23\u0083\3\2\2\2\25\u0086\3\2\2\2"+
		"\27\u0089\3\2\2\2\31\u008c\3\2\2\2\33\u008f\3\2\2\2\35\u0091\3\2\2\2\37"+
		"\u0093\3\2\2\2!\u0095\3\2\2\2#\u0097\3\2\2\2%\u0099\3\2\2\2\'\u009b\3"+
		"\2\2\2)\u009d\3\2\2\2+\u009f\3\2\2\2-\u00a1\3\2\2\2/\u00a3\3\2\2\2\61"+
		"\u00a5\3\2\2\2\63\u00a7\3\2\2\2\65\u00a9\3\2\2\2\67\u00ab\3\2\2\29\u00ad"+
		"\3\2\2\2;\u00af\3\2\2\2=\u00b1\3\2\2\2?\u00b8\3\2\2\2A\u00ba\3\2\2\2C"+
		"\u00c9\3\2\2\2E\u00cc\3\2\2\2G\u00ee\3\2\2\2I\u00f0\3\2\2\2KL\7v\2\2L"+
		"M\7t\2\2MN\7w\2\2NO\7g\2\2O\4\3\2\2\2PQ\7h\2\2QR\7c\2\2RS\7n\2\2ST\7u"+
		"\2\2TU\7g\2\2U\6\3\2\2\2VW\7\17\2\2WZ\7\f\2\2XZ\t\2\2\2YV\3\2\2\2YX\3"+
		"\2\2\2Z[\3\2\2\2[\\\b\4\2\2\\\b\3\2\2\2]^\7\'\2\2^_\7}\2\2_c\3\2\2\2`"+
		"b\13\2\2\2a`\3\2\2\2be\3\2\2\2cd\3\2\2\2ca\3\2\2\2df\3\2\2\2ec\3\2\2\2"+
		"fg\7\'\2\2gh\7\177\2\2hi\3\2\2\2ij\b\5\2\2j\n\3\2\2\2ko\7\'\2\2ln\13\2"+
		"\2\2ml\3\2\2\2nq\3\2\2\2op\3\2\2\2om\3\2\2\2pr\3\2\2\2qo\3\2\2\2rs\5\7"+
		"\4\2st\3\2\2\2tu\b\6\2\2u\f\3\2\2\2vw\t\3\2\2wx\3\2\2\2xy\b\7\3\2y\16"+
		"\3\2\2\2z{\7\60\2\2{|\7\60\2\2|}\7\60\2\2}~\3\2\2\2~\177\b\b\3\2\177\20"+
		"\3\2\2\2\u0080\u0081\7\60\2\2\u0081\u0082\7\61\2\2\u0082\22\3\2\2\2\u0083"+
		"\u0084\7\60\2\2\u0084\u0085\7`\2\2\u0085\24\3\2\2\2\u0086\u0087\7\60\2"+
		"\2\u0087\u0088\7,\2\2\u0088\26\3\2\2\2\u0089\u008a\7\60\2\2\u008a\u008b"+
		"\7^\2\2\u008b\30\3\2\2\2\u008c\u008d\7\60\2\2\u008d\u008e\7)\2\2\u008e"+
		"\32\3\2\2\2\u008f\u0090\7?\2\2\u0090\34\3\2\2\2\u0091\u0092\7<\2\2\u0092"+
		"\36\3\2\2\2\u0093\u0094\7\61\2\2\u0094 \3\2\2\2\u0095\u0096\7/\2\2\u0096"+
		"\"\3\2\2\2\u0097\u0098\7-\2\2\u0098$\3\2\2\2\u0099\u009a\7`\2\2\u009a"+
		"&\3\2\2\2\u009b\u009c\7,\2\2\u009c(\3\2\2\2\u009d\u009e\7^\2\2\u009e*"+
		"\3\2\2\2\u009f\u00a0\7.\2\2\u00a0,\3\2\2\2\u00a1\u00a2\7\60\2\2\u00a2"+
		".\3\2\2\2\u00a3\u00a4\7=\2\2\u00a4\60\3\2\2\2\u00a5\u00a6\7*\2\2\u00a6"+
		"\62\3\2\2\2\u00a7\u00a8\7]\2\2\u00a8\64\3\2\2\2\u00a9\u00aa\7+\2\2\u00aa"+
		"\66\3\2\2\2\u00ab\u00ac\7_\2\2\u00ac8\3\2\2\2\u00ad\u00ae\7}\2\2\u00ae"+
		":\3\2\2\2\u00af\u00b0\7\177\2\2\u00b0<\3\2\2\2\u00b1\u00b5\t\4\2\2\u00b2"+
		"\u00b4\t\5\2\2\u00b3\u00b2\3\2\2\2\u00b4\u00b7\3\2\2\2\u00b5\u00b3\3\2"+
		"\2\2\u00b5\u00b6\3\2\2\2\u00b6>\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b8\u00b9"+
		"\t\6\2\2\u00b9@\3\2\2\2\u00ba\u00bc\t\7\2\2\u00bb\u00bd\t\b\2\2\u00bc"+
		"\u00bb\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00bf\3\2\2\2\u00be\u00c0\5?"+
		" \2\u00bf\u00be\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c1"+
		"\u00c2\3\2\2\2\u00c2B\3\2\2\2\u00c3\u00c4\5E#\2\u00c4\u00c5\7k\2\2\u00c5"+
		"\u00ca\3\2\2\2\u00c6\u00c7\5G$\2\u00c7\u00c8\7k\2\2\u00c8\u00ca\3\2\2"+
		"\2\u00c9\u00c3\3\2\2\2\u00c9\u00c6\3\2\2\2\u00caD\3\2\2\2\u00cb\u00cd"+
		"\5? \2\u00cc\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00cc\3\2\2\2\u00ce"+
		"\u00cf\3\2\2\2\u00cfF\3\2\2\2\u00d0\u00d2\5? \2\u00d1\u00d0\3\2\2\2\u00d2"+
		"\u00d3\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d5\3\2"+
		"\2\2\u00d5\u00d7\7\60\2\2\u00d6\u00d8\5? \2\u00d7\u00d6\3\2\2\2\u00d8"+
		"\u00d9\3\2\2\2\u00d9\u00d7\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00dc\3\2"+
		"\2\2\u00db\u00dd\5A!\2\u00dc\u00db\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00ef"+
		"\3\2\2\2\u00de\u00e0\5? \2\u00df\u00de\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1"+
		"\u00df\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\5A"+
		"!\2\u00e4\u00ef\3\2\2\2\u00e5\u00e7\7\60\2\2\u00e6\u00e8\5? \2\u00e7\u00e6"+
		"\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\u00e7\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea"+
		"\u00ec\3\2\2\2\u00eb\u00ed\5A!\2\u00ec\u00eb\3\2\2\2\u00ec\u00ed\3\2\2"+
		"\2\u00ed\u00ef\3\2\2\2\u00ee\u00d1\3\2\2\2\u00ee\u00df\3\2\2\2\u00ee\u00e5"+
		"\3\2\2\2\u00efH\3\2\2\2\u00f0\u00f6\7)\2\2\u00f1\u00f5\n\t\2\2\u00f2\u00f3"+
		"\7)\2\2\u00f3\u00f5\7)\2\2\u00f4\u00f1\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f5"+
		"\u00f8\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\u00f9\3\2"+
		"\2\2\u00f8\u00f6\3\2\2\2\u00f9\u00fa\7)\2\2\u00faJ\3\2\2\2\24\2Yco\u00b5"+
		"\u00bc\u00c1\u00c9\u00ce\u00d3\u00d9\u00dc\u00e1\u00e9\u00ec\u00ee\u00f4"+
		"\u00f6\4\2\3\2\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}