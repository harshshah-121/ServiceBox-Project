import React, { useState } from "react";
import "./AboutMe.css"; // Import the CSS file

const AboutMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    age: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      name: formData.name.trim() === "" ? "This field is required" : "",
      address: formData.address.trim() === "" ? "This field is required" : "",
      phoneNumber: formData.phoneNumber.trim() === "" ? "This field is required" : "",
      age: formData.age.trim() === "" ? "This field is required" : "",
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.address && !newErrors.phoneNumber && !newErrors.age) {
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
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "input-error" : ""}
          />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? "input-error" : ""}
          />
          {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
        </div>

        <div className="form-group">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className={errors.age ? "input-error" : ""}
          />
          {errors.age && <p className="error-text">{errors.age}</p>}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AboutMe;
