import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      // Check if email and password match the predefined credentials
      if (formData.email === "user@gmail.com" && formData.password === "user123") {
        alert("Login Successful!");
        console.log(formData);
        onLogin();
        navigate("/home-page"); // Redirect to User Home page after successful login
      } else {
        alert("Invalid email or password!"); // Show error if credentials don't match
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.password && <small className="error">{errors.password}</small>}
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

export default Login;
