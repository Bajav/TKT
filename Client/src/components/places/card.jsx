import React from 'react';
import Africa from '../../assets/placesImages/AFRICA.jpg'
function Card(props) {
  return (
       <div className="card">
         <img src={Africa} alt="africa image"/>
         <div className="card-text">
           <h2>{props.placeName}</h2>
           <p>{props.placeDescription}</p>
         </div>
         <div className="btns">
         <button className='bookBtn'>book now</button>
         <button className='addBtn'>+</button>
         </div>
         </div>

  );
}

export default Card;