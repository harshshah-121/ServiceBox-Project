import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "User  name is required";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }
    if (!formData.user_password.trim()) {
      newErrors.user_password = "Password is required";
    } else if (formData.user_password.length < 6) {
      newErrors.user_password = "Password must be at least 6 characters";
    }
    if (formData.user_password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setLoading(true);
      try {
        const res = await axios.post("http://127.0.0.1:8000/user/register/", formData);
        if (res.status === 201 || res.status === 200) {
          alert("User  registered successfully!");
          navigate("/login"); // Redirect to login page
        }
      } catch (error) {
        console.error("Registration failed", error);
        alert("Registration failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>User Name</label>
          <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="Username" required />
          {errors.user_name && <small className="error">{errors.user_name}</small>}
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="Enter email" required />
          {errors.user_email && <small className="error">{errors.user_email}</small>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="user_password" value={formData.user_password} onChange={handleChange} placeholder="Enter password" required />
          {errors.user_password && <small className="error">{errors.user_password}</small>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" required />
          {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
        </div>
        <button type="submit" className="signup-button" disabled={loading}>{loading ? "Signing Up..." : "Sign Up"}</button>
      </form>
      <div className="already-signed-in">
        <p className="user-sign">Already Signed In? <a href="/login" className="user-href">Click here to log in</a></p>
      </div>
    </div>
  );
};

export default UserLogin;