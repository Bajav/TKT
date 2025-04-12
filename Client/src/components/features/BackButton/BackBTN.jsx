import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackBTN({btnName = "back",to = -1}) {
    const navigate = useNavigate();
  return (
    <button className='backBtn' onClick={()=>{navigate(to)}}>{btnName}</button>
  )
}

export default BackBTN