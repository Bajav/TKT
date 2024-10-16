import React, { useRef, useState } from 'react';
import CardTitle from './cardTitle';
import Card from './card';
import Dummy from './dummyCard';
import places from '../../data/placesArray';

const placeCard = (place) => {
  return (
    <div key={place.id}>
      <Card placeName={place.name} placeDescription={place.description} />
    </div>
  );
};

function SouthAmerica() {
  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault(); 
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    itemsRef.current.scrollLeft = scrollLeft - walk; 
  };

  return (
    <div className="cardRail">
      <CardTitle countryName={places[4].continent} />
      <div
        className="cards"
        ref={itemsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {places[4].places.map((place) => (
          <Card key={place.id} placeName={place.name} placeDescription={place.description} />
        ))}
        <Dummy />
        <Dummy />
      </div>
    </div>
  );
}

export default SouthAmerica;
