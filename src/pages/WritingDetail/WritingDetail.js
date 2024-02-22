import React, { useEffect, useState} from 'react';
import './WritingDetail.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import EditIcon from '../../img/editIcon.svg';
import DeleteIcon from '../../img/deleteIcon.svg';
import Profile from 'components/Profile/Profile';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import leftComma from '../../img/leftComma.svg';
import rightComma from '../../img/rightComma.svg';

const WritingDetail = (props) => {
  // const { reviewId } = useParams(); // URL의 reviewId 파라미터 가져오기
  // const location = useLocation();
  // const bookId = new URLSearchParams(location.search).get('bookId'); // 쿼리 스트링에서 bookId 가져오기
  // const reviewId = new URLSearchParams(location.search).get('reviewId');

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reviewId = params.get('reviewId');
  const postId = params.get('postId');
  const bookId = params.get('bookId');


  const [reviewData, setReviewData] = useState(null);
  const [bookInfo, setBookInfo] = useState(null);
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);



    useEffect(() => {
      const fetchData = async () => {
        try {
          // bookId로 책 정보 가져오기
          const bookInfoResponse = await axios.get(`https://api.bookitlist.store/books/${bookId}`);
          setBookInfo(bookInfoResponse.data);

          if(reviewId!==null){
            // reviewId로 리뷰 정보 가져오기
          const reviewResponse = await axios.get(`https://api.bookitlist.store/reviews/${reviewId}`);
          setReviewData(reviewResponse.data);

          }

          if(postId!==null){
            // postId로 포스트 정보 가져오기
            const postResponse = await axios.get(`https://api.bookitlist.store/posts/${postId}`);
            setPostData(postResponse.data);
          }
  
          
          
        } catch (error) {
          setError(error);
        }
      };

      
  
      fetchData();

  return () => {
    // Cancel the axios request if it's still ongoing
  };
},[reviewId,postId, bookId]);

  return (
    <div className='WritingDetail'>
      <Header />
      <div className='Container'>
        <Profile />
        <div>
        {reviewId !== null && (
        
        <div className='WritingDetailContainer'>
          <div className='BookCoverImg'
          style={{
            backgroundImage: bookInfo ? `url(${bookInfo.cover})` : '', // cover 상태를 배경 이미지로 설정
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            overflow:'hidden',
            filter: 'brightness(0.4)',
          }}></div>
              <img className='EditButton' src={EditIcon} alt='EditButton' />
              <img className='DeleteButton' src={DeleteIcon} alt='DeleteButton' />
            <p className='BookTitle'>{bookInfo && bookInfo.title}</p>
            <p className='BookAuthor'>{bookInfo && bookInfo.author}</p>
            <div className='BookDiv'>
            <img className='BookImage' src={bookInfo ? bookInfo.cover : ''} alt='Book Cover' />
            </div>
            <div className='ReviewConatiner'>
              <div className='ReviewContent'>
              <img src={leftComma} alt='leftComma'/>
              <p className='Review'>{reviewData && reviewData.content}</p>
              <img src={rightComma} alt='rightComma'/>
            </div>
            <p className='Date'>{reviewData && reviewData.createdAt}</p>
            </div>
 
        </div>
        )}
        {postId !== null && (
        
        <div className='PostDetailContainer'>
          <div className='BookCoverImg'
          style={{
            backgroundImage: bookInfo ? `url(${bookInfo.cover})` : '', // cover 상태를 배경 이미지로 설정
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            overflow:'hidden',
            filter: 'brightness(0.4)',
          }}></div>
              <img className='EditButton' src={EditIcon} alt='EditButton' />
              <img className='DeleteButton' src={DeleteIcon} alt='DeleteButton' />
            <p className='BookTitle'>{bookInfo && bookInfo.title}</p>
            <p className='BookAuthor'>{bookInfo && bookInfo.author}</p>
            <div className='BookDiv'>
            <img className='BookImage' src={bookInfo ? bookInfo.cover : ''} alt='Book Cover' />
            </div>
            <div className='PostContentConatiner'>
              <p className='PostDate'>{postData && postData.createdAt}</p>
              <p className='PostTitle'>{postData && postData.title}</p>
              <p className='PostContent'>{postData && postData.content}</p>
            </div>
 
        </div>
        )}

        </div>


        
      </div>
      <Footer />
    </div>
  );
};

export default WritingDetail;
