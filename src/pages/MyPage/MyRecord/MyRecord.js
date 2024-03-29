import React, { useState } from 'react';
import './MyRecord.css';
import Dropdown from 'components/Dropdown/Dropdown';

const MyRecord = () => {
  const [selectedOption, setSelectedOption] = useState('한줄요약'); // 디폴트 값을 '한줄요약'으로 설정

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // 한줄요약에 대한 더미 데이터
  const dummyReviews = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: '인간의 본능을 경계하고',
      author: '저자 한강',
      content: '한줄요약 내용 1'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: '자연 속의 평화로운 삶을 찾아서',
      author: '저자 홍길동',
      content: '한줄요약 내용 2'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: '모험과 발견의 세계',
      author: '저자 아서 코난 돌',
      content: '한줄요약 내용 3'
    },
  ];

   // 포스트에 대한 더미 데이터
   const dummyPosts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      bookTitle: '채식주의자',
      title: '채식주의자두나무어쩌고',
      author: '저자 한강강술래',
      content: '나는 도대체 왜 그러고 사는가 전혀 생각도 못했다. 등장하는 왜가리 캐릭터의 성우가 스다 마사키일 것이라곤 전혀 생각도 못했다. 스다 마사키가 성우를 맡는다는 것은 알았으나 그것이 왜가리일 것이라는 생각은 스탭롤이 올라가면서도 하지 못했다. 그 목소리를 가지고 그렇게 쓰는 사람은 처음 봤다. 집에 와서 예고편을 다시 틀어보고 왜가리의 음성이 스다 마사키의 것이란 걸 깨닫고 비명을 질렀다.'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      bookTitle: '채식주의자',
      title: '제목2',
      author: '저자2',
      content: '포스트 내용2'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      bookTitle: '채식주의자',
      title: '제목3',
      author: '저자3',
      content: '포스트 내용3'
    },
  ];
  

  return (
    <div className='MyRecord'>
      <div className='MyRecordContainer'>
        <Dropdown
          smallDropdown={true}
          // 한줄요약 선택 시 처리
          toggleOneLineWriting={() => handleOptionChange('한줄요약')}
          // 포스트 선택 시 처리
          togglePostWriting={() => handleOptionChange('포스트')}
        />
        {/* 선택된 옵션에 따라 다른 내용을 보여줌 */}
        {selectedOption === '한줄요약' && (
          <div className='ReviewBox'>
            {dummyReviews.map((review) => (
              <div className='ReviewContainer' key={review.id}>
                <div className='ReviewImage'>
                  <img src={review.image} alt={review.title} />
                </div>
                <div className='ReviewText'>
                  <h1 className='ReviewTitle'>{review.title}</h1>
                  <p className='ReviewAuthor'>저자: {review.author}</p>
                  <p className='ReviewContent'>{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedOption === '포스트' && (
          <div className='ReviewBox'>
          {dummyPosts.map((post) => (
          <div className='PostContainer' key={post.id}>
            <div className='PostHeader'>
                <img className='PostImage' src={post.image} alt={post.title} />
              <div className='PostText'>
                <h1 className='PostBookTitle'>{post.bookTitle}</h1>
                <p className='PostAuthor'>저자: {post.author}</p>
              </div>
            </div>
            <div className='PostContentBox'>
              <p className='PostTitle'>{post.title}</p>
              <p className='PostContent'>{post.content}</p>
            </div>
          </div>
        ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default MyRecord;
