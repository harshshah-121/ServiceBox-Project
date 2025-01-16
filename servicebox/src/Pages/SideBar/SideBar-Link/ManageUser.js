import React, { useState } from "react";
import "./ManageUser.css";

const ManageUser = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
        { id: 3, name: "Mike Brown", email: "mike@example.com", role: "Service Provider", status: "Active" },
        { id: 4, name: "Lisa White", email: "lisa@example.com", role: "User", status: "Active" },
    ]);

    const handleDelete = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };

    return (
        <div className="manage-user">
            <h1>Manage Users</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;
