import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import { Navigation } from "swiper";

import { sliderData } from "../../data";

export default function App() {

  const handleSlides = () => {
    const slides = sliderData.map(slide => (
      <SwiperSlide key={slide.id} className="slide flex-col">
        <span className="month">{slide.month}</span>
        <span className="year">{slide.year}</span>
      </SwiperSlide>
    ))
    return slides
  }

  return (
    <div className="slider">
      <Swiper
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={7}
        centeredSlides
        centeredSlidesBounds
        loop
        className="mySwiper"
      >
        {handleSlides()}
      </Swiper>
    </div>
  );
}
