import { DATAType } from "./Type";

/**
 * 调用栈
 */
export default class CallStack {

	private stack: Array<DATAType>;

	constructor() {
		this.stack = [];
	}

	public push(value: DATAType) {
		this.stack.push(value);
	}

	public pop(): DATAType | undefined {
		return this.stack.pop();
	}

	public size() {
		return this.stack.length;
	}

	public clear() {
		this.stack.splice(0, this.stack.length);
	}

}
