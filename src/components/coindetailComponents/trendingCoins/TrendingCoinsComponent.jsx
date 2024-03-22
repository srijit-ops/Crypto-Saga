import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import TrendingCard from "./TrendingCard";

export default function TrendingCoinsComponent({
  coins,
  setStatQuery,
  setPriceQuery,
  priceQuery,
  statQuery,
}) {
  console.log(coins, "heere");
  return (
    <div className="my-3">
      <p className="text-lg font-semibold text-gray-700 mb-4">Trending Coins</p>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          // When screen width is 640px or more
          640: {
            slidesPerView: 3,
          },
          // When screen width is 768px or more
          768: {
            slidesPerView: 3,
          },
          // When screen width is 1024px or more
          1024: {
            slidesPerView: 4,
          },
          // When screen width is 1280px or more
          1280: {
            slidesPerView: 5,
          },
          // When screen width is 1536px or more
          1536: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={30}
        navigation={true}
        pagination={false}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {coins.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <TrendingCard
                id={item.item.id}
                symbol={item.item.symbol}
                name={item.item.name}
                logo={item.item.small}
                price={item.item.data.price}
                sparkline={item.item.data.sparkline}
                rate={item.item.data.price_change_percentage_24h.usd}
                setStatQuery={setStatQuery}
                setPriceQuery={setPriceQuery}
                priceQuery={priceQuery}
                statQuery={statQuery}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
