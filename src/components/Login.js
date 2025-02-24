import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='box input-container'>
          
          <img src='./world.png' className='login-icon'></img> Almanack
          </div>
        <div className='input-container'>
           <img src="./user.png" className="input-icon" alt="username icon" />
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </div>
      <div className='input-container'>
         <img src="./keyboard.png" className="input-icon" alt="username icon" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
      <div className='input-container'><button className='login-btn' onClick={() => login(username, password)}>Login</button></div>
      </div>
    </div>
  );
};
export default Login;