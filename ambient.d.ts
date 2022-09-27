interface BoardState {
    width: number
    height: number
    robotW?: number
    robotH?: number
    robotDirection?: number
}

interface RobotPosition {
    width: number
    height: number
    direction: number
    directionLetter?: string
}