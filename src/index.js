import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsListContextProvider } from './Context/ProductsListContext';
import { CategoriesContextProvider } from './Context/CategoriesContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsListContextProvider>
        <CategoriesContextProvider>
          <App />
        </CategoriesContextProvider>
      </ProductsListContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
