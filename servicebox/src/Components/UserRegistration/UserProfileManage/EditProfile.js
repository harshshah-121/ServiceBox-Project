import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    address: '',
    gender: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    phoneNumber: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation logic
    let errorMessage = '';
    if (name === 'username' && value.trim() === '') {
      errorMessage = 'Username is required';
    }
    if (name === 'phoneNumber' && !/^\d{10}$/.test(value)) {
      errorMessage = 'Phone number must be exactly 10 digits';
    }

    setErrors({ ...errors, [name]: errorMessage });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check before submission
    if (!formData.username.trim()) {
      setErrors((prev) => ({ ...prev, username: 'Username is required' }));
      return;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrors((prev) => ({ ...prev, phoneNumber: 'Phone number must be exactly 10 digits' }));
      return;
    }

    alert('Profile updated successfully!');
    // Add API call to update user profile in the backend
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <p className="error">{errors.username}</p>}

        {/* Phone Number */}
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

        {/* Address */}
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        {/* Gender Selection */}
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
