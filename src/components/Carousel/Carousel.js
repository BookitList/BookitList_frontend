import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import axios from 'axios';

import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import profileEX1 from 'img/profileEX.svg';
import profileEX2 from 'img/profileEX2.svg';
import profileEX3 from 'img/profileEX3.svg';
import profileEX4 from 'img/profileEX4.svg';
import profileEX5 from 'img/profileEX5.svg';
import profileEX6 from 'img/profileEX6.svg';
import profileEX7 from 'img/profileEX7.svg';
import profileEX8 from 'img/profileEX8.svg';
import profileEX9 from 'img/profileEX9.svg';
import heartEmpty from 'img/heartGrayIcon.svg'
import heartFill from 'img/heartFillIcon.svg'

const Carousel = ({ customClass, componentName, data }) => {

  const navigate = useNavigate();
  const [isFilled, setIsFilled] = useState(false);

  const nameData = [
    {id: 1, name: '채다희', image: profileEX1},
    {id: 2, name: '장우석', image: profileEX4},
    {id: 3, name: '박소현', image: profileEX3},
    {id: 4, name: '허석문', image: profileEX7},
    {id: 5, name: '김나연', image: profileEX6},
    {id: 6, name: 'morenow', image: profileEX2},
    {id: 7, name: '김수윤', image: profileEX9},
    {id: 8, name: '열매열', image: profileEX5},
    {id: 9, name: '코테이토', image: profileEX8}
  ]
   //좋아요 
  const handleHeart=() => {
    setIsFilled((prev) => !prev);
  }


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

  //좋아요
  // useEffect(async () => {
  //   const fetchData = async () => {
  //     const res = await axios.get('https://api.bookitlist.store/reviews/{review-id}/likes');
  //     if (res.data.type === 'liked') setLike(true)
  //   }
  //   fetchData()
  // }, []);
  
  // const toggleLike = async (e) => {
  //   const res = await axios.post(...) // [POST] 사용자가 좋아요를 누름 -> DB 갱신
  //   setLike(!like)
  // }


  return (
    <div className='Carousel'>
      <h1 className='componentName'>{componentName}</h1>
      <Swiper
        loop={true}
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
          <SwiperSlide key={index} className='slidecss' onClick={() => handleCardClick(item.bookId, item.postId, item.reviewId, customClass)} style={{position:'relative'}}>
          {nameData.map((author) => {
            if (author.id === item.memberId) {
              return(
                <div key={author.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '-25px', marginLeft:'8px'}}>
                  <img src={author.image} alt='profileImg' style={{ width: '50px', height: '50px', marginRight: '5px' }} />
                  <p>작성자 : {author.name}</p>

                  {/* 좋아요 */}
                  
                </div>
              );
            }
            return null;
          })}
          <div className='heart-container' onClick={handleHeart}>
            <img
            src={isFilled ? heartFill : heartEmpty}
            alt='heartEmpty' className='heart-image' 
            style={{position: 'absolute', top: 10, right: 15, cursor: 'pointer'}}
            onClick={
              // (e) => {
              // e.stopPropagation();
              handleHeart}
              />
          </div>
            

          <h3 style={{ marginBottom: '-5px', marginLeft:'8px' }}>{item.title}</h3>

          {Array.isArray(item.content) ? (
            <>
              {item.content.map((content, i) => (
                <div key={i} style={{ marginBottom: '-30px', marginLeft:'8px' }}>
                  <p>
                    {content.length >= 150 ? `${content.slice(0, 150)}...` : content}
                  </p>
                  {content.length >= 150 && <span>더보기</span>}
                </div>
              ))}
            </>
          ) : (
            <div style={{ marginBottom: '-30px', marginLeft:'8px' }}>
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
