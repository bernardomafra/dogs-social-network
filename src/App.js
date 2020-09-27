import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import User from './components/User';

import { UserStorage } from './contexts/UserContext'
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
