import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexInput from "../../../props/FlexInput/FlexInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import GenderDropDown from "../GenderDropDown/genderDromDown.component";
import CountryDropdown from "../CountryDropDown/country.drop.down";
import DocumentTypeDropdown from "../DocumentDropDown/document.dropDown";
import { FlightCalendar } from "../../flightSearch/Calender/newCalender";
import "./PaxForm.scss";

function PaxForm() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phone, setPhone] = useState("");
  const [isRangeEnabled] = useState(true); // Always use range picker for document dates

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullForm = {
      ...inputs,
      phone,
      nationality: selectedCountry?.code || null,
    };
    console.log("Submitted Data:", fullForm);
    navigate("/");
  };

  const handleDOBSelect = (date) => {
    setInputs((prev) => ({ ...prev, DOB: date }));
  };

  const handleDocRangeSelect = (range) => {
    setInputs((prev) => ({
      ...prev,
      docIssueDate: range.start,
      docExpiryDate: range.end,
    }));
  };

  return (
    <div className="paxFormContainer">
      <h1>pax 01</h1>
      <form className="paxForm" onSubmit={handleSubmit}>
        <div className="flex-items">
          <FlexInput
            labelName="first name"
            value={inputs.fName || ""}
            type="text"
            placeholder="input first name"
            name="fName"
            change={handleChange}
          />
          <FlexInput
            labelName="other name"
            value={inputs.oName || ""}
            type="text"
            placeholder="input other name"
            name="oName"
            change={handleChange}
          />
        </div>

        <FlexInput
          labelName="last name"
          value={inputs.lName || ""}
          type="text"
          placeholder="input last name"
          name="lName"
          change={handleChange}
        />

        <div className="flex-items">
          <FlightCalendar
            onDateSelect={handleDOBSelect}
            isRangePicker={false}
            placeholder="Select Date of Birth"
          />

          <GenderDropDown
            selectedGender={inputs.gender}
            onChange={(gender) => setInputs((prev) => ({ ...prev, gender }))}
          />
        </div>

        <FlexInput
          labelName="email"
          value={inputs.email || ""}
          type="email"
          placeholder="input email address"
          name="email"
          change={handleChange}
        />

        <div className="flex-items">
          <PhoneInput
            international
            defaultCountry="UG"
            value={phone}
            onChange={setPhone}
          />

          <CountryDropdown
            selectedCountry={selectedCountry}
            onSelect={setSelectedCountry}
          />
        </div>

        <DocumentTypeDropdown
          selectedType={inputs.docType}
          onSelect={(docType) => setInputs((prev) => ({ ...prev, docType }))}
        />

        <FlexInput
          labelName="document number"
          value={inputs.docNumber || ""}
          type="text"
          placeholder="input document number"
          name="docNumber"
          change={handleChange}
        />

        <FlightCalendar
          onRangeSelect={handleDocRangeSelect}
          isRangePicker={true}
          placeholder="Select Issue and Expiry Date"
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default PaxForm;