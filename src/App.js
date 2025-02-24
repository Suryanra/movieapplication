import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Booking from './components/Booking';
import Selection from './components/Selection';
import Activity from './components/Activity';
import CommonPage from './pages/CommonPage';
import './App.css'
const App = () => {
  return (
    <div className='App container'>
    <Routes>
      <Route path="/" element={<Login />} />
      {/*  paren route for the movie */}

      <Route path="/movie" element={<CommonPage />}>
        <Route path="booking" element={<Booking />} />
        <Route path="selection/:id" element={<Selection />} />
        <Route path="activity" element={<Activity />} />
      </Route>

    </Routes>
    </div>

  );
};

export default App;