import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./MainContent.css";

const data = [
  { name: "January", BookingsDone: 120, BookingsCanceled: 20 },
  { name: "February", BookingsDone: 150, BookingsCanceled: 30 },
  { name: "March", BookingsDone: 200, BookingsCanceled: 25 },
  { name: "April", BookingsDone: 180, BookingsCanceled: 15 },
  { name: "May", BookingsDone: 250, BookingsCanceled: 40 },
  { name: "June", BookingsDone: 300, BookingsCanceled: 50 },
  { name: "July", BookingsDone: 270, BookingsCanceled: 35 },
  { name: "August", BookingsDone: 320, BookingsCanceled: 45 },
  { name: "September", BookingsDone: 310, BookingsCanceled: 20 },
  { name: "October", BookingsDone: 280, BookingsCanceled: 30 },
  { name: "November", BookingsDone: 290, BookingsCanceled: 25 },
  { name: "December", BookingsDone: 350, BookingsCanceled: 50 },
];

const MainContent = () => {
  return (
    <main className="admin-main-content">
      <div className="admin-content-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel. Manage your users and service providers here.</p>
      </div>

      <div className="admin-content">
        <div className="admin-content-card">
          <h2>Total Users</h2>
          <p>1,230</p>
        </div>
        <div className="admin-content-card">
          <h2>Total Service Providers</h2>
          <p>320</p>
        </div>
        <div className="admin-content-card">
          <h2>Total Income</h2>
          <p>40000</p>
        </div>
        <div className="admin-content-card">
          <h2>Resolved Issues</h2>
          <p>280</p>
        </div>
        <div className="admin-content-card">
          <h2>Services Total</h2>
          <p>15+</p>
        </div>
      </div>

      <div className="admin-medium-graph">
        <h3>Bookings Overview (Full Year)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={60} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="BookingsDone" fill="#8884d8" barSize={15} />
            <Bar dataKey="BookingsCanceled" fill="#82ca9d" barSize={15} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default MainContent;
