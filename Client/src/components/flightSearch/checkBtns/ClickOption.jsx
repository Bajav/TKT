import React from "react";

function ClickOption(props) {
  return (
    <div className="btn-flex">
      <label  htmlFor={props.labelName}>
        {props.label}
      </label>
      <input
        type="checkbox"
        name={props.checkName}
        onChange={props.changeFunc}
        checked={props.checkedName}
      />
    </div>
  );
}

export default ClickOption;
