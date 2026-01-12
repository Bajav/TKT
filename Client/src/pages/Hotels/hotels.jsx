import "./hotels.styles.scss";
import HotelForm from "../../components/Hotels/FormInputs/form/form.component";
import LocationHeader from "../../components/Header/header";
import { Outlet, useLocation } from "react-router-dom";
import { Fragment } from "react";

function Hotels() {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/hotels/results",
    "/hotels/rooms",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <Fragment>
      {!shouldHideLayout && (
        <div className="hotel-home">
          <LocationHeader />
          <HotelForm />
        </div>
      )}
      <Outlet />
    </Fragment>
  );
}

export default Hotels;