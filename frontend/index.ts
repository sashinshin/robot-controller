

const apiCall = (
    route: string, method: string, body: string
) => {
    fetch(`http://localhost:5050/api/${route}`, {
        method,
        body
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
};


const boardButton = document.getElementById("submit-board");

boardButton?.addEventListener("click", () => {
    const width = <HTMLInputElement>document.getElementById("startWidth");
    const height = <HTMLInputElement>document.getElementById("startHeight");

    const data = `${width?.value} ${height?.value}`

    console.log(data);
    

    const res = apiCall("board", "POST", data);
    console.log(res);


});


const addRobotButton = () => {
    const robotButton = document.getElementById("submit-robot");

    robotButton?.addEventListener("click", () => {
        const width = <HTMLInputElement>document.getElementById("robotWidth");
        const height = <HTMLInputElement>document.getElementById("robotHeight");
        const direction = <HTMLInputElement>document.getElementById("robotDirection");
    
        const data = `${width?.value} ${height?.value} ${direction?.value}`
    
        console.log(data);
        
        const res = apiCall("robot", "POST", data);
        console.log(res);
    
    });
    
};

const moveButton = document.getElementById("submit-movement");

moveButton?.addEventListener("click", () => {
    const movement = <HTMLInputElement>document.getElementById("robotWidth");

    const data = movement?.value;

    console.log(data);

    const res = apiCall("move", "POST", data);
    console.log(res);


});