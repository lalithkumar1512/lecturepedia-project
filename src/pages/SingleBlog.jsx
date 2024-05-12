import React from 'react';
import { Link } from 'react-router-dom';
import blog6 from "../assets/img/blog-6.jpg";
import blog1 from "../assets/img/blog-1.jpg";
import blog3 from "../assets/img/blog-3.jpg";
import t1 from "../assets/img/t1.jpg";

function SingleBlog() {
  return (
    <div>
      <div className="section over-hide padding-top-120 padding-top-mob-nav padding-bottom-120 section-background-20 background-img-top">
        <div className="section-1400 pt-xl-4">
          <div className="container-fluid padding-top-bottom-80">
            <div className="row">
              <div className="col-lg">
                <h2 className="display-8 mb-3">Smiling pretty customer</h2>
                <p className="lead mb-0 title-text-left-line-small">28.Sep</p>
              </div>
              <div className="col-lg-auto align-self-center mt-4 mt-lg-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb no-border">
                    <li className="breadcrumb-item"><Link to="/" className="link link-dark-primary size-14" data-hover="Home">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/blog" className="link link-dark-primary size-14" data-hover="Blog">Blog</Link></li>
                    <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">Smiling pretty customer</span></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="section-1400">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9">
                <div className="section">
                  <div className="img-wrap border-4 over-hide mb-4">
                    <img src={blog6} alt="" />
                  </div>
                  <p className="mb-2">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur nesciunt.
                  </p>

{/*                    */}{/* Information Boxes */}
{/*                   <div className="row mt-4"> */}
{/*                     <div className="col-md-4"> */}
{/*                       <p className="mb-1">Annual Taxes EMS</p> */}
{/*                       <h6 className="mb-0">$<span className="counter">273,000</span></h6> */}
{/*                     </div> */}
{/*                     <div className="col-md-4 mt-3 mt-md-0"> */}
{/*                       <p className="mb-1">Average Revenue</p> */}
{/*                       <h6 className="mb-0">$<span className="counter">132</span>M</h6> */}
{/*                     </div> */}
{/*                     <div className="col-md-4 mt-3 mt-md-0"> */}
{/*                       <p className="mb-1">Finance Review Date</p> */}
{/*                       <h6 className="mb-0">July 17, 2020</h6> */}
{/*                     </div> */}
{/*                   </div> */}

                  <div className="row my-4">
                    <div className="col-12 pb-3">
                      <div className="section divider divider-gray"></div>
                    </div>
                    <div className="col-auto blog-grid-1-col-img">
                      <img className="border-radius-bubble-1" src={t1} alt="" />
                    </div>
                    <div className="col align-self-center">
                      <p className="mb-0 size-16">by <Link to="/about-me-creative" className="link size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</Link></p>
                    </div>
                    <div className="col-md-auto mt-3 mt-md-0 align-self-center">
                      <a href="#" className="tag hot">pretty</a>
                      <a href="#" className="tag hot">customer</a>
                    </div>
                    <div className="col-12 pt-3">
                      <div className="section divider divider-gray"></div>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <div className="section">
                  <h6 className="mb-3">Related Posts:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="section blog-wrap-4 small">
                        <div className="row">
                          <div className="col-auto align-self-center">
                            <Link to="/post-1" className="link-heading animsition-link">
                              <img src={blog1} alt="" />
                            </Link>
                          </div>
                          <div className="col align-self-center">
                            <p className="mb-1 size-16">10.Sep -
                              <Link to="/about-me-creative" className="link size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</Link>
                            </p>
                            <h6 className="mb-0">
                              <Link to="/post-1" className="link-heading animsition-link">View of couple on road trip</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                      <div className="section blog-wrap-4 small">
                        <div className="row">
                          <div className="col-auto align-self-center">
                            <Link to="/post-1" className="link-heading animsition-link">
                              <img src={blog3} alt="" />
                            </Link>
                          </div>
                          <div className="col align-self-center">
                            <p className="mb-1 size-16">08.Sep -
                              <Link to="/about-me-creative" className="link size-16 animsition-link" data-hover="Fred Johnston">Fred Johnston</Link>
                            </p>
                            <h6 className="mb-0">
                              <Link to="/post-1" className="link-heading animsition-link">Man with dog on road trip</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="section mt-5">
                  <h4 className="mb-4">Comments <span className="color-primary">(5)</span></h4>
                  <div className="row">
                    <div className="col-auto comment-aut-img d-none d-sm-inline">
                      <img className="border-radius-img-chat" src={t1} alt="" />
                    </div>
                    <div className="col-sm pl-sm-0">
                      <div className="comment-wrapper">
                        <p className="mb-2 size-16">
                          <Link to="/user-profile" className="link link-dark-primary link-normal size-16 animsition-link">Fred Johnston</Link>
                        </p>
                        <p className="mb-0 color-secondary">
                          Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur nesciunt.
                        </p>
                        <div className="row mt-3">
                          <div className="col align-self-center">
                            <p className="mb-0 color-gray-dark size-14">April 21, 2020 at 10:46 am</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Leave a Comment Form */}
                  <h4 className="mb-4 mt-5">Leave a <span className="color-primary">comment</span></h4>
                  <div className="row">
                    <div className="col-12 mt-4">
                      <div className="form-group">
                        <textarea className="form-style big form-style-with-icon form-textarea section-shadow-blue" placeholder="Comment" autoComplete="off" rows="5"></textarea>
                        <i className="input-icon big uil uil-comment-alt-lines"></i>
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="button" className="btn btn-dark-primary">Submit comment</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-3 mt-5 mt-lg-0">
                <div className="section mt-5">
                  <h6 className="mb-3">Categories</h6>
                  <div className="section pl-3">
                    <p className="mb-1 size-17">
                      <Link className="link link-normal font-weight-500" to="#">Woo Commerce</Link>
                    </p>
                    <p className="mb-1 size-17">
                      <Link className="link link-normal font-weight-500" to="#">Web Development</Link>
                    </p>
                    <p className="mb-1 size-17">
                      <Link className="link link-normal font-weight-500" to="#">Web Design</Link>
                    </p>
                    <p className="mb-1 size-17">
                      <Link className="link link-normal font-weight-500" to="#">App Development</Link>
                    </p>
                    <p className="mb-1 size-17">
                      <Link className="link link-normal font-weight-500" to="#">Print Design</Link>
                    </p>
                    <p className="mb-0 size-17">
                      <Link className="link link-normal font-weight-500" to="#">HTML Templates</Link>
                    </p>
                  </div>
                </div>

                <div className="section mt-5">
                  <h6 className="mb-3">Tag cloud</h6>
                  <a href="#" className="tag hot mb-1">man</a>
                  <a href="#" className="tag hot mb-1">dog</a>
                </div>

                <div className="section pt-5" id="sticker-blog-1-col">
                  <div className="section border-4 p-4 bg-dark-blue section-background-13">
                    <div className="row">
                      <div className="col-12 text-center mt-2">
                        <Link to="/contact-1" className="btn btn-dark-primary animsition-link"><i className="uil uil-arrow-circle-right size-22 mr-2"></i>Contact us now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
