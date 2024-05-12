import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/img/blog-4.jpg';
import Swiper, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function BlogHome() {
  useEffect(() => {
    const swiper = new Swiper('.swiper-blog-1', {
        slidesPerView: '3',
		spaceBetween: 30,
		resistance: true,
		centeredSlides: false,
		resistanceRatio: 0,
		speed: 500,
		grabCursor: false,
		loop: true,
		freeMode: false,
		parallax: true,
		touchStartPreventDefault: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		effect: `fade`,
		fadeEffect: {
			crossFade: true
		},
    });
  }, []);

  return (
    <div>
            <div className="section over-hide padding-top-bottom-120">
                <div className="section-1400">
                    <div className="container-fluid">
                        <div className="row mb-5 pb-4">
                            <div className="col-lg-6 align-self-center">
                                <h6 className="color-gray-dark text-uppercase mb-2">Latest</h6>
                                <h3 className="display-6 mb-0">
                                    Updates <br />
                                </h3>
                            </div>
                            <div className="col-lg-6 align-self-center mt-5 mt-lg-0 text-left text-lg-right">
                                <Link to="blog-slice-revealer.html" className="btn btn-dark-1 animsition-link">View All<i className="uil uil-arrow-right size-22 ml-3"></i></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 align-self-center">
                                <div className="section swiper-blog-1 padding-bottom-80">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="section blog-wrap-4 full-img border-4 bg-white pb-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="section clearfix">
                                                            <Link to="post-1.html" className="link-heading animsition-link">
                                                                <img src={blogImage} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="section clearfix px-4">
                                                            <Link to="#" className="tag new">couple</Link>
                                                            <Link to="#" className="tag popular">trip</Link>
                                                            <Link to="#" className="tag sale">road</Link>
                                                            <p className="mb-1 mt-3 size-16">
                                                                10.Sep
                                                            </p>
                                                            <h5 className="mb-4">
                                                                <Link to="post-1.html" className="link-heading animsition-link">View of couple on road trip</Link>
                                                            </h5>
                                                            <Link to="post-1.html" className="link size-16 link-normal text-center-v animsition-link">More Details <i className="uil uil-arrow-right ml-2"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="section blog-wrap-4 full-img border-4 bg-white pb-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="section clearfix">
                                                            <Link to="post-1.html" className="link-heading animsition-link">
                                                                <img src={blogImage} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="section clearfix px-4">
                                                            <Link to="#" className="tag new">couple</Link>
                                                            <Link to="#" className="tag popular">trip</Link>
                                                            <Link to="#" className="tag sale">road</Link>
                                                            <p className="mb-1 mt-3 size-16">
                                                                10.Sep
                                                            </p>
                                                            <h5 className="mb-4">
                                                                <Link to="post-1.html" className="link-heading animsition-link">View of couple on road trip</Link>
                                                            </h5>
                                                            <Link to="post-1.html" className="link size-16 link-normal text-center-v animsition-link">More Details <i className="uil uil-arrow-right ml-2"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="section blog-wrap-4 full-img border-4 bg-white pb-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="section clearfix">
                                                            <Link to="post-1.html" className="link-heading animsition-link">
                                                                <img src={blogImage} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="section clearfix px-4">
                                                            <Link to="#" className="tag new">couple</Link>
                                                            <Link to="#" className="tag popular">trip</Link>
                                                            <Link to="#" className="tag sale">road</Link>
                                                            <p className="mb-1 mt-3 size-16">
                                                                10.Sep
                                                            </p>
                                                            <h5 className="mb-4">
                                                                <Link to="post-1.html" className="link-heading animsition-link">View of couple on road trip</Link>
                                                            </h5>
                                                            <Link to="post-1.html" className="link size-16 link-normal text-center-v animsition-link">More Details <i className="uil uil-arrow-right ml-2"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="section blog-wrap-4 full-img border-4 bg-white pb-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="section clearfix">
                                                            <Link to="post-1.html" className="link-heading animsition-link">
                                                                <img src={blogImage} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="section clearfix px-4">
                                                            <Link to="#" className="tag new">couple</Link>
                                                            <Link to="#" className="tag popular">trip</Link>
                                                            <Link to="#" className="tag sale">road</Link>
                                                            <p className="mb-1 mt-3 size-16">
                                                                10.Sep
                                                            </p>
                                                            <h5 className="mb-4">
                                                                <Link to="post-1.html" className="link-heading animsition-link">View of couple on road trip</Link>
                                                            </h5>
                                                            <Link to="post-1.html" className="link size-16 link-normal text-center-v animsition-link">More Details <i className="uil uil-arrow-right ml-2"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="section blog-wrap-4 full-img border-4 bg-white pb-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="section clearfix">
                                                            <Link to="post-1.html" className="link-heading animsition-link">
                                                                <img src={blogImage} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="section clearfix px-4">
                                                            <Link to="#" className="tag new">couple</Link>
                                                            <Link to="#" className="tag popular">trip</Link>
                                                            <Link to="#" className="tag sale">road</Link>
                                                            <p className="mb-1 mt-3 size-16">
                                                                10.Sep
                                                            </p>
                                                            <h5 className="mb-4">
                                                                <Link to="post-1.html" className="link-heading animsition-link">View of couple on road trip</Link>
                                                            </h5>
                                                            <Link to="post-1.html" className="link size-16 link-normal text-center-v animsition-link">More Details <i className="uil uil-arrow-right ml-2"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogHome;
