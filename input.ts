import * as readline from "readline";
import { stdin, stdout } from 'node:process';

import { parseBoardInput, parseStartingPositionInput, parseMovement } from "./utils";

const manualInput = (
    boardState: BoardState) => {
    const rl = readline.createInterface({
        input: stdin,
        output: stdout
    });

    rl.once('line', line => {
        const [width, height] = parseBoardInput(line);
        boardState.width = width;
        boardState.height = height;
        console.log(boardState);

        rl.once('line', line => {
            const [robotW, robotH, robotDirection] = parseStartingPositionInput(line, boardState);

            boardState.robotW = robotW;
            boardState.robotH = robotH;
            boardState.robotDirection = robotDirection;
            console.log(boardState);

            rl.once('line', line => {
                parseMovement(line, boardState);
                rl.close();
            });
        });
    });

};

export default manualInput;
