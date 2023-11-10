import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      {/* React Swiper */}
      <div className='SwipeContainer'>
        {/* 왼쪽버튼 */}
        <h3>SwipeContainer</h3>
        <div className='SwipeContent'>
          {/* ahref or Link로 각 페이지로 이동하게 하기 */}
        </div>
        {/* 오른쪽버튼 */}
      </div>

      <div className='BestContainer'>
        <h3>좋아요를 가장 많이 받은 글들을 확인하세요</h3>
        
        <div className='BestPost'>
          인기 포스트
          <div className='BestPostCard'>
            BestPostCard
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
