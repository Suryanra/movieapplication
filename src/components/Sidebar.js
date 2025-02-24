import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { LuDownload } from "react-icons/lu";
import { MdOutlineImage } from "react-icons/md";
import './Sidebar.css'
const Sidebar = () => {
    const location = useLocation();
  return (
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="sidebar-logo">
            <img src="./../world.png" className="login-icon"></img> Almanack
          </div>

          <div className="all-route">
            <div
              className={`side-bar-route ${
                location.pathname === "/movie/booking" ? "active" : ""
              }`}
            >
              <Link to="/movie/booking">
                <LuDownload />
                Booking
              </Link>
            </div>
            <div
              className={`side-bar-route ${
                location.pathname === "/movie/activity" ? "active" : ""
              }`}
            >
              <Link to="/movie/activity">
                <MdOutlineImage />
                Activity
              </Link>
            </div>
            {/* <div className={`side-bar-route ${location.pathname.startsWith("/movie/selection")?"active":""}`}><Link to="/movie/selection/1">Selection</Link></div> */}
          </div>
        </div>
      </div>
  );
};

export default Sidebar;