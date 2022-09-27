const parseBoardInput = (
    boardInput: string
): [number, number] => {
    const input = boardInput.split(" ")
    const width = parseInt(input[0]);
    const height = parseInt(input[1]);

    if (Number.isNaN(width) || Number.isNaN(height)) {
        throw new Error("Invalid input");
    };
    if (0 >= width || 0 >= height) {
        throw new Error("Input too small");
    };

    return [width - 1, height - 1];
};

const parseStartingPositionInput = (
    startPositionInput: string,
    boardState: BoardState
): [number, number, number] => {
    const input = startPositionInput.split(" ");
    const startWidth = parseInt(input[0]);
    const startHeight = parseInt(input[1]);
    const startDirectionLetter = input[2].toLowerCase();
    console.log(input);


    if (Number.isNaN(startWidth) || Number.isNaN(startHeight)) {
        throw new Error("Invalid input");
    };
    if (0 > startWidth || 0 > startHeight) {
        throw new Error("Input too small");
    };
    if (startWidth > boardState.width || startHeight > boardState.height) {
        throw new Error("Input out of bounds");
    };

    let startDirection: number;
    switch (startDirectionLetter) {
        case "n":
            startDirection = 0;
            break;

        case "e":
            startDirection = 1;
            break;

        case "s":
            startDirection = 2;
            break;

        case "w":
            startDirection = 3;
            break;

        default:
            throw new Error("Invalid direction");

    };

    return [startWidth, startHeight, startDirection];
};

const turnDirection = (
    currentDirection: number, turn: string): number => {
    let resultDirection = turn === "r" ? currentDirection + 1 : currentDirection - 1;

    if (resultDirection === -1) {
        resultDirection = 3
    };
    if (resultDirection === 4) {
        resultDirection = 0
    };

    return resultDirection;
};

const parseMovement = (
    movement: string, boardState: any) => {
    const regex = /^[rlfRLF]+\b/g;
    if (!movement.match(regex)) {
        throw new Error("Invalid movement input");
    };

    const movementArray = Array.from(movement.toLowerCase());
    let robotPosition: RobotPosition = {
        width: boardState.robotW,
        height: boardState.robotH,
        direction: boardState.robotDirection
    };

    movementArray.forEach((input) => {
        if (input === "r" || input === "l") {
            robotPosition.direction = turnDirection(robotPosition.direction, input);

        } else {
            switch (robotPosition.direction) {
                case 0:
                    robotPosition.height -= 1;
                    break;

                case 1:
                    robotPosition.width += 1;
                    break;

                case 2:
                    robotPosition.height += 1;
                    break;

                case 3:
                    robotPosition.width -= 1;
                    break;

                default:
                    throw new Error("Invalid movement input")
            }

            if (robotPosition.width > boardState.width || robotPosition.height > boardState.height) {
                throw new Error("Robot collided with wall");
            };

        };

    });

    switch (robotPosition.direction) {
        case 0:
            robotPosition.directionLetter = "N";
            break;

        case 1:
            robotPosition.directionLetter = "E";
            break;

        case 2:
            robotPosition.directionLetter = "S";
            break;

        case 3:
            robotPosition.directionLetter = "W";
            break;

        default:
            break;
    }

    console.log(`Report: ${robotPosition.width} ${robotPosition.height} ${robotPosition.directionLetter}`);

    return robotPosition;

};

export { parseBoardInput, parseStartingPositionInput, parseMovement };
