import React from "react";

function ClickOption(props) {
  return (
<div className="flex flex-col items-center justify-center">
  <label className="relative flex flex-col items-center justify-center cursor-pointer">
    <span className="z-20 mb-2">{props.label}</span> 
    <input
      type="checkbox"
      name={props.checkName}
      onChange={props.changeFunc}
      checked={props.checkedName}
      className="absolute w-full h-full opacity-0 cursor-pointer"
    />
  </label>
</div>

  );
}

export default ClickOption;
