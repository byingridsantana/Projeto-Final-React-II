import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login'
import Produtos from  './Pages/Produtos';
import Carrinho from './Components/'


const App = () => {
  return <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Produtos" element={<Produtos />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Carrinho" element={<Carrinho />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
