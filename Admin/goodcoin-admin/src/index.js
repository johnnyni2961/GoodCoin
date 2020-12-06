import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResponsiveDrawer from './drawer';
import Logo from './logo.png';

ReactDOM.render(
  <React.StrictMode>
    <div style={{alignContent:'center', alignSelf:'center', textAlign:'center', backgroundColor:'#000'}}>
    <img src={Logo} height={200}></img>
    <h1 style={{color:'#c0a188', fontFamily:'serif'}}>ADMIN PORTAL</h1>
    <ResponsiveDrawer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
