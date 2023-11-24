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