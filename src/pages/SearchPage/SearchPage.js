import React,{useState,useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import './SearchPage.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import heartGaryIcons from 'img/heartGrayIcon.svg';

const SearchPage = () => {
  const [searchTerm,setSearchTerm] = useState([]);
  const[start,setStart] = useState(1); //페이징 변수
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookDetail = (isbn13) => {
    navigate(`/BookDetail/${isbn13}`);
  };

    const handleSearch = async (searchTerm) => {
      try {
        const response = await axios.get("https://api.bookitlist.store/books/search", {
          params: {
            keyword: searchTerm,
            start: start,
            "max-results": 300
          }
        });

        console.log(response);
        
        setSearchResults(response.data.bookApiList.map(book => ({
          title: book.title,
          author: book.author,
          cover: book.cover,
          isBook: book.isBook,
          isbn13: book.isbn13,
          description: book.description,
          pubDate: book.pubDate,
          publisher: book.publisher,
          isbook: book.isbook,
        })));
        
        console.log("검색성공");

      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() =>{
      const searchTerm = location.state?.searchTerm || '';
      console.log(searchTerm);
      handleSearch(searchTerm);
    },[location]);    


  return (
    <div className='SearchPage'>
        <Header onSearch={handleSearch} />
        <div className='SearchPageContainer'>

          {searchResults.map((book, index)=>(
            <div key={index} className='BookContainer' onClick={()=>handleBookDetail(book.isbn13)}>
              <div className='BookImg'
              style={{
              backgroundImage: `url(${book.cover})`, // cover 상태를 배경 이미지로 설정
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',}}>
                {/* <img className={`BookCover ${!book.isBook? 'IsBookFalse' : ''}`} src={book.cover}  alt='BookCover' /> */}
              </div>
              
              <div className='BookDescription'>
                <img className='heart' src={heartGaryIcons} alt='Heart'></img>
                
                <div className='BookDetail'>
                <div className='BookDetailContainer'>
                  
                <h1 className='BookTitle'>{book.title}</h1>
                <p className='Author BookDetailInfo'>저자</p>
                <p className='AuthorBookDetailData'>{book.author}</p>
              </div>

              <div className='BookDetailContainer'>
                <p className='Pub BookDetailInfo'>출판사</p>
                <p className='BookDetailData'>{book.publisher}</p>
              </div>

              <div className='BookDetailContainer'>
                <p className='Pub BookDetailInfo'>출판일</p>
                <p className='BookDetailData'>{book.pubDate}</p>
              </div>
              <p className='post BookDetailInfo'>포스트 | </p>
              {/* <p className='BookDetailData'>{book.pubDate}</p> */}
              <p className='post BookDetailInfo'> 한줄요약 | </p>
              {/* <p className='BookDetailData'>{book.pubDate}</p> */}
              </div>

              <div className='BookIntro'>
                <p>책 소개</p>
                  <p>{book.description}</p>
              </div>

            </div>
              {/* <div className='recommandReview'>
                  <h5> 대표 한줄평 </h5>
                  <h6> - 코코벤 기록가 </h6>
                </div> */}
            </div>
            ))}
          <div>
            {/* <button onClick={()=>setPage(page-1)} disabled={page===1}>이전</button>
            <span style={{margin:'10px'}}>{page}/{last}</span>
            <button onClick={()=>setPage(page+1)} disabled={page===last}>다음</button> */}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default SearchPage