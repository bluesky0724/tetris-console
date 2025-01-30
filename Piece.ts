class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface TetrinoShape {
    [key: string]: Point[];
}

const TetrinoTypes: TetrinoShape = {
    I: [new Point(0, 0), new Point(0, 1), new Point(0, 2), new Point(0, 3)], // I
    O: [new Point(0, 0), new Point(0, 1), new Point(1, 0), new Point(1, 1)], // O
    T: [new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(2, 0)], // T
    L: [new Point(0, 0), new Point(0, 1), new Point(0, 2), new Point(1, 2)], // L
    J: [new Point(0, 2), new Point(1, 0), new Point(1, 1), new Point(1, 2)], // J
    S: [new Point(0, 1), new Point(1, 1), new Point(1, 0), new Point(2, 0)], // S
    Z: [new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(2, 1)]  // Z
}

export class Piece {
    shape: Point[];
    x: number;
    y: number;
    private type: string;

    constructor(x: number, y: number, type: string) {
        this.shape = TetrinoTypes[type];
        this.x = x;
        this.y = y;
        this.type = type;
    }

    moveDown() {
        this.y++;
    }

    getNextPiece(): Piece {
        return new Piece(this.x, this.y + 1, this.type);
    }

    getPosition(): { x: number, y: number } {
        return { x: this.x, y: this.y };
    }

    getShape(): Point[] {
        return this.shape;
    }
}