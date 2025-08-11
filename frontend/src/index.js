import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from  "react-router-dom"
import './index.css';
import HomePage from "../src/landing_page/home/HomePage"
import SignupPage from "../src/landing_page/signup/Signup"
import AboutPage from "../src/landing_page/about/About"
import ProductsPage from "../src/landing_page/products/ProductsPage"
import PricingPage from "../src/landing_page/pricing/Pricing"
import SupportPage from "../src/landing_page/support/SupportPage"
import NotFoundPage from "../src/landing_page/NotFound"
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/pricing" element={<PricingPage/>} />
      <Route path="/support" element={<SupportPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  
);
