import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './UserHomePage .css';

import SearchService from './HomePage/UserNavDetail/SearchService';
import SelectServicePage from './HomePage/UserNavDetail/SelectService';
import ProfileManagement from './HomePage/UserNavDetail/ProfileManagement';
import ContactUs from './HomePage/UserNavDetail/ContactUs';

const UserHomePage = () => {
  const [activeComponent, setActiveComponent] = useState('Home');
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return (
          <div className="welcome-container">
            <h1 className="welcome-message">Welcome to your website, ServiceBox!</h1>
            <ul className="feature-list">
              <li>User can search for services.</li>
              <li>User can select a service.</li>
              <li>User can manage their profile.</li>
              <li>User can view and manage contact information.</li>
              <li>User can log out easily.</li>
            </ul>
          </div>
        );
      case 'SearchService':
        return <SearchService />;
      case 'SelectService':
        return <SelectServicePage />;
      case 'ProfileManagement':
        return <ProfileManagement />;
      case 'ContactUs':
        return <ContactUs />;
      default:
        return (
          <div className="welcome-container">
            <h1 className="welcome-message">Welcome to your website, ServiceBox!</h1>
            <ul className="feature-list">
              <li>User can search for services.</li>
              <li>User can select a service.</li>
              <li>User can manage their profile.</li>
              <li>User can view and manage contact information.</li>
              <li>User can log out easily.</li>
            </ul>
          </div>
        );
    }
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/login'); // Redirect to the Login page after logout
  };

  return (
    <div className="user-home-container">
      <Navbar>
        <li>
          <button onClick={() => setActiveComponent('Home')}>Home</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('SearchService')}>Search Service</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('SelectService')}>Select Service</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('ProfileManagement')}>User Profile Management</button>
        </li>
        <li>
          <button onClick={() => setActiveComponent('ContactUs')}>User Contact Us</button>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button> {/* Handle logout */}
        </li>
      </Navbar>

      <div className="component-container">{renderComponent()}</div>
    </div>
  );
};

export default UserHomePage;
