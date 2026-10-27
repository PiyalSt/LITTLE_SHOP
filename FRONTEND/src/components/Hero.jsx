import React from "react";
import assets from "../assets/assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div className="w-full h-130 py-4 px-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-full rounded-lg"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-top cursor-pointer"
            src={assets.banner}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-top cursor-pointer"
            src={assets.banner}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-top cursor-pointer"
            src={assets.banner}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-top cursor-pointer"
            src={assets.banner}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-top cursor-pointer"
            src={assets.banner}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-top cursor-pointer"
            src={assets.banner}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
