import "./rates.component.styles.scss";
import star from '../../../assets/icons/star.svg';

function Rates({ rateNum, reviewCount,rating  }) {
  return (
    <div className="reviews">
      <div className="stars">
        <h5>{rating}</h5>
        <div className="rate-stars" />
        {Array.from({ length: Math.min(rateNum, 5) }).map((_, i) => (
          <img key={i} src={star} alt="star" />
        ))}
      </div>
      <h4>{reviewCount} reviews</h4>
    </div>
  );
}

export default Rates;
