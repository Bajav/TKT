import "./countryDropDown.styles.scss";

import { useState, useEffect, useRef } from "react";
import countryList from "./countryList"; 
import "./CountryDropdown.styles.scss";

const CountryDropdown = ({ selectedCountry, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (country) => {
    onSelect(country);
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="country-dropdown" ref={dropdownRef}>
      <label htmlFor="country">Country</label>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedCountry
          ? `${selectedCountry.name} (${selectedCountry.code})`
          : "Select a country"}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {countryList.map((country) => (
            <li
              key={country.code}
              onClick={() => handleSelect(country)}
              className="dropdown-item"
            >
              {country.name} ({country.code})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
