import "../component_css/navbar.css"
import "../component_css/layout.css"
import React from "react";
import Button,{NavBtn} from "../component/Button"
import { BrowserRouter, Link, NavLink } from "react-router-dom";

function Navbar(){
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
                <NavBtn path="/login" name="Login" />
                <NavBtn path="/register" name="Sign up" />
            </ul>

        </nav>
    </header>

    )

}

export default Navbar;