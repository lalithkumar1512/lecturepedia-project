import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1199);
    const updateMedia = () => {
        setIsLargeScreen(window.innerWidth > 1199);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    const handleDropdown = (event, toggle) => {
        if (isLargeScreen) {
            const dropdown = event.currentTarget.parentNode;
            dropdown.classList.toggle('show', toggle);
        }
    };

    const handleSubMenu = (event) => {
        if (!isLargeScreen) {
            event.preventDefault();
            const subMenu = event.currentTarget.nextElementSibling;
            const parentLi = event.currentTarget.parentNode;
            if (subMenu) {
                subMenu.classList.toggle('show');
                parentLi.classList.toggle('show');
            }
        }
    };

    return (
        <div className="navigation-wrap cbp-af-header header-transparent">
            <div className="padding-on-scroll">
                <div className="section-1400">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-xl navbar-light">
                                    <a className="navbar-brand animsition-link" href="index.html"><img src="img/logo.png" alt="logo" /></a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-xl-4 ml-auto pt-4 pt-xl-0">
                                            <li className="nav-item dropdown" onMouseEnter={(e) => handleDropdown(e, true)} onMouseLeave={(e) => handleDropdown(e, false)}>
                                                <a className="nav-link" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                                                <div className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a className="dropdown-item animsition-link" href="shop-4-col.html">4 columns</a>
                                                    </li>
                                                    {/* Example for nested dropdown */}
                                                    <li className="nav-item dropdown-2">
                                                        <a className="dropdown-item drop-left-sub dropdown-sub" onClick={handleSubMenu} href="#">3 columns</a>
                                                        <div className="dropdown-menu drop-left-sub">
                                                            {/* Nested Items */}
                                                        </div>
                                                    </li>
                                                    {/* Continue with other items */}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
