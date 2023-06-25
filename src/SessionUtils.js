import Cookies from 'universal-cookie';

function getCookieManager(){
    return new Cookies();
}

function getCookieParams(){
    return {secure: true, sameSite: true};
}

export function getToken(){
    return getCookieManager().get("token", getCookieParams());
}

export function setToken(value){
    return getCookieManager().set("token", value, getCookieParams());
}

export function removeToken(){
    return getCookieManager().remove("token", getCookieParams());
}

export function request(type, uri, headers, body = {}){
    const options = {
        method: type,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(body)
    }

    headers.forEach(e => {
        options.headers[e.name] = e.value;
    })
    
    return fetch("http://localhost:3001/api/v1/user/" + uri, options)
    .then(response => {
        return response.json();
    })
}