import React, {useState,useEffect} from 'react';
import axios from "axios";

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './BookDetail.css';
import Carousel from "components/Carousel/Carousel";

const BookDetail= () => {

    const [posts, setPosts] = useState([]);
    const [reviews, setReviews] = useState([]);

      //데이터 통신
  useEffect(() => {
    // posts 데이터 가져오기
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.bookitlist.store/posts');
        setPosts(response.data.postList);
        console.log('포스트 데이터 가져오기 성공');
      } catch (error) {
        console.error('포스트 데이터 가져오기 실패', error);
      }
    };

    // reviews/all 데이터 가져오기
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://api.bookitlist.store/reviews/all');
        setReviews(response.data.reviewList);
        console.log('리뷰 데이터 가져오기 성공');
      } catch (error) {
        console.error('리뷰 데이터 가져오기 실패', error);
      }
    };

    // 데이터 가져오기
    fetchPosts();
    fetchReviews();
  }, []);

    return(
    <div className='BookDetail'>
        <Header />

        <div className="BookDetailContent">
            <div className="Book"></div>
            <div className="detail">
                <div className="bookName">
                    <div className="bookTitle">책 제목</div>
                    <div className="bookSubTitle">책 소제목</div>
                </div>
                <div className="detailContent">
                    <h6>저자</h6>
                    <h6>발행</h6>
                    <h6>발행일</h6>
                    <h6>판매가</h6>
                </div>
                <div className="bookIntroduction">
                <h6>책소개</h6>
                <h6>책 내용</h6>
                </div>
                <button>책 후기 쓰러가기</button>
            </div>
            
        </div>
        <div className="reviewContainer">
            <h3>리뷰</h3>
            <div className="oneLineReviewContainer">
                <Carousel customClass="oneLineReview" componentName={"한 줄 요약"} data={reviews} />
            </div>
            <div className="postContainer">
                <Carousel customClass="post" componentName={"포스트"} data={posts}/>
            </div>

        </div>
        
        <Footer />
    </div>
    );
};

export default BookDetail;