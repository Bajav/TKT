import { Swiper, SwiperSlide } from "swiper/react";
// import { useContext, useEffect } from "react";
// import axios from "axios";
// import styles
import "swiper/css";
import "./home.scss";
// import components
import LocationHeader from "../../components/Header/header";
import { Outlet } from "react-router-dom";
// import images
import skiing from "../../assets/images/skiing.jpg";
import umrah from "../../assets/images/umrah.jpg";
import brazil from "../../assets/images/brazil.jpg";
import gorrila from "../../assets/images/gorrila.jpg";
// import icons
import airlineTicket from "../../assets/icons/airline-ticket.png";
import community from "../../assets/icons/social-media.png";
import safari from "../../assets/icons/safari (1).png";
import resort from "../../assets/icons/resort.png";

function Home() {
  return (
    <main className="home">
      <Outlet />
      <LocationHeader />
      <div className="home-contents">
      <p>hey its <span>winter</span> <br /> treat yourself this season</p>

      <div
        className="items-list">
          <div className="item-to-do">
            <img src={skiing} alt="skiing" />
            <h1>go skiing in <br /> switizerland</h1>
          </div>
            <div className="item-to-do">
            <img src={skiing} alt="skiing" />
            <h1>go skiing in <br /> switizerland</h1>
          </div>
        {/* <SwiperSlide>
          <div className="item-to-do">
            <img src={umrah} alt="umrah" />
            <h1>go to umrah</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-to-do">
            <img src={brazil} alt="brazil" />
            <h1>visit brazil</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-to-do">
            <img src={gorrila} alt="gorrila" />
            <h1>go gorilla trekking</h1>
          </div>
        </SwiperSlide>   */}
        </div>
      </div>    
    </main>
  );
}

export default Home;