import "../component_css/navbar.css"
import "../component_css/layout.css"
import React from "react";
import Button,{NavBtn} from "../component/Button"
import { BrowserRouter, Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../slice/UserSlice";

function Navbar(){
    const isLogged = useSelector((state)=>state.usersInfo.loggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = async ()=>{
        // if(document.cookie.length != 0){
        const res = await fetch("http://localhost:3000/apps/api/auth.php",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                action: "logout"
            }),
            credentials: "include",
        });
        console.log(res);
        console.log(await res.json());

        if(res.status == 200){
            alert("logout Successfull");
        }else{
            alert("logout Unsuccessfull");
            return;
        }
        dispatch(logOut());

        navigate("/login");
    }
    return (    
    <header className="navbar container-fluid m-0 p-0">
        <nav className="container-fluid row d-flex flex-5">
            <div className="brand col-lg-6 d-flex flex-4 m-0 p-0 ps-5">React Pro</div>
            <ul className="container-fluid col-lg-6 d-flex justify-content-center gap-4 align-items-center m-0 p-0">
                <NavBtn path="/" name="Home" />
                <NavBtn path="/user" name="User" />
                <NavBtn path="/achievement" name="Achievement" />
                <NavBtn path="/service" name="Service" />
                <NavBtn path="/contact" name="Contact" /> 
                {isLogged && 
                <>
  
                    <button onClick={logout} className="btn btn-warning">Logout</button>                 
                </>
                }
                {!isLogged && 
                <>
                    <NavBtn path="/login" name="Login" />
                    <NavBtn path="/register" name="Sign up" />
                </>}
            </ul>

        </nav>
    </header>

    )

}

export default Navbar;