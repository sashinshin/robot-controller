const parseBoardInput = (
    boardInput: string
): [number, number] => {
    const width = parseInt(boardInput[0]);
    const height = parseInt(boardInput[2]);
    // make parsing better

    if (typeof width !== "number" || typeof height !== "number") {
        throw new Error("invalid input");
        // check not negative, not 0
    };

    return [width - 1, height - 1];
};

const parseStartingPositionInput = (
    startPositionInput: string
): [number, number, number] => {

    const startWidth = parseInt(startPositionInput[0]);
    const startHeight = parseInt(startPositionInput[2]);
    const startDirectionLetter = startPositionInput[4].toLowerCase();

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
            throw new Error("invalid direction")

    }

    // error check, have to be within span boardstate w/h
    // dir have to be n, s, e, w

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
    move: string, boardState: any) => {
    // regex parse movement
    const moveArr = Array.from(move.toLowerCase());
    let movement = { w: boardState.robotW, h: boardState.robotH, d: boardState.robotDirection };
    console.log(movement);

    moveArr.forEach((input) => {
        if (input === "r" || input === "l") {
            movement.d = turnDirection(movement.d, input);
        } else {
            switch (movement.d) {
                case 0:
                    movement.h -= 1;
                    break;
                case 1:
                    movement.w += 1;
                    break;
                case 2:
                    movement.h += 1;

                    break;
                case 3:
                    movement.w -= 1;

                    break;

                default:
                    break;
            }
        };
        console.log(movement);


    });

    // error check w/h within boardspace
    // parse direction
    console.log("Result:");

    console.log(movement);

    return movement;

};

export {parseBoardInput, parseStartingPositionInput, parseMovement}