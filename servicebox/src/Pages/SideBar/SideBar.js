import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/admin");
  };
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <h2 className="admin-heading">Admin Panel</h2>
      </div>
      <ul className="admin-sidebar-menu">
        <li>
          <a href="/admin-dashboard" className="admin-sidebar-link">
            Admin Dashboard
          </a>
        </li>
        <li>
          <a href="/admin-manage-user" className="admin-sidebar-link">
            Manage User
          </a>
        </li>
        <li>
          <a href="/admin-manage-service-provider" className="admin-sidebar-link">
            Service Provider
          </a>
        </li>
        <li>
          <a href="/admin-manage-service" className="admin-sidebar-link">
            Service
          </a>
        </li>
        <li>
          <a href="/admin-manage-service-request" className="admin-sidebar-link">
            Service Request
          </a>
        </li>
        <li>
          <a href="/admin-manage-complaint" className="admin-sidebar-link">
            Complains
          </a>
        </li>
        <li>
          <a href="/admin-manage-feedback" className="admin-sidebar-link">
            Feedback
          </a>
        </li>
        <li>
          <a onClick={handleLogout} className="admin-sidebar-link" style={{ cursor: "pointer" }}>
            Log Out
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
