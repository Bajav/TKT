import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexInput from "../../../props/FlexInput/FlexInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import 'react-phone-number-input/style.css'
import GenderDropDown from "../GenderDropDown/genderDromDown.component";
import CountryDropdown from "../CountryDropDown/country.drop.down";
import "./PaxForm.scss";
import { FlightCalendar } from "../../flightSearch/Calender/newCalender";

function PaxForm() {
  // define navigation
  const navigate = useNavigate();
  // defineState
  const [inputs, setInputs] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isRangeEnabled, setIsRangeEnabled] = useState(false);
  // handle form changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  // handle form submits
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleDepartureSelect = (date) => {
    setDepartureDate(date); // optional, if you want separate state
    setInputs((prev) => ({
      ...prev,
      departureDate: date,
    }));
  };

  const handleReturnRangeSelect = (range) => {
    setReturnDate(range);
    setInputs((prev) => ({
      ...prev,
      departureDate: range.start,
      returnDate: range.end,
    }));
  };

  return (
    <div className="paxFormContainer">
      <h1>pax 01</h1>
      <form className="paxForm">
        <div className="flex-items">
        <FlexInput
          labelName="first name"
          value={inputs.fName || " "}
          type="text"
          placeholder="input first name"
          name="fName"
          change={handleChange}
        />
          <FlexInput
          labelName="other name"
          value={inputs.oName || " "}
          type="text"
          placeholder="input other name"
          name="oName"
          change={handleChange}
        />
        </div>
        <FlexInput
          labelName="last name"
          value={inputs.lName || " "}
          type="text"
          placeholder="input last name"
          name="lName"
          change={handleChange}
        />
        <FlexInput
          labelName="email"
          value={inputs.email || " "}
          type="email"
          placeholder="input email address"
          name="email"
          change={handleChange}
        />
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="UG"
          // value={value}
          // onChange={setValue}
        />
        <GenderDropDown
          selectedGender={setInputs.gender}
          onChange={(gender) => setInputs((prev) => ({ ...prev, gender }))}
        />
          <FlexInput
          labelName="date of birth"
          value={inputs.docNumber || " "}
          type="date"
          placeholder="select Date of birth"
          name="DOB"
          change={handleChange}
        />
        <FlexInput
          labelName="Docoment Type"
          value={inputs.docType || " "}
          type="text"
          placeholder="input docment type"
          name="docType"
          change={handleChange}
        />
        <CountryDropdown
          selectedCountry={selectedCountry}
          onSelect={setSelectedCountry}
        />
        <FlexInput
          labelName="document number"
          value={inputs.docNumber || " "}
          type="text"
          placeholder="input document number"
          name="docNumber"
          change={handleChange}
        />
        <FlightCalendar
          onDateSelect={handleDepartureSelect}
          onRangeSelect={handleReturnRangeSelect}
          isRangePicker={isRangeEnabled}
          placeholder="Select date of birth"
        />
        <FlexInput
          labelName="date of expiry"
          value={inputs.dateExpiry || " "}
          type="date"
          placeholder="input date dateExpiry"
          name="dateExpiry"
          change={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default PaxForm;
