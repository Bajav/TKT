import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexInput from "../../../props/FlexInput/FlexInput";

function PaxForm() {
  // define navigation
  const navigate = useNavigate();
  // defineState
  const [inputs, setInputs] = useState({});
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
    <form className="paxForm">
      <div className="names">
        <FlexInput
          name="fName"
          type="text"
          For="fName"
          labelName="first name"
          placeholder="enter first name"
        />
        <FlexInput
          name="lName"
          type="text"
          For="lName"
          labelName="last name"
          placeholder="enter last name"
        />
      </div>
      <div className="fulls">
        <FlexInput name="DOB" type="date" For="DOB" labelName="date of birth" />
        <FlexInput
          name="Nationality"
          type="text"
          For="Nationality"
          labelName="Nationality"
          placeholder="enter Nationality"
        />
        <FlexInput
          name="otherName"
          type="text"
          For="otherName"
          labelName="Other Names"
          placeholder="enter otehr names"
        />
        <h4>passport details</h4>
        <FlexInput
          name="IssuanceDate"
          type="date"
          For="Issuance date"
          labelName="IssuanceDate"
        />
        <FlexInput
          name="expiryDate"
          type="date"
          For="expiry date"
          labelName="expiry Date"
        />
        <FlexInput name="" type="" For="" labelName=" " placeholder="  " />
      </div>
      <div className="cell">
        <FlexInput name="" type="" For="" labelName=" " placeholder="  " />
        <FlexInput name="" type="" For="" labelName=" " placeholder="  " />
      </div>
      <FlexInput name="" type="" For="" labelName=" " placeholder="  " />
    </form>
  );
}

export default PaxForm;
