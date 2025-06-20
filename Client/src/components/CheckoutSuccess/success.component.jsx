import "./success.styles.scss";
import successIcon from "../../assets/icons/white-heavy-check-mark-svgrepo-com.svg";
import {DotLottieReact} from '@lottiefiles/dotlottie-react';

function SuccessfulPayment() {
  return (
    <div className="success-payment-container">
      <div className="text-container">
        <h3>payment successful</h3>
        <p>
          Flight successfully booked you can find your <br /> flight ticket in the
          email or check your <br /> console to see ticket.
        </p>
      </div>
      <div className="success-icon-anime">
         <DotLottieReact
      src="https://lottie.host/6d11ce08-378c-4029-ab17-f194ae45a9ad/6kFfz7gcJD.lottie"
      autoplay
    />
      </div>
      <button>view ticket</button>
    </div>
  );
}

export default SuccessfulPayment;
