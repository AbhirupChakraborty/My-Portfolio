import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="./assets/images/logo.png" alt=""/>

                <ul>
                    <li>
                        <a className="menu-item">Home</a>
                    </li>
                    <li>
                        <a className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a className="menu-item">Contact Me</a>
                    </li>
                    <button className="contact-btn" onClick={()=>{}}>
                        Hire Me
                    </button>
                </ul>
                <button className="menu-btn" onClick={()=>{}}>
                    <div className="menu-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
            </div>
        </nav>
    </>
  );
};

export default Navbar