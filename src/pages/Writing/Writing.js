import React from 'react';
import './Writing.css';
import Header from 'components/Header/Header';
import Dropdown from 'components/Dropdown/Dropdown';
import Footer from 'components/Footer/Footer';
import { useState } from 'react';

const Writing = () => {

    const [textValue, setTextValue] = useState("");
  const handleSetValue = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div className='Writing'>
        <Header />
        <div className='WritingContainer'>
            <div className='SelectedBookContainer'>
                
            </div>
            <div className='Dropdown'>dropdown</div>
            <textarea className='OneLineTextArea'
            value={textValue}
            onChange={(e) => handleSetValue(e)}
            ></textarea>
            <div className='ButtonContainer'>
                <button className='TemporaryStorage'>임시저장</button>
                <button className='Registration'>등록하기</button>
            </div>
        </div>
        <Footer />
        
    </div>
  )
}

export default Writing