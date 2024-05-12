import React from 'react';

function Checkout() {
    // Example state setup for form controls, expand as needed
    const [coupon, setCoupon] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [streetAddress, setStreetAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [zip, setZip] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [orderNotes, setOrderNotes] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('');

    // Handling form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submission logic, e.g., via API
        console.log("Form Submitted", { coupon, firstName, lastName, companyName, country, streetAddress, city, zip, phone, email, orderNotes, paymentMethod });
    };

    return (
        <div>
            <div className="section over-hide padding-top-120 padding-top-mob-nav padding-bottom-120 background-img-top">
                <div className="section-1400 pt-xl-4">
                    <div className="container-fluid padding-top-bottom-80">
                        <div className="row">
                            <div className="col-lg">
                                <h2 className="display-8 mb-3">
                                    Checkout
                                </h2>
                                <p className="lead mb-0 title-text-left-line-small">
                                    A clean layout for a stylish e-commerce.
                                </p>
                            </div>
                            <div className="col-lg-auto align-self-center mt-4 mt-lg-0">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb no-border">
                                        <li className="breadcrumb-item"><a href="#" className="link link-dark-primary size-14" data-hover="Home">Home</a></li>
                                        <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">Checkout</span></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-1400">
                    <div className="container-fluid">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="accordion accordion-shadow-2" id="accordionExample">
                                        <div className="card mt-4">
                                            <div className="card-header" id="headingTwo">
                                                <div className="btn-accordion collapsed" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <i className="uil uil-ticket size-22 mr-2 pr-1"></i>Have a coupon?
                                                </div>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <p className="mb-3">
                                                                If you have a coupon code, please apply it below.
                                                            </p>
                                                        </div>
                                                        <div className="col col-sm-5 col-md-4 col-lg-2 align-self-center">
                                                            <div className="form-group">
                                                                <input type="text" className="form-style text-center" placeholder="Coupon code" autoComplete="off"
                                                                    value={coupon} onChange={e => setCoupon(e.target.value)} />
                                                            </div>
                                                        </div>
                                                        <div className="pl-0 col-auto align-self-center">
                                                            <button type="button" className="btn btn-light-dark" onClick={() => console.log('Apply coupon', coupon)}>
                                                                Apply<span className="d-none d-sm-inline ml-1">coupon</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="section bg-white border-4 section-shadow-blue p-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <h6 className="mb-3">
                                                    Billing details
                                                </h6>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group mt-2">
                                                    <input type="text" className="form-style big with-border form-style-with-icon" placeholder="First name *" autoComplete="off"
                                                        value={firstName} onChange={e => setFirstName(e.target.value)} />
                                                    <i className="input-icon big uil uil-user"></i>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group mt-2">
                                                    <input type="text" className="form-style big with-border form-style-with-icon" placeholder="Last name *" autoComplete="off"
                                                        value={lastName} onChange={e => setLastName(e.target.value)} />
                                                    <i className="input-icon big uil uil-user-square"></i>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group mt-2">
                                                    <input type="text" className="form-style big with-border form-style-with-icon" placeholder="Company name (optional)" autoComplete="off"
                                                        value={companyName} onChange={e => setCompanyName(e.target.value)} />
                                                    <i className="input-icon big uil uil-building"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mt-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-style big with-border form-style-with-icon" placeholder="Country *" autoComplete="off"
                                                         value={country} onChange={e => setStreetAddress(e.target.value)} />
                                                    <i className="input-icon big uil uil-globe"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mt-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-style big with-border form-style-with-icon" placeholder="Street address *" autoComplete="off"
                                                        value={streetAddress} onChange={e => setStreetAddress(e.target.value)} />
                                                    <i className="input-icon big uil uil-map"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mt-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-style big with-border form-style-with-icon" placeholder="Town / City *" autoComplete="off"
                                                        value={city} onChange={e => setCity(e.target.value)} />
                                                    <i className="input-icon big uil uil-sign-left"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mt-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-style big with-border form-style-with-icon" placeholder="Postcode / ZIP *" autoComplete="off"
                                                        value={zip} onChange={e => setZip(e.target.value)} />
                                                    <i className="input-icon big uil uil-post-stamp"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mt-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-style big with-border form-style-with-icon" placeholder="Phone *" autoComplete="off"
                                                        value={phone} onChange={e => setPhone(e.target.value)} />
                                                    <i className="input-icon big uil uil-calling"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mt-4">
                                                <div className="form-group">
                                                    <input type="email" className="form-style big with-border form-style-with-icon" placeholder="Email address *" autoComplete="off"
                                                        value={email} onChange={e => setEmail(e.target.value)} />
                                                    <i className="input-icon big uil uil-at"></i>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <div className="form-group">
                                                    <textarea className="form-style big with-border form-style-with-icon shop-review-height" placeholder="Order notes (optional)" autoComplete="off"
                                                        value={orderNotes} onChange={e => setOrderNotes(e.target.value)}>
                                                    </textarea>
                                                    <i className="input-icon big uil uil-comment-alt-lines"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-lg-6 col-xl-4 mt-4">
                                    <div className="section bg-white border-4 section-shadow-blue p-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <h6 className="mb-3">
                                                    Your order
                                                </h6>
                                            </div>
                                            <div className="col-12">
                                                {/* Product details and totals here */}
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group text-center">
                                                    <div className="row justify-content-center">
                                                        Oder details
{/*                                                         <div className="col-6 pr-1"> */}
{/*                                                             <input className="checkbox-contact checkout" type="radio" value="Cash on Delivery" name="checkout" id="checkout-1" checked={paymentMethod === 'Cash on Delivery'} onChange={() => setPaymentMethod('Cash on Delivery')} /> */}
{/*                                                             <label className="for-checkbox-contact" htmlFor="checkout-1"> */}
{/*                                                                 <i className="uil uil-money-bill-stack"></i> */}
{/*                                                                 On delivery */}
{/*                                                             </label> */}
{/*                                                         </div> */}
{/*                                                         <div className="col-6 pl-1"> */}
{/*                                                             <input className="checkbox-contact checkout" type="radio" value="PayPal" name="checkout" id="checkout-2" checked={paymentMethod === 'PayPal'} onChange={() => setPaymentMethod('PayPal')} /> */}
{/*                                                             <label className="for-checkbox-contact" htmlFor="checkout-2"> */}
{/*                                                                 <i className="uil uil-paypal"></i> */}
{/*                                                                 PayPal */}
{/*                                                             </label> */}
{/*                                                         </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-dark-primary btn-fluid">
                                                    Place order
                                                    <i className="uil uil-arrow-right size-20 ml-2"></i>
                                                </button>
                                            </div>
                                        </div>
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

export default Checkout;
