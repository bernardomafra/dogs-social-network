import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import { UserStorage } from './contexts/UserContext'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
