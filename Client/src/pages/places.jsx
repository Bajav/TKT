import React from 'react';
import Card from '../components/card';
import placesArray from '../data/placesArray'; 
import Location from '../components/location';
import Header from '../components/header';

function Places() {
  return (
    <main className='places default'>
       <Header />
      <Card />
    </main>
  );
}

export default Places;