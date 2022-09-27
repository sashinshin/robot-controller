import manualInput from "./input";
import startServer from "./server/index";

let boardState: BoardState = {
    width: 0,
    height: 0,
}

if (process.env.PORT) {
    startServer(boardState, parseInt(process.env.PORT));
} else {
    manualInput(boardState);
};


