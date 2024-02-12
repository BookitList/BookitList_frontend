import React from 'react';
import './BookCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import arrowPrev from '../../../img/SearchArrowPrev.svg';
import arrowNext from '../../../img/bookSearchArrow.svg';


const BookCarousel = ({ bookData }) => {

    // const posts = [
    //     { cover: "cover 1", title: "채식주의자", author: "author1" },
    //     { cover: "cover 2", title: "해방촌의 채식주의자 (휘뚜루마뚜루 자유롭게 산다는 것 | 전범선 산문집)", author: "author2" },
    //     { cover: "cover 3", title: "title3", author: "author3" },
    //     { cover: "cover 4", title: "title4", author: "author4" },
    //     { cover: "cover 5", title: "title5", author: "author5" },
    //     { cover: "cover 6", title: "title6", author: "author6" },
    //     { cover: "cover 7", title: "title7", author: "author7" },
    //     { cover: "cover 8", title: "title8", author: "author8" },
    //     { cover: "cover 9", title: "title9", author: "author9" },
    //     { cover: "cover 10", title: "title10  title10 title10 title10 title10title10 title10title10title10 title10", author: "author10" },
    // ];

  return (
    <div className='BookCarousel'>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        modules={[Pagination, Navigation]}
      >

          {bookData.map((book, index) => (
            <SwiperSlide key={index}>
              <img className='BookCover' src={book.cover} alt="BookCover" />
              <h2 className='BookTitle'>{book.title}</h2>
              <p className='Author'>{book.author}</p>
            </SwiperSlide>
          ))}

<div className="PaginationContainer">
            <img className='PrevArrow' src={arrowPrev} alt="prev" />
        <div className="swiper-pagination"></div>
            <img className='NextArrow' src={arrowNext} alt="next" />
</div>
      </Swiper>
    </div>
  );
}

export default BookCarousel;
