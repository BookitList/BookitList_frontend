import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Header.css';
import InputSearchIcon from 'img/InputSearchIcon.svg';
import Logo from 'img/Logo.svg';

const Header = ({onSearch}) => {
    const navigate = useNavigate();
    const [access_token,setAccessToken] = useState(localStorage.getItem('access_token'));
    const [refresh_token,setRefreshToken] = useState(localStorage.getItem('refresh_token'));
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // 페이지 이동
    navigate('/searchPage',{state:{searchTerm}});
    console.log(searchTerm);
  }


  const handleKeyPress = (e) => {
    // 엔터 키가 눌렸을 때 검색 수행
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

const gotoLoginPage = () => {
    navigate('/Login');
};

//로그아웃 처리
const handleLogoutButtonClick= async () => {
    
    try{
        await axios.post('https://api.bookitlist.store/logout',{
            accessToken: access_token,
            refreshToken: refresh_token,
        },{
            headers: {
                Authorization : `Bearer ${access_token}`
        }});
        
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setAccessToken(null);
        setRefreshToken(null);
        console.log('서버에 로그아웃 요청 전송 성공');

    } catch (error){
        console.log(error);
    }
};

const LoginButton = () => (
    access_token == null || access_token=='null'?(
        <button
            className='LoginButton'
            onClick={gotoLoginPage}
            style={{
                backgroundColor: '#0b0087' ,
                color: 'white',
                border: '1px solid #EBEBEB'
            }}
        >
            로그인
        </button>
    ) : (
        <button
        className='LogoutButton'
        onClick={handleLogoutButtonClick}
        style={{
            backgroundColor: 'white',
            color: '#666666',
            border: '1px solid #EBEBEB'
        }}
    >
    로그아웃
    </button>
    )
  );
  
  console.log(access_token);

  // access_token이 변경될 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  },[access_token,refresh_token]);

return (
    <header className='HeaderContainer'>

        <div className='HeaderLeft'>
            <div className='LeftItem'>
                <a href='/' style={{marginRight:'30px'}}>
                    <img src={Logo} alt='Logo' />
                </a>
            </div>
            <div className='LeftItem'>
                <a href='/' style={{textDecoration:'none',color:'#0B0087'}}>
                    피드
                </a>
            </div>
            <div className='LeftItem'>
                <a href='/Writing' style={{textDecoration:'none',color:'#0B0087'}}>
                    글쓰기
                </a>
            </div>
            <div className='LeftItem'>
                <a href='/MyPage' style={{textDecoration:'none',color:'#0B0087'}}>
                    마이페이지
                </a>
            </div>
        </div>

        <div className='HeaderRight'>
            <img className='InputSearchIcon' src={InputSearchIcon} alt='SearchIcon'/>
            <input className='SearchBar' type = 'text'
            required={true}
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            // onKeyPress={handleQuerySearch}
            // bookData={searchResults}
            />
            <LoginButton  />    
        </div>
        
    </header>
)
}

export default Header