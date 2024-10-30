import React from 'react'

function Calender(props) {
  return (
    <div className="calender flexInput">
        <label htmlFor={props.label}>{props.labelName}</label>
        <input type={props.inputType} name={props.inputName} id={props.ID} format="yyyy-MM-dd" onChange={props.change} value={props.value}/>
    </div>
  )
}

export default Calender;