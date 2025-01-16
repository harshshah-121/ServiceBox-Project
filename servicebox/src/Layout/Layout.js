import React from "react";
// import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../Pages/Header/Header"
import SideBar from "../Pages/SideBar/SideBar"

const Layout = ({ children }) => {
  return (
    <div className="admin-layout">
      {/* Header Section */}
      <Header />

      {/* Main Layout Section */}
      <div className="layout-container">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content (Dynamic Content using children prop) */}
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
