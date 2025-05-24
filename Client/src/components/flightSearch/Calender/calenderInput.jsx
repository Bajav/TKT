// import './Calender.css';

function Calender(props) {
  const {
    label,
    labelName,
    inputType,
    inputName,
    ID,
    change,
    value,
    flightType,
  } = props;

  const calenderClass =
    flightType === "oneWay"
      ? "calender oneWayStyle flexInput"
      : "calender flexInput";

  return (
    <div className={calenderClass}>
      <label htmlFor={label}>{labelName}</label>
      <input
        required
        type={inputType}
        name={inputName}
        id={ID}
        format="yyyy-MM-dd"
        onChange={change}
        value={value}
      />
    </div>
  );
}

export default Calender;
