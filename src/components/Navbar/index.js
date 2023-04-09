import "./index.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <IconContext.Provider value={{ color: '#FDB833' }}>
      <div className="nav-bar">
        <nav className="nav-container">
          <Link to="/" className="menu-icon-home nav-logo" tabIndex={-1}>
            <button aria-label="home" className="nav-logo"><FaHome /></button>
          </Link>
          <button aria-label="menu" className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <Link to="/about" className="nav-item nav-links" onClick={closeMobileMenu} tabIndex={-1}>
              <button className="nav-button">ABOUT</button>
            </Link>
            <Link to="/projects" className="nav-item nav-links" onClick={closeMobileMenu} tabIndex={-1}>
              <button className="nav-button">PROJECTS</button>
            </Link>
            <Link to="/contact" className="nav-item nav-links" onClick={closeMobileMenu} tabIndex={-1}>
              <button className="nav-button">CONTACT</button>
            </Link>
          </div>
        </nav>
      </div>
    </IconContext.Provider>
  )
}