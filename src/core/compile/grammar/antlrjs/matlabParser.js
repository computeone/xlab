// Generated from ./src/core/compile/grammar/antlrjs/matlab.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import matlabListener from './matlabListener.js';
import matlabVisitor from './matlabVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003$\u01e1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0005!\u0095\n!\u0003\"\u0003\"\u0003\"\u0003\"\u0005",
    "\"\u009b\n\"\u0003\"\u0003\"\u0003\"\u0005\"\u00a0\n\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u00a8\n\"\u0003\"\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u00b0\n\"\u0007\"\u00b2\n\"",
    "\f\"\u000e\"\u00b5\u000b\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u00bb",
    "\n\"\u0005\"\u00bd\n\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0005#\u00d3\n#\u0003#\u0003#\u0005#\u00d7\n",
    "#\u0003#\u0003#\u0003#\u0005#\u00dc\n#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0005#\u00e3\n#\u0003#\u0003#\u0003#\u0003#\u0003#\u0005#\u00ea\n",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0005#\u00f1\n#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0005#\u00f8\n#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0005#\u0103\n#\u0007#\u0105\n#\f#\u000e#\u0108",
    "\u000b#\u0003$\u0003$\u0003$\u0005$\u010d\n$\u0003$\u0007$\u0110\n$",
    "\f$\u000e$\u0113\u000b$\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u011a",
    "\n$\u0003$\u0007$\u011d\n$\f$\u000e$\u0120\u000b$\u0003$\u0003$\u0003",
    "$\u0005$\u0125\n$\u0003$\u0007$\u0128\n$\f$\u000e$\u012b\u000b$\u0007",
    "$\u012d\n$\f$\u000e$\u0130\u000b$\u0003$\u0003$\u0005$\u0134\n$\u0003",
    "%\u0003%\u0003%\u0005%\u0139\n%\u0003%\u0007%\u013c\n%\f%\u000e%\u013f",
    "\u000b%\u0003%\u0003%\u0003%\u0003%\u0003%\u0005%\u0146\n%\u0003%\u0007",
    "%\u0149\n%\f%\u000e%\u014c\u000b%\u0003%\u0003%\u0003%\u0005%\u0151",
    "\n%\u0003%\u0007%\u0154\n%\f%\u000e%\u0157\u000b%\u0007%\u0159\n%\f",
    "%\u000e%\u015c\u000b%\u0003%\u0003%\u0005%\u0160\n%\u0003&\u0003&\u0005",
    "&\u0164\n&\u0003&\u0003&\u0003&\u0005&\u0169\n&\u0003&\u0003&\u0003",
    "&\u0005&\u016e\n&\u0007&\u0170\n&\f&\u000e&\u0173\u000b&\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u017b\n\'\u0003\'\u0003\'",
    "\u0003\'\u0005\'\u0180\n\'\u0007\'\u0182\n\'\f\'\u000e\'\u0185\u000b",
    "\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(",
    "\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0005(\u01ba\n(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0007(\u01c8\n(\f(\u000e",
    "(\u01cb\u000b(\u0003)\u0003)\u0003)\u0003)\u0005)\u01d1\n)\u0003)\u0003",
    ")\u0003)\u0005)\u01d6\n)\u0007)\u01d8\n)\f)\u000e)\u01db\u000b)\u0005",
    ")\u01dd\n)\u0003)\u0003)\u0003)\u0002\u0004DN*\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02",
    "468:<>@BDFHJLNP\u0002\u0003\u0003\u0002\u0003\u0004\u0002\u020e\u0002",
    "R\u0003\u0002\u0002\u0002\u0004T\u0003\u0002\u0002\u0002\u0006V\u0003",
    "\u0002\u0002\u0002\bX\u0003\u0002\u0002\u0002\nZ\u0003\u0002\u0002\u0002",
    "\f\\\u0003\u0002\u0002\u0002\u000e^\u0003\u0002\u0002\u0002\u0010`\u0003",
    "\u0002\u0002\u0002\u0012b\u0003\u0002\u0002\u0002\u0014d\u0003\u0002",
    "\u0002\u0002\u0016f\u0003\u0002\u0002\u0002\u0018h\u0003\u0002\u0002",
    "\u0002\u001aj\u0003\u0002\u0002\u0002\u001cl\u0003\u0002\u0002\u0002",
    "\u001en\u0003\u0002\u0002\u0002 p\u0003\u0002\u0002\u0002\"r\u0003\u0002",
    "\u0002\u0002$t\u0003\u0002\u0002\u0002&v\u0003\u0002\u0002\u0002(x\u0003",
    "\u0002\u0002\u0002*z\u0003\u0002\u0002\u0002,|\u0003\u0002\u0002\u0002",
    ".~\u0003\u0002\u0002\u00020\u0080\u0003\u0002\u0002\u00022\u0083\u0003",
    "\u0002\u0002\u00024\u0086\u0003\u0002\u0002\u00026\u0088\u0003\u0002",
    "\u0002\u00028\u008a\u0003\u0002\u0002\u0002:\u008c\u0003\u0002\u0002",
    "\u0002<\u008e\u0003\u0002\u0002\u0002>\u0090\u0003\u0002\u0002\u0002",
    "@\u0094\u0003\u0002\u0002\u0002B\u00bc\u0003\u0002\u0002\u0002D\u00d6",
    "\u0003\u0002\u0002\u0002F\u0133\u0003\u0002\u0002\u0002H\u015f\u0003",
    "\u0002\u0002\u0002J\u0163\u0003\u0002\u0002\u0002L\u0176\u0003\u0002",
    "\u0002\u0002N\u01b9\u0003\u0002\u0002\u0002P\u01cc\u0003\u0002\u0002",
    "\u0002RS\u0007\n\u0002\u0002S\u0003\u0003\u0002\u0002\u0002TU\u0007",
    "\u000b\u0002\u0002U\u0005\u0003\u0002\u0002\u0002VW\u0007\f\u0002\u0002",
    "W\u0007\u0003\u0002\u0002\u0002XY\u0007\r\u0002\u0002Y\t\u0003\u0002",
    "\u0002\u0002Z[\u0007\u000e\u0002\u0002[\u000b\u0003\u0002\u0002\u0002",
    "\\]\u0007\u000f\u0002\u0002]\r\u0003\u0002\u0002\u0002^_\u0007\u0010",
    "\u0002\u0002_\u000f\u0003\u0002\u0002\u0002`a\u0007\u0011\u0002\u0002",
    "a\u0011\u0003\u0002\u0002\u0002bc\u0007\u0012\u0002\u0002c\u0013\u0003",
    "\u0002\u0002\u0002de\u0007\u0013\u0002\u0002e\u0015\u0003\u0002\u0002",
    "\u0002fg\u0007\u0014\u0002\u0002g\u0017\u0003\u0002\u0002\u0002hi\u0007",
    "\u0015\u0002\u0002i\u0019\u0003\u0002\u0002\u0002jk\u0007\u0016\u0002",
    "\u0002k\u001b\u0003\u0002\u0002\u0002lm\u0007\u0017\u0002\u0002m\u001d",
    "\u0003\u0002\u0002\u0002no\u0007\u0018\u0002\u0002o\u001f\u0003\u0002",
    "\u0002\u0002pq\u0007\u0019\u0002\u0002q!\u0003\u0002\u0002\u0002rs\u0007",
    "\u001a\u0002\u0002s#\u0003\u0002\u0002\u0002tu\u0007\u001c\u0002\u0002",
    "u%\u0003\u0002\u0002\u0002vw\u0007\u001b\u0002\u0002w\'\u0003\u0002",
    "\u0002\u0002xy\u0007\u001d\u0002\u0002y)\u0003\u0002\u0002\u0002z{\u0007",
    "\u001e\u0002\u0002{+\u0003\u0002\u0002\u0002|}\u0007\u001f\u0002\u0002",
    "}-\u0003\u0002\u0002\u0002~\u007f\t\u0002\u0002\u0002\u007f/\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0007\u001b\u0002\u0002\u0081\u0082\u0007\u001d",
    "\u0002\u0002\u00821\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u001e",
    "\u0002\u0002\u0084\u0085\u0007\u001f\u0002\u0002\u00853\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0007#\u0002\u0002\u00875\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007!\u0002\u0002\u00897\u0003\u0002\u0002\u0002",
    "\u008a\u008b\u0007\u0010\u0002\u0002\u008b9\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0007\"\u0002\u0002\u008d;\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0007$\u0002\u0002\u008f=\u0003\u0002\u0002\u0002\u0090\u0091",
    "\u0007 \u0002\u0002\u0091?\u0003\u0002\u0002\u0002\u0092\u0095\u0005",
    "B\"\u0002\u0093\u0095\u0005D#\u0002\u0094\u0092\u0003\u0002\u0002\u0002",
    "\u0094\u0093\u0003\u0002\u0002\u0002\u0095A\u0003\u0002\u0002\u0002",
    "\u0096\u009b\u0005> \u0002\u0097\u009b\u0005J&\u0002\u0098\u009b\u0005",
    "L\'\u0002\u0099\u009b\u0005N(\u0002\u009a\u0096\u0003\u0002\u0002\u0002",
    "\u009a\u0097\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002",
    "\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002",
    "\u009c\u009f\u0005\f\u0007\u0002\u009d\u00a0\u00052\u001a\u0002\u009e",
    "\u00a0\u0005D#\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u009e",
    "\u0003\u0002\u0002\u0002\u00a0\u00bd\u0003\u0002\u0002\u0002\u00a1\u00a7",
    "\u0005&\u0014\u0002\u00a2\u00a8\u0003\u0002\u0002\u0002\u00a3\u00a8",
    "\u0005> \u0002\u00a4\u00a8\u0005J&\u0002\u00a5\u00a8\u0005L\'\u0002",
    "\u00a6\u00a8\u0005N(\u0002\u00a7\u00a2\u0003\u0002\u0002\u0002\u00a7",
    "\u00a3\u0003\u0002\u0002\u0002\u00a7\u00a4\u0003\u0002\u0002\u0002\u00a7",
    "\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a8",
    "\u00b3\u0003\u0002\u0002\u0002\u00a9\u00af\u0007\u0017\u0002\u0002\u00aa",
    "\u00b0\u0003\u0002\u0002\u0002\u00ab\u00b0\u0005> \u0002\u00ac\u00b0",
    "\u0005J&\u0002\u00ad\u00b0\u0005L\'\u0002\u00ae\u00b0\u0005N(\u0002",
    "\u00af\u00aa\u0003\u0002\u0002\u0002\u00af\u00ab\u0003\u0002\u0002\u0002",
    "\u00af\u00ac\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002",
    "\u00af\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b2\u0003\u0002\u0002\u0002",
    "\u00b1\u00a9\u0003\u0002\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002\u0002",
    "\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002",
    "\u00b4\u00b6\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002",
    "\u00b6\u00b7\u0005(\u0015\u0002\u00b7\u00ba\u0005\f\u0007\u0002\u00b8",
    "\u00bb\u00052\u001a\u0002\u00b9\u00bb\u0005D#\u0002\u00ba\u00b8\u0003",
    "\u0002\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bd\u0003",
    "\u0002\u0002\u0002\u00bc\u009a\u0003\u0002\u0002\u0002\u00bc\u00a1\u0003",
    "\u0002\u0002\u0002\u00bdC\u0003\u0002\u0002\u0002\u00be\u00bf\b#\u0001",
    "\u0002\u00bf\u00d7\u0005.\u0018\u0002\u00c0\u00d7\u00050\u0019\u0002",
    "\u00c1\u00d7\u00054\u001b\u0002\u00c2\u00d7\u00056\u001c\u0002\u00c3",
    "\u00d7\u0005:\u001e\u0002\u00c4\u00d7\u0005<\u001f\u0002\u00c5\u00d7",
    "\u0005> \u0002\u00c6\u00d7\u0005P)\u0002\u00c7\u00d7\u0005F$\u0002\u00c8",
    "\u00d7\u0005J&\u0002\u00c9\u00d7\u0005H%\u0002\u00ca\u00d7\u0005L\'",
    "\u0002\u00cb\u00d7\u0005N(\u0002\u00cc\u00cd\u0005\"\u0012\u0002\u00cd",
    "\u00ce\u0005D#\u0002\u00ce\u00cf\u0005$\u0013\u0002\u00cf\u00d7\u0003",
    "\u0002\u0002\u0002\u00d0\u00d3\u0005\u0014\u000b\u0002\u00d1\u00d3\u0005",
    "\u0012\n\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d1\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d5\u0005",
    "D#\b\u00d5\u00d7\u0003\u0002\u0002\u0002\u00d6\u00be\u0003\u0002\u0002",
    "\u0002\u00d6\u00c0\u0003\u0002\u0002\u0002\u00d6\u00c1\u0003\u0002\u0002",
    "\u0002\u00d6\u00c2\u0003\u0002\u0002\u0002\u00d6\u00c3\u0003\u0002\u0002",
    "\u0002\u00d6\u00c4\u0003\u0002\u0002\u0002\u00d6\u00c5\u0003\u0002\u0002",
    "\u0002\u00d6\u00c6\u0003\u0002\u0002\u0002\u00d6\u00c7\u0003\u0002\u0002",
    "\u0002\u00d6\u00c8\u0003\u0002\u0002\u0002\u00d6\u00c9\u0003\u0002\u0002",
    "\u0002\u00d6\u00ca\u0003\u0002\u0002\u0002\u00d6\u00cb\u0003\u0002\u0002",
    "\u0002\u00d6\u00cc\u0003\u0002\u0002\u0002\u00d6\u00d2\u0003\u0002\u0002",
    "\u0002\u00d7\u0106\u0003\u0002\u0002\u0002\u00d8\u00db\f\n\u0002\u0002",
    "\u00d9\u00dc\u0005\b\u0005\u0002\u00da\u00dc\u0005\u001a\u000e\u0002",
    "\u00db\u00d9\u0003\u0002\u0002\u0002\u00db\u00da\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de\u0005D#\u000b\u00de",
    "\u0105\u0003\u0002\u0002\u0002\u00df\u00e2\f\t\u0002\u0002\u00e0\u00e3",
    "\u0005\u0004\u0003\u0002\u00e1\u00e3\u0005\u0016\f\u0002\u00e2\u00e0",
    "\u0003\u0002\u0002\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0003\u0002\u0002\u0002\u00e4\u00e5\u0005D#\n\u00e5\u0105\u0003\u0002",
    "\u0002\u0002\u00e6\u00e9\f\u0006\u0002\u0002\u00e7\u00ea\u0005\u0006",
    "\u0004\u0002\u00e8\u00ea\u0005\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002",
    "\u0002\u0002\u00e9\u00e8\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002",
    "\u0002\u0002\u00eb\u00ec\u0005D#\u0007\u00ec\u0105\u0003\u0002\u0002",
    "\u0002\u00ed\u00f0\f\u0005\u0002\u0002\u00ee\u00f1\u0005\u0018\r\u0002",
    "\u00ef\u00f1\u0005\u0010\t\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002",
    "\u00f0\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002",
    "\u00f2\u00f3\u0005D#\u0006\u00f3\u0105\u0003\u0002\u0002\u0002\u00f4",
    "\u00f7\f\u0004\u0002\u0002\u00f5\u00f8\u0005\u0014\u000b\u0002\u00f6",
    "\u00f8\u0005\u0012\n\u0002\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f7",
    "\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0005D#\u0005\u00fa\u0105\u0003\u0002\u0002\u0002\u00fb\u00fc",
    "\f\u0003\u0002\u0002\u00fc\u00fd\u0005\u000e\b\u0002\u00fd\u00fe\u0005",
    "D#\u0004\u00fe\u0105\u0003\u0002\u0002\u0002\u00ff\u0102\f\u0007\u0002",
    "\u0002\u0100\u0103\u0005\u001e\u0010\u0002\u0101\u0103\u0005\n\u0006",
    "\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0102\u0101\u0003\u0002\u0002",
    "\u0002\u0103\u0105\u0003\u0002\u0002\u0002\u0104\u00d8\u0003\u0002\u0002",
    "\u0002\u0104\u00df\u0003\u0002\u0002\u0002\u0104\u00e6\u0003\u0002\u0002",
    "\u0002\u0104\u00ed\u0003\u0002\u0002\u0002\u0104\u00f4\u0003\u0002\u0002",
    "\u0002\u0104\u00fb\u0003\u0002\u0002\u0002\u0104\u00ff\u0003\u0002\u0002",
    "\u0002\u0105\u0108\u0003\u0002\u0002\u0002\u0106\u0104\u0003\u0002\u0002",
    "\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107E\u0003\u0002\u0002",
    "\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010a\u0005&\u0014",
    "\u0002\u010a\u0111\u0005D#\u0002\u010b\u010d\u0007\u0017\u0002\u0002",
    "\u010c\u010b\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002",
    "\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u0110\u0005D#\u0002\u010f",
    "\u010c\u0003\u0002\u0002\u0002\u0110\u0113\u0003\u0002\u0002\u0002\u0111",
    "\u010f\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112",
    "\u0114\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0114",
    "\u0115\u0005(\u0015\u0002\u0115\u0134\u0003\u0002\u0002\u0002\u0116",
    "\u0117\u0005&\u0014\u0002\u0117\u011e\u0005D#\u0002\u0118\u011a\u0007",
    "\u0017\u0002\u0002\u0119\u0118\u0003\u0002\u0002\u0002\u0119\u011a\u0003",
    "\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011d\u0005",
    "D#\u0002\u011c\u0119\u0003\u0002\u0002\u0002\u011d\u0120\u0003\u0002",
    "\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011e\u011f\u0003\u0002",
    "\u0002\u0002\u011f\u012e\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002",
    "\u0002\u0002\u0121\u0122\u0005 \u0011\u0002\u0122\u0129\u0005D#\u0002",
    "\u0123\u0125\u0007\u0017\u0002\u0002\u0124\u0123\u0003\u0002\u0002\u0002",
    "\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002",
    "\u0126\u0128\u0005D#\u0002\u0127\u0124\u0003\u0002\u0002\u0002\u0128",
    "\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u0129",
    "\u012a\u0003\u0002\u0002\u0002\u012a\u012d\u0003\u0002\u0002\u0002\u012b",
    "\u0129\u0003\u0002\u0002\u0002\u012c\u0121\u0003\u0002\u0002\u0002\u012d",
    "\u0130\u0003\u0002\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002\u012e",
    "\u012f\u0003\u0002\u0002\u0002\u012f\u0131\u0003\u0002\u0002\u0002\u0130",
    "\u012e\u0003\u0002\u0002\u0002\u0131\u0132\u0005(\u0015\u0002\u0132",
    "\u0134\u0003\u0002\u0002\u0002\u0133\u0109\u0003\u0002\u0002\u0002\u0133",
    "\u0116\u0003\u0002\u0002\u0002\u0134G\u0003\u0002\u0002\u0002\u0135",
    "\u0136\u0005*\u0016\u0002\u0136\u013d\u0005D#\u0002\u0137\u0139\u0007",
    "\u0017\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0138\u0139\u0003",
    "\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u013c\u0005",
    "D#\u0002\u013b\u0138\u0003\u0002\u0002\u0002\u013c\u013f\u0003\u0002",
    "\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002",
    "\u0002\u0002\u013e\u0140\u0003\u0002\u0002\u0002\u013f\u013d\u0003\u0002",
    "\u0002\u0002\u0140\u0141\u0005,\u0017\u0002\u0141\u0160\u0003\u0002",
    "\u0002\u0002\u0142\u0143\u0005*\u0016\u0002\u0143\u014a\u0005D#\u0002",
    "\u0144\u0146\u0007\u0017\u0002\u0002\u0145\u0144\u0003\u0002\u0002\u0002",
    "\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002",
    "\u0147\u0149\u0005D#\u0002\u0148\u0145\u0003\u0002\u0002\u0002\u0149",
    "\u014c\u0003\u0002\u0002\u0002\u014a\u0148\u0003\u0002\u0002\u0002\u014a",
    "\u014b\u0003\u0002\u0002\u0002\u014b\u015a\u0003\u0002\u0002\u0002\u014c",
    "\u014a\u0003\u0002\u0002\u0002\u014d\u014e\u0005 \u0011\u0002\u014e",
    "\u0155\u0005D#\u0002\u014f\u0151\u0007\u0017\u0002\u0002\u0150\u014f",
    "\u0003\u0002\u0002\u0002\u0150\u0151\u0003\u0002\u0002\u0002\u0151\u0152",
    "\u0003\u0002\u0002\u0002\u0152\u0154\u0005D#\u0002\u0153\u0150\u0003",
    "\u0002\u0002\u0002\u0154\u0157\u0003\u0002\u0002\u0002\u0155\u0153\u0003",
    "\u0002\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u0159\u0003",
    "\u0002\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0158\u014d\u0003",
    "\u0002\u0002\u0002\u0159\u015c\u0003\u0002\u0002\u0002\u015a\u0158\u0003",
    "\u0002\u0002\u0002\u015a\u015b\u0003\u0002\u0002\u0002\u015b\u015d\u0003",
    "\u0002\u0002\u0002\u015c\u015a\u0003\u0002\u0002\u0002\u015d\u015e\u0005",
    ",\u0017\u0002\u015e\u0160\u0003\u0002\u0002\u0002\u015f\u0135\u0003",
    "\u0002\u0002\u0002\u015f\u0142\u0003\u0002\u0002\u0002\u0160I\u0003",
    "\u0002\u0002\u0002\u0161\u0164\u0005L\'\u0002\u0162\u0164\u0005> \u0002",
    "\u0163\u0161\u0003\u0002\u0002\u0002\u0163\u0162\u0003\u0002\u0002\u0002",
    "\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0168\u0005\"\u0012\u0002",
    "\u0166\u0169\u00058\u001d\u0002\u0167\u0169\u0005D#\u0002\u0168\u0166",
    "\u0003\u0002\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002\u0169\u0171",
    "\u0003\u0002\u0002\u0002\u016a\u016d\u0007\u0017\u0002\u0002\u016b\u016e",
    "\u00058\u001d\u0002\u016c\u016e\u0005D#\u0002\u016d\u016b\u0003\u0002",
    "\u0002\u0002\u016d\u016c\u0003\u0002\u0002\u0002\u016e\u0170\u0003\u0002",
    "\u0002\u0002\u016f\u016a\u0003\u0002\u0002\u0002\u0170\u0173\u0003\u0002",
    "\u0002\u0002\u0171\u016f\u0003\u0002\u0002\u0002\u0171\u0172\u0003\u0002",
    "\u0002\u0002\u0172\u0174\u0003\u0002\u0002\u0002\u0173\u0171\u0003\u0002",
    "\u0002\u0002\u0174\u0175\u0005$\u0013\u0002\u0175K\u0003\u0002\u0002",
    "\u0002\u0176\u0177\u0005> \u0002\u0177\u017a\u0005*\u0016\u0002\u0178",
    "\u017b\u00058\u001d\u0002\u0179\u017b\u0005D#\u0002\u017a\u0178\u0003",
    "\u0002\u0002\u0002\u017a\u0179\u0003\u0002\u0002\u0002\u017b\u0183\u0003",
    "\u0002\u0002\u0002\u017c\u017f\u0007\u0017\u0002\u0002\u017d\u0180\u0005",
    "8\u001d\u0002\u017e\u0180\u0005D#\u0002\u017f\u017d\u0003\u0002\u0002",
    "\u0002\u017f\u017e\u0003\u0002\u0002\u0002\u0180\u0182\u0003\u0002\u0002",
    "\u0002\u0181\u017c\u0003\u0002\u0002\u0002\u0182\u0185\u0003\u0002\u0002",
    "\u0002\u0183\u0181\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002",
    "\u0002\u0184\u0186\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002",
    "\u0002\u0186\u0187\u0005,\u0017\u0002\u0187M\u0003\u0002\u0002\u0002",
    "\u0188\u0189\b(\u0001\u0002\u0189\u018a\u0005> \u0002\u018a\u018b\u0007",
    "\u0018\u0002\u0002\u018b\u018c\u0005> \u0002\u018c\u01ba\u0003\u0002",
    "\u0002\u0002\u018d\u018e\u0005> \u0002\u018e\u018f\u0007\u0018\u0002",
    "\u0002\u018f\u0190\u0005J&\u0002\u0190\u01ba\u0003\u0002\u0002\u0002",
    "\u0191\u0192\u0005> \u0002\u0192\u0193\u0007\u0018\u0002\u0002\u0193",
    "\u0194\u0005L\'\u0002\u0194\u01ba\u0003\u0002\u0002\u0002\u0195\u0196",
    "\u0005> \u0002\u0196\u0197\u0007\u0018\u0002\u0002\u0197\u0198\u0005",
    "P)\u0002\u0198\u01ba\u0003\u0002\u0002\u0002\u0199\u019a\u0005J&\u0002",
    "\u019a\u019b\u0007\u0018\u0002\u0002\u019b\u019c\u0005> \u0002\u019c",
    "\u01ba\u0003\u0002\u0002\u0002\u019d\u019e\u0005J&\u0002\u019e\u019f",
    "\u0007\u0018\u0002\u0002\u019f\u01a0\u0005J&\u0002\u01a0\u01ba\u0003",
    "\u0002\u0002\u0002\u01a1\u01a2\u0005J&\u0002\u01a2\u01a3\u0007\u0018",
    "\u0002\u0002\u01a3\u01a4\u0005L\'\u0002\u01a4\u01ba\u0003\u0002\u0002",
    "\u0002\u01a5\u01a6\u0005J&\u0002\u01a6\u01a7\u0007\u0018\u0002\u0002",
    "\u01a7\u01a8\u0005P)\u0002\u01a8\u01ba\u0003\u0002\u0002\u0002\u01a9",
    "\u01aa\u0005L\'\u0002\u01aa\u01ab\u0007\u0018\u0002\u0002\u01ab\u01ac",
    "\u0005> \u0002\u01ac\u01ba\u0003\u0002\u0002\u0002\u01ad\u01ae\u0005",
    "L\'\u0002\u01ae\u01af\u0007\u0018\u0002\u0002\u01af\u01b0\u0005J&\u0002",
    "\u01b0\u01ba\u0003\u0002\u0002\u0002\u01b1\u01b2\u0005L\'\u0002\u01b2",
    "\u01b3\u0007\u0018\u0002\u0002\u01b3\u01b4\u0005L\'\u0002\u01b4\u01ba",
    "\u0003\u0002\u0002\u0002\u01b5\u01b6\u0005L\'\u0002\u01b6\u01b7\u0007",
    "\u0018\u0002\u0002\u01b7\u01b8\u0005P)\u0002\u01b8\u01ba\u0003\u0002",
    "\u0002\u0002\u01b9\u0188\u0003\u0002\u0002\u0002\u01b9\u018d\u0003\u0002",
    "\u0002\u0002\u01b9\u0191\u0003\u0002\u0002\u0002\u01b9\u0195\u0003\u0002",
    "\u0002\u0002\u01b9\u0199\u0003\u0002\u0002\u0002\u01b9\u019d\u0003\u0002",
    "\u0002\u0002\u01b9\u01a1\u0003\u0002\u0002\u0002\u01b9\u01a5\u0003\u0002",
    "\u0002\u0002\u01b9\u01a9\u0003\u0002\u0002\u0002\u01b9\u01ad\u0003\u0002",
    "\u0002\u0002\u01b9\u01b1\u0003\u0002\u0002\u0002\u01b9\u01b5\u0003\u0002",
    "\u0002\u0002\u01ba\u01c9\u0003\u0002\u0002\u0002\u01bb\u01bc\f\u0006",
    "\u0002\u0002\u01bc\u01bd\u0007\u0018\u0002\u0002\u01bd\u01c8\u0005>",
    " \u0002\u01be\u01bf\f\u0005\u0002\u0002\u01bf\u01c0\u0007\u0018\u0002",
    "\u0002\u01c0\u01c8\u0005J&\u0002\u01c1\u01c2\f\u0004\u0002\u0002\u01c2",
    "\u01c3\u0007\u0018\u0002\u0002\u01c3\u01c8\u0005L\'\u0002\u01c4\u01c5",
    "\f\u0003\u0002\u0002\u01c5\u01c6\u0007\u0018\u0002\u0002\u01c6\u01c8",
    "\u0005P)\u0002\u01c7\u01bb\u0003\u0002\u0002\u0002\u01c7\u01be\u0003",
    "\u0002\u0002\u0002\u01c7\u01c1\u0003\u0002\u0002\u0002\u01c7\u01c4\u0003",
    "\u0002\u0002\u0002\u01c8\u01cb\u0003\u0002\u0002\u0002\u01c9\u01c7\u0003",
    "\u0002\u0002\u0002\u01c9\u01ca\u0003\u0002\u0002\u0002\u01caO\u0003",
    "\u0002\u0002\u0002\u01cb\u01c9\u0003\u0002\u0002\u0002\u01cc\u01cd\u0005",
    "> \u0002\u01cd\u01dc\u0005\"\u0012\u0002\u01ce\u01d1\u0005D#\u0002\u01cf",
    "\u01d1\u00052\u001a\u0002\u01d0\u01ce\u0003\u0002\u0002\u0002\u01d0",
    "\u01cf\u0003\u0002\u0002\u0002\u01d1\u01d9\u0003\u0002\u0002\u0002\u01d2",
    "\u01d5\u0007\u0017\u0002\u0002\u01d3\u01d6\u0005D#\u0002\u01d4\u01d6",
    "\u00052\u001a\u0002\u01d5\u01d3\u0003\u0002\u0002\u0002\u01d5\u01d4",
    "\u0003\u0002\u0002\u0002\u01d6\u01d8\u0003\u0002\u0002\u0002\u01d7\u01d2",
    "\u0003\u0002\u0002\u0002\u01d8\u01db\u0003\u0002\u0002\u0002\u01d9\u01d7",
    "\u0003\u0002\u0002\u0002\u01d9\u01da\u0003\u0002\u0002\u0002\u01da\u01dd",
    "\u0003\u0002\u0002\u0002\u01db\u01d9\u0003\u0002\u0002\u0002\u01dc\u01d0",
    "\u0003\u0002\u0002\u0002\u01dc\u01dd\u0003\u0002\u0002\u0002\u01dd\u01de",
    "\u0003\u0002\u0002\u0002\u01de\u01df\u0005$\u0013\u0002\u01dfQ\u0003",
    "\u0002\u0002\u00022\u0094\u009a\u009f\u00a7\u00af\u00b3\u00ba\u00bc",
    "\u00d2\u00d6\u00db\u00e2\u00e9\u00f0\u00f7\u0102\u0104\u0106\u010c\u0111",
    "\u0119\u011e\u0124\u0129\u012e\u0133\u0138\u013d\u0145\u014a\u0150\u0155",
    "\u015a\u015f\u0163\u0168\u016d\u0171\u017a\u017f\u0183\u01b9\u01c7\u01c9",
    "\u01d0\u01d5\u01d9\u01dc"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class matlabParser extends antlr4.Parser {

    static grammarFileName = "matlab.g4";
    static literalNames = [ null, "'true'", "'false'", null, null, null, 
                            null, "'...'", "'./'", "'.^'", "'.*'", "'.\\'", 
                            "'.''", "'='", "':'", "'/'", "'-'", "'+'", "'^'", 
                            "'*'", "'\\'", "','", "'.'", "';'", "'('", "'['", 
                            "')'", "']'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, "NL", "BLOCKCOMMENT", "COMMENT", 
                             "WS", "ELLIPSIS", "ELE_DIV", "ELE_POW", "ELE_MULT", 
                             "ELE_TRANS", "ELE_DOT", "ASSIGN", "COLON", 
                             "DIV", "MINUS", "PLUS", "POW", "MULT", "TRANS", 
                             "COMMA", "DOT", "SEMI_COLON", "LPAREN", "LBRACK", 
                             "RPAREN", "RBRACK", "LBRACE", "RBRACE", "ID", 
                             "IMAGINARY", "INT", "FLOAT", "STRING" ];
    static ruleNames = [ "atom_element_div", "atom_element_pow", "atom_element_mult", 
                         "atom_element_transpose", "atom_element_dot", "atom_assign", 
                         "atom_colon", "atom_div", "atom_minus", "atom_plus", 
                         "atom_pow", "atom_mult", "atom_transpose", "atom_comma", 
                         "atom_dot", "atom_semi_colon", "atom_lparen", "atom_rparen", 
                         "atom_lbrack", "atom_rbrack", "atom_lbrace", "atom_rbrace", 
                         "atom_boolean", "atom_empty_array", "atom_empty_cell", 
                         "atom_float", "atom_imaginary", "atom_index_all", 
                         "atom_integer", "atom_string", "atom_var", "entry", 
                         "st_assign", "xpr_tree", "xpr_array", "xpr_cell", 
                         "xpr_array_index", "xpr_cell_index", "xpr_field", 
                         "xpr_function" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = matlabParser.ruleNames;
        this.literalNames = matlabParser.literalNames;
        this.symbolicNames = matlabParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 33:
    	    		return this.xpr_tree_sempred(localctx, predIndex);
    	case 38:
    	    		return this.xpr_field_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    xpr_tree_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		case 6:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    xpr_field_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 7:
    			return this.precpred(this._ctx, 4);
    		case 8:
    			return this.precpred(this._ctx, 3);
    		case 9:
    			return this.precpred(this._ctx, 2);
    		case 10:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	atom_element_div() {
	    let localctx = new Atom_element_divContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, matlabParser.RULE_atom_element_div);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(matlabParser.ELE_DIV);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_element_pow() {
	    let localctx = new Atom_element_powContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, matlabParser.RULE_atom_element_pow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(matlabParser.ELE_POW);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_element_mult() {
	    let localctx = new Atom_element_multContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, matlabParser.RULE_atom_element_mult);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(matlabParser.ELE_MULT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_element_transpose() {
	    let localctx = new Atom_element_transposeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, matlabParser.RULE_atom_element_transpose);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(matlabParser.ELE_TRANS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_element_dot() {
	    let localctx = new Atom_element_dotContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, matlabParser.RULE_atom_element_dot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(matlabParser.ELE_DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_assign() {
	    let localctx = new Atom_assignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, matlabParser.RULE_atom_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(matlabParser.ASSIGN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_colon() {
	    let localctx = new Atom_colonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, matlabParser.RULE_atom_colon);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(matlabParser.COLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_div() {
	    let localctx = new Atom_divContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, matlabParser.RULE_atom_div);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(matlabParser.DIV);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_minus() {
	    let localctx = new Atom_minusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, matlabParser.RULE_atom_minus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(matlabParser.MINUS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_plus() {
	    let localctx = new Atom_plusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, matlabParser.RULE_atom_plus);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(matlabParser.PLUS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_pow() {
	    let localctx = new Atom_powContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, matlabParser.RULE_atom_pow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(matlabParser.POW);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_mult() {
	    let localctx = new Atom_multContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, matlabParser.RULE_atom_mult);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(matlabParser.MULT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_transpose() {
	    let localctx = new Atom_transposeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, matlabParser.RULE_atom_transpose);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(matlabParser.TRANS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_comma() {
	    let localctx = new Atom_commaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, matlabParser.RULE_atom_comma);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(matlabParser.COMMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_dot() {
	    let localctx = new Atom_dotContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, matlabParser.RULE_atom_dot);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(matlabParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_semi_colon() {
	    let localctx = new Atom_semi_colonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, matlabParser.RULE_atom_semi_colon);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(matlabParser.SEMI_COLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_lparen() {
	    let localctx = new Atom_lparenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, matlabParser.RULE_atom_lparen);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(matlabParser.LPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_rparen() {
	    let localctx = new Atom_rparenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, matlabParser.RULE_atom_rparen);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(matlabParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_lbrack() {
	    let localctx = new Atom_lbrackContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, matlabParser.RULE_atom_lbrack);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(matlabParser.LBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_rbrack() {
	    let localctx = new Atom_rbrackContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, matlabParser.RULE_atom_rbrack);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(matlabParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_lbrace() {
	    let localctx = new Atom_lbraceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, matlabParser.RULE_atom_lbrace);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(matlabParser.LBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_rbrace() {
	    let localctx = new Atom_rbraceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, matlabParser.RULE_atom_rbrace);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(matlabParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_boolean() {
	    let localctx = new Atom_booleanContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, matlabParser.RULE_atom_boolean);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        _la = this._input.LA(1);
	        if(!(_la===matlabParser.T__0 || _la===matlabParser.T__1)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_empty_array() {
	    let localctx = new Atom_empty_arrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, matlabParser.RULE_atom_empty_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(matlabParser.LBRACK);
	        this.state = 127;
	        this.match(matlabParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_empty_cell() {
	    let localctx = new Atom_empty_cellContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, matlabParser.RULE_atom_empty_cell);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(matlabParser.LBRACE);
	        this.state = 130;
	        this.match(matlabParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_float() {
	    let localctx = new Atom_floatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, matlabParser.RULE_atom_float);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(matlabParser.FLOAT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_imaginary() {
	    let localctx = new Atom_imaginaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, matlabParser.RULE_atom_imaginary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(matlabParser.IMAGINARY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_index_all() {
	    let localctx = new Atom_index_allContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, matlabParser.RULE_atom_index_all);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(matlabParser.COLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_integer() {
	    let localctx = new Atom_integerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, matlabParser.RULE_atom_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(matlabParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_string() {
	    let localctx = new Atom_stringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, matlabParser.RULE_atom_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(matlabParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_var() {
	    let localctx = new Atom_varContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, matlabParser.RULE_atom_var);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(matlabParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entry() {
	    let localctx = new EntryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, matlabParser.RULE_entry);
	    try {
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            this.st_assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            this.xpr_tree(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st_assign() {
	    let localctx = new St_assignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, matlabParser.RULE_st_assign);
	    var _la = 0; // Token type
	    try {
	        this.state = 186;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 148;
	                this.atom_var();
	                break;

	            case 2:
	                this.state = 149;
	                this.xpr_array_index();
	                break;

	            case 3:
	                this.state = 150;
	                this.xpr_cell_index();
	                break;

	            case 4:
	                this.state = 151;
	                this.xpr_field(0);
	                break;

	            }
	            this.state = 154;
	            this.atom_assign();
	            this.state = 157;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 155;
	                this.atom_empty_cell();
	                break;

	            case 2:
	                this.state = 156;
	                this.xpr_tree(0);
	                break;

	            }
	            break;
	        case matlabParser.LBRACK:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 159;
	            this.atom_lbrack();
	            this.state = 165;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            switch(la_) {
	            case 1:
	                break;

	            case 2:
	                this.state = 161;
	                this.atom_var();
	                break;

	            case 3:
	                this.state = 162;
	                this.xpr_array_index();
	                break;

	            case 4:
	                this.state = 163;
	                this.xpr_cell_index();
	                break;

	            case 5:
	                this.state = 164;
	                this.xpr_field(0);
	                break;

	            }
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===matlabParser.COMMA) {
	                this.state = 167;
	                this.match(matlabParser.COMMA);
	                this.state = 173;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    break;

	                case 2:
	                    this.state = 169;
	                    this.atom_var();
	                    break;

	                case 3:
	                    this.state = 170;
	                    this.xpr_array_index();
	                    break;

	                case 4:
	                    this.state = 171;
	                    this.xpr_cell_index();
	                    break;

	                case 5:
	                    this.state = 172;
	                    this.xpr_field(0);
	                    break;

	                }
	                this.state = 179;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 180;
	            this.atom_rbrack();
	            this.state = 181;
	            this.atom_assign();
	            this.state = 184;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 182;
	                this.atom_empty_cell();
	                break;

	            case 2:
	                this.state = 183;
	                this.xpr_tree(0);
	                break;

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	xpr_tree(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Xpr_treeContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 66;
	    this.enterRecursionRule(localctx, 66, matlabParser.RULE_xpr_tree, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 189;
	            this.atom_boolean();
	            break;

	        case 2:
	            this.state = 190;
	            this.atom_empty_array();
	            break;

	        case 3:
	            this.state = 191;
	            this.atom_float();
	            break;

	        case 4:
	            this.state = 192;
	            this.atom_imaginary();
	            break;

	        case 5:
	            this.state = 193;
	            this.atom_integer();
	            break;

	        case 6:
	            this.state = 194;
	            this.atom_string();
	            break;

	        case 7:
	            this.state = 195;
	            this.atom_var();
	            break;

	        case 8:
	            this.state = 196;
	            this.xpr_function();
	            break;

	        case 9:
	            this.state = 197;
	            this.xpr_array();
	            break;

	        case 10:
	            this.state = 198;
	            this.xpr_array_index();
	            break;

	        case 11:
	            this.state = 199;
	            this.xpr_cell();
	            break;

	        case 12:
	            this.state = 200;
	            this.xpr_cell_index();
	            break;

	        case 13:
	            this.state = 201;
	            this.xpr_field(0);
	            break;

	        case 14:
	            this.state = 202;
	            this.atom_lparen();
	            this.state = 203;
	            this.xpr_tree(0);
	            this.state = 204;
	            this.atom_rparen();
	            break;

	        case 15:
	            this.state = 208;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case matlabParser.PLUS:
	                this.state = 206;
	                this.atom_plus();
	                break;
	            case matlabParser.MINUS:
	                this.state = 207;
	                this.atom_minus();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 210;
	            this.xpr_tree(6);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 260;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 258;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Xpr_treeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_tree);
	                    this.state = 214;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 217;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case matlabParser.ELE_TRANS:
	                        this.state = 215;
	                        this.atom_element_transpose();
	                        break;
	                    case matlabParser.TRANS:
	                        this.state = 216;
	                        this.atom_transpose();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 219;
	                    this.xpr_tree(9);
	                    break;

	                case 2:
	                    localctx = new Xpr_treeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_tree);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 224;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case matlabParser.ELE_POW:
	                        this.state = 222;
	                        this.atom_element_pow();
	                        break;
	                    case matlabParser.POW:
	                        this.state = 223;
	                        this.atom_pow();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 226;
	                    this.xpr_tree(8);
	                    break;

	                case 3:
	                    localctx = new Xpr_treeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_tree);
	                    this.state = 228;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 231;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case matlabParser.ELE_MULT:
	                        this.state = 229;
	                        this.atom_element_mult();
	                        break;
	                    case matlabParser.ELE_DIV:
	                        this.state = 230;
	                        this.atom_element_div();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 233;
	                    this.xpr_tree(5);
	                    break;

	                case 4:
	                    localctx = new Xpr_treeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_tree);
	                    this.state = 235;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 238;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case matlabParser.MULT:
	                        this.state = 236;
	                        this.atom_mult();
	                        break;
	                    case matlabParser.DIV:
	                        this.state = 237;
	                        this.atom_div();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 240;
	                    this.xpr_tree(4);
	                    break;

	                case 5:
	                    localctx = new Xpr_treeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_tree);
	                    this.state = 242;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 245;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case matlabParser.PLUS:
	                        this.state = 243;
	                        this.atom_plus();
	                        break;
	                    case matlabParser.MINUS:
	                        this.state = 244;
	                        this.atom_minus();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 247;
	                    this.xpr_tree(3);
	                    break;

	                case 6:
	                    localctx = new Xpr_treeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_tree);
	                    this.state = 249;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 250;
	                    this.atom_colon();
	                    this.state = 251;
	                    this.xpr_tree(2);
	                    break;

	                case 7:
	                    localctx = new Xpr_treeContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_tree);
	                    this.state = 253;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 256;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case matlabParser.DOT:
	                        this.state = 254;
	                        this.atom_dot();
	                        break;
	                    case matlabParser.ELE_DOT:
	                        this.state = 255;
	                        this.atom_element_dot();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    break;

	                } 
	            }
	            this.state = 262;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	xpr_array() {
	    let localctx = new Xpr_arrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, matlabParser.RULE_xpr_array);
	    var _la = 0; // Token type
	    try {
	        this.state = 305;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 263;
	            this.atom_lbrack();
	            this.state = 264;
	            this.xpr_tree(0);
	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << matlabParser.T__0) | (1 << matlabParser.T__1) | (1 << matlabParser.MINUS) | (1 << matlabParser.PLUS) | (1 << matlabParser.COMMA) | (1 << matlabParser.LPAREN) | (1 << matlabParser.LBRACK) | (1 << matlabParser.LBRACE) | (1 << matlabParser.ID) | (1 << matlabParser.IMAGINARY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (matlabParser.INT - 32)) | (1 << (matlabParser.FLOAT - 32)) | (1 << (matlabParser.STRING - 32)))) !== 0)) {
	                this.state = 266;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===matlabParser.COMMA) {
	                    this.state = 265;
	                    this.match(matlabParser.COMMA);
	                }

	                this.state = 268;
	                this.xpr_tree(0);
	                this.state = 273;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 274;
	            this.atom_rbrack();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this.atom_lbrack();
	            this.state = 277;
	            this.xpr_tree(0);
	            this.state = 284;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << matlabParser.T__0) | (1 << matlabParser.T__1) | (1 << matlabParser.MINUS) | (1 << matlabParser.PLUS) | (1 << matlabParser.COMMA) | (1 << matlabParser.LPAREN) | (1 << matlabParser.LBRACK) | (1 << matlabParser.LBRACE) | (1 << matlabParser.ID) | (1 << matlabParser.IMAGINARY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (matlabParser.INT - 32)) | (1 << (matlabParser.FLOAT - 32)) | (1 << (matlabParser.STRING - 32)))) !== 0)) {
	                this.state = 279;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===matlabParser.COMMA) {
	                    this.state = 278;
	                    this.match(matlabParser.COMMA);
	                }

	                this.state = 281;
	                this.xpr_tree(0);
	                this.state = 286;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===matlabParser.SEMI_COLON) {
	                this.state = 287;
	                this.atom_semi_colon();
	                this.state = 288;
	                this.xpr_tree(0);
	                this.state = 295;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << matlabParser.T__0) | (1 << matlabParser.T__1) | (1 << matlabParser.MINUS) | (1 << matlabParser.PLUS) | (1 << matlabParser.COMMA) | (1 << matlabParser.LPAREN) | (1 << matlabParser.LBRACK) | (1 << matlabParser.LBRACE) | (1 << matlabParser.ID) | (1 << matlabParser.IMAGINARY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (matlabParser.INT - 32)) | (1 << (matlabParser.FLOAT - 32)) | (1 << (matlabParser.STRING - 32)))) !== 0)) {
	                    this.state = 290;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===matlabParser.COMMA) {
	                        this.state = 289;
	                        this.match(matlabParser.COMMA);
	                    }

	                    this.state = 292;
	                    this.xpr_tree(0);
	                    this.state = 297;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 302;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 303;
	            this.atom_rbrack();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	xpr_cell() {
	    let localctx = new Xpr_cellContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, matlabParser.RULE_xpr_cell);
	    var _la = 0; // Token type
	    try {
	        this.state = 349;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.atom_lbrace();

	            this.state = 308;
	            this.xpr_tree(0);
	            this.state = 315;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << matlabParser.T__0) | (1 << matlabParser.T__1) | (1 << matlabParser.MINUS) | (1 << matlabParser.PLUS) | (1 << matlabParser.COMMA) | (1 << matlabParser.LPAREN) | (1 << matlabParser.LBRACK) | (1 << matlabParser.LBRACE) | (1 << matlabParser.ID) | (1 << matlabParser.IMAGINARY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (matlabParser.INT - 32)) | (1 << (matlabParser.FLOAT - 32)) | (1 << (matlabParser.STRING - 32)))) !== 0)) {
	                this.state = 310;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===matlabParser.COMMA) {
	                    this.state = 309;
	                    this.match(matlabParser.COMMA);
	                }

	                this.state = 312;
	                this.xpr_tree(0);
	                this.state = 317;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 318;
	            this.atom_rbrace();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 320;
	            this.atom_lbrace();

	            this.state = 321;
	            this.xpr_tree(0);
	            this.state = 328;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << matlabParser.T__0) | (1 << matlabParser.T__1) | (1 << matlabParser.MINUS) | (1 << matlabParser.PLUS) | (1 << matlabParser.COMMA) | (1 << matlabParser.LPAREN) | (1 << matlabParser.LBRACK) | (1 << matlabParser.LBRACE) | (1 << matlabParser.ID) | (1 << matlabParser.IMAGINARY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (matlabParser.INT - 32)) | (1 << (matlabParser.FLOAT - 32)) | (1 << (matlabParser.STRING - 32)))) !== 0)) {
	                this.state = 323;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===matlabParser.COMMA) {
	                    this.state = 322;
	                    this.match(matlabParser.COMMA);
	                }

	                this.state = 325;
	                this.xpr_tree(0);
	                this.state = 330;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 344;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===matlabParser.SEMI_COLON) {
	                this.state = 331;
	                this.atom_semi_colon();

	                this.state = 332;
	                this.xpr_tree(0);
	                this.state = 339;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << matlabParser.T__0) | (1 << matlabParser.T__1) | (1 << matlabParser.MINUS) | (1 << matlabParser.PLUS) | (1 << matlabParser.COMMA) | (1 << matlabParser.LPAREN) | (1 << matlabParser.LBRACK) | (1 << matlabParser.LBRACE) | (1 << matlabParser.ID) | (1 << matlabParser.IMAGINARY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (matlabParser.INT - 32)) | (1 << (matlabParser.FLOAT - 32)) | (1 << (matlabParser.STRING - 32)))) !== 0)) {
	                    this.state = 334;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===matlabParser.COMMA) {
	                        this.state = 333;
	                        this.match(matlabParser.COMMA);
	                    }

	                    this.state = 336;
	                    this.xpr_tree(0);
	                    this.state = 341;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 346;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 347;
	            this.atom_rbrace();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	xpr_array_index() {
	    let localctx = new Xpr_array_indexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, matlabParser.RULE_xpr_array_index);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 351;
	            this.xpr_cell_index();
	            break;

	        case 2:
	            this.state = 352;
	            this.atom_var();
	            break;

	        }
	        this.state = 355;
	        this.atom_lparen();
	        this.state = 358;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.COLON:
	            this.state = 356;
	            this.atom_index_all();
	            break;
	        case matlabParser.T__0:
	        case matlabParser.T__1:
	        case matlabParser.MINUS:
	        case matlabParser.PLUS:
	        case matlabParser.LPAREN:
	        case matlabParser.LBRACK:
	        case matlabParser.LBRACE:
	        case matlabParser.ID:
	        case matlabParser.IMAGINARY:
	        case matlabParser.INT:
	        case matlabParser.FLOAT:
	        case matlabParser.STRING:
	            this.state = 357;
	            this.xpr_tree(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===matlabParser.COMMA) {
	            this.state = 360;
	            this.match(matlabParser.COMMA);
	            this.state = 363;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case matlabParser.COLON:
	                this.state = 361;
	                this.atom_index_all();
	                break;
	            case matlabParser.T__0:
	            case matlabParser.T__1:
	            case matlabParser.MINUS:
	            case matlabParser.PLUS:
	            case matlabParser.LPAREN:
	            case matlabParser.LBRACK:
	            case matlabParser.LBRACE:
	            case matlabParser.ID:
	            case matlabParser.IMAGINARY:
	            case matlabParser.INT:
	            case matlabParser.FLOAT:
	            case matlabParser.STRING:
	                this.state = 362;
	                this.xpr_tree(0);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 369;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 370;
	        this.atom_rparen();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	xpr_cell_index() {
	    let localctx = new Xpr_cell_indexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, matlabParser.RULE_xpr_cell_index);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.atom_var();
	        this.state = 373;
	        this.atom_lbrace();
	        this.state = 376;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.COLON:
	            this.state = 374;
	            this.atom_index_all();
	            break;
	        case matlabParser.T__0:
	        case matlabParser.T__1:
	        case matlabParser.MINUS:
	        case matlabParser.PLUS:
	        case matlabParser.LPAREN:
	        case matlabParser.LBRACK:
	        case matlabParser.LBRACE:
	        case matlabParser.ID:
	        case matlabParser.IMAGINARY:
	        case matlabParser.INT:
	        case matlabParser.FLOAT:
	        case matlabParser.STRING:
	            this.state = 375;
	            this.xpr_tree(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 385;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===matlabParser.COMMA) {
	            this.state = 378;
	            this.match(matlabParser.COMMA);
	            this.state = 381;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case matlabParser.COLON:
	                this.state = 379;
	                this.atom_index_all();
	                break;
	            case matlabParser.T__0:
	            case matlabParser.T__1:
	            case matlabParser.MINUS:
	            case matlabParser.PLUS:
	            case matlabParser.LPAREN:
	            case matlabParser.LBRACK:
	            case matlabParser.LBRACE:
	            case matlabParser.ID:
	            case matlabParser.IMAGINARY:
	            case matlabParser.INT:
	            case matlabParser.FLOAT:
	            case matlabParser.STRING:
	                this.state = 380;
	                this.xpr_tree(0);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 387;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 388;
	        this.atom_rbrace();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	xpr_field(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Xpr_fieldContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 76;
	    this.enterRecursionRule(localctx, 76, matlabParser.RULE_xpr_field, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 391;
	            this.atom_var();
	            this.state = 392;
	            this.match(matlabParser.DOT);
	            this.state = 393;
	            this.atom_var();
	            break;

	        case 2:
	            this.state = 395;
	            this.atom_var();
	            this.state = 396;
	            this.match(matlabParser.DOT);
	            this.state = 397;
	            this.xpr_array_index();
	            break;

	        case 3:
	            this.state = 399;
	            this.atom_var();
	            this.state = 400;
	            this.match(matlabParser.DOT);
	            this.state = 401;
	            this.xpr_cell_index();
	            break;

	        case 4:
	            this.state = 403;
	            this.atom_var();
	            this.state = 404;
	            this.match(matlabParser.DOT);
	            this.state = 405;
	            this.xpr_function();
	            break;

	        case 5:
	            this.state = 407;
	            this.xpr_array_index();
	            this.state = 408;
	            this.match(matlabParser.DOT);
	            this.state = 409;
	            this.atom_var();
	            break;

	        case 6:
	            this.state = 411;
	            this.xpr_array_index();
	            this.state = 412;
	            this.match(matlabParser.DOT);
	            this.state = 413;
	            this.xpr_array_index();
	            break;

	        case 7:
	            this.state = 415;
	            this.xpr_array_index();
	            this.state = 416;
	            this.match(matlabParser.DOT);
	            this.state = 417;
	            this.xpr_cell_index();
	            break;

	        case 8:
	            this.state = 419;
	            this.xpr_array_index();
	            this.state = 420;
	            this.match(matlabParser.DOT);
	            this.state = 421;
	            this.xpr_function();
	            break;

	        case 9:
	            this.state = 423;
	            this.xpr_cell_index();
	            this.state = 424;
	            this.match(matlabParser.DOT);
	            this.state = 425;
	            this.atom_var();
	            break;

	        case 10:
	            this.state = 427;
	            this.xpr_cell_index();
	            this.state = 428;
	            this.match(matlabParser.DOT);
	            this.state = 429;
	            this.xpr_array_index();
	            break;

	        case 11:
	            this.state = 431;
	            this.xpr_cell_index();
	            this.state = 432;
	            this.match(matlabParser.DOT);
	            this.state = 433;
	            this.xpr_cell_index();
	            break;

	        case 12:
	            this.state = 435;
	            this.xpr_cell_index();
	            this.state = 436;
	            this.match(matlabParser.DOT);
	            this.state = 437;
	            this.xpr_function();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 455;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 453;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Xpr_fieldContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_field);
	                    this.state = 441;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 442;
	                    this.match(matlabParser.DOT);
	                    this.state = 443;
	                    this.atom_var();
	                    break;

	                case 2:
	                    localctx = new Xpr_fieldContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_field);
	                    this.state = 444;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 445;
	                    this.match(matlabParser.DOT);
	                    this.state = 446;
	                    this.xpr_array_index();
	                    break;

	                case 3:
	                    localctx = new Xpr_fieldContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_field);
	                    this.state = 447;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 448;
	                    this.match(matlabParser.DOT);
	                    this.state = 449;
	                    this.xpr_cell_index();
	                    break;

	                case 4:
	                    localctx = new Xpr_fieldContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_xpr_field);
	                    this.state = 450;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 451;
	                    this.match(matlabParser.DOT);
	                    this.state = 452;
	                    this.xpr_function();
	                    break;

	                } 
	            }
	            this.state = 457;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	xpr_function() {
	    let localctx = new Xpr_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, matlabParser.RULE_xpr_function);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this.atom_var();
	        this.state = 459;
	        this.atom_lparen();
	        this.state = 474;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << matlabParser.T__0) | (1 << matlabParser.T__1) | (1 << matlabParser.MINUS) | (1 << matlabParser.PLUS) | (1 << matlabParser.LPAREN) | (1 << matlabParser.LBRACK) | (1 << matlabParser.LBRACE) | (1 << matlabParser.ID) | (1 << matlabParser.IMAGINARY))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (matlabParser.INT - 32)) | (1 << (matlabParser.FLOAT - 32)) | (1 << (matlabParser.STRING - 32)))) !== 0)) {
	            this.state = 462;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 460;
	                this.xpr_tree(0);
	                break;

	            case 2:
	                this.state = 461;
	                this.atom_empty_cell();
	                break;

	            }
	            this.state = 471;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===matlabParser.COMMA) {
	                this.state = 464;
	                this.match(matlabParser.COMMA);
	                this.state = 467;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 465;
	                    this.xpr_tree(0);
	                    break;

	                case 2:
	                    this.state = 466;
	                    this.atom_empty_cell();
	                    break;

	                }
	                this.state = 473;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 476;
	        this.atom_rparen();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

