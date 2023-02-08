import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './assets/css/index.css';
import App from './App';
// import {
//   createBrowserRouter,
//   Link,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
