import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import landing1 from '../assets/img/landing-1.png';
import logo from '../assets/img/logo.png';

function HomeAppSection() {
    return (
        <div>
            <div className="section over-hide padding-top-120 pb-5 bg-primary">
                <div className="section-1400 pt-xl-4">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-8 col-sm-6 col-md-4 col-xl-3 pr-xl-5">
                                <div className="section load-anime-left">
                                    <div className="swiper-landing-v2 pb-4">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="section img-wrap landing-shadow-1 border-radius-landing-1">
                                                    <img src={landing1} alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-auto align-self-center pl-xl-5 order-first order-md-last mb-5 mb-md-0 text-center text-md-left home-app-section">
                                <div className="section load-anime-right">
                                    <h6 className="mb-3 color-light-2 text-uppercase">
                                        introducing
                                    </h6>
                                    <h5 className="display-6 mb-3 color-white">
                                        LECTUREPEDIA <br />
                                    </h5>
                                    <h6 className="mb-5 color-light-2 size-40">
                                        MOBILE APP
                                    </h6>
                                    <img src={logo} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAppSection;
