import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Categories from './Components/Categories';

import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Categories />} />
      </Routes>
    </main>
  );
}

export default App;