matlabParser.EOF = antlr4.Token.EOF;
matlabParser.T__0 = 1;
matlabParser.T__1 = 2;
matlabParser.NL = 3;
matlabParser.BLOCKCOMMENT = 4;
matlabParser.COMMENT = 5;
matlabParser.WS = 6;
matlabParser.ELLIPSIS = 7;
matlabParser.ELE_DIV = 8;
matlabParser.ELE_POW = 9;
matlabParser.ELE_MULT = 10;
matlabParser.ELE_TRANS = 11;
matlabParser.ELE_DOT = 12;
matlabParser.ASSIGN = 13;
matlabParser.COLON = 14;
matlabParser.DIV = 15;
matlabParser.MINUS = 16;
matlabParser.PLUS = 17;
matlabParser.POW = 18;
matlabParser.MULT = 19;
matlabParser.TRANS = 20;
matlabParser.COMMA = 21;
matlabParser.DOT = 22;
matlabParser.SEMI_COLON = 23;
matlabParser.LPAREN = 24;
matlabParser.LBRACK = 25;
matlabParser.RPAREN = 26;
matlabParser.RBRACK = 27;
matlabParser.LBRACE = 28;
matlabParser.RBRACE = 29;
matlabParser.ID = 30;
matlabParser.IMAGINARY = 31;
matlabParser.INT = 32;
matlabParser.FLOAT = 33;
matlabParser.STRING = 34;

