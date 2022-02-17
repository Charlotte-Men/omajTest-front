import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Products from './Components/Products'

import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  );
}

export default App;
