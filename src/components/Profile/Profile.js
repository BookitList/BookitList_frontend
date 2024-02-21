import React from 'react';
import './Profile.css';
import ProfileImg from '../../img/profileImg.svg';

const Profile = () => {
  return (
    <div className='Profile'>
        <img className='ProfileImg' src={ProfileImg} alt='ProfileImg' />
        <div className='UserInfo'>
            <p className='Writer'>코코벤 기록가님</p>
        <p className='WriterEmail'>suyunaa87@gmail.com</p>
        </div>
        
    </div>
  )
}

export default Profile