import "./recentsearch.styles.scss";
import recentSearches from "../../../data/recents.data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const Recentsearch = () => {
  return (
    <div className="search-items">
      {recentSearches.map((item, index) => (
        <div className="search-item" key={item.id ?? index}>
          <img
            className="search-item-image"
            src={item.imgUrl ?? ""}
            alt={item.placeName ?? "recent search"}
            loading="lazy"
          />
          {/* <h4 className="item-name">{item.placeName}</h4> */}
        </div>
      ))}
    </div>
  );
};

// const Swipers = () => {
//   return (
//     <Swiper
//       direction={"vertical"}
//       effect={"fade"}
//       loop={true}
//       speed={800}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       modules={[Autoplay, Pagination, EffectFade]}
//       pagination={{
//         clickable: true,
//       }}
//       centeredSlides={true}
//       slidesPerView={1}
//       className="mySwiper"
//     >
//       {recentSearches.map((item, index) => (
//         <SwiperSlide className="slides-item" key={item.id ?? index}>
//           <img
//             className="slide-image"
//             src={item.imgUrl ?? ""}
//             alt={item.placeName ?? "recent search"}
//             loading="lazy"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
export { Recentsearch };
