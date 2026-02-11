import "./hotels.styles.scss";
import HotelForm from "../../components/Hotels/FormInputs/form/form.component";
import {Recentsearch} from "../../components/Hotels/RecentSeaches/recentsearch.component";
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
    const getSelected = (index) => {
    const selectedSearch = searchData[index];
    // setFormData(selectedSearch);
    console.log(index, selectedSearch);
  };
  return (
    <Fragment>
      {!shouldHideLayout && (
        <div className="hotel-home">
          <LocationHeader />
          <HotelForm />
               <div className="searched-wrapper">
              {searchData?.length > 0
                ? searchData?.map((item, index) => {
                    return (
                      <div
                        className="search"
                        onClick={getSelected}
                        key={index}
                      >
                        <h5>origin:{item.origin} </h5>
                        <h5>destination:{item.destination} </h5>
                        <h5>{item.flightType}</h5>
                      </div>
                    );
                  })
                : null}
            </div>
          {/* <Swipers/> */}
        </div>
      )}
      <Outlet />
    </Fragment>
  );
}

export default Hotels;