import React from 'react';

const DemoHome = () => {
    return (
        <div>
            <div className="section over-hide padding-top-bottom-80 bg-black" id="page-section">
                <div className="section-1400">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-xl-5 align-self-center text-center text-md-left">
                                <h3 className="mb-0 color-light">
                                    Check out our <span className="color-primary">Demo!</span>
                                </h3>
                            </div>
                            <div className="col-md-auto mt-4 mt-md-0 align-self-center order-md-first pr-md-5 text-center">
                                <a href="" data-fancybox="" data-ratio="2" className="btn btn-light btn-play-video">
                                    <i className="uil uil-play size-22"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoHome;
