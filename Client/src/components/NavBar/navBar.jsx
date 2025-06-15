import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './navBar.scss';
// import {browser}

function Navbar() {
    return (
    <Fragment>
        <header className="nav">
            <nav className="nav-items">
                <ul>
                    <Link to='/'>
                    <li>home</li>
                    </Link>
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
                    <span></span>
                </ul>
            </nav>
        </header>
        <Outlet />
        </Fragment>
    );
}

export default Navbar;