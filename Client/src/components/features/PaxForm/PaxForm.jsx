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
import { UiContext } from "../../context/ui.context";

function PaxForm() {
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([]);
  const [isRangeEnabled] = useState(true);

  const { bookedFlight } = useContext(FlightContext);
  const { setModel } = useContext(UiContext);
  console.log(bookedFlight.flightOffers);
  const array = [1];

  // Initialize passenger data
  useEffect(() => {
    const initialPassengers = array.map((i) => ({
      id: i,
      fName: "",
      lName: "",
      DOB: "",
      gender: "",
      email: "",
      phone: "",
      nationality: null,
      selectedCountry: null,
      docType: "",
      docNumber: "",
      docIssueDate: "",
      docExpiryDate: "",
    }));
    setPassengers(initialPassengers);
  }, []);

  // Generic handler for text inputs
  const handleChange = (passengerId, e) => {
    const { name, value } = e.target;
    setPassengers((prev) =>
      prev.map((pax) =>
        pax.id === passengerId ? { ...pax, [name]: value } : pax
      )
    );
  };

  // Handler for phone input
  const handlePhoneChange = (passengerId, phone) => {
    setPassengers((prev) =>
      prev.map((pax) =>
        pax.id === passengerId ? { ...pax, phone } : pax
      )
    );
  };

  // Handler for country selection
  const handleCountrySelect = (passengerId, country) => {
    setPassengers((prev) =>
      prev.map((pax) =>
        pax.id === passengerId
          ? { ...pax, selectedCountry: country, nationality: country || null }
          : pax
      )
    );
  };

  // Handler for gender selection
  const handleGenderChange = (passengerId, gender) => {
    setPassengers((prev) =>
      prev.map((pax) =>
        pax.id === passengerId ? { ...pax, gender } : pax
      )
    );
  };

  // Handler for document type selection
  const handleDocTypeChange = (passengerId, docType) => {
    setPassengers((prev) =>
      prev.map((pax) =>
        pax.id === passengerId ? { ...pax, docType } : pax
      )
    );
  };

  // Handler for DOB selection
  const handleDOBSelect = (passengerId, date) => {
    setPassengers((prev) =>
      prev.map((pax) =>
        pax.id === passengerId
          ? { ...pax, DOB: date?.toISOString().split("T")[0] }
          : pax
      )
    );
  };

  // Handler for document date range
  const handleDocDateRange = (passengerId, range) => {
    setPassengers((prev) =>
      prev.map((pax) =>
        pax.id === passengerId
          ? {
              ...pax,
              docIssueDate: range.start?.toISOString().split("T")[0],
              docExpiryDate: range.end?.toISOString().split("T")[0],
            }
          : pax
      )
    );
  };

  // Get dynamic placeholder based on document type
  const getDocNumberPlaceholder = (docType) => {
    if (!docType) return "Document Number";
    
    const type = docType.toLowerCase();
    if (type.includes("passport")) return "Passport Number";
    if (type.includes("id") || type.includes("identity")) return "ID Number";
    if (type.includes("driving") || type.includes("license")) return "License Number";
    return "Document Number";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clean up passenger data (remove UI-only fields)
    const formattedPassengers = passengers.map(({ selectedCountry, id, ...rest }) => rest);
    console.log("Passengers Data:", formattedPassengers);
    
    // setModel(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/bookflight",
        {
          formData: formattedPassengers,
          bookedFlight: bookedFlight.flightOffers,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error posting flight:", error);
    }
  };

  // Get passenger by ID
  const getPassenger = (id) => {
    return passengers.find((pax) => pax.id === id) || {};
  };

  return (
    <div className="paxFormContainer">
      <form className="paxForm" onSubmit={handleSubmit}>
        {array.map((i) => {
          const passenger = getPassenger(i);
          
          return (
            <div className="formContainer" key={i}>
              <h1>Passenger {i}</h1>
              
              <div className="flex-items">
                <FlexInput
                  labelName="first name"
                  value={passenger.fName || ""}
                  type="text"
                  placeholder="Input first name"
                  name="fName"
                  change={(e) => handleChange(i, e)}
                />
              </div>

              <FlexInput
                labelName="last name"
                value={passenger.lName || ""}
                type="text"
                placeholder="Input last name"
                name="lName"
                change={(e) => handleChange(i, e)}
              />

              <div className="flex-items">
                <DatePicker
                  placeholder="Date of Birth"
                  isRangePicker={false}
                  onDateSelect={(date) => handleDOBSelect(i, date)}
                />

                <GenderDropDown
                  selectedGender={passenger.gender}
                  onChange={(gender) => handleGenderChange(i, gender)}
                />
              </div>

              <FlexInput
                labelName="email"
                value={passenger.email || ""}
                type="email"
                placeholder="Input email address"
                name="email"
                change={(e) => handleChange(i, e)}
              />

              <div className="flex-items">
                <PhoneInput
                  international
                  defaultCountry="UG"
                  value={passenger.phone || ""}
                  onChange={(phone) => handlePhoneChange(i, phone)}
                />

                <CountryDropdown
                  selectedCountry={passenger.selectedCountry}
                  onSelect={(country) => handleCountrySelect(i, country)}
                />
              </div>

              <div className="flex-items">
                <DocumentTypeDropdown
                  selectedType={passenger.docType}
                  onChange={(docType) => handleDocTypeChange(i, docType)}
                />

                <FlexInput
                  labelName="document number"
                  value={passenger.docNumber || ""}
                  type="text"
                  placeholder={getDocNumberPlaceholder(passenger.docType)}
                  name="docNumber"
                  change={(e) => handleChange(i, e)}
                />
              </div>

              <DatePicker
                isRangePicker={true}
                enableRange={true}
                placeholder="Document Issue and Expiry Dates"
                onRangeSelect={(range) => handleDocDateRange(i, range)}
              />
            </div>
          );
        })}

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PaxForm;