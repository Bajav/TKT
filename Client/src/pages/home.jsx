import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Home() {
  return (
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='brands'
      >
        <SwiperSlide className='brand'>slide 1</SwiperSlide>
        <SwiperSlide className='brand'>Slide 2</SwiperSlide>
        <div className="brand">slide 1</div>
      </Swiper>
    );
  }

export default Home