import React from 'react';
import "./NavBar.css";
import Logo from "../../Vectors and images/Vector-logo-main.png";

 
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-#fff">
            <div className="container">
            
                <a className="navbar-brand" href="#"><img src={Logo} alt="MacCX"></img>Mac<b>CX</b></a>
                <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav links">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                        <li className="nav-item">
                            <button>
                                <a className="nav-link" href="#">Sign In</a>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button>    
                                <a className="nav-link" href="#">Sign Up</a>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;
