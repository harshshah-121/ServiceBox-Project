import React, { useState } from "react";
import "./AboutMe.css"; // Import the CSS file

const AboutMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      fullName: formData.fullName.trim() === "" ? "This field is required" : "",
      email: formData.email.trim() === "" ? "This field is required" : "",
    };

    setErrors(newErrors);

    if (!newErrors.fullName && !newErrors.email) {
      alert("Profile updated successfully!");
      // Add API call or form submission logic here if needed
    }
  };

  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <p>Edit your personal details here.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "input-error" : ""}
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AboutMe;
