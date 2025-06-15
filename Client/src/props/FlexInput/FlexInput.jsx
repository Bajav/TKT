function FlexInput(props) {
  return (
    <div className='LabelInput'>
        <label htmlFor={props.For}>{props.labelName}</label>
        <input required value={props.value} type={props.type} placeholder={props.placeholder}  autoComplete="off" name={props.name} onChange={props.change}/>
    </div>
  )
}

export default FlexInput;