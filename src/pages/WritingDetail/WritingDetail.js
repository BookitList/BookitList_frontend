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
  const bookId = params.get('bookId');



  const [reviewData, setReviewData] = useState(null);
  const [bookInfo, setBookInfo] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchReviewData = async () => {
  //     try {
  //       const response = await axios.get(`https://api.bookitlist.store/reviews/${reviewId}`);
  //       setReviewData(response.data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

    

  //   const fetchBookInfo = async () => {
  //     try {
  //       const response = await axios.get(`https://api.bookitlist.store/books/${bookId}`);
  //       setBookInfo(response.data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

    // useEffect(() => {
    //   const fetchPostData = async () => {
    //     try {
    //       const response = await axios.get(`https://api.bookitlist.store/posts/${bookId}`);
    //       setReviewData(response.data);
    //     } catch (error) {
    //       setError(error);
    //     }
    //   };


    useEffect(() => {
      const fetchData = async () => {
        try {
          // bookId로 책 정보 가져오기
          const bookInfoResponse = await axios.get(`https://api.bookitlist.store/books/${bookId}`);
          setBookInfo(bookInfoResponse.data);
  
          // reviewId로 리뷰 정보 가져오기
          const reviewResponse = await axios.get(`https://api.bookitlist.store/reviews/${reviewId}`);
          setReviewData(reviewResponse.data);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();


    // fetchReviewData();
    // fetchBookInfo();

    // Clean-up function to cancel the request if the component unmounts
  //   return () => {
  //     // Cancel the axios request if it's still ongoing
  //   };
  // }, [bookId]); // Include bookId in the dependency array

  return () => {
    // Cancel the axios request if it's still ongoing
  };
},[reviewId, bookId]);

  return (
    <div className='WritingDetail'>
      <Header />
      <div className='Container'>
        <Profile />
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
            {/* <div className='ButtonContainer'> */}
              <img className='EditButton' src={EditIcon} alt='EditButton' />
              <img className='DeleteButton' src={DeleteIcon} alt='DeleteButton' />
            {/* </div> */}
            {/* <div className='ContainerHeader'> */}
            <p className='BookTitle'>{bookInfo && bookInfo.title}</p>
            <p className='BookAuthor'>{bookInfo && bookInfo.author}</p>
            {/* </div> */}
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
      </div>
      <Footer />
    </div>
  );
};

export default WritingDetail;
