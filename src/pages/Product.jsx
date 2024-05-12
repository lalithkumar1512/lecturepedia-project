import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import course from "../assets/img/project-24.jpg"
import t1 from "../assets/img/t1.jpg"

function ProductReview({ author, date, rating, content }) {
    return (
        <div className="row">
            <div className="col-auto comment-aut-img d-none d-sm-inline">
                <img className="border-radius-img-chat" src={t1} alt="" />
            </div>
            <div className="col-sm pl-sm-0">
                <div className="comment-wrapper">
                    <p className="mb-2 size-16">
                        <a href="user-profile.html" className="link link-dark-primary link-normal size-16 animsition-link">{author.name}</a>
                    </p>
                    <p className="mb-0 color-secondary">{content}</p>
                    <div className="row mt-3">
                        <div className="col align-self-center">
                            <p className="mb-0 color-gray-dark size-14">{date}</p>
                        </div>
                        <div className="col-auto align-self-center">
                            <p className="mb-0 size-18 color-yellow">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <i key={i} className={`uil uil-star ${i < rating ? '' : 'color-gray'}`}></i>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RelatedProduct({ product }) {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="section shop-wrap-3 img-wrap border-4">
                <img className="border-4" src={course} alt="" />
                <div className="shop-wrap-2-left">
                    <div className="shop-wrap-2-left-circle bg-blue color-white size-13 font-weight-600">new</div>
                </div>
                <div className="shop-wrap-2-right">
                    <a href={product.image} className="shop-wrap-2-right-circle" data-fancybox=""><i className="uil uil-search size-16"></i></a>
                    <a href={`product`} className="shop-wrap-2-right-circle mt-2"><i className="uil uil-plus size-16"></i></a>
                    <a href="#" className="shop-wrap-2-right-circle mt-2"><i className="uil uil-heart size-16"></i></a>
                </div>
                <div className="shop-wrap-2-text">
                    <div className="shop-wrap-2-size">
                        <p className="mb-0 color-white text-uppercase size-13 font-weight-600">
                            {product.sizes.map((size, index) => (
                                <span key={index} className="mx-1">{size}</span>
                            ))}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6 className="mb-2">
                                <a href={`product-${product.id}.html`} className="link-heading animsition-link">{product.title}</a>
                            </h6>
                            <p className="lead mb-1 font-weight-600">
                                <span className="color-primary">${product.price}</span>
                            </p>
                            <p className="mb-0 color-yellow">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <i key={i} className={`uil uil-star ${i < product.rating ? '' : 'color-gray'}`}></i>
                                ))}
                            </p>
                        </div>
                        <div className="col-auto align-self-center">
                            <p className="mb-0">
                                <a href="cart.html" className="link-heading animsition-link">
                                    <i className="uil uil-cart size-28"></i>
                                    <span className="btn-small-icon bg-dark-blue color-white">+</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Product() {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const reviews = [
        {
            id: 1,
            author: { name: 'Abbie Miller', profileImg: 'img/t2.jpg' },
            date: 'April 21, 2020 at 12:17 pm',
            rating: 4,
            content: 'Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...'
        },
        {
            id: 2,
            author: { name: 'Fred Johnston', profileImg: 'img/t1.jpg' },
            date: 'April 21, 2020 at 10:46 am',
            rating: 5,
            content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...'
        }
    ];

    const relatedProducts = [
        {
            id: 1,
            title: 'Your product title',
            price: 89,
            image: 'img/product-13.jpg',
            sizes: ['s', 'm', 'l'],
            rating: 3
        }
    ];

    return (
        <div>
            <div className="section over-hide padding-top-120 padding-top-mob-nav pb-5 section-background-20 background-img-top">
                <div className="section-1400 pt-xl-4">
                    <div className="container-fluid padding-top-bottom-80">
                        <div className="row">
                            <div className="col-lg">
                                <h2 className="display-8 mb-3">
                                    Product name
                                </h2>
                                <p className="lead mb-0 title-text-left-line-small">
                                    Get 30% cashback on purchase
                                </p>
                            </div>
                            <div className="col-lg-auto align-self-center mt-4 mt-lg-0">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb no-border">
                                        <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">CA</span></li>
                                        <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">Foundation</span></li>
                                        <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">Product Name</span></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-1400">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4 pr-xl-5">
                                <div className="section pb-1 over-hide">
                                    <div className="section border-4 over-hide img-wrap">
                                        <img className="border-4" src={course} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="row mt-3 ml-5">
                                        <div className="col-sm-6 col-lg-3 col-xl-9">
                                            <div className="section p-3 p-lg-3 border-4 bg-white landing-shadow-4">
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <p className="mb-0 align-self-center">
                                                            <i className="uil uil-play size-28 color-dark-blue"></i>
                                                        </p>
                                                    </div>
                                                    <div className="col align-self-center">
                                                        <p className="mb-0">
                                                            Watch out Demo!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-8 col-md-6 col-lg-7 col-xl-5 pr-xl-5 mt-5 mt-md-0">
                                <div className="row">
                                    <div className="col">
                                        <h3 className="mb-0 font-weight-700">
                                            <span className="text-line-through mr-1 color-gray size-22">$237</span> <span>$169</span>
                                        </h3>
                                    </div>
                                    <div className="col-auto align-self-center">
                                        <p className="mb-0 size-18 color-yellow">
                                            <i className="uil uil-star"></i>
                                            <i className="uil uil-star"></i>
                                            <i className="uil uil-star"></i>
                                            <i className="uil uil-star"></i>
                                            <i className="uil uil-star color-gray"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 pt-2 pb-3">
                                        <div className="section divider divider-gray"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="mb-0">
                                            Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur nesciunt.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 pt-3">
                                        <div className="section divider divider-gray"></div>
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    Options
{/*                                     <div className="col-12"> */}
{/*                                         <h6 className="mb-3"> */}
{/*                                             Select color */}
{/*                                         </h6> */}
{/*                                     </div> */}
{/*                                     <div className="col-12 col-md-9 col-lg-7 col-xl-6"> */}
{/*                                         <div className="form-group mx-auto"> */}
{/*                                             <div className="row px-2"> */}
{/*                                                 <div className="col px-1"> */}
{/*                                                     <input className="checkbox-color" type="radio" value="blue" name="color" id="color-1" onChange={() => handleColorChange('blue')} checked={selectedColor === 'blue'} /> */}
{/*                                                     <label className="for-checkbox-color bg-blue" htmlFor="color-1"></label> */}
{/*                                                 </div> */}
{/*                                                 <div className="col px-1"> */}
{/*                                                     <input className="checkbox-color" type="radio" value="orange" name="color" id="color-2" onChange={() => handleColorChange('orange')} checked={selectedColor === 'orange'} /> */}
{/*                                                     <label className="for-checkbox-color bg-orange" htmlFor="color-2"></label> */}
{/*                                                 </div> */}
{/*                                             </div> */}
{/*                                         </div> */}
{/*                                     </div> */}
                                </div>
{/*                                 <div className="row pt-4"> */}
{/*                                     <div className="col-12"> */}
{/*                                         <h6 className="mb-3"> */}
{/*                                             Select size */}
{/*                                         </h6> */}
{/*                                     </div> */}
{/*                                     <div className="col-12 col-md-9 col-lg-7 col-xl-6"> */}
{/*                                         <div className="form-group mx-auto"> */}
{/*                                             <div className="row px-2"> */}
{/*                                                 <div className="col px-1"> */}
{/*                                                     <input className="checkbox-size" type="radio" value="xs" name="size" id="size-1" onChange={() => handleSizeChange('xs')} checked={selectedSize === 'xs'} /> */}
{/*                                                     <label className="for-checkbox-size" htmlFor="size-1">xs</label> */}
{/*                                                 </div> */}
{/*                                                 <div className="col px-1"> */}
{/*                                                     <input className="checkbox-size" type="radio" value="s" name="size" id="size-2" onChange={() => handleSizeChange('s')} checked={selectedSize === 's'} /> */}
{/*                                                     <label className="for-checkbox-size" htmlFor="size-2">s</label> */}
{/*                                                 </div> */}
{/*                                             </div> */}
{/*                                         </div> */}
{/*                                     </div> */}
{/*                                 </div> */}
                                <div className="row">
                                    <div className="col-12 py-4">
                                        <div className="section divider divider-gray"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-auto pr-sm-2">
                                        <div className="quantity shop-quantity">
                                            <input type="number" min="1" max="9999" step="1" value={quantity} onChange={handleQuantityChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm mt-2 mt-sm-0 pl-sm-0">
                                        <Link to="/cart" className="btn btn-dark-primary"><i className="uil uil-cart size-20 mr-2"></i>Add to cart</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 py-4">
                                        <div className="section divider divider-gray"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    Product Description
{/*                                     <div className="col-12"> */}
{/*                                         <p className="mb-0 text-center-v"> */}
{/*                                             <i className="uil uil-check size-22 color-primary mr-2"></i> Dynamic Color Options */}
{/*                                         </p> */}
{/*                                         <div className="w-100"></div> */}
{/*                                         <p className="mb-0 text-center-v"> */}
{/*                                             <i className="uil uil-check size-22 color-primary mr-2"></i> Delivered in 3-5 Days */}
{/*                                         </p> */}
{/*                                     </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
<div className="section over-hide py-5">
                <div className="section-1400">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mb-5">
                                <h2 className="mb-0">Product <span className="font-weight-600">reviews<span className="color-primary">.</span></span></h2>
                            </div>
                            {reviews.map(review => (
                                <div className="col-lg-6" key={review.id}>
                                    <ProductReview {...review} />
                                </div>
                            ))}
{/*                             <div className="col-12 text-center mt-5"> */}
{/*                                 <h5 className="mb-3">Add a review</h5> */}
{/*                             </div> */}
                            {/* Review submission form here */}
                        </div>
                    </div>
                </div>
            </div>
{/*             <div className="section over-hide padding-bottom-120 pt-5 "> */}
{/*                 <div className="section-1400"> */}
{/*                     <div className="container-fluid"> */}
{/*                         <div className="row justify-content-center"> */}
{/*                             <div className="col-12 text-center mb-5"> */}
{/*                                 <h2 className="mb-0">Related <span className="font-weight-600">products<span className="color-primary">.</span></span></h2> */}
{/*                             </div> */}
{/*                             {relatedProducts.map(product => ( */}
{/*                                 <RelatedProduct product={product} key={product.id} /> */}
{/*                             ))} */}
{/*                         </div> */}
{/*                     </div> */}
{/*                 </div> */}
{/*             </div> */}
        </div>
    );
}

export default Product;