matlabParser.RULE_atom_element_div = 0;
matlabParser.RULE_atom_element_pow = 1;
matlabParser.RULE_atom_element_mult = 2;
matlabParser.RULE_atom_element_transpose = 3;
matlabParser.RULE_atom_element_dot = 4;
matlabParser.RULE_atom_assign = 5;
matlabParser.RULE_atom_colon = 6;
matlabParser.RULE_atom_div = 7;
matlabParser.RULE_atom_minus = 8;
matlabParser.RULE_atom_plus = 9;
matlabParser.RULE_atom_pow = 10;
matlabParser.RULE_atom_mult = 11;
matlabParser.RULE_atom_transpose = 12;
matlabParser.RULE_atom_comma = 13;
matlabParser.RULE_atom_dot = 14;
matlabParser.RULE_atom_semi_colon = 15;
matlabParser.RULE_atom_lparen = 16;
matlabParser.RULE_atom_rparen = 17;
matlabParser.RULE_atom_lbrack = 18;
matlabParser.RULE_atom_rbrack = 19;
matlabParser.RULE_atom_lbrace = 20;
matlabParser.RULE_atom_rbrace = 21;
matlabParser.RULE_atom_boolean = 22;
matlabParser.RULE_atom_empty_array = 23;
matlabParser.RULE_atom_empty_cell = 24;
matlabParser.RULE_atom_float = 25;
matlabParser.RULE_atom_imaginary = 26;
matlabParser.RULE_atom_index_all = 27;
matlabParser.RULE_atom_integer = 28;
matlabParser.RULE_atom_string = 29;
matlabParser.RULE_atom_var = 30;
matlabParser.RULE_entry = 31;
matlabParser.RULE_st_assign = 32;
matlabParser.RULE_xpr_tree = 33;
matlabParser.RULE_xpr_array = 34;
matlabParser.RULE_xpr_cell = 35;
matlabParser.RULE_xpr_array_index = 36;
matlabParser.RULE_xpr_cell_index = 37;
matlabParser.RULE_xpr_field = 38;
matlabParser.RULE_xpr_function = 39;

