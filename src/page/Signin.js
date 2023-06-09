import Footer from "../component/Footer";
import Header from "../component/Header";
import { useEffect, useState } from "react";

function Signin() {
    const [data, setData] = useState();

    const options = {
        method: 'POST',
        body: {
            email: "tony@stark.com",
            password: "password123"
        }
    };

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/user/login", options)
        .then(response => {
            console.log(response);
            return response.json();
        }).then(res =>{
            setData(res);
        })
    },[])

    if(data){
        console.log(data);
    }

    return (
    <div>
        <Header />
        <main class="main bg-dark">
            <section class="sign-in-content">
                <i class="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                <div class="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                
                <button class="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
        <Footer />
    </div>
    );
}

export default Signin;
