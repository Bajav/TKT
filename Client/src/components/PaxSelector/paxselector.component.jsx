import { useState } from "react";
import './paxselector.styles.scss';
const GuestsSelector = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const increment = (type) => {
    onChange({
      ...value,
      [type]: value[type] + 1,
    });
  };

  const decrement = (type) => {
    onChange({
      ...value,
      [type]:
        type === "adults" || type === "rooms"
          ? Math.max(1, value[type] - 1)
          : Math.max(0, value[type] - 1),
    });
  };

  const getSummary = () => {
    const { adults, children } = value;
    const guests = adults + children;

    return `${guests} guest${
      guests > 1 ? "s" : ""
    }`;
  };

  return (
    <div className="guests-selector">
      <div className="pax-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{getSummary()}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="pax-content">
          {["adults", "children"].map((type) => (
            <div className="guest-type" key={type}>
              <div className="guest-label">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </div>

              <div className="pax">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decrement(type);
                  }}
                  disabled={
                    (type === "adults" && value.adults <= 1) ||
                    (type === "children" && value.children <= 0)
                  }
                  className="pax-btn"
                >
                  -
                </button>

                <span>{value[type]}</span>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increment(type);
                  }}
                  className="pax-btn"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuestsSelector;
