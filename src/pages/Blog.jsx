import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/img/blog-4.jpg';


const Blog = () => {
  return (
    <div>
      <div className="section over-hide padding-top-120 padding-top-mob-nav padding-bottom-120 section-background-20 background-img-top">
        <div className="section-1400 pt-xl-4">
          <div className="container-fluid padding-top-bottom-80">
            <div className="row">
              <div className="col-lg">
                <h2 className="display-8 mb-3">Updates</h2>
                <p className="lead mb-0 title-text-left-line-small">Latest</p>
              </div>
              <div className="col-lg-auto align-self-center mt-4 mt-lg-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb no-border">
                    <li className="breadcrumb-item"><Link to="/" className="link link-dark-primary size-14" data-hover="Home">Home</Link></li>
                    <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">Blog</span></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="section-1400">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-left filter-sorting pb-4">
				<button className="btn btn-filter-tag-small font-weight-700 filter mr-3 position-relative active" data-filter="*">All</button>
				<button className="btn btn-filter-tag-small font-weight-700 filter mr-3 position-relative" data-filter=".fashion">Category 1</button>
				<button className="btn btn-filter-tag-small font-weight-700 filter mr-3 position-relative" data-filter=".lifestyle">Category 2</button>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-wrapper-mix portfolio-1400 over-initial">
          <div className="mix mb-4 over-initial health travel">
            <Link to="/singleBlog" className="animsition-link">
              <div className="portfolio-wrap-2 img-wrap">
                <div className="blog-date bg-primary"><p className="mb-0 color-white font-weight-600 size-13">21.Sep</p></div>
                <div className="section border-4">
                  <img className="border-4" src={blogImage} alt=""/>
                  <div className="wrap-mask border-4"></div>
                </div>
                <div className="portfolio-wrap-2-text">
                  <h6 className="mb-1 text-center">Smiling couple</h6>
                  <p className="mb-0 text-center">by Fred Johnston</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mix mb-4 over-initial health travel">
            <Link to="/singleBlog" className="animsition-link">
              <div className="portfolio-wrap-2 img-wrap">
                <div className="blog-date bg-primary"><p className="mb-0 color-white font-weight-600 size-13">21.Sep</p></div>
                <div className="section border-4">
                  <img className="border-4" src={blogImage} alt=""/>
                  <div className="wrap-mask border-4"></div>
                </div>
                <div className="portfolio-wrap-2-text">
                  <h6 className="mb-1 text-center">Smiling couple</h6>
                  <p className="mb-0 text-center">by Fred Johnston</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mix mb-4 over-initial health travel">
            <Link to="/singleBlog" className="animsition-link">
              <div className="portfolio-wrap-2 img-wrap">
                <div className="blog-date bg-primary"><p className="mb-0 color-white font-weight-600 size-13">21.Sep</p></div>
                <div className="section border-4">
                  <img className="border-4" src={blogImage} alt=""/>
                  <div className="wrap-mask border-4"></div>
                </div>
                <div className="portfolio-wrap-2-text">
                  <h6 className="mb-1 text-center">Smiling couple</h6>
                  <p className="mb-0 text-center">by Fred Johnston</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mix mb-4 over-initial health travel">
            <Link to="/singleBlog" className="animsition-link">
              <div className="portfolio-wrap-2 img-wrap">
                <div className="blog-date bg-primary"><p className="mb-0 color-white font-weight-600 size-13">21.Sep</p></div>
                <div className="section border-4">
                  <img className="border-4" src={blogImage} alt=""/>
                  <div className="wrap-mask border-4"></div>
                </div>
                <div className="portfolio-wrap-2-text">
                  <h6 className="mb-1 text-center">Smiling couple</h6>
                  <p className="mb-0 text-center">by Fred Johnston</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mix mb-4 over-initial health travel">
            <Link to="/singleBlog" className="animsition-link">
              <div className="portfolio-wrap-2 img-wrap">
                <div className="blog-date bg-primary"><p className="mb-0 color-white font-weight-600 size-13">21.Sep</p></div>
                <div className="section border-4">
                  <img className="border-4" src={blogImage} alt=""/>
                  <div className="wrap-mask border-4"></div>
                </div>
                <div className="portfolio-wrap-2-text">
                  <h6 className="mb-1 text-center">Smiling couple</h6>
                  <p className="mb-0 text-center">by Fred Johnston</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="section-1400">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 pt-4">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><Link className="page-link" to="#"><i className="uil uil-arrow-left"></i></Link></li>
                    <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                    {/* More page items */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
