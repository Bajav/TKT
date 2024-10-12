import React, { useRef, useState } from 'react';
import CardTitle from './cardTitle';
import Card from './card';
import Dummy from './dummyCard';

function CardRail() {
  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mouse down event to initiate dragging
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };

  // Handle mouse leave event to stop dragging
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  // Handle mouse move event to drag the scroll
  const handleMouseMove = (e) => {
    if (!isMouseDown) return; // If not dragging, do nothing
    e.preventDefault(); // Prevent default behavior
    const x = e.pageX - itemsRef.current.offsetLeft; // Calculate current mouse position
    const walk = (x - startX) * 2; // Distance moved
    itemsRef.current.scrollLeft = scrollLeft - walk; // Update scroll position
  };

  return (
    <div className="cardRail">
      <CardTitle countryName="Africa" />
      <div
        className="cards"
        ref={itemsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Dummy />
        <Dummy />
        <Dummy />
        <Dummy />
      </div>
    </div>
  );
}

export default CardRail;