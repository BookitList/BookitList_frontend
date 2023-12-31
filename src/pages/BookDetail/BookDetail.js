import React from "react";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './BookDetail.css';
import Carousel from "components/Carousel";

const BookDetail= () => {
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
                <h4>한 줄 서평</h4>
                <Carousel customClass="oneLineReview" />
            </div>
            <div className="postContainer">
                <h4>포스트</h4>
                <Carousel customClass="post"/>
            </div>

        </div>
        <Footer />
    </div>
    );
};

export default BookDetail;