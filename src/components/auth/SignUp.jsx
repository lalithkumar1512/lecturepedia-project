import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberVerified, setPhoneNumberVerified] = useState(false);
    const [mail, setMail] = useState('');
    const [city, setCity] = useState('');
    const [courseType, setCourseType] = useState('');
    const [courseLevel, setCourseLevel] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);


    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhoneNumber = (number) => {
        const re = /^\d{10}$/;
        return re.test(number);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
        return re.test(password);
    };

    const handleVerify = (e) => {
        e.preventDefault();
        if (validatePhoneNumber(phoneNumber)) {
            setPhoneNumberVerified(true);
            alert('Phone number verified successfully! An OTP is sent to your Phone Number');
        } else {
            alert('Please enter a valid 10-digit phone number.');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !phoneNumber || !mail || !city || !courseType || !courseLevel || !password) {
            alert('Please fill in all fields.');
            return;
        }
        if (!phoneNumberVerified) {
            alert('Verify your Phone Number to get an otp');
            return;
        }
        if (!validateEmail(mail)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and include at least one number and one special character');
            return;
        }
        if (!otp) {
            alert('Enter otp received on your Phone Number');
            return;
        }
        if (!termsAccepted) {
            alert("Please accept the terms and conditions to proceed.");
            return;
        }
        console.log('Form Submitted', { username, mail, password });
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
                                    <form>
                                        <h4 className="mb-4 text-sm-center">SIGN UP</h4>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                        placeholder="Username"
                                                        value={username}
                                                        onChange={e => setUsername(e.target.value)}
                                                    />
                                                    <i className="input-icon big uil uil-user"></i>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="form-group phoneNumber">
                                                    <input
                                                        type="text"
                                                        className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                        placeholder="Phone Number"
                                                        value={phoneNumber}
                                                        onChange={e => setPhoneNumber(e.target.value)}
                                                    />
                                                    <i className="input-icon big uil uil-phone"></i>
                                                </div>
                                            </div>
                                            <div className="mt-2 verify-number">
                                                <button className="btn btn-dark-primary" onClick={handleVerify}>
                                                    Verify
                                                </button>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                        placeholder="Email"
                                                        value={mail}
                                                        onChange={e => setMail(e.target.value)}
                                                    />
                                                    <i className="input-icon big uil uil-at"></i>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                        placeholder="City"
                                                        value={city}
                                                        onChange={e => setCity(e.target.value)}
                                                    />
                                                    <i className="input-icon big uil uil-location-point"></i>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="section form-group ">
                                                    <select className="wide form-select form-style big gray-version form-style-with-icon no-shadow section-shadow-blue"
                                                        value={courseType}
                                                        onChange={e => setCourseType(e.target.value)}
                                                    >
                                                        <option value="">Course Type</option>
                                                        <option value="Front End Developer">Front End Developer</option>
                                                        <option value="Back End Developer">Back End Developer</option>
                                                    </select>
                                                    <i className="input-icon big uil uil-book-open"></i>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="section form-group ">
                                                    <select className="wide form-select form-style big gray-version form-style-with-icon no-shadow section-shadow-blue"
                                                        value={courseLevel}
                                                        onChange={e => setCourseLevel(e.target.value)}
                                                        style={{
                                                            width: '100%',
                                                            boxSizing: 'border-box',
                                                        }}
                                                    >
                                                        <option value=""
                                                            style={{width: '100%', color: 'black',}}>Course Level</option>
                                                        <option value="Front End Developer">Front End Developer</option>
                                                        <option value="Back End Developer">Back End Developer</option>
                                                    </select>
                                                    <i className="input-icon big uil uil-signal-alt-3"></i>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
                                                    />
                                                    <i className="input-icon big uil uil-lock-alt"></i>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-style big gray-version no-shadow form-style-with-icon section-shadow-blue"
                                                        placeholder="Enter OTP"
                                                        value={otp}
                                                        onChange={e => setOtp(e.target.value)}
                                                    />
                                                    <i className="input-icon big uil uil-ellipsis-h"></i>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-3 text-sm-center">
                                                <div className="form-group">
                                                    <input
                                                        type="checkbox"
                                                        id="checkbox-1"
                                                        checked={termsAccepted}
                                                        onChange={e => setTermsAccepted(e.target.checked)}
                                                    />
                                                    <label className="checkbox mb-0 font-weight-500 size-15" htmlFor="checkbox-1">
                                                        I accept the <button type="button" className="btn-link terms" onClick={() => alert('Show Terms and Conditions')}>Terms and Conditions</button> and <button type="button" className="btn-link terms" onClick={() => alert('Show Privacy Policy')}>Privacy Policy</button>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-4 text-sm-center">
                                                <button type="submit" className="btn btn-dark-primary" onClick={handleSubmit}>
                                                    Create account<i className="d-none d-sm-inline uil uil-arrow-right size-22 ml-3"></i>
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="mt-4 mb-0 text-sm-center size-16">
                                                    Already registered? <Link to="/signUp" className="link link-dark-primary-2 link-normal"> Sign in </Link>
                                                </p>
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

export default SignUp;
