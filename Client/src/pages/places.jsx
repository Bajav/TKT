import React from 'react';
import Card from '../components/card';
import placesArray from '../data/placesArray'; 
import Location from '../components/location';

function Places() {
  return (
    <main className='places default'>
      <div className="header">
        <Location />
      </div>
      <Card />
    </main>
  );
}

export default Places;