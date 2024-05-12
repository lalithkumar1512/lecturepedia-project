import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!phoneNumber || !password) {
            alert('Please fill in all fields.');
            return;
        }
        navigate('/');
    };

    return (
        <div>
            <div className="section over-hide padding-top-120 padding-top-mob-nav background-img-top">
                <div className="section-1400 padding-top-bottom-120">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-xl-5">
                                <div className="section py-4 py-md-5 px-3 px-sm-4 px-lg-5 over-hide border-4 section-shadow-blue bg-white background-img-top form">
                                    <form className="section">
                                        <h4 className="mb-4 text-sm-center">LOGIN</h4>
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                placeholder="Phone Number"
                                                value={phoneNumber}
                                                onChange={e => setPhoneNumber(e.target.value)}
                                                autoComplete="off" />
                                            <i className="input-icon big uil uil-phone"></i>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="password"
                                                className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                placeholder="Password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                autoComplete="off" />
                                            <i className="input-icon big uil uil-lock-alt"></i>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col pr-0">

                                            </div>
                                            <div className="col-auto align-self-center text-right pl-0">
                                                <Link to="/resetPassword" className="link link-gray-primary size-15 font-weight-500">Forgot password?</Link>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-12 text-sm-center">
                                                <button type="button" className="btn btn-dark-primary" onClick={handleSubmit}>Sign in<i className="uil uil-arrow-right size-22 ml-3"></i></button>
                                            </div>
                                        </div>
                                        <p className="mt-4 mb-0 text-sm-center size-16">
                                            Not registered? <Link to="/signUp" className="link link-dark-primary-2 link-normal">Create an account</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;