import React from "react";

function ClickOption(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <label className="relat" htmlFor={props.labelName}>
        {props.label}
      </label>
      <input
        className="relative z-10 "
        type="checkbox"
        name={props.checkName}
        onChange={props.changeFunc}
        checked={props.checkedName}
      />
    </div>
  );
}

export default ClickOption;
