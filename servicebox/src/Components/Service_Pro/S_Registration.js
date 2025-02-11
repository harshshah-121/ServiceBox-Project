import React, { useState } from "react";
import "./S_Registration.css";
import axios from "axios";

const S_Registration = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstname.trim()) errors.firstname = "First Name is required";
    if (!formData.lastname.trim()) errors.lastname = "Last Name is required";
    if (!emailRegex.test(formData.email)) errors.email = "Invalid email format";
    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters long";
    if (formData.password !== formData.confirm_password)
      errors.confirm_password = "Passwords do not match";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; 
    }
  
    axios.post("service_provider/register/", formData, {
        headers: { "Content-Type": "application/json" },  
        withCredentials: true, 
      })
      .then(response => {
        alert("Registration Successful!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "", 
          confirm_password: "",
        });
      })
      .catch(error => console.log("Registration error:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
          {errors.confirm_password && <p className="error">{errors.confirm_password}</p>}
        </label>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default S_Registration;
