import React,{useRef, useState} from 'react'
import CardTitle from "./cardTitle";
import Card from "./card";
import Dummy from './dummyCard';

function CardRail() {
       const itemsRef = useRef(null);
       const [isMouseDown, setMouseDown] = useState(false);
       const [startX, setStartX] = useState(0);
       const [scrollLeft, setScrollLeft] = useState(0);


    
  return (
    <div className='cardRail'>
        <CardTitle countryName="africa"/>
        <div className="cards"
        ref={itemsRef}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
            <Dummy />
        </div>
    </div>
  )
}

export default CardRail;