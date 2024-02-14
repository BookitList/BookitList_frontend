import React, { useState } from 'react';
import './Writing.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Dropdown from 'components/Dropdown/Dropdown';
import deleteButton from '../../img/deleteButton.svg';
import template from '../../img/template.svg';
import clear from '../../img/clearButton.svg';
import BookSearchIcon from 'img/BookSearchIcon.svg';
import BookCarousel from './BookCarousel/BookCarousel';
import axios from 'axios';



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
            "max-results": 5
          }
        });
        setSearchResults(response.data.bookApiList.map(book => ({
          title: book.title,
          author: book.author,
          cover: book.cover,
          isBook: book.isBook,
          isbn13: book.isbn13,
          description: book.description,
          pubDate: book.pubDate
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
  };

  return (
    <div className='Writing'>
      <Header />
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
      <div className='WritingContainer'>

      <BookCarousel bookData={searchResults} totalSlides={totalSlides} />
      
        <div className='SelectedBookContainer'>
          <div className='BookImg'></div>
          <div>
            <h1 className='BookTitle'>채식주의자</h1>
            <p>저자</p>
            <p>출판사</p>
            <p>출판일</p>
            <p className='BookIntroduction'>책 소개</p>
          </div>
          <img className='DeleteButton' src={deleteButton} alt='DeleteButton'/>
        </div>
        <Dropdown
          toggleOneLineWriting={showOneLineWriting}
          togglePostWriting={showPostWriting}
        />
        {isOneLineWritingVisible && (
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
          <button className='Registration' onClick={handleClearTitle}>등록하기</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
