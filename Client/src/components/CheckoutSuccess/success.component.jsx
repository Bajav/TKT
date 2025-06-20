import "./success.styles.scss";
import successIcon from '../../assets/icons/white-heavy-check-mark-svgrepo-com.svg'

function SuccessfulPayment() {
  return (
    <div className="success-payment-container">
      <h3>payment successful</h3>
      <p>
        Flight successfully booked you can find your flight ticket in the email
        or check your console to see ticket.
      </p>
      <div className="success-icon-anime">
        <img src={successIcon} alt="success-checkMark" />
      </div>
      <button>view ticket</button>
    </div>
  );
}

export default SuccessfulPayment;
