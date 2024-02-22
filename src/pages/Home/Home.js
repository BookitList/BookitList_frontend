import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick"
import axios from 'axios';


import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './Home.css';
import Carousel from "components/Carousel/Carousel";

//img
import BannerImg01 from 'img/bannerImg01.svg';
import BannerImg02 from 'img/bannerImg02.svg';
import BannerImg03 from 'img/bannerImg03.svg';
import ProfileEX from 'img/profileEX.svg';
import ProfileEX2 from 'img/profileEX2.svg';
import ProfileEX3 from 'img/profileEX3.svg';
import RecordCard from 'img/recordCard.svg';

//slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


const Home = () => {
  
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [reviews, setReviews] = useState([]);

//swiper 화살표
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

  //데이터 통신
  useEffect(() => {
    // posts 데이터 가져오기
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.bookitlist.store/posts');
        setPosts(response.data.postList);
        // console.log('포스트 데이터 가져오기 성공');
      } catch (error) {
        console.error('포스트 데이터 가져오기 실패', error);
      }
    };

    // reviews/all 데이터 가져오기
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://api.bookitlist.store/reviews/all');
        setReviews(response.data.reviewList);
        // console.log('리뷰 데이터 가져오기 성공');
      } catch (error) {
        console.error('리뷰 데이터 가져오기 실패', error);
      }
    };

    // 데이터 가져오기
    fetchPosts();
    fetchReviews();
  }, []);

  const gotoMypage=() => {
    navigate('/MyPage');
  }

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
          <Carousel customClass="post" componentName={"인기 포스트"} data={posts} />
        </div>

        <div className='BestReview'>
            <Carousel customClass="oneLineReview" componentName={"인기 한 줄 요약"} data={reviews}/>
        </div>

      </div>
      
      <div className='RecentContainer'>
        <h1 className='title'>실시간으로 올라오는 기록들, 보러갈래요?</h1>
        <div className='RecentPost'>
        <Carousel customClass="post" componentName={"최신 포스트"} data={posts} />
        </div>
        <div className='RecentReview'>
        <Carousel customClass="oneLineReview" componentName={"최신 한 줄 요약"} data={reviews} />
        </div>
      </div>

      <div className='RecommendUser'>
        <h1 className='title'>매주 새로운 기록가를 만나보세요</h1>
        <div className='WeekUser' onClick={gotoMypage}>
          <img className='RecommendUserImg' src={ProfileEX} alt='profileex'/>
          <img className='RecommendUserImg' src={ProfileEX2} alt='profileex'/>
          <img className='RecommendUserImg' src={ProfileEX3} alt='profileex'/>
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
