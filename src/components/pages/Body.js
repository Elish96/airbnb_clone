import React from 'react';
import ReactDOM from 'react-dom';
import './Body.css';
import Head from '../Head';
import Experience from  '../Experience';
import Card from '../Card';
import Contact from '../Contatct';



const Body = () => {
  return <div>
         <Head/>
        <Experience/>
         <Card/>
         <Contact/>
  </div>;
};


export default Body;
