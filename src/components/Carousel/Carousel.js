import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import { Navigation } from 'swiper/modules';




  const Carousel = ({ customClass, componentName }) => {

    const posts = [
      { title: "게시글 1", content: "게시글 1의 내용입니다.", author: "작성자1" },
      { title: "게시글 2", content: "게시글 2의 내용입니다.", author: "작성자2" },
      { title: "게시글 3", content: "게시글 3의 내용입니다.", author: "작성자3" },
      { title: "게시글 4", content: "게시글 4의 내용입니다.", author: "작성자4" },
      { title: "게시글 5", content: "게시글 5의 내용입니다.", author: "작성자5" },
    ];
    
    return (
      <div>
        <h1 className='componentName'>{componentName}</h1>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={24}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className={`Swiper ${customClass}`}
      >

        {posts.map((post, index) => (
        <SwiperSlide key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <footer>작성자: {post.author}</footer>
        </SwiperSlide>
      ))}


      <div className="swiper-button-prev"></div>

      <div className="swiper-button-next"></div>
    </Swiper>
    </div>
    
    

  );
};


export default Carousel;