import React from 'react';
import ReactDOM from 'react-dom';
import './Body.css';
import Head from '../Head';
import Experience from  '../Experience';
import Card from '../Card';



const Body = () => {
  return <div>
         <Head/>
        <Experience/>
         <Card/>
  </div>;
};


export default Body;
