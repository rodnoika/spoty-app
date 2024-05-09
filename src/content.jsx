import './MPage.css'
import './assets/bg.png'
import './Modal.css'
import { singers } from './data'
import { albums } from './data'
import Rating from './Rating.jsx'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

const now = new Date();
function Modal({ isOpen, onClose, name, singer}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <a className="close-btn" onClick={onClose}><strong>X</strong></a>
        <h1>{name}</h1>
        <h2>{singer}</h2>
        <p>Оцените</p>
        <Rating totalStars={5}/>
      </div>
    </div>
  );
}
function Singercard(props) {
  return (
    <li>
      <div className="ticket">
        <a href="#" >
          <div className="avatar">
            <img src={props.img} alt="Avatar" />
          </div>
          <div className="name">{props.name}</div>
          <div className="role">Исполнитель</div>
        </a>
      </div>
    </li>
  );
}

function Albumcard(props) {
  return (
    <li>
      <div className="ticket">
        <a href="#" onClick={() => props.handleModalClick(props.name, props.singer)}> {/* Используем props.handleModalClick */}
          <div className="avatar">
            <img src={props.img} alt="Avatar" />
          </div>
          <div className="name">{props.name}</div>
          <div className="role">{props.singer}</div>
        </a>
      </div>
    </li>
  );
}

function Header() {
  const [uname, setUname] = useState('');

  useEffect(() => {
    const storedUname = localStorage.getItem('Uname');

    if (storedUname) {
      setUname(storedUname);
    }
  }, []);

  return (
    <header className='header2'>
      <div className='left-section'>
        <h3>Главная</h3>
        <h3>Тренды</h3>
        <h3>Каталог</h3>
      </div>
      <h1 className='header-link'>Spoty</h1>
      <div className='right-section'>
        <h3>{uname}</h3>
        <span className='header-time'>Время:{now.toLocaleTimeString()}</span>
      </div>
    </header>
  );
}
function Contents() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalClick = (name, singer) => {
    setModalContent({ name, singer });
    toggleModal();
  };
  return (
    <div className='content'>
      <div className='bestsingers'>
        <h1>Популярные исполнители</h1>
        <ul className="horizontal-list">
          <Singercard img={singers[0].img} name={singers[0].name} />
          <Singercard img={singers[1].img} name={singers[1].name} />
          <Singercard img={singers[2].img} name={singers[2].name} />
          <Singercard img={singers[3].img} name={singers[3].name} />
          <Singercard img={singers[4].img} name={singers[4].name} />
          <Singercard img={singers[5].img} name={singers[5].name} />
          <Singercard img={singers[6].img} name={singers[6].name} />
        </ul>
      </div>
      <div className='bestsingers'>
        <h1>Популярные альбомы</h1>
        <ul className="horizontal-list">
          <Albumcard img={albums[0].img} name={albums[0].name} singer={albums[0].singer} handleModalClick={handleModalClick}/>
          <Albumcard img={albums[1].img} name={albums[1].name} singer={albums[1].singer} handleModalClick={handleModalClick}/>
          <Albumcard img={albums[2].img} name={albums[2].name} singer={albums[2].singer} handleModalClick={handleModalClick}/>
          <Albumcard img={albums[3].img} name={albums[3].name} singer={albums[3].singer} handleModalClick={handleModalClick}/>
          <Albumcard img={albums[4].img} name={albums[4].name} singer={albums[4].singer} handleModalClick={handleModalClick}/>
          <Albumcard img={albums[5].img} name={albums[5].name} singer={albums[5].singer} handleModalClick={handleModalClick}/>
          <Albumcard img={albums[6].img} name={albums[6].name} singer={albums[6].singer} handleModalClick={handleModalClick}/>
        </ul>
      </div>
      <Modal isOpen={modalOpen}
        onClose={toggleModal}
        name={modalContent.name} singer={modalContent.singer}/>
    </div>
  )
}

export default function Content() {
  return (
    <div>
      <Header />
      <Contents />
    </div>
  );
}