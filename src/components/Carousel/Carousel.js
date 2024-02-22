import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import axios from 'axios';

import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';

const Carousel = ({ customClass, componentName, data }) => {

  const navigate = useNavigate();

  const nameData = [
    {id: 1, name: '채다희'},
    {id: 2, name: '장우석'},
    {id: 3, name: '박소현'},
    {id: 4, name: '허석문'},
    {id: 5, name: '김나연'},
    {id: 6, name: 'morenow'},
    {id: 7, name: '김수윤'},
    {id: 8, name: '열매열'},
    {id: 9, name: '코테이토'}
  ]
    

  // const handleCardClick = (bookId) => {
  //   navigate(`/WritingDetail/${bookId}`);
  // };
  const handleCardClick = (bookId, postId, reviewId, customClass) => {
    if (customClass === 'post') {
      // postId 처리
      console.log('postId:', postId);
      navigate(`/WritingDetail/?postId=${postId}&bookId=${bookId}`);
    } else if (customClass === 'oneLineReview') {
      // reviewId 처리
      console.log('reviewId:', reviewId);
      console.log('bookId:', bookId);
      navigate(`/WritingDetail/?reviewId=${reviewId}&bookId=${bookId}`);
    } else {
      // 다른 처리
      console.error("존재하지 않는 정보입니다.");
    }
  };

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
          <SwiperSlide key={index} className='slidecss' onClick={() => handleCardClick(item.bookId, item.postId, item.reviewId, customClass)}>
          {nameData.map((author) => {
            if (author.id === item.memberId) {
              return <p key={author.id} style={{ marginBottom: '-10px' }}>작성자 : {author.name}</p>;
            }
            return null;
          })}
          <h3 style={{ marginBottom: '-5px' }}>{item.title}</h3>

          {Array.isArray(item.content) ? (
            <>
              {item.content.map((content, i) => (
                <div key={i} style={{ marginBottom: '-30px' }}>
                  <p>
                    {content.length >= 150 ? `${content.slice(0, 150)}...` : content}
                  </p>
                  {content.length >= 150 && <span>더보기</span>}
                </div>
              ))}
            </>
          ) : (
            <div style={{ marginBottom: '-30px' }}>
              <p>
                {item.content.length >= 150 ? `${item.content.slice(0, 150)}...` : item.content}
              </p>
              {item.content.length >= 150 && <span>더보기</span>}
            </div>
          )}
 
        </SwiperSlide>
      ))}
    


      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      </Swiper>
      </div>
      
      
  );
  
};

export default Carousel;
