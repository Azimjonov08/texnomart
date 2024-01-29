import "./Hero.scss"
// import imgs
import HeroImg1 from "../../assets/img/hero-slider.png"
// import swipe
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { content } from "../../localization/content";

function Hero({lang}) {
    return(
        <>

      
         <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        <SwiperSlide>
          <img src={HeroImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroImg1} alt="" />
        </SwiperSlide>
      </Swiper>
        </>
    )
}

export default Hero