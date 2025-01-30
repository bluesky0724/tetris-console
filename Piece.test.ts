import { Piece } from './Piece';

describe('Piece', () => {
    let piece: Piece;

    beforeEach(() => {
        piece = new Piece(0, 0, 'I');
    });

    test('should initialize with correct shape', () => {
        expect(piece.getShape().length).toBe(4);
    });

    test('should move down correctly', () => {
        piece.moveDown();
        expect(piece.getPosition().y).toBe(1);
    });

    test('should get next piece correctly', () => {
        const nextPiece = piece.getNextPiece();
        expect(nextPiece.getPosition().y).toBe(1);
    });
});