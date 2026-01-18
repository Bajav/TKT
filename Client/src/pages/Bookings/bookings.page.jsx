import "./bookings.styles.scss";
import { useLocation } from "react-router-dom";
import { useState, Fragment } from "react";

function Bookings() {
  const location = useLocation();
  const [active, setActive] = useState(1);
  const hideLayoutRoutes = ["/user/mybookings"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  return (
    <Fragment>
      {!shouldHideLayout && <div className="bookings-page">Bookings</div>}
    </Fragment>
  );
}

export default Bookings;
