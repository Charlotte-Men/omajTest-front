import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoryContextProvider } from './Context/CategoryContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
