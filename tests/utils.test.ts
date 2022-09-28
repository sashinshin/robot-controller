import { parseBoardInput, parseStartingPositionInput, parseMovement } from "../utils";


describe("1. Testing board input functionality", () => {

    it("1.1 Working board input", () => {
        // GIVEN
        const input = "5 5"

        // WHEN
        const [width, height] = parseBoardInput(input);

        // THEN
        expect(width).toBe(4);
        expect(height).toBe(4);

    });

    it("1.3 Invalid input, should throw", () => {
        // GIVEN
        const input = "5 a"

        // WHEN
        const result = () => parseBoardInput(input);

        // THEN
        expect(result).toThrow("Invalid input");

    });

    it("1.2 Input too small, should throw", () => {
        // GIVEN
        const input = "5 0"

        // WHEN
        const result = () => parseBoardInput(input);

        // THEN
        expect(result).toThrow("Input too small");

    });


});

describe("2. Testing starting position functionality", () => {

    it("2.1 Working start position input", () => {
        // GIVEN
        const input = "1 2 N"
        const boardState: BoardState = {
            height: 5,
            width: 5
        }

        // WHEN
        const [startWidth, startHeight, startDirection] = parseStartingPositionInput(input, boardState);

        // THEN
        expect(startWidth).toBe(1);
        expect(startHeight).toBe(2);
        expect(startDirection).toBe(0);
    });

    it("2.2 Invalid input, should throw", () => {
        // GIVEN
        const input = "a 2 N"
        const boardState: BoardState = {
            height: 5,
            width: 5
        }

        // WHEN
        const result = () => parseStartingPositionInput(input, boardState);

        // THEN
        expect(result).toThrow("Invalid input");

    });

    it("2.3 Input too small, should throw", () => {
        // GIVEN
        const input = "5 -1 N"
        const boardState: BoardState = {
            height: 1,
            width: 1
        }

        // WHEN
        const result = () => parseStartingPositionInput(input, boardState);

        // THEN
        expect(result).toThrow("Input too small");

    });

    it("2.4 Input out of bounds, should throw", () => {
        // GIVEN
        const input = "5 5 N"
        const boardState: BoardState = {
            height: 5,
            width: 4
        }

        // WHEN
        const result = () => parseStartingPositionInput(input, boardState);

        // THEN
        expect(result).toThrow("Input out of bounds");

    });

    it("2.4 Invalid direction, should throw", () => {
        // GIVEN
        const input = "5 5 Q"
        const boardState: BoardState = {
            height: 5,
            width: 5
        }

        // WHEN
        const result = () => parseStartingPositionInput(input, boardState);

        // THEN
        expect(result).toThrow("Invalid direction");

    });
});

describe("3. Testing movement parsing fucntionality", () => {

    it("3.1 Correct movement", () => {
        // GIVEN
        const input = "RFRFFRFRF"
        const boardState: BoardState = {
            width: 4,
            height: 4,
            robotW: 1,
            robotH: 2,
            robotDirection: 0,
        };

        // WHEN
        const result = parseMovement(input, boardState);

        // THEN
        expect(result).toEqual({ width: 1, height: 3, direction: 0, directionLetter: "N" });

    });

    it("3.2 Invalid movement input, should throw", () => {
        // GIVEN
        const input = "RFRFFQQQRFRF"
        const boardState: BoardState = {
            width: 4,
            height: 4,
            robotW: 1,
            robotH: 2,
            robotDirection: 0,
        };

        // WHEN
        const result = () => parseMovement(input, boardState);

        // THEN
        expect(result).toThrow("Invalid movement input");

    });

    it("3.3 Robot collied with wall, should throw", () => {
        // GIVEN
        const input = "FFFFFFFFFFF"
        const boardState: BoardState = {
            width: 4,
            height: 4,
            robotW: 1,
            robotH: 2,
            robotDirection: 0,
        };

        // WHEN
        const result = () => parseMovement(input, boardState);

        // THEN
        expect(result).toThrow("Robot collided with wall");

    });
});