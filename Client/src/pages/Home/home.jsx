import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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
import kaba from "../../assets/images/kabba-nobg.png";
import brazil from "../../assets/images/brazil.jpg";
import gorrila from "../../assets/images/gorrila.jpg";
// import icons
import airlineTicket from "../../assets/icons/airline-ticket.png";
import community from "../../assets/icons/social-media.png";
import safari from "../../assets/icons/safari (1).png";
import resort from "../../assets/icons/resort.png";

function Home() {
const listRef = useRef(null);

// const { scrollXProgress } = useScroll({
//   container: listRef,
// });

// // image moves slower than scroll
// const x = useTransform(scrollXProgress, [0, 2], ["-0%", "10%"]);

  return (
    <main className="home">
      <Outlet />
      <LocationHeader />
      <div className="home-contents">
        <p>
          hey its <span>winter</span> <br /> treat yourself this season
        </p>
        <div className="items-list"  ref={listRef}>
          <div className="item-to-do">
            <motion.img  src={skiing} alt="skiing" />
            <h1>
              go skiing in <br /> switizerland
            </h1>
          </div>
          <div className="item-to-do">
            <motion.img  src={skiing} alt="skiing" />
            <h1>
              go skiing in <br /> switizerland
            </h1>
          </div>
        </div>
        <div className="quick-links-wrapper">
          <h5>quick links</h5>
          <div className="quick-links">
            <div className="quick-link">
              <h4>my flights</h4>
              <div className="link-icon">
                <img src={airlineTicket} alt="airline ticket" />
              </div>
            </div>
            <div className="quick-link">
              <h4>my hotels</h4>
              <div className="link-icon">
                <img src={resort} alt="resort" />
              </div>
            </div>
            <div className="quick-link">
              <h4>my community</h4>
              <div className="link-icon">
                <img src={community} alt="community" />
              </div>
            </div>
            <div className="quick-link">
              <h4>my activities</h4>
              <div className="link-icon">
                <img src={safari} alt="safari" />
              </div>
            </div>
          </div>
        </div>
        {/* places to visit */}
        <div className="places-to-visit-wrapper">
          <h5>packages for only you</h5>
          <div className="place-to-visit">
            <div className="place-img">
              <img className="BackGround" src={umrah} alt="umrah" />
            <h4>umrah</h4>
              <img className="foreGround" src={kaba} alt="umrah" />

            </div>
          
          </div>

          <div className="place-to-visit">
            <div className="place-img">
              <img src={umrah} alt="umrah" />
            </div>
            <h4>umrah</h4>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
