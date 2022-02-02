import React from 'react';
import './Contact.css';
import CatCard from './Cats/CatCard';
import Cat from '../components/images/cat.jpg'
import Cat4 from '../components/images/cat4.jpg'
import CatSleeping from '../components/images/cat-sleeping.jpg'
import Cat3 from '../components/images/cat3.jpg'
import Dog from '../components/images/dog.jpg'
import Dog2 from '../components/images/dog2.jpg'
import Dog3 from '../components/images/dog3.jpg'

const Contatct = () => {
  return (
<div id='contact'>
      <CatCard
      img={Cat}
      name='Mr. Whiskerson'
      tel='(212) 555-1234'
      email='mr.whiskaz@catnap.meow'
      />
      <CatCard 
        img={Cat4}
        name='Fluffykins'
        tel='(212) 555-2347'
        email='fluff@me.com'
      />
      <CatCard 
      img={CatSleeping}
      name='Felix'
      tel='(212) 555-4567'
      email='thecat@hotmail.com'
      />
      <CatCard
        img={Cat3}
        name='Pumpkin'
        tel='(08000) CAT KING'
        email='pumpkin@scrimba.com'
      />
      <CatCard
        img={Dog}
        name='Mr Hash'
        tel='(08000) COOL'
        email='hash@scool.com'
      />
      <CatCard
        img={Dog2}
        name='Rain Shine'
        tel='(080) 254 2131'
        email='rain@shine.com'
      />
      <CatCard
        img={Dog3}
        name='Lucky'
        tel='(255) 221 2154 '
        email='wealth@rimba.com'
      />
  </div>
  ) 
};

export default Contatct;
