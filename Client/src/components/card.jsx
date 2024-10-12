import React from 'react';
import Africa from '../assets/placesImages/AFRICA.jpg'
function Card() {
  return (
       <div className="card">
         <img src={Africa} alt="africa image"/>
         <div className="card-text">
           <h2>St-Tropez</h2>
           <p>Saint-Tropez is a popular beach destination, especially for its famous Pampelonne Beach, which attracts celebrities and tourists from around the world.</p>
         </div>
         <div className="btns">
         <button className='bookBtn'>book now</button>
         <button className='addBtn'>+</button>
         </div>
         </div>

  );
}

export default Card;