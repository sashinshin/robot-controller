import * as http from "http";

import { parseBoardInput, parseStartingPositionInput, parseMovement } from "../utils";


const startServer = (
    boardState: BoardState, port: number
) => {
    console.log(boardState);
    console.log(port);
    
    const server = http.createServer((req, res) => {

        if (req.url === '/api/positions' && req.method === 'POST') {
            const [width, height] = parseBoardInput(line);
            boardState.width = width;
            boardState.height = height;
            console.log(boardState);
        } else if (req.url === '/api/products' && req.method === 'POST') {

        }

    });

    server.listen(port, () => console.log(`Server running on port ${port}`))

};

export default startServer;