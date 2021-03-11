export function GetAsync(apiUrl) {

    console.log(apiUrl);
    return fetch(apiUrl)
        .then(response => response.json())
        .catch(() => console.log("Can’t access  response from " + apiUrl))
}

export async function PostAsync (uri, data) {

    console.log("sending to " + uri);
    console.log("sending data " + JSON.stringify(data));
    await postData(uri, data).then(data => {
        console.log(data)}
    );

}
export async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
