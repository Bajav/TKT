import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import skyDiver from '../../assets/images/skyDving.jpg';

export default function App() {
  return (
    <div className='swipes'>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={skyDiver} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={skyDiver} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={skyDiver} alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
