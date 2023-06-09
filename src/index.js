import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Userreducer from "./features/User";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer:{
   users:Userreducer
  }
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);

