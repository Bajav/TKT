function FlexInput(props) {
  return (
    <div className='LabelInput'>
        <label htmlFor={props.For}>{props.labelName}</label>
        <input required type={props.type} placeholder={props.placeholder}  autoComplete="off" name={props.name} onChange={props.change}/>
    </div>
  )
}

export default FlexInput;