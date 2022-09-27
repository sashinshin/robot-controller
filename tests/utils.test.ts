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
});