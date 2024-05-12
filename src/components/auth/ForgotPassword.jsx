import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validatePassword = (password) => {
         const re = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
         return re.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phoneNumber || !otp || !password) {
            alert('Please fill in all fields.');
            return;
        }
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and include at least one number and one special character');
            return;
        }
        if(confirmPassword != password){
            alert("Passwords doesn't match");
            return;
        }
        navigate('/login');

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
                                        <h4 className="mb-4 text-sm-center">Reset Password</h4>
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
                                            <input type="text"
                                                className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                placeholder="Enter OTP"
                                                value={otp}
                                                onChange={e => setOtp(e.target.value)}
                                                autoComplete="off" />
                                            <i className="input-icon big uil uil-ellipsis-h"></i>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="password"
                                                className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                placeholder="Password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                autoComplete="off" />
                                            <i className="input-icon big uil uil-unlock-alt"></i>
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="password"
                                            className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                            placeholder="Confirm Password" autoComplete="off"
                                            value={confirmPassword}
                                            onChange={e => setConfirmPassword(e.target.value)}
                                            />
                                            <i className="input-icon big uil uil-lock-alt"></i>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col pr-0">
                                            </div>
                                            <div className="col-auto align-self-center text-right pl-0">
                                                <button className=" resend-btn link link-gray-primary size-15 font-weight-500">Resend OTP</button>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-12 text-sm-center">
                                                <button type="button" className="btn btn-dark-primary" onClick={handleSubmit}>Reset Password</button>
                                            </div>
                                        </div>
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

export default ForgotPassword;