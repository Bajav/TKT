import "./hotels.styles.scss";
import HotelForm from "../../components/Hotels/FormInputs/form/form.component";
import {Recentsearch,Swipers} from "../../components/Hotels/RecentSeaches/recentsearch.component";
import LocationHeader from "../../components/Header/header";
import { Outlet, useLocation } from "react-router-dom";
import { Fragment } from "react";

function Hotels() {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/hotels/results",
    "/hotels/rooms",
    "/hotels/bookhotel",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <Fragment>
      {!shouldHideLayout && (
        <div className="hotel-home">
          <LocationHeader />
          <HotelForm />
          <Recentsearch />
          <Swipers/>
        </div>
      )}
      <Outlet />
    </Fragment>
  );
}

export default Hotels;