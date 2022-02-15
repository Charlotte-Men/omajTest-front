import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoryContextProvider } from './Context/CategoryContext';
import { ProductsContextProvider } from './Context/ProductsContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
