import React from 'react';
import Africa from '../assets/placesImages/AFRICA.jpg'
function Card() {
  return (
    <div>
    <div className="card-content">
       <h1>africa</h1>
       <div className="card">
         <img src={Africa} alt="africa image"/>
         <div className="card-text">
           <h2>Chimpazee</h2>
           <p>Saint-Tropez is a popular beach destination, especially for its famous Pampelonne Beach, which attracts celebrities and tourists from around the world.</p>
         </div>
         <div className="btns">
         <button>book now</button>
         <button>+</button>
         </div>
       </div>
   </div>
</div>
  );
}

export default Card;