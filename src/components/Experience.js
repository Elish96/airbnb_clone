import React from 'react';
import ReactDOM from 'react-dom';
import './Experience.css';
import House from './images/house.jpg'
import House1 from './images/house1.jpg'
import House2 from './images/house2.jpg'
import House3 from './images/house3.jpg'
import House4 from './images/house4.jpg'
import House5 from './images/house5.jpg'
import House6 from './images/house6.jpg'




const Experience = () => {
  return <div id='ex-main'>
      <section id='experience'>
          <div className='grid'>
                <div >
                    <img src={House} alt='' className='exp'/>
                </div>
                <div>
                <img src={House1} alt='' className='exp'/>
                </div>
                <div>
                <img src={House2} alt='' className='exp cept'/>
                </div>
                <div>
                <img src={House3} alt='' className='exp'/>
                </div>
                <div>
                <img src={House4} alt='' className='exp de '/>
                </div>
                <div >
                <img src={House4} alt='' className='exp de be'/>
                </div>
                <div>
                <img src={House5} alt='' className='exp cept de'/>
                </div>
                <div >
                <img src={House6} alt='' className='exp de be'/>
                </div>
                <div>
                <img src={House} alt='' className='exp'/>
                </div>
          </div>
          {/* A brief text about the experiences */}
          <div className='text'>
              <h2>Online Experiences</h2>
              <p>Join the most unique activities led by one-of-a-kind hosts--all without leaving home</p>
          </div>
      </section>
  </div>;
};

export default Experience;
