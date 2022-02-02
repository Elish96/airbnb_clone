import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';
import Family from './images/family.jpg';
import MountainBike from './images/mountainbike.jpg';
import RideBike from './images/ridebike.jpg';


const Card = () => {
  return(
   <div id='section'>
             <div id='items'>
                <div className='box'>
                <img src={Family} alt='Family' className='box'/>
                    <div>
                    <p>Life lessons</p>
                    </div>
                </div>
                <div className='box'>
                <img src={MountainBike} alt='Riding on the mountain' className='box' />
                    <div>
                    <p>Learn wedding Photography</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={RideBike} alt='Bike riding' className='box'/>
                    <div>
                    <p>Group Bike riding</p>
                    </div>
                </div>
                
        </div>
  </div>
  )
};


export default Card;
