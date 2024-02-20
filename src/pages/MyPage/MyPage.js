import React, { useCallback, useEffect, useState } from 'react';
import './MyPage.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Categories from 'components/Categories/Categories';
import MyRecord from './MyRecord/MyRecord'; 
import Library from './Library/Library';
import Bookmarks from './Bookmarks/Bookmarks';

const MyPage = () => {
  // 기본 카테고리 state 선언
  const [category, setCategory] = useState('MyRecord');
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback((selectedCategory) => setCategory(selectedCategory), []);

  // 선택된 카테고리에 따른 컴포넌트 매핑
  const categoryComponents = {
    MyRecord: <MyRecord />,
    Library: <Library />,
    Bookmarks: <Bookmarks />
  };


  return (
    <div className='MyPage'>
      <Header />
      <div className='MyPageContainer'>
        <Categories selectedCategory={category} onCategoryChange={onSelect} />
        <div className='ContentContainer'>

          <div className='Content'>
            {categoryComponents[category]}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
