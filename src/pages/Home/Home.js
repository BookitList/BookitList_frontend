import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './Home.css';

//img
// import nextarrow from 'img/next.svg'
// import prevarrow from 'img/prev.svg'

//swiper styles
// import 'swiper/swiper-bundle.min.css';


const Home = () => {

  return (
    <div className='Home'>
      <Header />
      {/* Slider main container */}
      <div className='BannerContainer'>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{delay: 200}}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            el:'.pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }} //네비게이션

          className="BannerSwiper"
        >
          <SwiperSlide><img className='Bannerimg01' src='https://post-phinf.pstatic.net/MjAyMTA2MTFfMTQ0/MDAxNjIzNDAxMjkwODQ2.MDnJnH4cNYwu9wm0sWxrAc9gijRN2Til1_DlnWop_mMg.ghxb61VgGqQ0n2ICM-CZyBGN6d7Szy9I_cdaQzuspjUg.JPEG/I260Hx2lhr9y-RDBNHN6df5slKQA.jpg?type=w400'/></SwiperSlide>
          <SwiperSlide><img className='Bannerimg02' src='https://i.namu.wiki/i/jk1EMhlkAq0LdoiqpNeDZqyYc_66KxYvdL7stKBXRDyYcZ04uAHxvdWXWPDrQ5nT7x9RSjW1mm7fDJYket2R5g.webp'/></SwiperSlide>
          <SwiperSlide><img className='Bannerimg03' src='https://blog.kakaocdn.net/dn/bOVWDO/btrjO35796M/kW2exTawVOSJit2u53lAu1/img.jpg'/></SwiperSlide>
          <SwiperSlide><img className='Bannerimg04' src='https://post-phinf.pstatic.net/MjAyMTA2MTFfMTQ0/MDAxNjIzNDAxMjkwODQ2.MDnJnH4cNYwu9wm0sWxrAc9gijRN2Til1_DlnWop_mMg.ghxb61VgGqQ0n2ICM-CZyBGN6d7Szy9I_cdaQzuspjUg.JPEG/I260Hx2lhr9y-RDBNHN6df5slKQA.jpg?type=w400'/></SwiperSlide>
          <SwiperSlide><img className='Bannerimg05' src='https://i.namu.wiki/i/jk1EMhlkAq0LdoiqpNeDZqyYc_66KxYvdL7stKBXRDyYcZ04uAHxvdWXWPDrQ5nT7x9RSjW1mm7fDJYket2R5g.webp'/></SwiperSlide>
          <SwiperSlide><img className='Bannerimg06' src='https://blog.kakaocdn.net/dn/bOVWDO/btrjO35796M/kW2exTawVOSJit2u53lAu1/img.jpg'/></SwiperSlide>
        </Swiper>
      </div>

      <div className='BestContainer'>
        <h3>좋아요를 가장 많이 받은 글들을 확인하세요</h3>
        
        <div className='BestPost'>
          인기 포스트
          <div className='BestPostCard'>
          </div>
        </div>

        <div className='BestReview'>
          인기 한줄요약
          <div className='BestReviewCard'>
            BestReviewCard
          </div>
        </div>

      </div>
      
      <div className='RecentContainer'>
        <h3>실시간으로 올라오는 기록들, 보러갈래요?</h3>
        <div className='RecentPost'>
          RecentPostCard
        </div>
        <div className='RecentReview'>
          RecentReviewCard
        </div>
      </div>

      <div className='RecommendUser'>
        <h3>매주 새로운 기록가를 만나보세요</h3>
        <div className='WeekUser'>
          RecommnedWeekUser
        </div>
      </div>

      <div className='HomeInner'>
        <h3>나만의 기록을 남겨보세요</h3>
        지금바로 회원가입하고 더 많은 서비스를 이용해보세요
      </div>
      <Footer />
    </div>
  );
};

export default Home;
