import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="section  padding-top pb-4 footer" id="footer">
                <div className=""></div>
                <div className="section-1400 z-bigger">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 col-lg-6 mb-5 mb-md-0 text-center text-md-left footer-logo">
                                <div className="row justify-content-center justify-content-md-start">
{/*                                     <div className="col-auto"> */}
{/*                                         <img src="img/logo.png" alt="logo" /> */}
{/*                                     </div> */}
                                    <div className="col-auto pl-0 align-self-center">
                                        <h3 className="mb-0 color-light-2 font-weight-800">LECTUREPEDIA</h3>
                                    </div>
                                    <div className="col-12 pl-xl-5 mt-5 align-self-center">
                                        <p className="mb-1 size-17 text-center-v color-light"><i className="uil uil-map-marker-alt size-20 mr-3 color-white"></i> Address line 1</p>
                                        <div className="clearfix w-100"></div>
                                        <p className="mb-0 size-17 text-center-v color-light"><i className="uil uil-clock-seven size-20 mr-3 color-primary"></i> Address line 2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 mb-5 mb-md-0 text-center text-md-left">
                                <h5 className="mb-4 color-white">Company</h5>
                                <a href="about-us-creative.html" className="link link-gray size-18 mb-1 animsition-link" data-hover="About Us">About Us</a>
                                <div className="clearfix w-100"></div>
                                <a href="team.html" className="link link-gray size-18 mb-1 animsition-link" data-hover="Team Members">Team Members</a>
                                <div className="clearfix w-100"></div>
                                <a href="contact-1.html" className="link link-gray size-18 animsition-link" data-hover="Contact Us">Contact Us</a>
                            </div>
                            <div className="col-md-4 col-lg-3 text-center text-md-left">
                                <h5 className="mb-4 color-white">Contact</h5>
                                <a href="" className="link link-gray size-18 mb-1">+33(0)1 43 65 79 19</a>
                                <div className="clearfix w-100"></div>
                                <a href="" className="link link-gray size-18 mb-1" >+38(0)6 34 62 54 77</a>
                                <div className="clearfix w-100"></div>
                                <a href="" className="link link-gray size-20 mb-1">lecturepedia@gmail.com</a>
                            </div>
                            <div className="col-12 mt-5 mb-4">
                                <div className="section divider divider-light"></div>
                            </div>
                        </div>
                        <div className="row text-center text-md-left">
                            <div className="col-md order-md-first">
                                <p className="mb-0 size-14 color-gray-dark mt-1 font-weight-500">© 2024. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
