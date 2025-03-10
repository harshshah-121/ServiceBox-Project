import React, { useState,useEffect } from 'react';
import './EditProfile.css';
import axios from 'axios';
import { data } from 'react-router-dom';
// import { Toast } from 'bootstrap';
import {useNavigate} from "react-router-dom"

const EditProfile = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    user_name: '',
    user_phone_number: '',
    user_address: '',
    user_gender: '',
    user_age: '',
<<<<<<<<< Temporary merge branch 1
    profilePic: null,
    profilePicPreview: "",
=========
>>>>>>>>> Temporary merge branch 2
  });

  const [errors, setErrors] = useState({
    user_name: '',
    user_phone_number: '',
    user_age: '',
    profilePic: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Validation logic
    if (name === 'user_name' && value.trim() === '') {
      errorMessage = 'Username is required';
    }
    if (name === 'user_phone_number' && !/^\d{10}$/.test(value)) {
      errorMessage = 'Phone number must be exactly 10 digits';
    }
    if (name === 'user_age' && (!/^\d+$/.test(value) || value < 1 || value > 120)) {
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

  useEffect(() => {
    axios.get("user/user-profile/", { withCredentials: true })  
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => navigate("/login"));
  }, []);
  // Handle form submission
  const handleSubmit = async (e) => {
    // alert("okkk")
    e.preventDefault();

    // Final validation check
    if (!formData.user_name.trim()) {
      setErrors((prev) => ({ ...prev, user_name: 'Username is required' }));
      return;
    }
    if (!/^\d{10}$/.test(formData.user_phone_number)) {
      setErrors((prev) => ({ ...prev, user_phone_number: 'Phone number must be exactly 10 digits' }));
      return;
    }
    if (!/^\d+$/.test(formData.user_age) || formData.user_age < 1 || formData.user_age > 120) {
      setErrors((prev) => ({ ...prev, user_age: 'Age must be between 1 and 120' }));
      return;
    }
   
    axios.put("user/user-profile/", formData, {
      withCredentials: true, 
    })
    .then(response => {
      alert("Profile updated successfully!");
      setFormData(response.data.data);
    })
    .catch(error => console.error("Profile update error:", error));


  };

  return (
    <div className="user-profile-container">
      <h2  className='user_edit-profile'>Edit Profile</h2>
      <form className='user-editprofile'>
        {/* Username */}
        <label className='usr_name'>Username:</label>
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
        {errors.user_name && <p className="error">{errors.user_name}</p>}

        {/* Email (Disabled) */}
        <label className='usr_email'>Email:</label>
        <input type="email" name="user_email" value={formData.user_email} disabled />
        
        {/* Phone Number */}
        <label  className='usr_phoneno'>Phone No:</label>
        <input type="tel" name="user_phone_number" value={formData.user_phone_number} onChange={handleChange} required />
        {errors.user_phone_number && <p className="error">{errors.user_phone_number}</p>}

        {/* Address */}
        <label  className='usr_address'>Address:</label>
        <textarea name="user_address" className='usr_add' value={formData.user_address} onChange={handleChange} required></textarea>

        {/* Gender Selection */}
        <label  className='usr_gender'>Gender:</label>
        <select className='u_gender' name="gender" value={formData.user_gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Age */}
        <label  className='usr_Age'>Age:</label>
        <input type="number" name="user_age" value={formData.user_age} onChange={handleChange} required />
        {errors.user_age && <p className="error">{errors.user_age}</p>}

        {/* Profile Picture Upload */}
        <label  className='usr_profilepic'>Profile Pic:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {errors.profilePic && <p className="error">{errors.profilePic}</p>}
        {formData.profilePicPreview && <img src={formData.profilePicPreview} alt="Profile" className="profile-pic-preview" />}

        {/* Submit Button */}
        <button type="submit" onClick={handleSubmit} className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;