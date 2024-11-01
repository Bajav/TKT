import React from 'react'
import Header from '../components/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import Location from '../components/places/location';
import 'swiper/css';
function Home() {
  return (
    <main className='home'>
        <Header />
        <h1>welcome dennin</h1>
        <div className="activites">
          <h2>Activities to do this summer.</h2>
          <div className="activity-rail">

            <div className="activity">
            <Location />
            <h1>sky diving</h1>
            </div> 
            {/* <div className="activity">
            <Location />
            <h1>sky diving</h1>
            </div>  */}

          </div>
          
        </div>
    </main>
    );
  }

export default Home