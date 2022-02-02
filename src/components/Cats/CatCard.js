import React from 'react';
import './CatCard.css'
import Cat from '../images/cat.jpg'
import Phonecall from '../icons/phone-call.png';
import Envelope from '../icons/envelope.png';


const CatCard =(props)=>{
    return(
    <div className="contact-card">
        <img src={props.img} id='catImg'/>
        <h3 id='hh3'>{props.name}</h3>
        <div className="info-group top">
            <img src={Phonecall} className='icon' />
            <p>{props.tel}</p>
        </div>
        <div className="info-group down">
            <img src={Envelope} className='icon' />
            <p>{props.email}</p>
        </div>
    </div>
    )
}

export default CatCard;