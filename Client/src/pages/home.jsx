import React, { useEffect, useState } from "react";
// import axios from "axios";

function Home() {
  // useState
  // const [count,setCount] = useState(1);
  const [inputs, setInputs] = useState({});
  
  const onChange =(e)=>
    {
      const name = e.target.name;
      const value = e.target.value;
      setInputs(values=>({...values,[name]: value}));
    }
  
  return (
    <form className="form">
      <input type="text" name="fName" placeholder="fName" value={inputs.fName ||""} required  onChange={onChange} autoComplete="off"/>
      <input type="text" name="lName" placeholder="lName" value={inputs.lName ||""} required onChange={onChange} autoComplete="off" />
      <input type="text" name="password" placeholder="password" value={inputs.password ||""} required onChange={onChange} autoComplete="off" />
      
    </form>
  );
}

export default Home;
{/* <button onClick={e=>{setCount(count +1)}}>add</button>
<h1>{count}</h1>
<button onClick={e=>{setCount(count -1)}}>minus</button> */}
// ( values === "multicity" ?
//   <h1>value is multicity</h1>:
// <div className="testing">
//   <select onClick={e=>{ setValue(e.target.value); console.log(e.target.value)}} name="tripType" id="tripType">
//     <option  value="oneway">one way</option>
//     <option  value="roundTrip">roundTrip</option>
//     <option  value="multicity">multicity</option>
//   </select>
//   <button onClick={e=>{console.log("got clicked")}}>click me</button>
// </div>  
//   )
