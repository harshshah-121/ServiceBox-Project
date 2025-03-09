import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./S_login.css";

const S_Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
    
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successfully!");
    console.log("Form Submitted", formData);
    navigate("/s-home-page");
  };

  return (
    <div className="service-login-container">
      <form className="service-login-form" onSubmit={handleSubmit}>
        <h2 className="service-heading">Service Provider Login</h2>
        
        <div className="service-input-group">
          <label className="service-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="service-input"
            required
          />
        </div>

        <div className="service-input-group">
          <label className="service-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="service-input"
            required
          />
        </div>

        <button type="submit" className="service-login-button">Login</button>
      </form>
    </div>
  );
};

export default S_Login;
