import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
    <>
        {isLoggedIn ?
            <>
                <ul className="navbar-nav mr-xl-4 ml-auto pt-4 pt-xl-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link">Home</a>
                        <div className="dropdown-content">
                            <Link className="dropdown-item animsition-link" to="/home-landing-1">Landing page 1</Link>
                            <Link className="dropdown-item animsition-link" to="/home-landing-2">Landing page 2</Link>
                            <Link className="dropdown-item animsition-link" to="/home-creative-1">Creative layout 1</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link">Shop</a>
                        <div className="dropdown-content">
                            <Link className="dropdown-item animsition-link" to="/shop-4-col">4 columns</Link>
                            <Link className="dropdown-item animsition-link" to="/shop-3-col-full">3 columns full width</Link>
                            <Link className="dropdown-item animsition-link" to="/shop-2-col-full">2 columns full width</Link>
                            <Link className="dropdown-item animsition-link" to="/shop-1-col-full">1 column full width</Link>
                            <Link className="dropdown-item animsition-link" to="/product-1">Product v1</Link>
                            <Link className="dropdown-item animsition-link" to="/wishlist">Wishlist</Link>
                            <Link className="dropdown-item animsition-link" to="/cart">Shopping cart</Link>
                            <Link className="dropdown-item animsition-link" to="/checkout">Checkout</Link>
                        </div>
                    </li>
                </ul>
            </>
            :
            <ul className="navbar-nav mr-xl-4 ml-auto pt-4 pt-xl-0">
                <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SignUp</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</a>
                </li>
            </ul>
        }
    </>
    );
}

export default Nav;
