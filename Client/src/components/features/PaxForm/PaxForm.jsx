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
        <FlexInput  labelName="" value={inputs.name || " "} type="" placeholder="" name="" change={handleChange} />
        <FlexInput  labelName="" value={inputs.name || " "} type="" placeholder="" name="" change={handleChange} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default PaxForm;
