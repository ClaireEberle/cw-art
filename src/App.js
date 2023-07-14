import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/Pages/About"
import Portfolio from "./components/Pages/Portfolio"
import Sale from "./components/Pages/Sale"
import Cart from "./components/Pages/Cart"
import Home from './components/Pages/Home'
import './App.css';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/sale" element={<Sale/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
