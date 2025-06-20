import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FlexInput from "../../../props/FlexInput/FlexInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import GenderDropDown from "../GenderDropDown/genderDromDown.component";
import CountryDropdown from "../CountryDropDown/country.drop.down";
import DocumentTypeDropdown from "../DocumentDropDown/document.dropDown";
import { FlightContext } from "../../context/flightSearch.context";
import DatePicker from "../../flightSearch/Calender/calender.component";
import "./PaxForm.scss";
import axios from "axios";

function PaxForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phone, setPhone] = useState("");
  const [isRangeEnabled] = useState(true); 

  const { bookedFlight } = useContext(FlightContext);
  console.log(bookedFlight.flightOffers);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullForm = {
      ...inputs,
      phone,
      nationality: selectedCountry?.code || null,
    };
    console.log(fullForm);
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/getFlightOrder",
    //     {
    //       formData: fullForm,
    //       bookedFlight: bookedFlight.flightOffers,
    //     }
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error posting flight:", error);
    // }
  };

  // fecth flight order
  useEffect(() => {}, []);
  const handleDOBSelect = (date) => {
    setInputs((prev) => ({
      ...prev,
      DOB: date?.toISOString().split("T")[0], // YYYY-MM-DD
    }));
  };

  const handleDocDateRange = (range) => {
    setInputs((prev) => ({
      ...prev,
      docIssueDate: range.start?.toISOString().split("T")[0],
      docExpiryDate: range.end?.toISOString().split("T")[0],
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
          <DatePicker
            placeholder="Select Date of Birth"
            isRangePicker={false}
            onDateSelect={handleDOBSelect}
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

        <div className="flex-items">
          <DocumentTypeDropdown
            selectedType={inputs.docType}
            onChange={(docType) => setInputs((prev) => ({ ...prev, docType }))}
          />

          <FlexInput
            labelName="document number"
            value={inputs.docNumber || ""}
            type="text"
            placeholder="input document number"
            name="docNumber"
            change={handleChange}
          />
        </div>

        <DatePicker
          isRangePicker={true}
          enableRange={true}
          placeholder="Select Document Issue and Expiry Dates"
          onRangeSelect={handleDocDateRange}
        />

        <button className="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default PaxForm;
