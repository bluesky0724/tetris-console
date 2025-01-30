import { Game } from "./Game.ts";
import * as fs from "node:fs";

export async function processFile(inputFilePath: string, outputFilePath: string) {
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

export async function processRow(input: string, outputFilePath: string) {
  const game = new Game();
  const maxHeight = game.runGame(input);

  try {
    await fs.promises.appendFile(outputFilePath, `${maxHeight}\n`);
  } catch (error) {
    console.error(`Error writing to file: ${error}`);
  }
}
