import React, { useEffect, useState} from 'react';
import './WritingDetail.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import EditIcon from '../../img/editIcon.svg';
import DeleteIcon from '../../img/deleteIcon.svg';
import Profile from 'components/Profile/Profile';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const WritingDetail = (props) => {
  const { bookId } = useParams(); // URL의 bookId 파라미터 가져오기
  

  const [reviewData, setReviewData] = useState(null);
  const [bookInfo, setBookInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await axios.get(`https://api.bookitlist.store/reviews/${bookId}`);
        setReviewData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchBookInfo = async () => {
      try {
        const response = await axios.get(`https://api.bookitlist.store/books/${bookId}`);
        setBookInfo(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchReviewData();
    fetchBookInfo();

    // Clean-up function to cancel the request if the component unmounts
    return () => {
      // Cancel the axios request if it's still ongoing
    };
  }, [bookId]); // Include bookId in the dependency array

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
            <img className='BookImage' src={bookInfo ? bookInfo.cover : ''} alt='Book Cover' />
            <div className='ReviewContent'>
            <p className='Comma'>"</p>
            <p className='Reviw'>{reviewData && reviewData.content}</p>
            <p className='Comma'>"</p>
          </div>
            
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WritingDetail;
