import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainContent from "./Pages/MainContent/MainContent";
import Layout from "./Layout/Layout";
// import AdminDashboard from "./Pages/SideBar/SideBar-Link/AdminDashboard";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import ManageUser from "./Pages/SideBar/SideBar-Link/ManageUser";
import ServiceProvider from "./Pages/SideBar/SideBar-Link/ServiceProvider";
import Service from "./Pages/SideBar/SideBar-Link/Service";
import ServiceRequest from "./Pages/SideBar/SideBar-Link/ServiceRequest";
import Complaint from "./Pages/SideBar/SideBar-Link/Complaint";
import Feedback from "./Pages/SideBar/SideBar-Link/Feedback";

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} /> 
        <Route path="/admin-dashboard" element={<Layout><MainContent /></Layout>} />
        <Route path="/admin-manage-user" element={<Layout><ManageUser /></Layout>} />
        <Route path="/admin-manage-service-provider" element={<Layout><ServiceProvider /></Layout>} />
        <Route path="/admin-manage-service" element={<Layout><Service /></Layout>} />
        <Route path="/admin-manage-service-request" element={<Layout><ServiceRequest /></Layout>} />
        <Route path="/admin-manage-complaint" element={<Layout><Complaint /></Layout>} />
        <Route path="/admin-manage-feedback" element={<Layout><Feedback /></Layout>} />
      </Routes>
    </Router>
    </>
    // <AdminDashboard/>
  );
};

export default App;
