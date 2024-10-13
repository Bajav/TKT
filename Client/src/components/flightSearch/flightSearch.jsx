import React from 'react'

function FlightSearch() {
  return (
    <div className="flightSearch">
      <div className='flexInput'>
      <label htmlFor="from">from</label>
      <input type="text" placeholder='enter origin' />
      </div>
      <div className='flexInput'>
      <label htmlFor="to">to</label>
      <input type="text" placeholder='enter destination' />
      </div>
    </div>
  )
}

export default FlightSearch;