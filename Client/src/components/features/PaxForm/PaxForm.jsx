import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    navigate("/")
  };

  return <form className="paxForm"></form>;
}

export default PaxForm;
