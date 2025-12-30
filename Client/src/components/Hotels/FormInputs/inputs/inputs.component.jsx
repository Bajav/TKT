const hotelSearchInput = (props) => {
  return (
    <input
      required
      className={props.class}
      type="text"
      name={props.InputName}
      placeholder={props.placeholder}
      onChange={props.change}
      value={props.value}
      onFocus={() => setShowDropdown(true)}
      onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      autoComplete="off"
    />
  );
};
