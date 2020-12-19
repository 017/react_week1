import React from 'react';
import ReactDOM from 'react-dom';

import Login from './common/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   // React.createElement(Login, {}, null),
//   React.createElement(NewsFeed, {}, null),
//   document.getElementById('root')
// );


ReactDOM.render(
  <div>
    <Navbar/>
    <Login/>
    <Footer/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
