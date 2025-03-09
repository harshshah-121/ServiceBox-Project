import React from 'react';
import './UserHomePageContent.css';

const UserHomePageContent = () => {
  return (
    <div>
      <div className="userhomepagecontent-content">
        <div className="userhomepagecontent-search-container">
          {/* <img src='./Search.png' alt='logo'></img> */}
          <input
            type="u_text"
            placeholder="Search for services..."
            className="userhomepagecontent-search-input"
          />
        </div>
      </div>

      <div className="userhomepagecontent-services-list">
        {/* Make the service items links to the description page with a serviceId */}
        <div className="userhomepagecontent-service-item">
          <a href="/services/1" className="userhomepagecontent-service-link">
            Furniture
          </a>
        </div>
        <div className="userhomepagecontent-service-item">
          <a href="/services/2" className="userhomepagecontent-service-link">
            Carpentry
          </a>
        </div>
        <div className="userhomepagecontent-service-item">
          <a href="/services/3" className="userhomepagecontent-service-link">
            Gardening
          </a>
        </div>
        <div className="userhomepagecontent-service-item">
          <a href="/services/4" className="userhomepagecontent-service-link">
            Plumbing
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserHomePageContent;
