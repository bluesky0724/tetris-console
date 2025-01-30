import * as fs from 'fs';
import * as path from 'path';
import { processFile } from './process';

describe('End-to-End Tests', () => {
    const inputFilePath = path.join(__dirname, 'test-input.txt');
    const outputFilePath = path.join(__dirname, 'test-output.txt');

    beforeAll(() => {
        // Create a test input file
        fs.writeFileSync(inputFilePath, 'O0,O2,O4,O6,O8\nL0,J2,O4,L6,J8\nT0,Z3,T5,J8\nT0,Z3,T5,O2,O8');
    });

    afterAll(() => {
        // Clean up test files
        fs.unlinkSync(inputFilePath);
        fs.unlinkSync(outputFilePath);
    });

    test('should process input file and write correct output', async () => {
        await processFile(inputFilePath, outputFilePath);

        const output = fs.readFileSync(outputFilePath, 'utf-8');
        const lines = output.trim().split('\n');

        expect(lines[0]).toBe('0');
        expect(lines[1]).toBe('2');
        expect(lines[2]).toBe('3');
        expect(lines[3]).toBe('3');
    });
});