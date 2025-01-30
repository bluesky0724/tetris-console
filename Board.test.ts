import { Board } from './Board';
import { Piece } from './Piece';

describe('Board', () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 100);
    });

    test('should initialize with correct dimensions', () => {
        expect(board.getMaxHeight()).toBe(0);
    });

    test('should add piece correctly', () => {
        board.addPiece(0, 0, 'I');
        expect(board.getMaxHeight()).toBe(4);
    });

    test('should clear lines correctly', () => {
        // Fill a row completely
        for (let x = 0; x < 10; x+=2) {
            board.addPiece(x, 0, 'O');
        }
        expect(board.getMaxHeight()).toBe(0);
    });
});