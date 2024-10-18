import React,{useState} from 'react'
import Calender from './flightSearch/calenderInput';

function FlightsForm() {

  const [inputs, setInputs] = useState({});
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values =>({...values,[name]:value}));
  };  
const handleSubmit =()=>{
  e.preventDefault();
  console.log(inputs);
}

const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
});

const increment = (type) => {
    setPassengers(prev => ({
        ...prev,
        [type]: prev[type] + 1
    }));
};

const decrement = (type) => {
    setPassengers(prev => ({
        ...prev,
        [type]: prev[type] > 0 ? prev[type] - 1 : 0
    }));
};

const getTotalPassengers = () => {
    return passengers.adults + passengers.children + passengers.infants;
};

const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
};

return (
  <div class="cutout-box">
      <form action="/flights" onSubmit={handleSubmit}>

  <div className="flightSearch">
    <div className='flightType-btns'>
          <select name='flight-type'>
            <option value="oneWay">one way</option>
            <option value="roundTrip">round trip</option>
          </select>

          <div className="check">
            <label htmlFor="multicity">multicity</label>
          <input type="checkbox" name="multicity"/>
          </div>
      </div>

    <div className='flexInput'>
      <label htmlFor="from">from</label>
      <input type="text" name="origin" placeholder='enter origin' onChange={handleChange} value={inputs.origin || ""} />
      </div>
      <div className='flexInput'>
      <label htmlFor="to">to</label>
      <input type="text" name="destination" placeholder='enter destination' onChange={handleChange} value={inputs.destination || ""} />
    </div>
  </div>
    <div className='calendersUI'>
        <Calender label="date Of departure" labelName="date Of departure"  inputType="date" inputName="departureDate" change={handleChange} value={inputs.departureDate || ""} />
        <Calender label="date Of Return" labelName="date Of Return"  inputType="date" inputName="returnDate" change={handleChange} value={inputs.returnDate || ""}/>
    </div>

    <div className='seatType'>
     <div className="passenger-selector">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <span>Passengers: {getTotalPassengers()}</span>
                <span className="arrow">{isDropdownOpen ? '▲' : '▼'}</span>
            </div>

            {isDropdownOpen && (
                <div className="dropdown-content">
                    <div className="passenger-type">
                        <div className="passenger-label">Adults</div>
                        <button onClick={(e) => {decrement('adults'); e.preventDefault();}} disabled={passengers.adults <= 1}>-</button>
                        <span>{passengers.adults}</span>
                        <button onClick={(e) =>{ increment('adults'); e.preventDefault();}}>+</button>
                    </div>
                    <div className="passenger-type">
                        <div className="passenger-label">Children</div>
                        <button onClick={(e) => {decrement('children'); e.preventDefault();}} disabled={passengers.children <= 0}>-</button>
                        <span>{passengers.children}</span>
                        <button onClick={(e) => {increment('children'); e.preventDefault();}}>+</button>
                    </div>
                    <div className="passenger-type">
                        <div className="passenger-label">Infants</div>
                        <button onClick={(e) => {decrement('infants'); e.preventDefault();}} disabled={passengers.infants <= 0}>-</button>
                        <span>{passengers.infants}</span>
                        <button onClick={(e) =>{ increment('infants'); e.preventDefault();}}>+</button>
                    </div>
                </div>
            )}
    </div>
    <div className='seatClass'>
        <label htmlFor="seatClass"> seat class</label>
        <select name="seatClass" id="seatClass">
            <option value="economy_class">economy</option>
            <option value="economy_premium">economy premium</option>
            <option value="business_class">bussiness</option>
            <option value="first_class">first_class</option>
        </select>
    </div>
    </div>
    

      <button className='btn-submit'  type="submit" >search</button>
      </form>
  </div>
)
}

export default FlightsForm;