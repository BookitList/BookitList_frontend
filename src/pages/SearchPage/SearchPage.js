import React from 'react';
import axios from 'axios';
import './SearchPage.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import heartGaryIcons from 'img/heartGrayIcon.svg';

const SearchPage = () => {
//   const[query,setQuery] = useState('채식주의자'); //검색어 변수
//   const[page,setPage] = useState(1); //페이징 변수
//   const[last,setLast] = useState(1);

//   const [documents,setDocuments] = useState(null);

//   const callAPI = async() =>{
//     const url = `https://api.bookitlist.store/books/search?target=title&isbn=${isbn}`;
//     const config = {
//       headers:'Authorization: KakaoAK dc8d40f2136deeecad5055925f2695db', //JWT Token 'APIKEY'
//       params:{query:query,size:5,page:page}
//   }; 
//     const result = await axios(url,config);
//     setDocuments(result.data.documents);
//     const total = result.data.meta.pageable_count;
//     setLast(Math.ceil(total/10));
//   }

//   useEffect(()=>{
//     callAPI();
//   },[page])

//   const onSubmit  =(e) => {
//     e.preventDefault();
//     callAPI();
//     setPage(1);
// }

// if(documents===null){
//     return <h1>로딩중........</h1>
// }

  return (
    <div className='SearchPage'>
        <Header />
        <div className='SearchPageContainer'>

          {/* {documents.map(d=>( */}
            <div className='BookContainer'>
              <div className='BookImg'
              style={{
              backgroundImage: 'heartGrayIcons', // cover 상태를 배경 이미지로 설정
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',}}>
                {/* <img src={d.thumbnail ? d.thumbnail:'http://via.placeholder.com/180X260'} alt="" /> */}
              </div>
              
              <div className='BookDescription'>
                <div className='BookTitle'>
                  {/* `${title}` */} 책 제목
                  </div>
                <img className='heart' src={heartGaryIcons} alt='Heart'></img>
                
                <div className='BookDetail'>
                  <h6>저자</h6>
                    {/* `${author}` */}
                  <h6>출판사</h6>
                    {/* `${publisher}` */}
                  <h6>출판일</h6>
                    {/* `${pubDate}` */}
                  <h6 style={{display:'inline'}}>포스트 | </h6>
                    {/* `(${numPost})`개 */}
                  <h6 style={{display:'inline'}}>한줄요약 | </h6>
                    {/* `(${numOneLine})개` */}
                </div>
                <div className='BookIntro'>
                  <h6>책 소개</h6>
                    {/* `${description}` */}
                </div>

                <div className='oneLineContainer'>
                  <h5> 대표 한줄평 </h5>
                  <h6> - 코코벤 기록가 </h6>
                </div>
              </div>

            </div>
          )
          {/* ) */}
          }
          <div>
            {/* <button onClick={()=>setPage(page-1)} disabled={page===1}>이전</button>
            <span style={{margin:'10px'}}>{page}/{last}</span>
            <button onClick={()=>setPage(page+1)} disabled={page===last}>다음</button> */}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default SearchPage