import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import Nav from "./Nav"

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartModalShow, setCartModalShow] = useState(false);
    const [searchModalShow, setSearchModalShow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
    const toggleCartModal = () => setCartModalShow(!cartModalShow);
    const toggleSearchModal = () => setSearchModalShow(!searchModalShow);

    return (
        <div>
            <div className="navigation-wrap cbp-af-header header-transparent">
                <div className="padding-on-scroll">
                    <div className="section-1400">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <nav className="navbar navbar-expand-xl navbar-primary">
                                        <Link className="navbar-brand animsition-link" to="/">
{/*                                             <img src={logo} alt="logo" /> */}
                                        </Link>
                                        <button className="navbar-toggler" type="button" onClick={toggle}>
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                            <Nav />
                                        </div>
                                        {isLoggedIn ?
                                            <>
                                                <a href="#" className="btn btn-icon-transparent btn-44 mt-4 mt-xl-0">
                                                    <i className="uil uil-heart size-20 color-white"></i>
                                                </a>
                                                <a href="#" className="btn btn-icon-transparent btn-44 mt-4 mt-xl-0 position-relative" onClick={toggleCartModal}>
                                                    <i className="uil uil-cart size-20 color-white"></i>
                                                </a>
                                                <a href="#" className="btn btn-icon-transparent btn-44 mt-4 mt-xl-0" onClick={toggleSearchModal}>
                                                    <i className="uil uil-search size-20 color-white"></i>
                                                </a>
                                            </> :
                                            <>
                                            </>
                                        }

                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search */}
            {searchModalShow && (
                <div className="modal fade modal-search show" style={{ display: 'block' }} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content bg-dark-blue">
                            <div className="modal-body z-bigger d-flex justify-content-center align-items-center">
                                <button type="button" className="close" onClick={toggleSearchModal}>
                                    <i className="uil uil-multiply"></i>
                                </button>
                                <div className="form-group">
                                    <input type="text" className="form-style search" placeholder="Search..." autoComplete="off" />
                                </div>
                                <p className="mb-0 mt-4 text-center color-gray-dark font-weight-500">Start typing & press "Enter" or "ESC" to close</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal Cart */}
            {cartModalShow && (
                <div className="modal fade modal-cart show" style={{ display: 'block' }} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content bg-dark-blue">
                            <div className="modal-body z-bigger">
                                <button type="button" className="close" onClick={toggleCartModal}>
                                    <i className="uil uil-multiply"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
