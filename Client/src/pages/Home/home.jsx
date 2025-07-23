import { Swiper, SwiperSlide } from "swiper/react";
// import { useContext, useEffect } from "react";
// import axios from "axios";
// import styles
import "swiper/css";
import "./home.scss";
// import components
import LocationHeader from "../../components/Header/header";
import Location from "../../components/places/location";
import { Outlet } from "react-router-dom";
import DatePicker from "../../components/flightSearch/Calender/calender.component";

function Home() {
  return (
    <main className="home">
      <Outlet />
      <LocationHeader />
      <h1>welcome dennin</h1>
      <div className="activites">
        <h2>Activities to do this summer.</h2>

        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          className="activity-rail"
        >
          <SwiperSlide>
            <div className="activity">
              <Location />
              <h1>sky diving</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="activity">
              <Location />
              <h1>sky diving</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="activity">
              <Location />
              <h1>sky diving</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="activity">
              <Location />
              <h1>sky diving</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <DatePicker
          monthLabel="Choose Month"
          yearLabel="Pick Year"
          rangePrompt="Pick return journey"
          isRangePicker={true}
          enableRange={true}
          onRangeSelect={({ start, end }) => {
            console.log("Range selected:", start, end);
          }}
        />
        {/* <Alert img={Succes} alertText="Email address changed successfully"/> */}
      </div>
    </main>
  );
}

export default Home;
