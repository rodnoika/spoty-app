import './MPage.css'
import './assets/bg.png'
import './Modal.css'
import { singers } from './data'
import { albums } from './data'
import Content from './content.jsx'
import Rating from './Rating.jsx'
import Search from './Search.jsx'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className='sidebar'>
      <Link to = "/main"><div><h1 className='glav'>Главная</h1></div></Link>
      <Link to="/search"><div className='search-bar'>
        <img src="src\assets\лупа.png" className='loupe-icon' />
        <span className='search-text '>Поиск</span>
      </div></Link>
    </div>
  )
}

export default function MPage() {
  return (
    <div>
      <Content/>
      <Sidebar/>
    </div>
  );
}
