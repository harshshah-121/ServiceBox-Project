import React from "react";
import "./SideBar.css";

const Sidebar = () => {
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
          <a href="/admin-manage-service-Monitoring Service" className="sidebar-link">
            Monitoring Service
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
          <a href="/admin-manage-package" className="sidebar-link">
            Package
          </a>
        </li>
        <li>
          <a href="/admin-manage-service-LogOut" className="sidebar-link">
            Log Out
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
