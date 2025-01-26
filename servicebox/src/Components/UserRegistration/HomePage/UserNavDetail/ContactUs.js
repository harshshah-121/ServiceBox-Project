import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    // Static list of users
    const users = [
        { id: 1, email: 'john.doe@example.com', phone: '+1-800-111-2222', address: '123 Main St, City A, USA' },
        { id: 2, email: 'jane.smith@example.com', phone: '+1-800-333-4444', address: '456 Maple Ave, City B, USA' },
        { id: 3, email: 'bob.brown@example.com', phone: '+1-800-555-6666', address: '789 Oak Dr, City C, USA' },
        { id: 4, email: 'alice.jones@example.com', phone: '+1-800-777-8888', address: '101 Pine Ln, City D, USA' },
    ];

    return (
        <div className="contact-us-container">
            <h1>User Contact List</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactUs;
