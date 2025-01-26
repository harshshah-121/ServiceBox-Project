import React, { useState } from 'react';
import './ProfileManagement.css';

const ProfileManagement = () => {
    // Static user data
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    // State to track whether data should be displayed in a table
    const [showTable, setShowTable] = useState(false);

    // State to track validation errors
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Handle save action
    const handleSave = () => {
        // Validation for name, email, phone, and address
        const newErrors = {};

        if (!userData.name) {
            newErrors.name = 'Name is required';
        }

        // Email format validation (regex for valid email)
        if (!userData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.email = 'Email format is invalid';
        }

        // Phone number validation (must be 10 digits, no letters or special characters)
        if (!userData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(userData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        if (!userData.address) {
            newErrors.address = 'Address is required';
        }

        // If there are any errors, set the errors state and stop form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Clear any previous errors and show the data table
        setErrors({});
        setShowTable(true);
    };

    return (
        <div className="profile-management-container">
            <h1>User Profile Management</h1>
            <form className="profile-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    {errors.name && <small className="error">{errors.name}</small>}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <small className="error">{errors.email}</small>}
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <small className="error">{errors.phone}</small>}
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                    ></textarea>
                    {errors.address && <small className="error">{errors.address}</small>}
                </div>
                <button type="button" onClick={handleSave}>
                    Save Changes
                </button>
            </form>

            {/* Display user data in a smaller table if "showTable" is true */}
            {showTable && (
                <div className="user-data-table">
                    <h2>Saved User Data</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{userData.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{userData.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{userData.phone}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{userData.address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ProfileManagement;
