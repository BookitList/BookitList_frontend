import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';

const Carousel = ({ customClass, componentName, data }) => {

  const navigate=useNavigate();
    
  return (
    <div className='Carousel'>
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

        {data.map((item, index) => (
          // onClick={()=>navigate(`/글상세/${item.글ID}`)}
        <SwiperSlide key={index} className='slidecss'>
          <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>

          {Array.isArray(item.content) ? (
            <>
              {item.content.map((content, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <p>
                    {content.length >= 150 ? `${content.slice(0, 150)}...` : content}
                  </p>
                  {content.length >= 150 && <span>더보기</span>}
                </div>
              ))}
            </>
          ) : (
            <div style={{ marginBottom: '10px' }}>
              <p>
                {item.content.length >= 150 ? `${item.content.slice(0, 150)}...` : item.content}
              </p>
              {item.content.length >= 150 && <span>더보기</span>}
            </div>
          )}
          
          <footer>작성자: {item.author}</footer>
        </SwiperSlide>
      ))}


      <div className="swiper-button-prev"></div>

      <div className="swiper-button-next"></div>
    </Swiper>
  </div>
  );
};


export default Carousel;