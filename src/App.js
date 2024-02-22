import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home//Home';
import Login from 'pages/Login/Login';
import LoginHandler from 'pages/Login/LoginHandler';
import BookDetail from 'pages/BookDetail/BookDetail';
import Writing from 'pages/Writing/Writing';
import './App.css';

// import axios from 'axios';

import MyPage from 'pages/MyPage/MyPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import WritingDetail from 'pages/WritingDetail/WritingDetail';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" exact element={<Home />} />*/}
        <Route path="/" exact element={<Home />} />
        <Route path="/Login"  element={<Login />} />
        <Route exact path="/login/redirected" element={<LoginHandler />} />
        {/* BookDetail 책 데이터마다 링크 다르게 변수처리 */}
        <Route path="/BookDetail"  element={<BookDetail />} /> 
        <Route path="/MyPage"  element={<MyPage />} />  
        <Route path="/Writing"  element={<Writing />} /> 
        <Route path="/SearchPage"  element={<SearchPage />} />
        <Route path="/WritingDetail" element={<WritingDetail />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
