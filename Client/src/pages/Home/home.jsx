// home.jsx
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register plugins only once (outside the component)
gsap.registerPlugin(ScrollTrigger, SplitText);

// Import styles & assets
import "swiper/css";
import "./home.scss";

// Components
import LocationHeader from "../../components/Header/header";

// Images
import skiing from "../../assets/images/skiing.jpg";
import skyDiving from "../../assets/images/skyDving.jpg";
import umrah from "../../assets/images/umrah.jpg";
import kaba from "../../assets/images/kabba-nobg.png";
import gorrila from "../../assets/images/gorrila.jpg";
import gorrilaNoBG from "../../assets/images/gorillatrekking.png";

// Icons
import airlineTicket from "../../assets/icons/airline-ticket.png";
import community from "../../assets/icons/social-media.png";
import safari from "../../assets/icons/safari (1).png";
import resort from "../../assets/icons/resort.png";

function Home() {
  const listRef = useRef(null);

  // useGSAP(
  //   () => {
  //     // Wait for fonts to be fully loaded before creating SplitText
  //     document.fonts.ready.then(() => {
  //       // Create SplitText instance safely
  //       const split = new SplitText("#slider-text", {
  //         type: "chars,words,lines",
  //         autoSplit: true, // auto re-split on resize / late font load
  //       });

  //       // Animate words (staggered slide-in from top)
  //       gsap.from(split.words, {
  //         y: -200,
  //         opacity: 0,
  //         stagger: 0.05,
  //         ease: "power1.out",
  //         duration: 1.2,
  //         delay: 1,
  //       });

  //       // Animate quick links text
  //       gsap.from(".head-text", {
  //         x: -100,
  //         opacity: 0,
  //         ease: "power1.inOut",
  //         stagger: 0.3, // reduced from 1.5s — more natural feel
  //         delay: 2,
  //       });

  //       // Optional cleanup: revert SplitText on unmount / re-run
  //       return () => {
  //         split.revert();
  //       };
  //     });
  //   },
  //   { scope: listRef } // scope animations to the container ref
  // );

  return (
    <main className="home">
      <Outlet />
      <LocationHeader />

      <div className="home-contents">
        <p>
          hey its <span>winter</span> <br /> treat yourself this season
        </p>

        <div className="items-list" ref={listRef}>
          <div className="item-to-do">
            <img src={skiing} alt="skiing" />
            <h1 id="slider-text">
              go skiing in <br /> switzerland
            </h1>
          </div>

          <div className="item-to-do">
            <img src={skyDiving} alt="sky diving" />
            <h1>
              go sky diving in <br /> dubai
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
          <div className="places-to">
            <div className="place-to-visit">
              <div className="place-img">
                <img className="BackGround" src={umrah} alt="umrah" />
                <h4 className="head-text">umrah</h4>
                <img className="foreGround" src={kaba} alt="kaaba" />
              </div>
            </div>

            <div className="place-to-visit">
              <div className="place-img">
                <img className="BackGround" src={gorrila} alt="gorilla" />
                <h4 className="head-text">gorilla trekking</h4>
                <img
                  className="foreGround gorrila"
                  src={gorrilaNoBG}
                  alt="gorilla trekking no background"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;