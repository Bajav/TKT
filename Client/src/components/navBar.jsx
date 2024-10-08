import React from "react";
import { Link } from "react-router-dom";
// import {browser}

function Navbar() {
    return (
        <header className="nav">
            <nav className="nav-items">
                <ul>
                    <Link to='/places'>
                    <li>places</li>
                    </Link>
                    <Link to='/flights'>
                    <li>flights</li>
                    </Link>
                    <Link to='/hotels'>
                    <li>hotels</li>
                    </Link>
                    <Link to='/packages'>
                    <li>packages</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;