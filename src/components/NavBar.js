import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
const NavBar = () => {
        const { user, setUser } = useContext(AuthContext);
  return (
      <div className="navbar-container">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <IoMdSearch className="search-icon" />
          <br/>
        </div>
        
        <div className="user-name">
          <FaRegUserCircle /> {user}
        </div>
      </div>
  )
}

export default NavBar
