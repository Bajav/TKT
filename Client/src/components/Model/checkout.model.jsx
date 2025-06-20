import FlexInput from "../../props/FlexInput/FlexInput";
import DatePicker from "../flightSearch/Calender/calender.component";
import './checkout.styles.scss';

function Checkout() {
  return (
    <div className="main-container">
      <form className="form-container">
        <FlexInput
          labelName="card holder"
          value={""}
          type="text"
          placeholder="enter card holder names"
          name={""}
          change={() => {}}
        />
        <FlexInput
          labelName="card number"
          value={""}
          type=""
          placeholder="enter card number"
          name={""}
          change={() => {}}
        />
        <div className="flexed">
          <FlexInput
            labelName="CVC"
            value={""}
            type="text"
            placeholder="enter cVC"
            name={""}
            change={() => {}}
          />
            <DatePicker
            placeholder="enter card expiry date"
            isRangePicker={false}
            onDateSelect={()=>{}}
          />
        </div>
        <div className="btn-container">
          <button className="cancelBtn">cancel</button>
          <button className="paymentBtn">pay{"$300"}</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
