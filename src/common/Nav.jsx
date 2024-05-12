import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <>
            {isLoggedIn ? (
                <ul className="navbar-nav mr-xl-4 ml-auto pt-4 pt-xl-0">
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link">Courses</Link>
                        <div className="dropdown-content">
                            <div className="dropdown-item animsition-link">
                                <Link className="dropdown-item" to="/shop-4-col">4 columns</Link>
                                <div className="nested-dropdown-content">
                                    <Link className="dropdown-item" to="/detail-1">Option 1</Link>
                                    <Link className="dropdown-item" to="/detail-2">Option 2</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/">MCQ's</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/blog">Updates</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to="/">Contact us</Link>
                    </li>
                </ul>
            ) : (
                <ul className="navbar-nav mr-xl-4 ml-auto pt-4 pt-xl-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link">SignUp</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link">Login</a>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Nav;
