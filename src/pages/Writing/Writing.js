import React, { useState, useEffect } from 'react';
import './Writing.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Dropdown from 'components/Dropdown/Dropdown';
import deleteButton from '../../img/deleteButton.svg';
import template from '../../img/template.svg';
import clear from '../../img/clearButton.svg';
import BookSearchIcon from '../../img/BookSearchIcon.svg';
import BookCarousel from './BookCarousel/BookCarousel';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Writing = () => {
  const [textValue, setTextValue] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isOneLineWritingVisible, setIsOneLineWritingVisible] = useState(true);
  const [isPostWritingVisible, setIsPostWritingVisible] = useState(false);
  const [isTemplateVisible, setIsTemplateVisible] = useState(true);

  const [postContent1, setPostContent1] = useState('');
  const [postContent2, setPostContent2] = useState('');
  const [postContent3, setPostContent3] = useState('');
  const [postContent4, setPostContent4] = useState('');

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [totalSlides, setTotalSlides] = useState(0);

  const [selectedBook, setSelectedBook] = useState(null);
  const [isBookSelected, setIsBookSelected] = useState(false); // BookCarousel에서 책을 선택했는지 여부를 나타내는 상태

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.get("https://api.bookitlist.store/books/search", {
          params: {
            keyword: searchTerm,
            start: 1,
            "max-results": 300
          }
        });
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
        console.log("데이터 받아오기 성공")

        const totalResults = response.data.totalResults;
        const slidesPerPage = 5;
        const totalSlides = totalResults % slidesPerPage === 0 ? totalResults / slidesPerPage : Math.floor(totalResults / slidesPerPage) + 1;
        console.log(totalSlides)
        setTotalSlides(totalSlides);

      } catch (error) {
        console.error(error);
      }
    }
  };

  const access_token = localStorage.getItem("access_token");
  console.log("access_token",access_token);


  const handleRegistration = async () => {
    if (access_token) {
      // 엑세스 토큰을 포함한 헤더 설정
      const headers = {
        'Authorization': `Bearer ${access_token}`
      };

      // 한줄 요약 내용을 서버에 POST
      if (textValue.length >= 1 && textValue.length <= 50) {
        try {
          const response = await axios.post('https://api.bookitlist.store/reviews', {
            isbn13: selectedBook.isbn13,
            content: textValue,
            status: 'PUBLIC'
          }, {
            headers: headers // 헤더 추가
          });
          console.log('한줄 요약 등록 성공:', response.data);
        } catch (error) {
          console.error('한줄 요약 등록에 실패:', error);
        }
      } else {
        console.warn('한줄 요약은 1~50자 사이어야 합니다.');
      }
    } else {
      console.warn('사용자가 인증되지 않았습니다.');
      // 로그인 페이지로 리디렉션 또는 인증 요구 등의 작업 수행
    }
  };

  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  };

  const handleSetTitle = (e, setContentFunction) => {
    setContentFunction(e.target.value);
  };

  const handleSetContent = (e) => {
    setPostContent(e.target.value);
  };

  const showOneLineWriting = () => {
    setIsOneLineWritingVisible(true);
    setIsPostWritingVisible(false);
  };

  const showPostWriting = () => {
    setIsPostWritingVisible(true);
    setIsOneLineWritingVisible(false);
  };

  const handleToggleTemplate = () => {
    setIsTemplateVisible(!isTemplateVisible);
  };

  const handleClearTitle = () => {
    setPostTitle('');
    setPostContent('');
    setTextValue('');
    setPostContent1('');
    setPostContent2('');
    setPostContent3('');
    setPostContent4('');
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsBookSelected(true);
  };

  const handleDeleteBook = () => {
    setSelectedBook(null);
    setIsBookSelected(false);
  };

  const Registration = () => {
    handleClearTitle(); // 첫 번째 함수 호출
    handleRegistration(); // 두 번째 함수 호출
  };

  return (
    <div className='Writing'>
      <Header />
      {!isBookSelected && (
      <div className='BookSearchContainer'>
        <img className='BookSearchIcon' src={BookSearchIcon} alt='BookSearchIcon' />
        <input
          className='BookSearchBar'
          placeholder='책의 제목을 입력해주세요.'
          value={searchTerm}
          onChange={handleSearchTermChange}
          onKeyPress={handleSearch}
        />
      </div>
    )}
      <div className='WritingContainer'>
        {isOneLineWritingVisible && !isBookSelected && (
          <BookCarousel bookData={searchResults} totalSlides={totalSlides} onBookClick={handleBookClick} />
        )}
        {selectedBook && (
          <div className='SelectedBookContainer'>
            <img className='BookImg' src={selectedBook.cover} alt="BookCover" />
            <div>
              <h1 className='BookTitle'>{selectedBook.title}</h1>
              <div className='BookDetailContainer'>
                <p className='Author BookDetailInfo'>저자</p>
                <p className='AuthorBookDetailData'>{selectedBook.author}</p>
              </div>
              <div className='BookDetailContainer'>
                <p className='Pub BookDetailInfo'>출판사</p>
                <p className='BookDetailData'>{selectedBook.publisher}</p>
              </div>
              <div className='BookDetailContainer'>
                <p className='Pub BookDetailInfo'>출판일</p>
                <p className='BookDetailData'>{selectedBook.pubDate}</p>
              </div>
              <p className='BookIntroduction'>책 소개</p>
              <p className='BookIntroData'>{selectedBook.description}</p>
            </div>
            <img className='DeleteButton' src={deleteButton} alt='DeleteButton' onClick={handleDeleteBook} />
          </div>
        )}


        <Dropdown
          toggleOneLineWriting={showOneLineWriting}
          togglePostWriting={showPostWriting}
        />
        {!selectedBook&& isOneLineWritingVisible && (
          <textarea
            className='notSelectedBook'
            value={textValue}
            onChange={(e) => handleSetValue(e)}
            placeholder="책 등록 후 글쓰기가 가능합니다"
            readOnly={true}
          ></textarea>
        )}
        {selectedBook && isOneLineWritingVisible && (
          <textarea
            className='OneLineTextArea'
            value={textValue}
            onChange={(e) => handleSetValue(e)}
            placeholder="내용을 입력하세요"
          ></textarea>
        )}
        {isPostWritingVisible && !isTemplateVisible && (
          <div className='PostWriting'>
            <div className='Template'>
              <h1 className='TemplateText'>어떤 내용을 써야할 지 모르겠다면?</h1>
              <button className='TemplateButton' onClick={handleToggleTemplate}>
                <img src={template} alt='templateIcon'/>
                <h1 className='TemplateButtonText'>템플릿 불러오기</h1>
              </button>
            </div>
            <div className='PostTitleContainer'>
              <textarea
                className='PostTitle'
                value={postTitle}
                onChange={(e) => handleSetTitle(e, setPostTitle)}
                placeholder="제목을 입력하세요"
              />
              {postTitle && (
                  <img className='ClearButton' src={clear} alt='clearButton' onClick={handleClearTitle}/>
              )}
            </div>
            <div className='PostContainer'>
            <textarea
              className='PostContent'
              value={postContent}
              onChange={(e) => handleSetContent(e)}
              placeholder="내용을 입력하세요"
            ></textarea>
            </div>
          </div>
        )}
        {isPostWritingVisible && isTemplateVisible && (
          <div className="TemplatePostWriting">
            <div className='Template'>
              <h1 className='TemplateText'>책을 자유롭게 기록하고 싶다면?</h1>
              <button className='TemplateButton' onClick={handleToggleTemplate}>
                <img className='TempalteIcon' src={template} alt='templateIcon'/>
                <h1 className='TemplateButtonText'>템플릿 제거하기</h1>
              </button>
            </div>
            <div className='PostTitleContainer'>
              <textarea
                className='PostTitle'
                value={postTitle}
                onChange={(e) => handleSetTitle(e, setPostTitle)}
                placeholder="제목을 입력하세요"
              />
              {postTitle && (
                  <img className='ClearButton' src={clear} alt='clearButton' onClick={handleClearTitle}/>
              )}
            </div>
            <h1>1. 책을 읽게 된 계기가 어떻게 되시나요?</h1>
            <textarea
              className='TemplatePost'
              value={postContent1}
              onChange={(e) => handleSetTitle(e, setPostContent1)}
              placeholder="내용을 입력하세요"
            ></textarea>
            <h1>2. 가장 기억에 남는 구절은 무엇인가요?</h1>
            <textarea
              className='TemplatePost'
              value={postContent2}
              onChange={(e) => handleSetTitle(e, setPostContent2)}
              placeholder="내용을 입력하세요"
            ></textarea>
            <h1>3. 이 책의 주제 및 책이 전달하고자 하는 메세지가 무엇이라 생각하시나요?</h1>
            <textarea
              className='TemplatePost'
              value={postContent3}
              onChange={(e) => handleSetTitle(e, setPostContent3)}
              placeholder="내용을 입력하세요"
            ></textarea>
            <h1>4. 그 외 기록하고 싶은 내용을 적어주세요.</h1>
            <textarea
              className='TemplatePostEtc'
              value={postContent4}
              onChange={(e) => handleSetTitle(e, setPostContent4)}
              placeholder="내용을 입력하세요"
            ></textarea>
          </div>
        )}
        <div className='ButtonContainer'>
          <button className='Registration' onClick={Registration}>등록하기</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
