import { Piece } from "./Piece.ts";

export class Board {
  private board: number[][];
  private width: number;
  private height: number;

  // Constructor to initialize the board with given width and height
  constructor(width: number, height: number) {
    this.board = [];
    for (let y = 0; y < height; y++) {
      this.board[y] = [];
      for (let x = 0; x < width; x++) {
        this.board[y][x] = 0;
      }
    }
    this.width = width;
    this.height = height;
  }

  // Method to add a piece to the board at specified coordinates
  addPiece(x: number, y: number, shape: string) {
    const piece = new Piece(x, y, shape);
    this.dropPiece(piece);
  }

  // Method to drop a piece down the board until it collides with another piece or the bottom
  dropPiece(piece: Piece) {
    let nextPiece = piece.getNextPiece();

    while (!this._isCollide(nextPiece)) {
      piece.moveDown();
      nextPiece = piece.getNextPiece();
    }

    this._mergePieceToBoard(piece);
    this._clearLines();
  }
  
  // Method to get the maximum height of the pieces on the board
  getMaxHeight(): number {
    for (let y = 0; y < this.height; y++) {
      if (this.board[y].some((v) => v === 1)) {
        return this.height - y;
      }
    }
    return 0;
  }

  // Method to draw the current state of the board in the console
  drawBoard() {
    let output = "";
    for (let y = 0; y < this.board.length; y++) {
      let row = "";
      for (let x = 0; x < this.board[y].length; x++) {
        if (this.board[y][x] === 0) {
          row += "⬜ ";
        } else {
          row += "⬛ ";
        }
      }
      output += row.trim() + "\n";
    }
    console.log(output);
  }

  // Method to merge a piece into the board
  private _mergePieceToBoard(piece: Piece) {
    const shape = piece.getShape();
    const { x, y } = piece.getPosition();
    for (const point of shape) {
      this.board[point.y + y][point.x + x] = 1;
    }
  }
  
  // Method to clear completed lines from the board
  private _clearLines() {
    let lines = 0;
    for (let i = 0; i < this.height; i++) {
      if (this.board[i].every((v) => v === 1)) {
        lines++;
        this.board.splice(i, 1);
        const newRow = [];
        for (let j = 0; j < this.width; j++) {
          newRow.push(0);
        }
        this.board.unshift(newRow);
        i--; // Decrement i to account for the shifted rows
      }
    }
    return lines;
  }

  // Method to check if a piece collides with the board boundaries or other pieces
  private _isCollide(piece: Piece): boolean {
    const shape = piece.getShape();
    const { x, y } = piece.getPosition();
    for (let point of shape) {
      if (point.y + y + 1 > this.height || point.x + x + 1 > this.width) {
        return true;
      }

      if (this.board[point.y + y][point.x + x] != 0) {
        return true;
      }
    }
    return false;
  }
}
