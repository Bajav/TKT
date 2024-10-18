import React from 'react'

function Buttons() {
  return (
    <div className='flightType-btns'>
        <select name='flight-type'>
          <option value="oneWay">one way</option>
          <option value="roundTrip">round trip</option>
        </select>
        <input type="checkbox" />
    </div>
  )
}

export default Buttons