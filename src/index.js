import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './assets/css/index.css';
import App from './App';

import { store } from './utils/redux/store';
import { Provider } from 'react-redux';
// import {
//   createBrowserRouter,
//   Link,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
