          import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import ProfileImg from '../../img/profileImg.svg';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://api.bookitlist.store/members/me', {
          headers: {
            Authorization: `Bearer ${access_token}`
          },
        });
        setUserInfo(response.data);

      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 호출되도록 함

  return (
    <div className='Profile'>
      {userInfo ? (
        <>
          <img className='ProfileImg' src={ProfileImg} alt='ProfileImg' />
          <div className='UserInfo'>
            <p className='Writer'>{userInfo.name} 기록가님</p>
            <p className='WriterEmail'>{userInfo.email}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
