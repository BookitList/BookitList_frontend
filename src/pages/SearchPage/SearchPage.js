import React from 'react';
import './SearchPage.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const SearchPage = () => {
  return (
    <div className='SearchPage'>
        <Header />
        <div className='SearchPageContainer'>
            <div className='BookContainer'>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default SearchPage