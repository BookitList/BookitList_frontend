import React, {useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import './BookDetail.css';
import Carousel from "components/Carousel/Carousel";

const BookDetail= () => {
  const navigate = useNavigate();

  const [bookInfo, setBookInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { isbn13 } = useParams();
  // let [selectedBook, setSelectedBook] = useState(null);
  // let [isBookSelected, setIsBookSelected] = useState(false); // BookCarousel에서 책을 선택했는지 여부를 나타내는 상태
  // let [isBookCarouselVisible, setIsBookCarouselVisible] = useState(false);

  //데이터 통신
  useEffect(() => {
    //isbn 책정보 가져오기
    const fetchBooks = async ()=>{
      try{
        const response = await axios.get(`https://api.bookitlist.store/books?isbn13=${isbn13}`);
        const bookInfo = response.data;
        
          setBookInfo({
            title: bookInfo.title,
            subtitle: bookInfo.subtitle,
            author: bookInfo.author,
            publisher: bookInfo.publisher,
            pubDate: bookInfo.pubDate,
            price: bookInfo.price,
            description: bookInfo.description,
            link: bookInfo.link,
            isbn13: bookInfo.isbn13,
            cover: bookInfo.cover,
          });
          console.log(bookInfo);

      }catch(error){
        console.log('책정보 실패', error.response);
      }
    };

    // posts 데이터 가져오기
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.bookitlist.store/posts');
        setPosts(response.data.postList);
      } catch (error) {
        console.error('포스트 데이터 가져오기 실패', error);
      }
    };

    // reviews/all 데이터 가져오기
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://api.bookitlist.store/reviews/all');
        setReviews(response.data.reviewList);
      } catch (error) {
        console.error('리뷰 데이터 가져오기 실패', error);
      }
    };

    // 데이터 가져오기
    fetchBooks();
    fetchPosts();
    fetchReviews();
  }, []);

  const gotowriting =()=>{
    navigate('/Writing'
    // , {state: {
    //   selectedBook: true,
    //   isBookSelected: false,
    //   isBookCarouselVisible: false
    // }}
    );
  }

    return(
    <div className='BookDetail'>
        <Header />

        <div className="BookDetailContent">
            <img src={bookInfo.cover} alt='Book Cover' className="Book">
              {/* <img src={bookInfo.cover} alt='Book Cover' className='DetailBookImg'/> */}
            </img>
            <div className="detail">
                <div className="bookName">
                    <div className="bookTitle">{bookInfo.title}</div>
                    <div className="bookSubTitle">{bookInfo.subtitle}</div>
                </div>
                <div className="detailContent">
                    <h6>저자 : {bookInfo.author}</h6>
                    <h6>발행: {bookInfo.publisher}</h6>
                    <h6>발행일: {bookInfo.pubDate}</h6>
                    <h6>판매가: {bookInfo.price}원</h6>
                </div>
                <div className="bookIntroduction">
                  <h6>책 소개</h6>
                  <p>{bookInfo.description}</p>
                </div>
                <button onClick={gotowriting}>책 기록하기</button>
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