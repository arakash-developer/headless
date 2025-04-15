import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const user = location.state?.user || JSON.parse(localStorage.getItem("user_data"));

  return (
    <div className="dashboard-container max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Welcome, {user?.username}!</h1>

      <div className="profile-header flex items-center justify-center mb-8">
        <div className="avatar-container w-32 h-32 rounded-full overflow-hidden shadow-xl">
          <img
            src={user?.avatar_url || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="user-details space-y-4">
        <div className="detail-item">
          <p className="font-medium text-lg"><strong>Email:</strong> {user?.email}</p>
        </div>
        <div className="detail-item">
          <p className="font-medium text-lg"><strong>Username:</strong> {user?.username}</p>
        </div>
        <div className="detail-item">
          <p className="font-medium text-lg"><strong>First Name:</strong> {user?.first_name}</p>
        </div>
        <div className="detail-item">
          <p className="font-medium text-lg"><strong>Last Name:</strong> {user?.last_name}</p>
        </div>
        <div className="detail-item">
          <p className="font-medium text-lg"><strong>Roles:</strong> {user?.roles?.join(", ") || "No roles assigned"}</p>
        </div>
        {/* Add any other user info here */}
      </div>
    </div>
  );
};

export default Dashboard;
