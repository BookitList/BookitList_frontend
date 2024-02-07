import React, {Component} from 'react';
import Slider from "react-slick"


import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './Home.css';
import Carousel from "components/Carousel/Carousel";

//img
import BannerImg01 from 'img/bannerImg01.svg';
import BannerImg02 from 'img/bannerImg02.svg';
import BannerImg03 from 'img/bannerImg03.svg';
import ProfileEX from 'img/profileEX.svg';
import RecordCard from 'img/recordCard.svg';

//slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


const Home = () => {

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline", background: "red" }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline", background: "green" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
  };

  return (
    <div className='Home'>
      <Header />
      {/* Slider main container */}
      <div className='BannerContainer' style={{height: '450px', overflow:'hidden'}}>
        <Slider {...settings} prevArrow={<SamplePrevArrow/>} nextArrow={<SampleNextArrow/>}>
          <div>
            <img className='BannerImg' src = {BannerImg01} alt='bannerimg01'/>
          </div>
          <div>
            <img className='BannerImg' src = {BannerImg02} alt='bannerimg01'/>
          </div>
          <div>
            <img className='BannerImg' src = {BannerImg02} alt='bannerimg01'/>
          </div>
          <div>
            <img className='BannerImg' src = {BannerImg02} alt='bannerimg01'/>
          </div>
          <div>
            <img className='BannerImg' src = {BannerImg03} alt='bannerimg01'/>
          </div>
        </Slider>
      </div>

      <div className='BestContainer'>
        <h1 className='title'>좋아요를 가장 많이 받은 글들을 확인하세요</h1>
        
        <div className='BestPost'>
          <Carousel customClass="post" componentName={"인기 포스트"}/>
        </div>

        <div className='BestReview'>
            <Carousel customClass="oneLineReview" componentName={"인기 한 줄 요약"} />
        </div>

      </div>
      
      <div className='RecentContainer'>
        <h1 className='title'>실시간으로 올라오는 기록들, 보러갈래요?</h1>
        <div className='RecentPost'>
        <Carousel customClass="post" componentName={"최신 포스트"}/>
        </div>
        <div className='RecentReview'>
        <Carousel customClass="oneLineReview" componentName={"최신 한 줄 요약"} />
        </div>
      </div>

      <div className='RecommendUser'>
        <h1 className='title'>매주 새로운 기록가를 만나보세요</h1>
        <div className='WeekUser'>
          <img className='RecommendUserImg' src={ProfileEX} alt='profileex'/>
          <img className='RecommendUserImg' src={ProfileEX} alt='profileex'/>
          <img className='RecommendUserImg' src={ProfileEX} alt='profileex'/>
        </div>
      </div>

      <div className='HomeInner'>
        <img className='CardImg' src={RecordCard} alt='RecordCard'/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
