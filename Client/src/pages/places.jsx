import React from 'react';
import Header from '../components/header';
import CardRail from '../components/cardsRail';

function Places() {
  return (
    <main className='places default'>
       <Header />
     <CardRail />
     <CardRail />
     <CardRail />
     <CardRail />
     <CardRail />
    </main>
  );
}

export default Places;