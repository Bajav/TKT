import React,{useRef} from 'react'
import CardTitle from "./cardTitle";
import Card from "./card";

function CardRail() {
       

    
  return (
    <div className='cardRail'>
        <CardTitle countryName="africa"/>
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default CardRail;