class Atom_element_divContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_element_div;
    }

	ELE_DIV() {
	    return this.getToken(matlabParser.ELE_DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_element_div(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_element_div(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_element_div(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_element_powContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_element_pow;
    }

	ELE_POW() {
	    return this.getToken(matlabParser.ELE_POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_element_pow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_element_pow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_element_pow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_element_multContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_element_mult;
    }

	ELE_MULT() {
	    return this.getToken(matlabParser.ELE_MULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_element_mult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_element_mult(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_element_mult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_element_transposeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_element_transpose;
    }

	ELE_TRANS() {
	    return this.getToken(matlabParser.ELE_TRANS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_element_transpose(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_element_transpose(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_element_transpose(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_element_dotContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_element_dot;
    }

	ELE_DOT() {
	    return this.getToken(matlabParser.ELE_DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_element_dot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_element_dot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_element_dot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_assignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_assign;
    }

	ASSIGN() {
	    return this.getToken(matlabParser.ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_assign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_assign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_assign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_colonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_colon;
    }

	COLON() {
	    return this.getToken(matlabParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_colon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_colon(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_colon(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_divContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_div;
    }

	DIV() {
	    return this.getToken(matlabParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_div(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_div(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_div(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_minusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_minus;
    }

	MINUS() {
	    return this.getToken(matlabParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_minus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_minus(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_minus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_plusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_plus;
    }

	PLUS() {
	    return this.getToken(matlabParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_plus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_plus(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_plus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_powContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_pow;
    }

	POW() {
	    return this.getToken(matlabParser.POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_pow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_pow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_pow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_multContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_mult;
    }

	MULT() {
	    return this.getToken(matlabParser.MULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_mult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_mult(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_mult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_transposeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_transpose;
    }

	TRANS() {
	    return this.getToken(matlabParser.TRANS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_transpose(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_transpose(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_transpose(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_commaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_comma;
    }

	COMMA() {
	    return this.getToken(matlabParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_comma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_comma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_comma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_dotContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_dot;
    }

	DOT() {
	    return this.getToken(matlabParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_dot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_dot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_dot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_semi_colonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_semi_colon;
    }

	SEMI_COLON() {
	    return this.getToken(matlabParser.SEMI_COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_semi_colon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_semi_colon(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_semi_colon(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_lparenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_lparen;
    }

	LPAREN() {
	    return this.getToken(matlabParser.LPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_lparen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_lparen(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_lparen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_rparenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_rparen;
    }

	RPAREN() {
	    return this.getToken(matlabParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_rparen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_rparen(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_rparen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_lbrackContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_lbrack;
    }

	LBRACK() {
	    return this.getToken(matlabParser.LBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_lbrack(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_lbrack(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_lbrack(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_rbrackContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_rbrack;
    }

	RBRACK() {
	    return this.getToken(matlabParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_rbrack(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_rbrack(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_rbrack(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_lbraceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_lbrace;
    }

	LBRACE() {
	    return this.getToken(matlabParser.LBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_lbrace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_lbrace(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_lbrace(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_rbraceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_rbrace;
    }

	RBRACE() {
	    return this.getToken(matlabParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_rbrace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_rbrace(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_rbrace(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_booleanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_boolean;
    }


	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_boolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_boolean(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_boolean(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_empty_arrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_empty_array;
    }

	LBRACK() {
	    return this.getToken(matlabParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(matlabParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_empty_array(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_empty_array(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_empty_array(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_empty_cellContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_empty_cell;
    }

	LBRACE() {
	    return this.getToken(matlabParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(matlabParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_empty_cell(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_empty_cell(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_empty_cell(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_floatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_float;
    }

	FLOAT() {
	    return this.getToken(matlabParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_float(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_float(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_float(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_imaginaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_imaginary;
    }

	IMAGINARY() {
	    return this.getToken(matlabParser.IMAGINARY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_imaginary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_imaginary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_imaginary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_index_allContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_index_all;
    }

	COLON() {
	    return this.getToken(matlabParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_index_all(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_index_all(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_index_all(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_integerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_integer;
    }

	INT() {
	    return this.getToken(matlabParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_integer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_integer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_integer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_stringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_string;
    }

	STRING() {
	    return this.getToken(matlabParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_string(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_string(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Atom_varContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_atom_var;
    }

	ID() {
	    return this.getToken(matlabParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterAtom_var(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitAtom_var(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAtom_var(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EntryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_entry;
    }

	st_assign() {
	    return this.getTypedRuleContext(St_assignContext,0);
	};

	xpr_tree() {
	    return this.getTypedRuleContext(Xpr_treeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterEntry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitEntry(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitEntry(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class St_assignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_st_assign;
    }

	atom_assign() {
	    return this.getTypedRuleContext(Atom_assignContext,0);
	};

	atom_var = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Atom_varContext);
	    } else {
	        return this.getTypedRuleContext(Atom_varContext,i);
	    }
	};

	xpr_array_index = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_array_indexContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_array_indexContext,i);
	    }
	};

	xpr_cell_index = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_cell_indexContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_cell_indexContext,i);
	    }
	};

	xpr_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_fieldContext,i);
	    }
	};

	atom_empty_cell() {
	    return this.getTypedRuleContext(Atom_empty_cellContext,0);
	};

	xpr_tree() {
	    return this.getTypedRuleContext(Xpr_treeContext,0);
	};

	atom_lbrack() {
	    return this.getTypedRuleContext(Atom_lbrackContext,0);
	};

	atom_rbrack() {
	    return this.getTypedRuleContext(Atom_rbrackContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(matlabParser.COMMA);
	    } else {
	        return this.getToken(matlabParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterSt_assign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitSt_assign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitSt_assign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Xpr_treeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_xpr_tree;
    }

	atom_boolean() {
	    return this.getTypedRuleContext(Atom_booleanContext,0);
	};

	atom_empty_array() {
	    return this.getTypedRuleContext(Atom_empty_arrayContext,0);
	};

	atom_float() {
	    return this.getTypedRuleContext(Atom_floatContext,0);
	};

	atom_imaginary() {
	    return this.getTypedRuleContext(Atom_imaginaryContext,0);
	};

	atom_integer() {
	    return this.getTypedRuleContext(Atom_integerContext,0);
	};

	atom_string() {
	    return this.getTypedRuleContext(Atom_stringContext,0);
	};

	atom_var() {
	    return this.getTypedRuleContext(Atom_varContext,0);
	};

	xpr_function() {
	    return this.getTypedRuleContext(Xpr_functionContext,0);
	};

	xpr_array() {
	    return this.getTypedRuleContext(Xpr_arrayContext,0);
	};

	xpr_array_index() {
	    return this.getTypedRuleContext(Xpr_array_indexContext,0);
	};

	xpr_cell() {
	    return this.getTypedRuleContext(Xpr_cellContext,0);
	};

	xpr_cell_index() {
	    return this.getTypedRuleContext(Xpr_cell_indexContext,0);
	};

	xpr_field() {
	    return this.getTypedRuleContext(Xpr_fieldContext,0);
	};

	atom_lparen() {
	    return this.getTypedRuleContext(Atom_lparenContext,0);
	};

	xpr_tree = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_treeContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_treeContext,i);
	    }
	};

	atom_rparen() {
	    return this.getTypedRuleContext(Atom_rparenContext,0);
	};

	atom_plus() {
	    return this.getTypedRuleContext(Atom_plusContext,0);
	};

	atom_minus() {
	    return this.getTypedRuleContext(Atom_minusContext,0);
	};

	atom_element_transpose() {
	    return this.getTypedRuleContext(Atom_element_transposeContext,0);
	};

	atom_transpose() {
	    return this.getTypedRuleContext(Atom_transposeContext,0);
	};

	atom_element_pow() {
	    return this.getTypedRuleContext(Atom_element_powContext,0);
	};

	atom_pow() {
	    return this.getTypedRuleContext(Atom_powContext,0);
	};

	atom_element_mult() {
	    return this.getTypedRuleContext(Atom_element_multContext,0);
	};

	atom_element_div() {
	    return this.getTypedRuleContext(Atom_element_divContext,0);
	};

	atom_mult() {
	    return this.getTypedRuleContext(Atom_multContext,0);
	};

	atom_div() {
	    return this.getTypedRuleContext(Atom_divContext,0);
	};

	atom_colon() {
	    return this.getTypedRuleContext(Atom_colonContext,0);
	};

	atom_dot() {
	    return this.getTypedRuleContext(Atom_dotContext,0);
	};

	atom_element_dot() {
	    return this.getTypedRuleContext(Atom_element_dotContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterXpr_tree(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitXpr_tree(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitXpr_tree(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Xpr_arrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_xpr_array;
    }

	atom_lbrack() {
	    return this.getTypedRuleContext(Atom_lbrackContext,0);
	};

	xpr_tree = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_treeContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_treeContext,i);
	    }
	};

	atom_rbrack() {
	    return this.getTypedRuleContext(Atom_rbrackContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(matlabParser.COMMA);
	    } else {
	        return this.getToken(matlabParser.COMMA, i);
	    }
	};


	atom_semi_colon = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Atom_semi_colonContext);
	    } else {
	        return this.getTypedRuleContext(Atom_semi_colonContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterXpr_array(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitXpr_array(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitXpr_array(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Xpr_cellContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_xpr_cell;
    }

	atom_lbrace() {
	    return this.getTypedRuleContext(Atom_lbraceContext,0);
	};

	atom_rbrace() {
	    return this.getTypedRuleContext(Atom_rbraceContext,0);
	};

	xpr_tree = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_treeContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_treeContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(matlabParser.COMMA);
	    } else {
	        return this.getToken(matlabParser.COMMA, i);
	    }
	};


	atom_semi_colon = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Atom_semi_colonContext);
	    } else {
	        return this.getTypedRuleContext(Atom_semi_colonContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterXpr_cell(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitXpr_cell(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitXpr_cell(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Xpr_array_indexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_xpr_array_index;
    }

	atom_lparen() {
	    return this.getTypedRuleContext(Atom_lparenContext,0);
	};

	atom_rparen() {
	    return this.getTypedRuleContext(Atom_rparenContext,0);
	};

	xpr_cell_index() {
	    return this.getTypedRuleContext(Xpr_cell_indexContext,0);
	};

	atom_var() {
	    return this.getTypedRuleContext(Atom_varContext,0);
	};

	atom_index_all = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Atom_index_allContext);
	    } else {
	        return this.getTypedRuleContext(Atom_index_allContext,i);
	    }
	};

	xpr_tree = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_treeContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_treeContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(matlabParser.COMMA);
	    } else {
	        return this.getToken(matlabParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterXpr_array_index(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitXpr_array_index(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitXpr_array_index(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Xpr_cell_indexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_xpr_cell_index;
    }

	atom_var() {
	    return this.getTypedRuleContext(Atom_varContext,0);
	};

	atom_lbrace() {
	    return this.getTypedRuleContext(Atom_lbraceContext,0);
	};

	atom_rbrace() {
	    return this.getTypedRuleContext(Atom_rbraceContext,0);
	};

	atom_index_all = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Atom_index_allContext);
	    } else {
	        return this.getTypedRuleContext(Atom_index_allContext,i);
	    }
	};

	xpr_tree = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_treeContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_treeContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(matlabParser.COMMA);
	    } else {
	        return this.getToken(matlabParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterXpr_cell_index(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitXpr_cell_index(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitXpr_cell_index(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Xpr_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_xpr_field;
    }

	atom_var = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Atom_varContext);
	    } else {
	        return this.getTypedRuleContext(Atom_varContext,i);
	    }
	};

	DOT() {
	    return this.getToken(matlabParser.DOT, 0);
	};

	xpr_array_index = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_array_indexContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_array_indexContext,i);
	    }
	};

	xpr_cell_index = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_cell_indexContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_cell_indexContext,i);
	    }
	};

	xpr_function() {
	    return this.getTypedRuleContext(Xpr_functionContext,0);
	};

	xpr_field() {
	    return this.getTypedRuleContext(Xpr_fieldContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterXpr_field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitXpr_field(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitXpr_field(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Xpr_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_xpr_function;
    }

	atom_var() {
	    return this.getTypedRuleContext(Atom_varContext,0);
	};

	atom_lparen() {
	    return this.getTypedRuleContext(Atom_lparenContext,0);
	};

	atom_rparen() {
	    return this.getTypedRuleContext(Atom_rparenContext,0);
	};

	xpr_tree = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Xpr_treeContext);
	    } else {
	        return this.getTypedRuleContext(Xpr_treeContext,i);
	    }
	};

	atom_empty_cell = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Atom_empty_cellContext);
	    } else {
	        return this.getTypedRuleContext(Atom_empty_cellContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(matlabParser.COMMA);
	    } else {
	        return this.getToken(matlabParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.enterXpr_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof matlabListener ) {
	        listener.exitXpr_function(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitXpr_function(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




matlabParser.Atom_element_divContext = Atom_element_divContext; 
matlabParser.Atom_element_powContext = Atom_element_powContext; 
matlabParser.Atom_element_multContext = Atom_element_multContext; 
matlabParser.Atom_element_transposeContext = Atom_element_transposeContext; 
matlabParser.Atom_element_dotContext = Atom_element_dotContext; 
matlabParser.Atom_assignContext = Atom_assignContext; 
matlabParser.Atom_colonContext = Atom_colonContext; 
matlabParser.Atom_divContext = Atom_divContext; 
matlabParser.Atom_minusContext = Atom_minusContext; 
matlabParser.Atom_plusContext = Atom_plusContext; 
matlabParser.Atom_powContext = Atom_powContext; 
matlabParser.Atom_multContext = Atom_multContext; 
matlabParser.Atom_transposeContext = Atom_transposeContext; 
matlabParser.Atom_commaContext = Atom_commaContext; 
matlabParser.Atom_dotContext = Atom_dotContext; 
matlabParser.Atom_semi_colonContext = Atom_semi_colonContext; 
matlabParser.Atom_lparenContext = Atom_lparenContext; 
matlabParser.Atom_rparenContext = Atom_rparenContext; 
matlabParser.Atom_lbrackContext = Atom_lbrackContext; 
matlabParser.Atom_rbrackContext = Atom_rbrackContext; 
matlabParser.Atom_lbraceContext = Atom_lbraceContext; 
matlabParser.Atom_rbraceContext = Atom_rbraceContext; 
matlabParser.Atom_booleanContext = Atom_booleanContext; 
matlabParser.Atom_empty_arrayContext = Atom_empty_arrayContext; 
matlabParser.Atom_empty_cellContext = Atom_empty_cellContext; 
matlabParser.Atom_floatContext = Atom_floatContext; 
matlabParser.Atom_imaginaryContext = Atom_imaginaryContext; 
matlabParser.Atom_index_allContext = Atom_index_allContext; 
matlabParser.Atom_integerContext = Atom_integerContext; 
matlabParser.Atom_stringContext = Atom_stringContext; 
matlabParser.Atom_varContext = Atom_varContext; 
matlabParser.EntryContext = EntryContext; 
matlabParser.St_assignContext = St_assignContext; 
matlabParser.Xpr_treeContext = Xpr_treeContext; 
matlabParser.Xpr_arrayContext = Xpr_arrayContext; 
matlabParser.Xpr_cellContext = Xpr_cellContext; 
matlabParser.Xpr_array_indexContext = Xpr_array_indexContext; 
matlabParser.Xpr_cell_indexContext = Xpr_cell_indexContext; 
matlabParser.Xpr_fieldContext = Xpr_fieldContext; 
matlabParser.Xpr_functionContext = Xpr_functionContext; 
