import React from 'react'

function PlacesCards(props) {
  return (
    <div>
         <div className="card-content">
            <h1>{props.header}</h1>
            <div className="card">
              <img src={props.image} alt={props.alt} />
              <div className="card-text">
                <h2>{props.header}</h2>
                <p>{props.description}</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default PlacesCards;