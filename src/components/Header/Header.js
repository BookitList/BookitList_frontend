import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import './Header.css';
import InputSearchIcon from 'img/InputSearchIcon.svg';

const Header = () => {
    const [searchQuery,setSearchQuery] = useState('');

    const onSearchChangeHandler = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    };
    
    // const onFormSubmitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(searchQuery);
    // };

    // const onLoginHandler = (e) => {
    //     e.preventDefault();
    //     console.log('login');
    // }

    const gotoLoginPage = () => {
        Navigate(`/Login`);
    };

    const storedId = localStorage.getItem('id');

    return (
        <header className='HeaderContainer'>

            <div className='HeaderLeft'>
                <div className='LeftItem'>
                    <a href='/' style={{textDecoration:'none'}}>
                        Bookit List
                    </a>
                </div>
                <div className='LeftItem'>
                    <a href='/' style={{textDecoration:'none'}}>
                        피드
                    </a>
                </div>
                <div className='LeftItem'>
                    <a href='/' style={{textDecoration:'none'}}>
                        글쓰기
                    </a>
                </div>
                <div className='LeftItem'>
                    <a href='/' style={{textDecoration:'none'}}>
                        마이페이지
                    </a>
                </div>
            </div>

            <div className='HeaderRight'>
                <img className='InputSearchIcon' src={InputSearchIcon} alt='SearchIcon'/>
                <input className='SearchBar' type = 'text' placeholder='책이름을 검색하세요' required={true}
                value={searchQuery} onChange={onSearchChangeHandler}/>

                <button className='LoginButton' onClick={gotoLoginPage} style={{display:storedId ? 'none' : 'block'}}>
                    로그인
                </button>
                
            </div>

        </header>
    )
}

export default Header