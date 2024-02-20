import React from 'react';
import './MyRecord.css';

const MyRecord = () => {
  return (
    <div className='MyRecord'>
        <div className='MyRecordContainer'>
            <div className='DD'>드롭다운</div>
            <div className='ReviewContainer'>
              <div className='ReviewImage'>image</div>
              <div className='ReviewText'>
                <h1 className='ReviewTitle'>인간의 본능을 경계하고</h1>
                <p className='ReviewAuthor'>저자 한강</p>
                <p className='ReviewContent'>오늘은 삼계탕 남은거를 끓여먹었는데 맛이 이상했다.</p>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default MyRecord