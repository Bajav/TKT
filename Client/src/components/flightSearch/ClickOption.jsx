import React from "react";

function ClickOption(props) {
  return (
    <div className="flex flex-col">
      <label className="relative z-20 " htmlFor={props.labelName}>
        {props.label}
      </label>
      <input
        className="z-10"
        type="relative checkbox"
        name={props.checkName}
        onChange={props.changeFunc}
        checked={props.checkedName}
      />
    </div>
  );
}

export default ClickOption;
