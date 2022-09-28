
const apiCall = async (
    route: string, method: string, body: string
) => {
    const res = await fetch(`http://localhost:5050/api/${route}`, {
        method,
        body
    });

    return await res.json();
};

const addMoveButton = () => {
    const moveButton = document.getElementById("submit-movement");
    const movement = <HTMLInputElement>document.getElementById("movement");

    movement.className = "";
    movement.readOnly = false;

    moveButton?.addEventListener("click", async () => {

        const body = movement?.value;

        const res = await apiCall("move", "POST", body);

        movement.className = "greyed-out";
        movement.readOnly = true;

        const resultNode = document.getElementById("result");
        if (resultNode) {
            resultNode.innerText = `Report: ${res.width} ${res.height} ${res.directionLetter}`;
        };


    });

};

const addRobotButton = (
    boardState: any
) => {
    const robotButton = document.getElementById("submit-robot");
    const width = <HTMLInputElement>document.getElementById("robotWidth");
    const height = <HTMLInputElement>document.getElementById("robotHeight");
    const direction = <HTMLInputElement>document.getElementById("robotDirection");

    width.className = "";
    width.readOnly = false;
    width.max = boardState.width;
    height.className = "";
    height.readOnly = false
    height.max = boardState.height;
    direction.className = "";
    direction.readOnly = false;

    robotButton?.addEventListener("click", async () => {

        const body = `${width?.value} ${height?.value} ${direction?.value}`

        await apiCall("robot", "POST", body);

        width.className = "greyed-out";
        width.readOnly = true;
        height.className = "greyed-out";
        height.readOnly = true
        direction.className = "greyed-out";
        direction.readOnly = true;

        addMoveButton();

    });

};

const boardButton = document.getElementById("submit-board");

boardButton?.addEventListener("click", async () => {
    const width = <HTMLInputElement>document.getElementById("startWidth");
    const height = <HTMLInputElement>document.getElementById("startHeight");

    const body = `${width?.value} ${height?.value}`

    const res = await apiCall("board", "POST", body);

    width.className = "greyed-out";
    width.readOnly = true;
    height.className = "greyed-out";
    height.readOnly = true;

    addRobotButton(res);

});

