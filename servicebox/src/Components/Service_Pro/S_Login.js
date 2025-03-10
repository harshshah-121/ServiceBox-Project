import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./S_login.css";

const S_Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
    
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login Successfully!");
      console.log("Form Submitted", formData);
      navigate("/home-page");
      // Proceed with login logic
    }
  };

  return (
    <div className="s_login-container">
      <form className="s_login-form" onSubmit={handleSubmit}>
        <h2 className="s_heading">Service Provider Login</h2>
        
        <div className="s_input-group">
          <label className="s_label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="s_input"
          />
          {errors.email && <span className="s_error">{errors.email}</span>}
        </div>

        <div className="s_input-group">
          <label className="s_label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="s_input"
          />
          {errors.password && <span className="s_error">{errors.password}</span>}
        </div>

        <button type="submit" className="s_login-button">Login</button>
      </form>
    </div>
  );
};

export default S_Login;
