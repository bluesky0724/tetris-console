import { Game } from "./Game.ts";
import * as fs from "node:fs";

async function processFile(inputFilePath: string, outputFilePath: string) {
  try {
    await fs.promises.writeFile(outputFilePath, "");
    const data = await fs.promises.readFile(inputFilePath, "utf-8");

    const lines = data.split(/\r?\n/);

    for (const line of lines) {
      if (line.trim()) {
        await processRow(line, outputFilePath); // Pass output file path
      }
    }
  } catch (error) {
    console.error(`Error reading file: ${error}`);
  }
}

async function processRow(input: string, outputFilePath: string) {
  const game = new Game();
  const maxHeight = game.runGame(input);

  try {
    await fs.promises.appendFile(outputFilePath, `${maxHeight}\n`);
  } catch (error) {
    console.error(`Error writing to file: ${error}`);
  }
}

// Get input and output file paths from command line arguments
const inputFilePath = process.argv[2]; // First argument after the script name
const outputFilePath = process.argv[3]; // Second argument after the script name

if (!inputFilePath || !outputFilePath) {
  console.error("Usage: ts-node tetris.ts <inputFilePath> <outputFilePath>");
  process.exit(1);
}

processFile(inputFilePath, outputFilePath).catch(console.error);