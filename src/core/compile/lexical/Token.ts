export class Token {
    private column: number;
    private line: number;
    private start: number;
    private end: number;
    private type: number;
    private text: string | undefined;

    constructor(column: number, line: number, start: number, end: number, type: number, text: string | undefined) {
        this.column = column;
        this.line = line;
        this.start = start;
        this.end = end;
        this.type = type;
        this.text = text;
    }

    public getColumn() {
        return this.column;
    }

    public getLine() {
        return this.line;
    }

    public getStart() {
        return this.start;
    }

    public getEnd() {
        return this.end;
    }

    public getType() {
        return this.type;
    }

    public getText() {
        return this.text;
    }
}
