import React from 'react'

function FlexInput(props) {
  return (
    <div className='LabelInput'>
        <label htmlFor={props.For}>{props.labelName}</label>
        <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.change}/>
    </div>
  )
}

export default FlexInput;