import React, { useState } from 'react';

function Contact() {
    const [contactInfo, setContactInfo] = useState({
        subject: 'General',
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setContactInfo(prevState => ({
            ...prevState,
            [name]: type === 'radio' ? value : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);
        alert('Message sent! Check the console for data.');
    };

    return (
        <div className="contact">
            <div className="section over-hide padding-top-120 padding-top-mob-nav z-bigger">
                <div className="container-fluid padding-top-bottom-80">
                    <div className="row">
                        <div className="col-lg">
                            <h2 className="display-8 mb-3">Contact</h2>
                            <p className="lead mb-0 title-text-left-line-small">Get in touch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section padding-bottom-120">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <form onSubmit={handleSubmit} className="w-100">
                            <div className="col-xl-6">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 mt-3 px-2">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-style big form-style-with-icon section-shadow-blue"
                                                placeholder="Full Name"
                                                id="contactname"
                                                autoComplete="off"
                                                value={contactInfo.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-3 px-2">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-style big form-style-with-icon section-shadow-blue"
                                                placeholder="Your Email"
                                                id="contactemail"
                                                autoComplete="off"
                                                value={contactInfo.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3 px-2">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                className="form-style big form-style-with-icon form-textarea section-shadow-blue"
                                                placeholder="Message"
                                                id="contactmessage"
                                                autoComplete="off"
                                                rows="5"
                                                value={contactInfo.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center text-xl-left pt-4 px-2">
                                        <button type="submit" className="btn btn-dark-primary">
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
