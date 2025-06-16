import{ useState } from "react";
import "./countryDropDown.styles.scss";

const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Uganda", code: "UG" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

const CountryDropdown = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (country) => {
    setSelected(country);
    onSelect && onSelect(country);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="country-dropdown">
      <div
        className="dropdown-header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected ? `${selected.name} (${selected.code})` : "Select country"}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-body">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search countries..."
          />
          <ul className="dropdown-list">
            {filtered.map((country) => (
              <li
                key={country.code}
                onClick={() => handleSelect(country)}
                className="dropdown-item"
              >
                {country.name} ({country.code})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
