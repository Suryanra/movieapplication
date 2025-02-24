import { Outlet, Link, useLocation } from "react-router-dom";
import "./CommonPage.css";
import Sidebar from "../components/Sidebar";

function CommonPage() {
  return (
    <div className="common-container">
      <Sidebar></Sidebar>
      {/* Main Content Section (70% width) */}
      <div className="main-content">
        <Outlet /> {/* Renders child routes dynamically */}
      </div>
    </div>
  );
}

export default CommonPage;
