import React from 'react'
import Calender from './calenderInput'

function CalenderInputs() {
  return (
    <div className='calendersUI'>
        <Calender label="date Of departure" labelName="date Of departure"  inputType="date" inputName="date Of departure"/>
        <Calender label="date Of Return" labelName="date Of Return"  inputType="date" inputName="date Of Return"/>
    </div>
  )
}

export default CalenderInputs;