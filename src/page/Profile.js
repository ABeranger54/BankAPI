import { useDispatch, useSelector } from "react-redux";
import { request } from "../SessionUtils";
import Account from "../component/Account";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import CookieManager from "../SessionUtils"

function Profile() {

    const dispatch = useDispatch();
    const manager = new CookieManager();

    useEffect(() =>{
        request("POST", "profile", [{name: "Authorization", value: 'Bearer ' + manager.getToken()}]).then(res =>{
            dispatch({type: "fetchData", payload: {data: res.body}});
        })
    },[])

    const data = useSelector((state) => state.fetchData);

    if(!manager.getToken()){
        return <Navigate to='/signin' />
    }

    if(data){
        return (
        <div>
            <Header />
            <main className="main bg-dark" id="profile">
                <div className="header">
                    <h1>Welcome back<br /></h1>
                    <div id="showName">
                        <h2>{data.firstName} {data.lastName}!</h2>
                        <button className="edit-button" onClick={() => editName()}>Edit Name</button>
                    </div>
                    <div id="editName">
                        <div className="inputs">
                            <input type="text" id="fName" name="fName" placeholder={data.firstName} />
                            <input type="text" id="lName" name="lName" placeholder={data.lastName} />
                        </div>
                        <div>
                            <button className="save-button" onClick={() => save()}>Save</button>
                            <button className="cancel-button" onClick={() => closeEdit()}>Cancel</button>
                        </div>
                    </div>
                    
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

    function editName(){
        document.getElementById("showName").style.display = "none";
        document.getElementById("editName").style.display = "inline-block";
    }

    function save(){
        const fName = document.getElementById("fName").value;
        const lName = document.getElementById("lName").value;
        if(!fName || !lName) return;
        const bodyParams = {firstName: fName, lastName: lName};
        request("PUT", "profile", [{name: "Authorization", value: 'Bearer ' + manager.getToken()}], bodyParams);
        dispatch({type: "fetchData", payload: {data: {...data, firstName: fName, lastName: lName}}});
        closeEdit();
    }

    function closeEdit(){
        document.getElementById("fName").value = "";
        document.getElementById("lName").value = "";
        document.getElementById("showName").style.display = "inline-block";
        document.getElementById("editName").style.display = "none";
    }
}

export default Profile;

