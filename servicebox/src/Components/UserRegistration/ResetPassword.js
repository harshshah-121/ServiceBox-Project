import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    new_password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }
    if (!formData.new_password.trim()) {
      newErrors.new_password = "Password is required";
    } else if (formData.new_password.length < 6) {
      newErrors.new_password = "Password must be at least 6 characters long";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setLoading(true);
     
      try {
        const response = await fetch("http://127.0.0.1:8000/user/send-otp/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_email: formData.user_email,
            new_password: formData.new_password,
          }),
        });
      
        // Check if the response is JSON or not
        let responseData;
        console.log(responseData)
        try {
          responseData = await response.json();
        } catch (error) {
          throw new Error("Server did not return JSON. Check backend response.");
        }
      
        if (response.ok) {
          alert("Success: " + JSON.stringify(responseData));
        } else {
          alert("Error: " + JSON.stringify(responseData));
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Something went wrong. Check console for details.");
      }
    }      
  };

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="reset-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.user_email && <small className="error">{errors.user_email}</small>}
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            name="new_password"
            value={formData.new_password}
            onChange={handleChange}
            placeholder="Enter new password"
          />
          {errors.new_password && <small className="error">{errors.new_password}</small>}
        </div>
        <button type="submit" className="reset-button">ResetPassword</button>
      </form>
    </div>
  );
};

export default ResetPassword;
