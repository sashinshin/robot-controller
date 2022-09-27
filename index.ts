import manualInput from "./input";
import startServer from "./server/index";

let boardState: BoardState = {}

if (process.env.PORT) {
    startServer(boardState, parseInt(process.env.PORT));
} else {
    manualInput(boardState);
};





