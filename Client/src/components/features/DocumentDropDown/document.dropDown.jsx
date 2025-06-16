import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import "./document.dropDown.styles.scss";

const DOCUMENT_TYPES = [
  "Passport",
  "National ID",
  "Driver’s License",
  "Visa",
  "Residence Permit",
  "Military ID",
  "Refugee Document",
];

function DocumentTypeDropdown({ selectedType, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleSelect = (type) => {
    onChange(type);
    setIsOpen(false);
  };

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
    <div className="document-dropdown" ref={dropdownRef}>
      <div
        className="dropdown-selected"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedType || "Select a document type"}
        <ChevronDown size={18} />
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {DOCUMENT_TYPES.map((type) => (
            <li
              key={type}
              className={`option-item ${
                selectedType === type ? "selected" : ""
              }`}
              onClick={() => handleSelect(type)}
            >
              {type}
              {selectedType === type && <Check size={16} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DocumentTypeDropdown;