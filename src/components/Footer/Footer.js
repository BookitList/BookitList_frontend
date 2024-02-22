import React from "react";
import './Footer.css';
import FooterLogo from '../../img/grayLogo.svg';
import InstagramIcon from '../../img/Instagram.svg';
import GithubIcon from '../../img/github.svg';

const Footer = () => {

    const handleInstagramClick =()=>{
        window.open('https://www.instagram.com/bookitlist_official/');

    }

    const handleGithubClick =()=>{
        window.open('https://github.com/BookitList');

    }



    return(
        <footer className="Footer">
            <div className="FooterContainer">
                
            <div className="InfoContainer">
                <img className="FooterLogo" src={FooterLogo} alt="Logo"/>
                <div className="Line"></div>
                <div className="TeamMember">
                <p className="Part">
                    기획
                </p>
                <p className="Member">
                    김수윤  심예지
                </p>
                <p className="Part">
                    디자인
                </p>
                <p className="Member">
                    김나연
                </p>
                <p className="Part">
                    프론트엔드
                </p>
                <p className="Member">
                    박소현  채다희
                </p>
                <p className="Part">
                    벡엔드
                </p>
                <p className="Member">
                    장우석  허석문
                </p>
                </div>
                <div className="SNS">
                    <img className='GithubIcon' src={GithubIcon} alt="GithubIcon" onClick={handleGithubClick}/>
                    <img className='InstagramIcon' src={InstagramIcon} alt="InstagramIcon" onClick={handleInstagramClick}/>
                </div>
            </div>
            <div>
                
                <p  className='information'>Cotato 8기   |   대표 김수윤   |   이메일 주소: bookitlist@gmail.com   |   문의 전화: 010-2593-0295   |   Copyright © 2024 Bookitlist All rights reserved.</p>
            </div>

            </div>
        </footer>
    )
}

export default Footer