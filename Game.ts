import { Board } from "./Board.ts";

export class Game {
    private board: Board;

    constructor() {
        this.board = new Board(10, 100);
    }

    runGame(input: string): number {
        // Parse the input string and update the game state
        const items = input.trim().split(',');
        for (let i = 0; i < items.length; i++) {
            const [shape, x] = items[i].split('');
            this.board.addPiece(parseInt(x), 0, shape);
        }
        return this.board.getMaxHeight();
    }
}