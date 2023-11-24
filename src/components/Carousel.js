import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Carousel.css';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={18.34}
      slidesPerView={5}
      pagination={{ clickable: true }}
    >
      {/* 각 슬라이드 */}
      <SwiperSlide className='carouselStyle' >
        <h3>슬라이드 1</h3>
        {/* 슬라이드 1에 표시될 내용을 추가하세요. */}
      </SwiperSlide>
      <SwiperSlide className='carouselStyle'>
        <h3>슬라이드 2</h3>
      </SwiperSlide>
      <SwiperSlide className='carouselStyle'>
        <h3>슬라이드 3</h3>
      </SwiperSlide>
      <SwiperSlide className='carouselStyle'>
        <h3>슬라이드 4</h3>
      </SwiperSlide>
      <SwiperSlide className='carouselStyle'>
        <h3>슬라이드 5</h3>
      </SwiperSlide>
      <SwiperSlide className='carouselStyle'>
        <h3>슬라이드 6</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
