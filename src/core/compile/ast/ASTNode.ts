import { Token } from "../lexical/Token";

/**
 * 抽象语法树节点
 */
export default class ASTNode {
	private type: string;
	private value: Token | undefined;
	private children: ASTNode[] = [];

	constructor(type: string) {
		this.type = type;
	}

	public setType(type: string) {
		this.type = type;
	}

	public getType() {
		return this.type;
	}

	public getValue() {
		return this.value;
	}

	public setValue(value: Token) {
		this.value = value;
	}

	public addChild(child: ASTNode) {
		this.children.push(child);
	}

	public getChildren() {
		return this.children;
	}
}
