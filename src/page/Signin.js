import { getToken, request, setToken } from "../SessionUtils";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useEffect, useState } from "react";
import  { Navigate } from 'react-router-dom'

function Signin() {
    const [data, setData] = useState();
    const [clicked, setClicked] = useState(0);

    var credentials = {};
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    if(usernameField && passwordField){
        credentials.email = usernameField.value;
        credentials.password = passwordField.value;
    }

    useEffect(() =>{
        request("POST", "login", [], credentials).then(res =>{
            setData(res);
        })
    },[clicked])

    if(getToken()){
        return <Navigate to='/profile' />
    }

    if(clicked && data){
        if(data.status === 200){
            setToken(data.body.token);
            return <Navigate to='/profile' />
        }else{
            document.querySelector(".error").style.display = "inline-block";
        }
    }

    return (
    <div>
        <Header />
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" defaultValue="tony@stark.com" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" defaultValue="password123" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <p className="error">Error: wrong username or password</p>
                </form>
                <button className="sign-in-button" onClick={() => setClicked(clicked + 1)}>Sign In</button>
            </section>
        </main>
        <Footer />
    </div>
    );
}

export default Signin;
