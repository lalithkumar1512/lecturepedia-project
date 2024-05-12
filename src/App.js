import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css"
import "./assets/css/animsition.min.css"
import "./assets/css/unicons.css"
import "./assets/css/lighbox.min.css"
import "./assets/css/tooltip.min.css"
import "./assets/css/swiper.min.css"
import "./assets/css/style.css"
import Header from './common/Header';
import Footer from './common/Footer';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ForgotPassword />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<Product />} />
          <Route path="/singleBlog" element={<SingleBlog />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
