import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const navigate = useNavigate();

  const login = (username, password) => {
    //  we can do api call here
    if (username === 'naval.ravikant' && password === '05111974') {
      setUser(username);
      localStorage.setItem('user', username);
      navigate('/movie/booking');
    } else {
      alert('Wrong Credentials ' );
      alert('USE: username: naval.ravikant and password:05111974' );
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };