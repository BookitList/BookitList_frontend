import React from "react";
import { useNavigate } from "react-router-dom";

import './Login.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

//img
import LoginContainer from 'img/loginContainer.svg';
import NaverBtn from 'img/naverBtn.svg';
import KakaoBtn from 'img/kakaoBtn.svg';

const Login = () => {
    const kakaoLink = `https://api.bookitlist.store/oauth2/authorization/kakao`;

    const NAVER_AUTH_URL = `https://api.bookitlist.store/oauth2/authorization/naver`;

    const kakaoClick = () => {
        window.location.href = kakaoLink;
    };

    const naverClick = () => {
        window.location.href = NAVER_AUTH_URL;
    };

    return(
        <div className='LoginPage'>
            <Header />
            <div className='Container'>
                <img className='loginContainer' src={LoginContainer} alt="LoginContainer"/>
                <div className='loginBox'>
                    <img className='naverBtn' id='naverIDLogin' src={NaverBtn} alt="NaverBtn" onClick={naverClick}/>
                    <img className='kakaoBtn' src={KakaoBtn} alt="KakaoBtn" onClick={kakaoClick}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login