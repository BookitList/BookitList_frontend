import React from 'react';
import './BookCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import arrowPrev from '../../../img/SearchArrowPrev.svg';
import arrowNext from '../../../img/bookSearchArrow.svg';


const BookCarousel = ({ bookData, totalSlides }) => {

  // 각 슬라이드에 다섯 개의 데이터를 표시
  const slides = [];
  for (let i = 0; i < bookData.length; i += 5) {
    const chunk = bookData.slice(i, i + 5);
    slides.push(
      <SwiperSlide>
        <ul>
          {chunk.map((book) => (
            <li className='BookInfoContainer'>
            <div className="BookImageContainer">
              <img className='BookCover' src={book.cover} alt="BookCover" />
            </div>
            <div className="BookDetails">
              <h2 className='BookTitle'>{book.title}</h2>
              <p className='Author'>{book.author}</p>
            </div>
          </li>
          ))}
        </ul>
      </SwiperSlide>
    );
  }

  // 페이지 번호 생성
  const paginationItems = [];
  for (let i = 0; i < totalSlides; i++) {
    paginationItems.push(<span key={i} className={`swiper-pagination-bullet ${i === 0 ? 'swiper-pagination-bullet-active' : ''}`}></span>);
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
            if (index < 4) { // index가 0부터 시작하므로 3까지만 생성합니다.
              return `<span class="${className}">${index + 1}</span>`;
            }
          },
        }}
        
        modules={[Pagination, Navigation]}
      >
        {slides}
      </Swiper>
      <div className="PaginationContainer">
        <img className='PrevArrow' src={arrowPrev} alt="prev" />
        <div className="swiper-pagination"></div>
        <img className='NextArrow' src={arrowNext} alt="next" />
      </div>
    </div>
  );
}

export default BookCarousel;