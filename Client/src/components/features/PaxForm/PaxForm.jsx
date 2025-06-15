import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexInput from "../../../props/FlexInput/FlexInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import './PaxForm.scss';

function PaxForm() {
  // define navigation
  const navigate = useNavigate();
  // defineState
  const [inputs, setInputs] = useState({

  });
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

  return (
    <div className="paxFormContainer">
      <h1>pax 01</h1>
      <form className="paxForm">
        <FlexInput  labelName="first name" value={inputs.fName || " "} type="text" placeholder="input first name" name="fName" change={handleChange} />
        <FlexInput  labelName="last name" value={inputs.lName || " "} type="text" placeholder="input last name" name="lName" change={handleChange} />
        <FlexInput  labelName="email" value={inputs.email || " "} type="email" placeholder="input email address" name="email" change={handleChange} />
        <FlexInput  labelName="phone number" value={inputs.pNumber || " "} type="tel" placeholder="input phone number" name="pNumber" change={handleChange} />
        <FlexInput  labelName="gender" value={inputs.gender || " "} type="" placeholder="input gender" name="gender" change={handleChange} />
        <FlexInput  labelName="date of birth" value={inputs.DOB || " "} type="date" placeholder="input date of birth" name="DOB" change={handleChange} />
        <FlexInput  labelName="Docoment Type" value={inputs.docType || " "} type="text" placeholder="input docment type" name="docType" change={handleChange} />
        <FlexInput  labelName="document number" value={inputs.docNumber || " "} type="text" placeholder="input document number" name="docNumber" change={handleChange} />
        <FlexInput  labelName="document issuance country" value={inputs.issuanceCountry || " "} type="text" placeholder="input issuance country" name="issuanceCountry" change={handleChange} />
        <FlexInput  labelName="date of issuance" value={inputs.dateIssuance || " "} type="date" placeholder="input date issuance" name="dateIssuance" change={handleChange} />
        <FlexInput  labelName="date of expiry" value={inputs.dateExpiry || " "} type="date" placeholder="input date dateExpiry" name="dateExpiry" change={handleChange} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default PaxForm;
