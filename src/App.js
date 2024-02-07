import React,{useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home//Home';
import Login from 'pages/Login/Login';
import LoginHandler from 'pages/Login/LoginHandler';
import BookDetail from 'pages/BookDetail/BookDetail';
import MyBook from 'pages/MyBook/MyBook';
import './App.css';

import axios from 'axios';

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
        <Route path="/MyBook"  element={<MyBook />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
