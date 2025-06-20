import { useContext } from "react";
import DatePicker from "../flightSearch/Calender/calender.component";
import "./checkout.styles.scss";
import { UiContext } from "../context/ui.context";

function Checkout() {

    const {setModel} = useContext(UiContext)
  return (
    <div className="main-container">
      <form className="form-container">
        <div className="card-input">
          <label>card holder</label>
          <input
            name="holderDetails"
            value={""}
            placeholder="enter card holder names"
            type="text"
            onChange={() => {}}
          />
        </div>

        <div className="card-input">
          <label>card number</label>
          <input
            name="cardNumber"
            value={""}
            placeholder="enter card number"
            type="text"
            onChange={() => {}}
          />
        </div>

        <div className="flexed">
          <div className="card-input">
            <label>cvc</label>
            <input
              name="cvc"
              value={""}
              placeholder="enter cvc"
              type="text"
              onChange={() => {}}
            />
          </div>
          <div className="card-input">
            <label>expiry date</label>
            <DatePicker
              placeholder="enter card expiry date"
              isRangePicker={false}
              onDateSelect={() => {}}
            />
          </div>
        </div>
        <div className="btn-container">
          <button className="cancelBtn" onClick={()=>setModel(true)}>cancel</button>
          <button className="paymentBtn">pay{"$300"}</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
