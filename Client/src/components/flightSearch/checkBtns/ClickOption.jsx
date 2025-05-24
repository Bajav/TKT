// import 'check.scss';

function ClickOption(props) {
  return (
    <div className={`btn-flex ${props.isActive ? "active" : ""}`}>
      <label htmlFor={props.labelName}>{props.label}</label>
      <input
        type="radio"
        id={props.labelName}
        name={props.checkName}
        onChange={props.changeFunc}
        checked={props.checkedName}
        onClick={props.click}
      />
    </div>
  );
}

export default ClickOption;
