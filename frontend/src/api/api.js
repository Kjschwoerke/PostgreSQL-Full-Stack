export const BASE_URL = 'http://localhost:5000/api/tutorials';

export const getData = async (url) => {
    return fetch (url)
     .then(res => res.json())
}

export const postData = async (url, data) => {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
}   