import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landingpage/Home/HomePage";
import SignupPage from "./landingpage/signup/SignupPage";
import LoginPage from "./landingpage/login/LoginPage";
import PricingPage from "./landingpage/pricing/PricingPage";
import ProductsPage from "./landingpage/products/ProductsPage";
import SupportPage from "./landingpage/support/SupportPage";
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import AboutPage from './landingpage/about/AboutPage';
import NotFound from './landingpage/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    
    </BrowserRouter>
  </React.StrictMode>
);