import React from 'react'
import { Link } from 'react-router-dom'

const UserHomePageContent = () => {
  return (
    <div>
      <div className="homepage-content">
        <div className="search-container">
          {/* //<img src='./Search.png' alt='logo'></img>  */}
          <input type="text" placeholder="Search for services..." className="search-input" />
        </div>
      </div>

      <div className="services-list">
        {/* //Make the service items links to the description page with a serviceId */}
        <div className="service-item">
          <Link to="/services/1" className="service-link">Furniture</Link>
        </div>
        <div className="service-item">
          <Link to="/services/2" className="service-link">Carpentry</Link>
        </div>
        <div className="service-item">
          <Link to="/services/3" className="service-link">Gardening</Link>
        </div>
        <div className="service-item">
          <Link to="/services/4" className="service-link">Plumbing</Link>
        </div>
      </div>
    </div>
  )
}

export default UserHomePageContent
