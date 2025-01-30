import { processFile } from "./process";

// Get input and output file paths from command line arguments
const inputFilePath = process.argv[2]; // First argument after the script name
const outputFilePath = process.argv[3]; // Second argument after the script name

if (!inputFilePath || !outputFilePath) {
  console.error("Usage: ts-node tetris.ts <inputFilePath> <outputFilePath>");
  process.exit(1);
}

processFile(inputFilePath, outputFilePath).catch(console.error);