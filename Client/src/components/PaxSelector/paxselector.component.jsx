import { useState } from "react";

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
    const { adults, children, rooms } = value;
    return `${adults} adult${adults > 1 ? "s" : ""}, ${
      children
    } child${children !== 1 ? "ren" : ""}, ${rooms} room${
      rooms > 1 ? "s" : ""
    }`;
  };

  return (
    <div className="guests-selector">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>Guests: {getSummary()}</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {["adults", "children", "rooms"].map((type) => (
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
                    (type === "rooms" && value.rooms <= 1) ||
                    (type === "children" && value.children <= 0)
                  }
                >
                  -
                </button>

                <span>{value[type]}</span>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increment(type);
                  }}
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