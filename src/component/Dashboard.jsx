import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const user = location.state?.user || JSON.parse(localStorage.getItem("user_data")); // Retrieve user data from state or localStorage

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.username}!</h1>
      <div>
        <img
          src={user?.avatar_url}
          alt="User Avatar"
          className="user-avatar"
        />
      </div>
      <div className="user-details">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>First Name:</strong> {user?.first_name}</p>
        <p><strong>Last Name:</strong> {user?.last_name}</p>
        <p><strong>Roles:</strong> {user?.roles?.join(", ") || "No roles assigned"}</p>
        {/* Display other user information as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
