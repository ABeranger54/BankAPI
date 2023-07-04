import Cookies from 'universal-cookie';

class CookieManager {

    constructor() {
        this.cookieInstance = new Cookies();
        this.config = {secure: true, sameSite: true};
    }
    
    getToken(){
        return this.cookieInstance.get("token", this.config);
    }
    
    setToken(value){
        return this.cookieInstance.set("token", value, this.config);
    }
    
    removeToken(){
        return this.cookieInstance.remove("token", this.config);
    }
};

export default CookieManager;

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