import React, { useState } from 'react';
import './Writing.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Dropdown from 'components/Dropdown/Dropdown';

const Writing = () => {
  const [textValue, setTextValue] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isOneLineWritingVisible, setIsOneLineWritingVisible] = useState(true);
  const [isPostWritingVisible, setIsPostWritingVisible] = useState(false);

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

  return (
    <div className='Writing'>
      <Header />
      <div className='WritingContainer'>
        <div className='SelectedBookContainer'></div>
        <Dropdown
          toggleOneLineWriting={showOneLineWriting}
          togglePostWriting={showPostWriting}
        />
        {isOneLineWritingVisible && (
          <textarea
            className='OneLineTextArea'
            value={textValue}
            onChange={(e) => handleSetValue(e)}
          ></textarea>
        )}
        {isPostWritingVisible && (
          <div className='PostWriting'>
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
        <div className='ButtonContainer'>
          <button className='TemporaryStorage'>임시저장</button>
          <button className='Registration'>등록하기</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
