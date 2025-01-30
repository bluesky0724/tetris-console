# Tetris Game Resolver

This repository contains a Tetris game resolver implemented in TypeScript. The program takes a text file as input, where each line represents a Tetris game. The input file specifies the type and starting position of each piece in the game. The resolver then calculates the maximum height of the remaining blocks in the grid after all pieces have fallen.

## Usage

To run the program, compile the TypeScript code to a executable file (e.g., `main.exe`) and execute it with the following command:

```bash
tetris.exe < games.txt > output.txt
```

To run the program with Typescript, use the following command:
```bash
ts-node tetris.ts
```

To run test
```bash
npm run test
```

This will read the game data from `games.txt` and write the maximum heights for each game to `output.txt`.

## Input Format

The input file `games.txt` contains one line per game. Each line consists of a sequence of piece types and starting positions, separated by commas.

* **Piece Types:**
    * `L`, `J`, `O`, `S`, `Z`, `T`, `I`: Represents the different types of Tetris pieces.
* **Starting Position:** A number between 0 and 9, representing the starting X-coordinate of the piece.

**Example Input:**

```
L2,J4,O1,L6,J8
```

## Output Format

The output file `output.txt` contains one line per game, representing the maximum height of the remaining blocks in the grid.

**Example Output:**

```
9
```

## Code Structure

The project is organized into the following files:

* **Piece.ts:** Defines the `Piece` class, representing a Tetris piece.
* **Board.ts:** Defines the `Board` class, representing the Tetris game board.
* **Game.ts:** Defines the `Game` class, representing a single Tetris game.
* **main.ts:** Contains the main program logic.

## Example

**games.txt:**

```
L2,J4,O1,L6,J8
```

**output.txt:**

```
9
```
