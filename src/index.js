import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.css';
import Home from './page/Home'
import Signin from './page/Signin';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './page/Profile';
import { Provider } from 'react-redux'
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
