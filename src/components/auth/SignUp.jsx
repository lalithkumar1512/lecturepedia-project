import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    const [courses, setCourses] = useState([]);
    const [courseLevels, setCourseLevels] = useState([]);


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

    const handleVerify = async (e) => {
        e.preventDefault();
        if (validatePhoneNumber(phoneNumber)) {
            setPhoneNumberVerified(true);
            try {
                const response = await axios.post(`http://13.60.23.204:9000/api/ga/v1/auth/sendOtp`, {
                  phoneNumber: phoneNumber
                }).then(response => {
                  console.log(response);
                })
              } catch (error) {
                console.error('Error sending OTP (Enter valid phone number) ');
              }            
            alert('Phone number verified successfully! An OTP is sent to your Phone Number');
        } else {
            alert('Please enter a valid 10-digit phone number.');
        }
    }

    useEffect(() => {
    axios.get(`http://13.60.23.204:9000/api/ga/v1/course/type`)
      .then(response => {
        // Extracting data from the response and storing in an array
        const courseData = response.data.data.map(course => ({
            id: course._id,
            name: course.courseType
            }));
            setCourses(courseData);  
        })
        .catch(error => {
            console.error('Error fetching course data:', error);
        });
    }, []);

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
        let data = JSON.stringify({
            "name": username,
            "phoneNumber": phoneNumber,
            "mail": mail,
            "city": city,
            "courseType": getCourseNameById(courseType),
            "courseLevel": courseLevel,
            "password": password,
            "otp": otp
          });
          
          console.log(data);
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `http://13.60.23.204:9000/api/ga/v1/auth/signup`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
              const token = response.data.token; 
              localStorage.setItem('token', token);
            console.log(JSON.stringify(response.data));
            navigate('/');
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
    };

    const getCourseNameById = (courseId) => {
        const course = courses.find(course => course.id === courseId);
        return course ? course.name : 'Unknown';
      };
    
      const handleCourseTypeChange = (event) => {
        const selectedCourseTypeId = event.target.value;
        axios.get(`http://13.60.23.204:9000/api/ga/v1/course/type/${selectedCourseTypeId}/courseLevel`)
          .then(response => {
            const levels = response.data.data.map(level => ({
              id: level.courseLevelId,
              name: level.courseLevelName
            }));
            setCourseLevels(levels);
          })
          .catch(error => {
            console.error('Error fetching course levels:', error);
          });
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
                                                        onChange={e => setCourseType(e.target.value)&&handleCourseTypeChange}
                                                    >
                                                        <option value="">Course Type</option>
                                                        {courses.map(course => (
                                                            <option key={course.id} value={course.id}>{course.name}</option>
                                                        ))}
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
                                                        <option value="FOUNDATION">FOUNDATION</option>
                                                        <option value="INTERMEDIATE">INTERMEDIATE</option>
                                                        <option value="FINAL">FINAL</option>
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
                                                    Already registered? <Link to="/login" className="link link-dark-primary-2 link-normal"> Sign in </Link>
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
