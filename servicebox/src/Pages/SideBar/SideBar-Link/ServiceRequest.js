import React from "react";
import "./ServiceRequest.css";

const ServiceRequest = () => {
    const serviceRequestData = [
        {
            requestId: "REQ001",
            customerName: "John Doe",
            serviceType: "Plumbing",
            status: "Pending",
            requestDate: "2025-01-10",
        },
        {
            requestId: "REQ002",
            customerName: "Jane Smith",
            serviceType: "Electrical",
            status: "Completed",
            requestDate: "2025-01-09",
        },
        {
            requestId: "REQ003",
            customerName: "Michael Brown",
            serviceType: "Cleaning",
            status: "In Progress",
            requestDate: "2025-01-08",
        },
    ];

    return (
        <div className="service-request">
            <h2>How Service Requests Work</h2>
            <p>
                A service request is initiated by a customer when they need a particular service.
                The system captures the following key data for each service request:
            </p>
            <ul>
                <li><strong>Request ID:</strong> A unique identifier for the service request.</li>
                <li><strong>Customer Name:</strong> The name of the customer making the request.</li>
                <li><strong>Service Type:</strong> The type of service requested (e.g., plumbing, electrical).</li>
                <li><strong>Status:</strong> The current status of the request (e.g., Pending, In Progress, Completed).</li>
                <li><strong>Request Date:</strong> The date when the service request was created.</li>
            </ul>
            <h3 className="servicerequest">Sample Data:</h3>
            <table className="service-table">
                    <tr>
                        <th>Request ID</th>
                        <th>Customer Name</th>
                        <th>Service Type</th>
                        <th>Status</th>
                        <th>Request Date</th>
                    </tr>
                    {serviceRequestData.map((request) => (
                        <tr key={request.requestId}>
                            <td>{request.requestId}</td>
                            <td>{request.customerName}</td>
                            <td>{request.serviceType}</td>
                            <td>{request.status}</td>
                            <td>{request.requestDate}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
};

export default ServiceRequest;
