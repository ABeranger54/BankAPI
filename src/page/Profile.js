import { getToken, request } from "../SessionUtils";
import Account from "../component/Account";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Profile() {

    const [data, setData] = useState();
    
    useEffect(() =>{
        request("POST", "profile", [{name: "Authorization", value: 'Bearer ' + getToken()}]).then(res =>{
            const r = res;
            console.log(res);
            setData(r);
        })
    },[])

    if(!getToken()){
        return <Navigate to='/signin' />
    }

    if(data){
        return (
        <div>
            <Header />
            <main className="main bg-dark" id="profile">
                <div className="header">
                    <h1>Welcome back<br />{data.body.firstName} {data.body.lastName}!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account title="Argent Bank Checking (x8349)" balance="$2,082.79" />
                <Account title="Argent Bank Savings (x6712)" balance="$10,928.42" />
                <Account title="Argent Bank Credit Card (x8349)" balance="$184.30" />
            </main>
            <Footer />
        </div>
        );
    }
}

export default Profile;

