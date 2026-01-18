import "./bookings.styles.scss";
import { useLocation } from "react-router-dom";
import { useState, Fragment } from "react";

function Bookings() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(1);
  const hideLayoutRoutes = ["/user/mybookings"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  const toggleTab = (i) => {
    setActiveTab(i);
  };
  return (
    <Fragment>
      <div className="bookings-page">
        <div className="tabz-container">
          <div className="tabz">
            <div
              className="tab-slider"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            />
            <div
              onClick={() => toggleTab(1)}
              className={activeTab === 1 ? "tab active" : "tab"}
            >
              flights
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={activeTab === 2 ? "tab active" : "tab"}
            >
            hotels
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={activeTab === 3 ? "tab active" : "tab"}
            >
             activities
            </div>
            <div
              onClick={() => toggleTab(4)}
              className={activeTab === 4 ? "tab active" : "tab"}
            >
              cars
            </div>
          </div>
          <div className="tabz-content">
            <div
              className={activeTab === 1 ? "content active-content" : "content"}
            >
                <p>this flights tab</p>
            </div>

               <div
              className={activeTab === 2 ? "content active-content" : "content"}
            >
                <p>this hotels tab</p>
            </div>

               <div
              className={activeTab === 3 ? "content active-content" : "content"}
            >
                <p>this activities tab</p>
            </div>

               <div
              className={activeTab === 4 ? "content active-content" : "content"}
            >
                <p>this cars tab</p>
            </div>

               {/* <div
              className={activeTab === 5 ? "content active-content" : "content"}
            >
                <p>this flights tab</p>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Bookings;
