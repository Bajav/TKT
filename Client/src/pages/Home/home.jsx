import { Swiper, SwiperSlide } from 'swiper/react';
// import styles
import 'swiper/css';
import './home.scss';
// import components
import LocationHeader from '../../components/Header/header';
import Location from '../../components/places/location';
import Alert from '../../components/features/Error&Sucess/alert.component';
import Succes from '../../assets/icons/white-heavy-check-mark-svgrepo-com.svg';

function Home() {
  return (
    <main className='home'>
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
        <Alert img={Succes} alertText="form submitted successfully"/>
    </main>
    );
  }

export default Home