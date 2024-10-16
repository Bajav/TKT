  import React from 'react';
  import Header from '../components/header';
  import Africa from '../components/places/africa';
  import Asia from '../components/places/asia';
  import Australia from '../components/places/australia';
  import Europe from '../components/places/europe';
  import NorthAmerica from '../components/places/northAmerica';
  import SouthAmerica from '../components/places/sounthAmerica';


  function Places() {
    return (
      <main className='places default'>
      <Header  />
      <Africa />
      <Asia />
      <Australia />
      <Europe />
      <NorthAmerica />
      <SouthAmerica />
      <div className="dummy"></div>
      </main>
    );
  }

  export default Places;