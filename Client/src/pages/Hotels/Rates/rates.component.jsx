import "./rates.component.styles.scss";
import star from '../../../assets/icons/star.svg';

function Rates({ categoryCode, reviewCount, rating }) {
  // Extract the number from categoryCode like "3EST" → 3
  const starCount = categoryCode 
    ? parseInt(categoryCode.replace("EST", ""), 10) 
    : 0;

  // Safety: clamp between 1 and 5 (in case of weird data)
  const safeStarCount = Math.max(1, Math.min(5, starCount || 3));

  return (
    <div className="reviews">
      <div className="stars">
        <h5>{rating || safeStarCount.toFixed(1)}</h5>
        <div className="rate-stars">
          {Array.from({ length: safeStarCount }).map((_, i) => (
            <img key={i} src={star} alt="star" />
          ))}
        </div>
      </div>
      <h4>{reviewCount || 0} reviews</h4>
    </div>
  );
}

export default Rates;