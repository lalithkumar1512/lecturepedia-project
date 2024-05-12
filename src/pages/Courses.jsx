import React from 'react';
import { Link } from 'react-router-dom';
import course from "../assets/img/project-24.jpg"

function Courses() {
    return (
        <div>
            <div className="section over-hide padding-top-120 padding-top-mob-nav pb-5 section-background-20 background-img-top">
                <div className="section-1400 pt-xl-4">
                    <div className="container-fluid padding-top-bottom-80">
                        <div className="row">
                            <div className="col-lg">
                                <h2 className="display-8 mb-3">Courses</h2>
                                <p className="lead mb-0 title-text-left-line-small">CA Foundation</p>
                            </div>
                            <div className="col-lg-auto align-self-center mt-4 mt-lg-0">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb no-border">
                                        <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">CA</span></li>
                                        <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">Foundation</span></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-1400">
                    <div className="container-fluid">
                        <div className="row shop-mix-wrapper-1">
                            <Link to="/product">
                                <div className="col-sm-6 col-lg-4 pb-4">
                                    <div className="section shop-wrap-3 img-wrap border-4">
                                        <img className="border-4" src={course} alt="" />
                                        <div className="shop-wrap-2-left">
                                            <div className="shop-wrap-2-left-circle bg-primary color-white size-13 font-weight-600">-25%</div>
                                        </div>
                                        <div className="shop-wrap-2-right">
                                            <Link to="/product" className="shop-wrap-2-right-circle animsition-link mt-2"><i className="uil uil-cart size-16"></i></Link>
                                            <Link to="#" className="shop-wrap-2-right-circle mt-2"><i className="uil uil-heart size-16"></i></Link>
                                        </div>
                                        <div className="shop-wrap-2-text">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="mb-1">
                                                        <Link to="/product" className="link-heading animsition-link">Your product title</Link>
                                                    </h6>
                                                    <p className="lead mb-0 font-weight-400 ">
                                                        <span className="text-line-through mr-1">$237</span> <span className="color-primary">$169</span>
                                                    </p>
                                                </div>
                                                <div className="col-auto align-self-center">
                                                    <p className="mb-0 color-yellow">
                                                        <i className="uil uil-star"></i>
                                                        <i className="uil uil-star"></i>
                                                        <i className="uil uil-star"></i>
                                                        <i className="uil uil-star"></i>
                                                        <i className="uil uil-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="section-1400">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-12 pt-4">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">
                                                <span aria-hidden="true"><i className="uil uil-arrow-left"></i></span>
                                            </Link>
                                        </li>
                                        <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="uil uil-arrow-right"></i></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
