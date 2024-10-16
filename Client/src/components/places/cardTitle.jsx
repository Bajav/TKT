import React from 'react'

function CardTitle(props) {
  return (
    <div className='cardTitle'>
        <h4>{props.countryName}</h4>
        <h5>see more</h5>
    </div>
  )
}

export default CardTitle;