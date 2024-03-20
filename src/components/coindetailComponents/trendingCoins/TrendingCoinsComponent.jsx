import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import {Navigation } from 'swiper/modules';
import TrendingCard from './TrendingCard';

export default function TrendingCoinsComponent() {
  return (
    <div className='my-3'>
      <p className='text-lg font-semibold text-gray-700 mb-4'>Trending Coins</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
        [1,2,3,4,5,6,7,8,9,10].map((item, index)=>{
          return(
            <SwiperSlide>
              <TrendingCard/>
            </SwiperSlide>
          )
        })
        }
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}



// import React from 'react'

// function TrendingCoinsComponent() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default TrendingCoinsComponent