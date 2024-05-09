import './App.css'
import './assets/bg.png'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

function Header(){
  return(
    <header>
      <div className='left-section'>
        <h3><Link to="/">Главная</Link></h3>
        <h3><Link to="/login">Тренды</Link></h3>
        <h3><Link to="/login">Каталог</Link></h3>
      </div>
      <h1 className='header-link'>Spoty</h1>
      <div className='right-section'>
        <h3><Link to="/registration">Регистрация</Link></h3>
        <h3><Link to="/login">Вход</Link></h3>
        <span className='header-time'>Время: {new Date().toLocaleTimeString()}</span>
      </div>
    </header>
  );
}

function AboutUs(){
  return(
    <main>
      <div className='container'>
        <div className='main'>
          <ul>
            <li><h1 className='log'>Spoty</h1></li>
            <li><h1 className='disc'>Твой гид по музыке</h1></li>
            <li><div className='btn-text'><Link to="/login"><a href="#" className="btn btn-white btn-animate">Вход</a></Link></div></li>
            <li><h4 className='registration'>Нет аккаунта? <Link to="/registration">Зарегистрируйтесь!</Link></h4></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function Footer(){
  return(
    <div>
      <div className='information'>
        <ul>
          <li><h3>Contact to me</h3></li>
          <li><h4>email: yerassyl.satymbekov@fizmat.kz</h4></li>
          <li><h4>phone number: +77719805920</h4></li>
        </ul>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}
