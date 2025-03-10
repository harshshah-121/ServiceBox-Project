import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const [error, setError] = useState(""); // State to handle password error

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // Clear error if passwords match

    axios
      .post("service_provider/register/", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        alert("Registration Successful!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirm_password: "",
        });
        navigate("/s-service");
      })
      .catch((error) => console.log("Registration error:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="service-form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="f_name">
          First Name:
          <input
            type="text"
            name="firstname"
            className="input_name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </label>

        <label className="f_name">
          Last Name:
          <input
            type="text"
            name="lastname"
            className="input_name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </label>

        <label className="f_name">
          Email:
          <input
            type="email"
            name="email"
            className="input_name"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="f_name">
          Password:
          <input
            type="password"
            name="password"
            className="input_name"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <label className="f_name">
          Confirm Password:
          <input
            type="password"
            name="confirm_password"
            className="input_name"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error if passwords do not match */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default S_Registration;
