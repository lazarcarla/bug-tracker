import React, { useState } from 'react';
import './App.css'
import { loginUser } from './api';
import axios from 'axios';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const role = localStorage.getItem('role');
    if (username.trim() === '' || password.trim() === '') 
    {
      alert('Introduceți username-ul și parola!');
    
      return;
    }
    const loginData = {username: username, password: password, role: role};
    const user = await loginUser(loginData);
    localStorage.setItem('user', JSON.stringify(user));
    onLogin(username, password);
  };

  return (
    <div className='container-role'>
      <h2>Please introduce your username and password</h2>
      <div style={{marginTop: '10px', fontSize: '20px'}}>
        <label htmlFor="username">Username:</label>
        <input
          
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{marginTop: '10px', fontSize: '20px'}}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button style={{marginTop: '20px'}} className='button' onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
