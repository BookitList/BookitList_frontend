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
                <p className='ReviewDate'>2023.01.01</p>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default MyRecord