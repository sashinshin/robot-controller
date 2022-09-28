import * as http from "http";

import { parseBoardInput, parseStartingPositionInput, parseMovement } from "../utils";


const startServer = (
    boardState: BoardState, port: number
) => {

    const server = http.createServer((req, res) => {
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET",
            "Access-Control-Max-Age": 2592000,
        };

        if (req.url === '/api/board' && req.method === 'POST') {

            let body = ''
            req.on('data', (data) => {
                body += data
                console.log('Partial body: ' + body)
            })
            req.on('end', () => {

                console.log(body);

                const [width, height] = parseBoardInput(body);
                boardState.width = width;
                boardState.height = height;

                console.log(boardState);
                res.writeHead(200, { ...headers, 'Content-Type': 'application/json' });
                res.end(JSON.stringify(boardState));
            });


        } else if (req.url === '/api/robot' && req.method === 'POST') {
            let body = ''
            req.on('data', (data) => {
                body += data
                console.log('Partial body: ' + body)
            })
            req.on('end', () => {

                console.log(body);

                const [robotW, robotH, robotDirection] = parseStartingPositionInput(body, boardState);
                boardState.robotW = robotW;
                boardState.robotH = robotH;
                boardState.robotDirection = robotDirection;
                console.log(boardState);

                res.writeHead(200, { ...headers, 'Content-Type': 'application/json' });
                res.end(JSON.stringify(boardState));
            });

        } else if (req.url === '/api/move' && req.method === 'POST') {
            let body = ''
            req.on('data', (data) => {
                body += data
                console.log('Partial body: ' + body)
            })
            req.on('end', () => {

                console.log(body);

                const movementResult = parseMovement(body, boardState);

                res.writeHead(200, { ...headers, 'Content-Type': 'application/json' });
                res.end(JSON.stringify(movementResult));
            });

        } 

    });

    server.listen(port, () => console.log(`Server running on port ${port}`))

};

export default startServer;