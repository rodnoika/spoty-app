import React, { useState, useEffect } from 'react';
import './reg.css';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';

const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : {};
};

const saveUsersToLocalStorage = (users, navigate) => {
  const userlist = users;
  console.log(userlist);
  localStorage.setItem('users', JSON.stringify(users));
  navigate('/login');
};

const userId = (users) => {
  return Object.keys(users).length;
};

const Reg = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [users, setUsers] = useState(getUsersFromLocalStorage());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      saveUsersToLocalStorage(users, navigate);
    }
  }, [users, isSubmitted, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailExist = Object.values(users).some(user => user.email === formData.email);
    if (isEmailExist) {
      alert('Пользователь с таким email уже зарегистрирован.');
    } else {
      const Id = userId(users);
      const updatedUsers = { ...users, [Id]: formData };
      setUsers(updatedUsers);
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      setIsSubmitted(true);
    }
  };

  return (
    <div className="registration-form">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Reg;
