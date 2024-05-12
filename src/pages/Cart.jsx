import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../assets/img/project-6.jpg';

const CartItem = ({ item }) => {
  return (
    <div className="section bg-light-2 border-4 py-5 py-sm-3 px-4 alert fade show mb-2" role="alert">
      <div className="row">
        <div className="col-sm-auto align-self-center text-right mt-n4 mt-sm-0">
          <a href="#" className="link link-dark-primary link-normal" data-dismiss="alert">
            <i className="uil uil-multiply size-22"></i>
          </a>
        </div>
        <div className="col-auto align-self-center shop-cart-img">
          <a href={item.productLink} className="animsition-link">
            <img className="border-4" src={Product} alt="" />
          </a>
        </div>
        <div className="col align-self-center mt-3 mt-sm-0">
          <a href={item.productLink} className="link link-dark-primary link-normal mb-1 animsition-link">
            {item.title}
          </a>
          <p className="mb-0 size-14">
            detail 1
          </p>

        </div>
        <div className="col align-self-center mt-4 mt-lg-0">
          <h6 className="mb-0 color-secondary font-weight-700">
            ${item.price}
          </h6>
        </div>
        <div className="col-auto align-self-center mt-4 mt-lg-0">
          <div className="quantity shop-quantity light">
            <input type="number" min="1" max="9999" step="1" value={item.quantity} />
          </div>
        </div>
        <div className="col align-self-center text-lg-right mt-4 mt-lg-0">
          <h6 className="mb-0 font-weight-700">
            ${item.total}
          </h6>
        </div>
      </div>
    </div>
  );
}

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      title: 'Red Double Zip Hoodie',
      color: 'Red',
      size: 'S',
      price: 210,
      quantity: 2,
      total: 420,
      productLink: 'product-1.html',
      image: '../assets/img/product-6.jpg'
    },
  ];

  return (
    <div>
      <div className="section over-hide padding-top-120 padding-top-mob-nav padding-bottom-120 background-img-top">
        <div className="section-1400 pt-xl-4">
          <div className="container-fluid padding-top-bottom-80">
            <div className="row">
              <div className="col-lg">
                <h2 className="display-8 mb-3">Cart</h2>
                <p className="lead mb-0 title-text-left-line-small"></p>
              </div>
              <div className="col-lg-auto align-self-center mt-4 mt-lg-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb no-border">
                    <li className="breadcrumb-item"><a href="#" className="link link-dark-primary size-14" data-hover="Home">Home</a></li>
                    <li className="breadcrumb-item active font-weight-500" aria-current="page"><span className="size-14">Cart</span></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="section-1400">
          <div className="container-fluid">
            <div className="row justify-content-center">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="col-12 text-lg-right mt-3">
                <div className="row">
                  <div className="col col-sm-5 col-md-4 col-lg-2 align-self-center">
                    <div className="form-group">
                      <input type="text" className="form-style text-center" placeholder="Coupon code" autocomplete="off" />
                    </div>
                  </div>
                  <div className="pl-0 col-auto align-self-center">
                    <button className="btn btn-light-dark">Apply<span className="d-none d-sm-inline ml-1">coupon</span></button>
                  </div>
                  <div className="col align-self-center text-lg-right text-md-right mt-4 mt-md-0">
                    <button className="btn btn-dark-primary">Update cart</button>
                  </div>
                </div>
              </div>
              <div className="col-12 text-lg-right mt-4">
                <h5 className="mb-3">Cart totals</h5>
              </div>
              <div className="col-lg offset-lg-8 offset-xl-9">
                <div className="row">
                  <div className="col">
                    <h6 className="mb-2 color-secondary">Subtotal:</h6>
                  </div>
                  <div className="col-auto">
                    <h6 className="mb-2 color-secondary">$820.00</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg offset-lg-8 offset-xl-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-0">Total:</h5>
                  </div>
                  <div className="col-auto">
                    <h5 className="mb-0">$820.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 text-lg-right mt-4">
                <Link to="/checkout" className="btn btn-dark-primary animsition-link">
                  Proceed to checkout
                  <i className="uil uil-arrow-right size-20 ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
