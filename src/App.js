import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom";





function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route path='Menu' element={<Menu />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
