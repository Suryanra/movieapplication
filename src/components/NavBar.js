import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const NavBar = ({ setSearchQuery }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar-container">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} 
        />
        <IoMdSearch className="search-icon" />
      </div>
      
      <div className="user-name">
        <FaRegUserCircle /> {user}
      </div>
    </div>
  );
};

export default NavBar;
