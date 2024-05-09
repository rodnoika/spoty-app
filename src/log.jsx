import React, { useState, useEffect } from 'react';
import './Log.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

const Log = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [Uname, setUsername] = useState('');
  const storedUsers = JSON.parse(localStorage.getItem('users')) || []; // Определение storedUsers
  useEffect(() => {
    console.log('Обновленное значение username:', Uname);
    localStorage.setItem('username', Uname);
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, [Uname]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsersArray = Object.values(storedUsers);
  
    if (!Array.isArray(storedUsersArray)) {
      console.error('Данные пользователя не являются массивом');
      return;
    }
    
    const user = storedUsersArray.find(user => user.email === email);
  
    if (user) {
      if (user.password === password) {
        setIsLoggedIn(true);
        console.log(isLoggedIn);
        setUsername(user.username); 
        localStorage.setItem('Uname', Uname); 
      } else {
        setIsLoggedIn(false);
        console.log(false);
      }
    } else {
      setIsLoggedIn(false);
      console.log("Такого пользователя не существует");
    }
    
  };

  

  return (
    <div className="login-form">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/main"><button type="submit">Войти</button></Link>

      </form>
    </div>
  );
};
export default Log;
