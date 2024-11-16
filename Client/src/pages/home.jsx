import React from 'react'
import Header from '../components/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import Location from '../components/places/location';
import Loader from '../components/loader';
import 'swiper/css';
function Home() {
  return (
    <main className='home'>
        <Header />
        <h1>welcome dennin</h1>
        <div className="activites">
          <h2>Activities to do this summer.</h2>
          
          <Swiper
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
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
        <div className="toView">
          <h1>have you seen these?</h1>
          <div className="viewCards">
            <Loader loaderTag="Searching for flights"/>
            <div className="viewCard"></div>
          </div>
        </div>
    </main>
    );
  }

export default Home