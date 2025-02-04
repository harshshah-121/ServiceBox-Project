import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: 'user@example.com', // Pre-filled email
    phoneNumber: '',
    address: '',
    gender: '',
    age: '',
    profilePic: null,
    profilePicPreview: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    phoneNumber: '',
    age: '',
    profilePic: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Validation logic
    if (name === 'username' && value.trim() === '') {
      errorMessage = 'Username is required';
    }
    if (name === 'phoneNumber' && !/^\d{10}$/.test(value)) {
      errorMessage = 'Phone number must be exactly 10 digits';
    }
    if (name === 'age' && (!/^\d+$/.test(value) || value < 1 || value > 120)) {
      errorMessage = 'Age must be between 1 and 120';
    }

    setErrors({ ...errors, [name]: errorMessage });
    setFormData({ ...formData, [name]: value });
  };

  // Handle profile picture upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, profilePic: 'Only image files are allowed' }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        profilePic: file,
        profilePicPreview: reader.result,
      }));
    };
    reader.readAsDataURL(file);

    setErrors((prev) => ({ ...prev, profilePic: '' }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check
    if (!formData.username.trim()) {
      setErrors((prev) => ({ ...prev, username: 'Username is required' }));
      return;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrors((prev) => ({ ...prev, phoneNumber: 'Phone number must be exactly 10 digits' }));
      return;
    }
    if (!/^\d+$/.test(formData.age) || formData.age < 1 || formData.age > 120) {
      setErrors((prev) => ({ ...prev, age: 'Age must be between 1 and 120' }));
      return;
    }
    if (!formData.profilePic) {
      setErrors((prev) => ({ ...prev, profilePic: 'Profile picture is required' }));
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
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        {errors.username && <p className="error">{errors.username}</p>}

        {/* Email (Disabled) */}
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} disabled />

        {/* Phone Number */}
        <label>Phone No:</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

        {/* Address */}
        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

        {/* Gender Selection */}
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Age */}
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        {errors.age && <p className="error">{errors.age}</p>}

        {/* Profile Picture Upload */}
        <label>Profile Pic:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {errors.profilePic && <p className="error">{errors.profilePic}</p>}
        {formData.profilePicPreview && <img src={formData.profilePicPreview} alt="Profile" className="profile-pic-preview" />}

        {/* Submit Button */}
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
