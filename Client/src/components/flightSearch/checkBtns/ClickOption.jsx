function ClickOption({
  label,
  labelName,
  checkName,
  changeFunc,
  checkedName,
  click,
  isActive,
}) {
  return (
    <div className="btn-flex">
      <label
        className={`click-option-label ${isActive ? "active" : ""}`}
        htmlFor={labelName}
      >
        {label}
      </label>
      <input
        type="radio"
        id={labelName}
        name={checkName}
        onChange={changeFunc}
        checked={checkedName}
        onClick={click}
      />
    </div>
  );
}

export default ClickOption;