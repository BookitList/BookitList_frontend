import React, { useState } from 'react';
import './Dropdown.css';
import arrow from '../../img/dropdownArrow.svg';
import clickedArrow from '../../img/dropdownClickArrow.svg';

const Dropdown = ({ toggleOneLineWriting, togglePostWriting, smallDropdown  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState('한줄요약');
  const [arrowImage, setArrowImage] = useState(arrow);

  // const dropdownClass = `Dropdown ${size === 'small' ? 'smallDropdown' : size === 'large' ? 'Dropdown' : ''}`;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsButtonClicked(true);
    setArrowImage(clickedArrow); // 클릭 시 이미지 교체
  };

  const handleItemClick = (callback, text) => () => {
    setIsOpen(false);
    setButtonText(text);
    setIsButtonClicked(false);
    setArrowImage(arrow); // 클릭 후 이미지를 다시 기본 이미지로 교체
    callback();
  };

  return (
    <div className={`Dropdown ${smallDropdown ? 'smallDropdown' : ''}`}>
      <div
        // className={`Dropdown-button ${isButtonClicked ? 'clicked' : ''}`}
        className="Dropdown-button"
        onClick={toggleDropdown}
      >
        {buttonText}
        <img
          src={arrowImage}
          alt="dropdown arrow"
          className={`ArrowIcon ${isButtonClicked ? 'rotated' : ''}`}
        />
      </div>
      {isOpen && (
        <div className='Dropdown-content'>
          <div onClick={handleItemClick(togglePostWriting, '포스트')}>포스트</div>
          <div onClick={handleItemClick(toggleOneLineWriting, '한줄요약')}>한줄요약</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
