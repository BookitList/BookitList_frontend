import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ toggleOneLineWriting, togglePostWriting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('한줄요약'); // 초기 텍스트 설정

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (callback, text) => () => {
    setIsOpen(false);
    setButtonText(text); // 클릭한 항목의 텍스트로 버튼 텍스트 변경
    callback();
  };

  return (
    <div className='Dropdown'>
      <div className='Dropdown-button' onClick={toggleDropdown}>
        {buttonText}
      </div>
      {isOpen && (
        <div className='Dropdown-content'>
          <div onClick={handleItemClick(toggleOneLineWriting, '한줄요약')}>한줄요약</div>
          <div onClick={handleItemClick(togglePostWriting, '포스트')}>포스트</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
