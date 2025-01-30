import { Game } from './Game';

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    test('should run game correctly', () => {
        const maxHeight = game.runGame('O0,O2,O4,O6,O8');
        expect(maxHeight).toBe(0);
    });

    test('should handle multiple pieces correctly', () => {
        const maxHeight = game.runGame('L0,J2,O4,L6,J8');
        expect(maxHeight).toBe(2);
    });
});