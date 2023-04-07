import "./index.scss";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import { FaBars, FaTimes, FaHome } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <IconContext.Provider value={{ color: '#FDB833'}}>
            <div className="nav-bar">
                <nav className="nav-container">
                    <Link to="/" className="menu-icon-home">
                      <button className="nav-logo"><FaHome /></button>
                    </Link>
                    <button className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </button>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to="/about" className="nav-item nav-links" onClick={closeMobileMenu}>
                          <button className="nav-button">ABOUT</button>
                        </Link>
                        <Link to="/projects" className="nav-item nav-links" onClick={closeMobileMenu}>
                          <button className="nav-button">PROJECTS</button>
                        </Link>
                        <Link to="/contact" className="nav-item nav-links" onClick={closeMobileMenu}>
                          <button className="nav-button">CONTACT</button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </IconContext.Provider>
    )
}