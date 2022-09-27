const apiCall = (
    route: string, method: string, body: string
) => {
    fetch(`https://localhost::5050/api/${route}`, {
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
}

export default apiCall;