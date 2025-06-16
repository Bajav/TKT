import "./dropdown.styles.scss";
import { useState,useRef,useEffect } from "react";


const GenderDropDown = ({ onChange, selectedGender }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Male", "Female", "Other"];
  const dropdownRef = useRef(null);

  const handleSelect = (gender) => {
    onChange(gender);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="gender-dropdown" ref={dropdownRef}>
      <div
        className="dropdown-input"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedGender || "Select gender"}
        {/* <span className="arrow">{isOpen ? "▲" : "▼"}</span> */}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((gender) => (
            <li key={gender} onClick={() => handleSelect(gender)}>
              {gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenderDropDown;
