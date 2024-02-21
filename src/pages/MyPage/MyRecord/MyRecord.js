import React, { useState } from 'react';
import './MyRecord.css';
import Dropdown from 'components/Dropdown/Dropdown';

const MyRecord = () => {
  const [selectedOption, setSelectedOption] = useState('한줄요약'); // 디폴트 값을 '한줄요약'으로 설정

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='MyRecord'>
      <div className='MyRecordContainer'>
        <Dropdown
          smallDropdown={true}
          // 한줄요약 선택 시 처리
          toggleOneLineWriting={() => handleOptionChange('한줄요약')}
          // 포스트 선택 시 처리
          togglePostWriting={() => handleOptionChange('포스트')}
        />
        {/* 선택된 옵션에 따라 다른 내용을 보여줌 */}
        {selectedOption === '한줄요약' && (
          <div className='ReviewContainer'>
            <div className='ReviewImage'>image</div>
            <div className='ReviewText'>
              <h1 className='ReviewTitle'>인간의 본능을 경계하고</h1>
              <p className='ReviewAuthor'>저자 한강</p>
              <p className='ReviewContent'>한줄요약 내용</p>
            </div>
          </div>
        )}
        {selectedOption === '포스트' && (
          <div className='ReviewContainer'>
            <div className='ReviewImage'>image</div>
            <div className='ReviewText'>
              <h1 className='ReviewTitle'>인간의 본능을 경계하고</h1>
              <p className='ReviewAuthor'>저자 한강</p>
              <p className='ReviewContent'>포스트 내용</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecord;
