// import "./Sidebar.scss";
import React from "react";
import {Link, NavLink} from "react-router-dom";
import MyLogo from "../../assets/logo/logo.png"
// import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"


export default function Sidebar() {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img width="50px" height="50px" src={MyLogo} alt="logo" />
            </Link>
            <nav>

            </nav>
        </div>
    )
}