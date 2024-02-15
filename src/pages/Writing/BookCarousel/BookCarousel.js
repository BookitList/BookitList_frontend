import React, { useState } from 'react';
import './BookCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import arrowPrev from '../../../img/SearchArrowPrev.svg';
import arrowNext from '../../../img/bookSearchArrow.svg';

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
            <li className='BookInfoContainer'>
              <div className="BookImageContainer" onClick={() => onBookClick(book)}> {/* 클릭 이벤트 추가 */}
                <img className='BookCover' src={book.cover} alt="BookCover" />
              </div>
              <div className="BookDetails" onClick={() => onBookClick(book)}>
                <h2 className='BookTitle'>{book.title}</h2>
                <p className='Author'>{book.author}</p>
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
