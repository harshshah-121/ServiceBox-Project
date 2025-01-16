import React from "react";
import "./ServiceProvider.css";

const ServiceProvider = () => {
  const serviceProviders = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      address: "123 Main Street, New York",
      status: "Active",
      password: "********",
      aadharNo: "1234 5678 9012",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      address: "456 Elm Street, Los Angeles",
      status: "Inactive",
      password: "********",
      aadharNo: "2345 6789 0123",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      address: "789 Oak Avenue, Chicago",
      status: "Active",
      password: "********",
      aadharNo: "3456 7890 1234",
    },
  ];

  return (
    <div className="service-provider">
      <h1>Manage Service Providers</h1>
      <table className="service-provider-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Status</th>
            <th>Password</th>
            <th>Aadhar No</th>
          </tr>
        </thead>
        <tbody>
          {serviceProviders.map((provider) => (
            <tr key={provider.id}>
              <td>{provider.id}</td>
              <td>{provider.firstName}</td>
              <td>{provider.lastName}</td>
              <td>{provider.email}</td>
              <td>{provider.address}</td>
              <td>{provider.status}</td>
              <td>{provider.password}</td>
              <td>{provider.aadharNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceProvider;
