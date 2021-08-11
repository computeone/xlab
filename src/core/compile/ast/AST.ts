import { ParserRuleContext } from 'antlr4';
import { StandardLibrary } from '../../runtime/Lib';
import { Token } from '../lexical/Token';
import ASTNode from './ASTNode';
import { ASTType } from './ASTType';

/**
 * 抽象语法树
 */
export default class AST {

	private root: ASTNode;
	constructor() {
		this.root = new ASTNode('root');
	}

	public getRoot() {
		return this.root;
	}

	public traverse(n: ASTNode) {

		const list: ASTNode[] = [];
		list.push(n);

		while (list.length > 0) {
			const node: ASTNode = list.pop() as ASTNode;

			for (let i = 0; i < node.getChildren().length; i++) {
				list.push(node.getChildren()[i]);
			}
		}

		return list;
	}

	/**
	 *生成AST
	 * @param node
	 * @returns
	 */
	public static buildAST(tree: ParserRuleContext) {
		const ast: AST = new AST();
		this.visit(ast.root, tree);
		return ast;
	}


	private static visit(node: ASTNode, tree: ParserRuleContext) {

		if (tree.getChildCount() === 1 && tree.getChild(0).symbol) {
			// 创建叶子节点
			node.setValue(this.buildToken((tree as any).start));
			return;
		}

		for (let i = 0; i < tree.getChildCount(); i++) {
			// 创建child节点
			const child = new ASTNode((tree.getChild(i) as any).type);

			if (child.getType() === ASTType.FUNCTION) {
				const value = (tree.getChild(i) as any).start.text;

				// 如果不是函数则为数组操作
				if (!StandardLibrary[value]) {
					child.setType(ASTType.ARRAY_INDEX);
				}
			}

			node.addChild(child);

			this.visit(child, tree.getChild(i));
		}

	}

	private static buildToken(value: any) {
		return new Token(value.column, value.line, value.start, value.stop, value.type, value.text);
	}

}
