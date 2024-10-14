import React from 'react'
import SeatClass from './seatClass';
import PassengerSelector from './passengers';

function PassengerSeatType() {
  return (
    <div className='seatType'>
        <PassengerSelector />
        <SeatClass />
    </div>
  )
}

export default PassengerSeatType;