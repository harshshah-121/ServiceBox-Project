import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/");
  };
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/admin-dashboard" className="sidebar-link">
            Admin Dashboard
          </a>
        </li>
        <li>
          <a href="/admin-manage-user" className="sidebar-link">
            Manage User
          </a>
        </li>
        <li>
          <a href="/admin-manage-service-provider" className="sidebar-link">
            Service Provider
          </a>
        </li>
        <li>
          <a href="/admin-manage-service" className="sidebar-link">
            Service
          </a>
        </li>
        <li>
          <a href="/admin-manage-service-request" className="sidebar-link">
            Service Request
          </a>
        </li>
        <li>
          <a href="/admin-manage-complaint" className="sidebar-link">
            Complains
          </a>
        </li>
        <li>
          <a href="/admin-manage-feedback" className="sidebar-link">
            Feedback
          </a>
        </li>
        <li>
          <a onClick={handleLogout} className="sidebar-link" style={{ cursor: "pointer" }}>
            Log Out
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
