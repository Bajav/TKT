import React from 'react'

function SeatClass() {
  return (
    <div className='seatClass'>
        <label htmlFor="seatClass"> seat class</label>
        <select name="seatClass" id="seatClass">
            <option value="economy_class">economy</option>
            <option value="economy_premium">economy premium</option>
            <option value="business_class">bussiness</option>
            <option value="first_class">first_class</option>
        </select>
    </div>
  )
}

export default SeatClass;