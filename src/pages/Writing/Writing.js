import React, { useState } from 'react';
import './Writing.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Dropdown from 'components/Dropdown/Dropdown';
import deleteButton from '../../img/deleteButton.svg';
import template from '../../img/template.svg';

const Writing = () => {
  const [textValue, setTextValue] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isOneLineWritingVisible, setIsOneLineWritingVisible] = useState(true);
  const [isPostWritingVisible, setIsPostWritingVisible] = useState(false);
  const [isTemplateVisible, setIsTemplateVisible] = useState(true);


  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  };

  const handleSetTitle = (e) => {
    setPostTitle(e.target.value);
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

  return (
    <div className='Writing'>
      <Header />
      <div className='WritingContainer'>
        <div className='SelectedBookContainer'>
          <div className='book'></div>
          <h1 className='BookTitle'>채식주의자</h1>
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
        {isPostWritingVisible && !isTemplateVisible &&(
          <div className='PostWriting'>
           <button onClick={handleToggleTemplate}>
              어떤 내용을 써야할 지 모르겠다면? 
              <img src={template} alt='templateIcon'/>
              템플릿 불러오기
            </button>
          <textarea
            className='PostTitle'
            value={postTitle}
            onChange={(e) => handleSetTitle(e)}
            placeholder="제목을 입력하세요"
          ></textarea>
          <textarea
            className='PostContent'
            value={postContent}
            onChange={(e) => handleSetContent(e)}
            placeholder="내용을 입력하세요"
          ></textarea>
        </div>
        
        )}
        {isPostWritingVisible && isTemplateVisible && (
        <div className="TemplatePostWriting">
          <button onClick={handleToggleTemplate}>
              책을 자유롭게 기록하고 싶다면?
              <img src={template} alt='templateIcon'/>
              템플릿 제거하기
            </button>
            <textarea
            className='PostTitle'
            value={postTitle}
            onChange={(e) => handleSetTitle(e)}
            placeholder="제목을 입력하세요"
          ></textarea>
          <h1>1. 책을 읽게 된 계기가 어떻게 되시나요?</h1>
          <textarea
            className='TemplatePost'
            value={postTitle}
            onChange={(e) => handleSetTitle(e)}
            placeholder="내용을 입력하세요"
          ></textarea>
          <h1>2. 가장 기억에 남는 구절은 무엇인가요?</h1>
          <textarea
            className='TemplatePost'
            value={postTitle}
            onChange={(e) => handleSetTitle(e)}
            placeholder="내용을 입력하세요"
          ></textarea>
          <h1>3. 이 책의 주제 및 책이 전달하고자 하는 메세지가 무엇이라 생각하시나요?</h1>
          <textarea
            className='TemplatePost'
            value={postTitle}
            onChange={(e) => handleSetTitle(e)}
            placeholder="내용을 입력하세요"
          ></textarea>
          <h1>4. 그 외 기록하고 싶은 내용을 적어주세요.</h1>
          
          <textarea
            className='TemplatePostEtc'
            value={postTitle}
            onChange={(e) => handleSetTitle(e)}
            placeholder="내용을 입력하세요"
          ></textarea>
          
        </div>
      )}

        <div className='ButtonContainer'>
          <button className='Registration'>등록하기</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
