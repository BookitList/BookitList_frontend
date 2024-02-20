import React, { useState } from 'react';
import './BookCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import arrowPrev from '../../../img/SearchArrowPrev.svg';
import arrowNext from '../../../img/bookSearchArrow.svg';
import AlertTriangle from '../../../img/alertTriangle.svg';

const BookCarousel = ({ bookData, totalSlides, onBookClick }) => {
  if (!bookData || bookData.length === 0) {
    return null; // bookData가 주어지지 않았거나 빈 배열인 경우에는 아무것도 렌더링하지 않음
  }

  // 각 슬라이드에 다섯 개의 데이터를 표시
  const slides = [];
  for (let i = 0; i < bookData.length; i += 5) {
    const chunk = bookData.slice(i, i + 5);
    slides.push(
      <SwiperSlide key={i}>
  <ul>
    {chunk.map((book) => (
      <li className='BookInfoContainer' key={book.isbn13}>
        <div className="BookImageContainer" onClick={book.isBook ? () => onBookClick(book) : null}>
          {book.isBook && (
            <img className={`BookCover ${!book.isBook ? 'IsBookFalse' : ''}`} src={book.cover} alt="BookCover" />
          )}
          {!book.isBook && (
            <div>
              <div className="IsBookFalse">
                <img className="AlertTriangle" src={AlertTriangle} alt="NonBookIcon" />
                <p className='NotBook'>책 정보 확인 불가</p>
                <p className='NotWriting'>포스트 및 한줄요약 작성이 불가합니다</p>
              </div>
            </div>
          )}
        </div>
        <div className="BookDetails" onClick={book.isBook ? () => onBookClick(book) : null}>
          <h2 className='BookTitle'>{book.title}</h2>
          {book.isBook ? <p className='Author'>{book.author}</p> : <p className='Author'>책 정보 확인 불가</p>}
        </div>
      </li>
    ))}
  </ul>
</SwiperSlide>
    );
  }

  return (
    <div className='BookCarousel'>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            if (totalSlides && index < totalSlides) { // index가 0부터 시작하므로 totalSlides까지 생성합니다.
              return `<span class="${className}">${index + 1}</span>`;
            }
          },
        }}
        modules={[Pagination, Navigation]}
      >
        {slides}
      </Swiper>
      {totalSlides && (
        <div className="PaginationContainer">
          <img className='PrevArrow' src={arrowPrev} alt="prev" />
          <div className="swiper-pagination"></div>
          <img className='NextArrow' src={arrowNext} alt="next" />
        </div>
      )}
    </div>
  );
}

export default BookCarousel;
