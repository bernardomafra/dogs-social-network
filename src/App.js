import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/" element={<Home /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
