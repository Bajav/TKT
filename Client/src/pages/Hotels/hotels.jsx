import "./hotels.styles.scss";
import HotelForm from "../../components/Hotels/FormInputs/form/form.component";
import { Recentsearch } from "../../components/Hotels/RecentSeaches/recentsearch.component";
import LocationHeader from "../../components/Header/header";
import { Outlet, useLocation } from "react-router-dom";
import { Fragment } from "react";
import hotelSearch from "../../data/searchdata/hotelsearch.json";
import hotelImg from '../../assets/images/HotelImages/1.jpg'

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
            {hotelSearch?.length > 0
              ? hotelSearch?.map((item, index) => {
                  return (
                    <div className="search" onClick={getSelected} key={index}>
                      <h5>location:{item.destination} </h5>
                      <h5>rooms:{item.rooms} </h5>
                      <h5>accommodationType :{item.accommodationType}</h5>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="visual-wrapper">
            <div className="hotel-img">
              <img src={hotelImg} alt="" />
            </div>
            <div className="text-wrapper">
              <h4>the hotel, london uk</h4>
              <p>the hotel is a hotel location in united kingdom</p>
            </div>

            {/* <div className="hotel-items"></div>
            <div className="hotel-items"></div>
            <div className="hotel-items high"></div> */}
          </div>
          {/* <Swipers/> */}
        </div>
      )}
      <Outlet />
    </Fragment>
  );
}

export default Hotels;
