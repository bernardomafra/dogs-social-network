import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
