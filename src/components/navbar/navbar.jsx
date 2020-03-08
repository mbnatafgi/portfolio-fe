import React from 'react';
import './navbar.css';

const NavBar = (props) => {
    return ( 
        <React.Fragment>
            <div className="navbar-main">
                <a href="" className="nav-link">About</a>
                <a href="" className="nav-link resume">Resume</a>
                <a href="" className="nav-link">Contact</a>
            </div>
            <div className="grad-line"></div>
        </React.Fragment>
     );
}
 
export default NavBar;