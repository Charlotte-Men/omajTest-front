import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsListContextProvider } from './Context/ProductsListContext';
import { AllProductsContextProvider } from './Context/AllProductsContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsListContextProvider>
        <AllProductsContextProvider>
          <App />
        </AllProductsContextProvider>
      </ProductsListContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
