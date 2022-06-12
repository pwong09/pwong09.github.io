import "./index.scss";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

export default function Sidebar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="nav-bar">
                <nav className="nav-container">
                    <Link className="nav-logo" to="/">PW</Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>PROJECTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </IconContext.Provider>
    )
}