import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';
import InputSearchIcon from 'img/InputSearchIcon.svg';
import Logo from 'img/Logo.svg';

const Header = () => {
    const navigate = useNavigate();
    const access_token = localStorage.getItem('access_token');
    // const[keyword,setKeyword] = useState('채식주의자'); //검색어 변수
    // const[start,setStart] = useState(1); //페이징 변수
    // const[last,setLast] = useState(1); 마지막 페이지 변수 = max-result/10
  
//     const [documents,setDocuments] = useState(null);
  
//     const callAPI = async() =>{
//       const url = `https://api.bookitlist.store/books/search?isbn13=${isbn}`;
//       const config = {
//         headers:'Authorization: KakaoAK dc8d40f2136deeecad5055925f2695db', //JWT Token 'APIKEY'
//         params:{query:query,size:5,page:page}
//     }; 
//       const result = await axios(url,config);
//       setDocuments(result.data.documents);
//       const total = result.data.meta.pageable_count;
//       setLast(Math.ceil(total/10));
//     }
  
//     useEffect(()=>{
//       callAPI();
//     },[page])
  
//     const onSubmit  =(e) => {
//       e.preventDefault();
//       callAPI();
//       setPage(1);
//   }
  
//   if(documents===null){
//       return <h1>로딩중........</h1>
//   }


const gotoLoginPage = () => {
    navigate('/Login');
};

const LoginButton = () => (
    <button
    className='LoginButton'
    onClick={gotoLoginPage}
    style={{
        backgroundColor: access_token ? 'white' : '#0b0087' ,
        color: access_token ? '#666666' : 'white',
        border: '1px solid #EBEBEB'
    }}
    >
      {access_token ? '로그아웃' : '로그인'}
    </button>
  );
  
  console.log(access_token);

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
            <input className='SearchBar' type = 'text' placeholder='책이름을 검색하세요' required={true}
            // value={keyword} onChange={(e)=>setKeyword(e.target.value)}
            />
            <LoginButton  />    
        </div>
        
    </header>
)
}

export default Header