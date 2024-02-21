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
        
        console.log("성공");

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
            <div key={index} className='BookContainer'>
              <div className='BookImg'
              style={{
              backgroundImage: `url(${book.cover})`, // cover 상태를 배경 이미지로 설정
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',}}>
                {/* <img className={`BookCover ${!book.isBook? 'IsBookFalse' : ''}`} src={book.cover}  alt='BookCover' /> */}
              </div>
              
              <div className='BookDescription'>
                <div className='BookTitle'>
                  {book.title}
                  </div>
                <img className='heart' src={heartGaryIcons} alt='Heart'></img>
                
                <div className='BookDetail'>
                  <h6>저자</h6>
                    {book.author}
                  <h6>출판사</h6>
                    {book.publisher}
                  <h6>출판일</h6>
                    {book.pubDate}
                  <h6 style={{display:'inline'}}>포스트 | </h6>
                    {/* `(${numPost})`개 */}
                  <h6 style={{display:'inline'}}>한줄요약 | </h6>
                    {/* `(${numOneLine})개` */}
                </div>
                <div className='BookIntro'>
                  <h6>책 소개</h6>
                    {book.description}
                </div>

                <div className='oneLineContainer'>
                  <h5> 대표 한줄평 </h5>
                  <h6> - 코코벤 기록가 </h6>
                </div>
              </div>
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