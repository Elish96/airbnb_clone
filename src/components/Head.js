import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../components/images/Airbnb_Logo.svg.png'
import "./Head.css";

const Head = () => {
  return <nav id='main-nav'>
      <img src={Logo} className="logoimage"/>
  </nav>;
};


export default Head;
