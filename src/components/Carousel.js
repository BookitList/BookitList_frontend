import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import { Navigation } from 'swiper/modules';


  const Carousel = ({ customClass }) => {
    return (
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={`Swiper ${customClass}`}
      >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Carousel;