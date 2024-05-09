import React, { useState } from 'react';
import "./Search.css";
import {albumsData} from "./albumsdata";
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

function AlbumList({ albums }) {
  return (
    <div>
      <h2 className='albom'>Albums</h2>
      <ul className="horizontal-list">
        {albums.map((album, index) => (
          <div className="ticket">
            <div className="avatar">
              <img src={album.img} alt="Avatar" />
            </div>
            <div className="name">{album.name}</div>
            <div className="role">{album.singer}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}
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
function Content() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAlbums = albumsData.filter(
    (album) =>
      album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.singer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="poiskovoi">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <AlbumList albums={filteredAlbums} />
    </div>
  );
}
export default function Search() {
  return (
    <>
      <Content />
      <Sidebar/>
    </>
  );
}
