import React, { useState, useEffect } from 'react';
import './MyRecord.css';
import Dropdown from 'components/Dropdown/Dropdown';
import axios from 'axios';

const MyRecord = () => {
  const [selectedOption, setSelectedOption] = useState('한줄요약');
  const [reviews, setReviews] = useState([]);
  const access_token = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!access_token) {
          // 로그인되어 있지 않으면 리턴하거나 로그인 페이지로 이동하는 등의 처리
          return;
        }

        const headers = {
          Authorization: `Bearer ${access_token}`,
        };

        let response;
        if (selectedOption === '한줄요약') {
          response = await axios.get('https://api.bookitlist.store/reviews/me', {
            headers: headers,
          });
        } else if (selectedOption === '포스트') {
          response = await axios.get('https://api.bookitlist.store/posts/me', {
            headers: headers,
          });
        }

        const data = response.data;

        // 각 데이터에 대해 책 정보를 가져오는 함수
        const fetchBookInfo = async (id, isReview) => {
          try {
            let bookResponse;
            if (isReview) {
              bookResponse = await axios.get(`https://api.bookitlist.store/books/${id}`, {
                headers: headers,
              });
            } else {
              bookResponse = await axios.get(`https://api.bookitlist.store/books/search`, {
                params: {
                  postId: id,
                },
                headers: headers,
              });
            }
            return bookResponse.data;
          } catch (error) {
            console.error('Error fetching book info:', error);
            return null;
          }
        };

        // 데이터 처리
        if (selectedOption === '한줄요약' || selectedOption === '포스트') {
          const dataWithBookInfo = await Promise.all(data.map(async (item) => {
            const bookInfo = await fetchBookInfo(item.bookId, selectedOption === '한줄요약');
            return {
              ...item,
              bookInfo: bookInfo,
            };
          }));

          setReviews(dataWithBookInfo);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [access_token, selectedOption]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='MyRecord'>
      <div className='MyRecordContainer'>
        <Dropdown
          smallDropdown={true}
          toggleOneLineWriting={() => handleOptionChange('한줄요약')}
          togglePostWriting={() => handleOptionChange('포스트')}
        />
        {selectedOption === '한줄요약' && (
          <div className='ReviewBox'>
            {reviews.map((review) => (
              <div className='ReviewContainer' key={review.id}>
                <div className='ReviewImage'>
                  <img src={review.bookInfo.cover} alt={review.bookInfo.title} />
                </div>
                <div className='ReviewText'>
                  <h1 className='ReviewTitle'>{review.bookInfo.title}</h1>
                  <p className='ReviewAuthor'>저자: {review.bookInfo.author}</p>
                  <p className='ReviewContent'>{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedOption === '포스트' && (
          <div className='ReviewBox'>
            {reviews.map((post) => (
              <div className='PostContainer' key={post.id}>
                <div className='PostHeader'>
                  <img className='PostImage' src={post.bookInfo.cover} alt={post.bookInfo.title} />
                  <div className='PostText'>
                    <h1 className='PostBookTitle'>{post.bookInfo.title}</h1>
                    <p className='PostAuthor'>저자: {post.bookInfo.author}</p>
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
