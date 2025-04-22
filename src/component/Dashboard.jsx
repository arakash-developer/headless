import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastStyle = {
  position: "bottom-left",
  autoClose: 3000,
  theme: "colored",
  style: { background: "#080607", color: "#fff" },
};

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || JSON.parse(localStorage.getItem("user_data"));
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch company data based on the user's email
  const fetchCompanyData = async () => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      toast.error("Authentication token missing.", toastStyle);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://4amitest-bli6.wp1.sh/wp-json/custom/v1/company-data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.status === "success") {
        // Find the company data where the email matches the logged-in user
        const companyData = data.data.find((company) => company.businessEmail === user?.email);
        if (companyData) {
          setCompany(companyData);
        } else {
          toast.error("No company data found for this user.", toastStyle);
        }
      } else {
        toast.error(data.message || "Failed to load company data.", toastStyle);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Something went wrong while fetching data.", toastStyle);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, [user]);

  // Logout function to clear localStorage and navigate to the login page
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");
    navigate("/login"); // Navigate to login page after logout
    toast.success("Logged out successfully", toastStyle);
  };

  return (
    <div className="dashboard-container max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <ToastContainer />
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
      </div>

      {/* Company Data Section */}
      {loading ? (
        <p className="text-gray-600">Loading company data...</p>
      ) : company ? (
        <div className="company-info mt-8">
          <h2 className="text-xl font-semibold text-[#080607] mb-4">Company Information</h2>
          <div className="company-details space-y-4">
            <div className="detail-item">
              <p className="font-medium text-lg"><strong>Company Name:</strong> {company.companyName || "-"}</p>
            </div>
            <div className="detail-item">
              <p className="font-medium text-lg"><strong>Email:</strong> {company.businessEmail || "-"}</p>
            </div>
            <div className="detail-item">
              <p className="font-medium text-lg"><strong>Phone:</strong> {company.phone || "-"}</p>
            </div>
            <div className="detail-item">
              <p className="font-medium text-lg"><strong>Size:</strong> {company.companySize || "-"}</p>
            </div>
            <div className="detail-item">
              <p className="font-medium text-lg"><strong>Industry:</strong> {company.industry || "-"}</p>
            </div>
            <div className="detail-item">
              <p className="font-medium text-lg"><strong>Website:</strong>{" "}
                {company.website ? (
                  <a href={company.website} className="text-blue-600 underline" target="_blank" rel="noreferrer">
                    {company.website}
                  </a>
                ) : (
                  "-"
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No company data available.</p>
      )}

      {/* Logout Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleLogout}
          className="py-[10px] px-[30px] bg-[#ED272C] rounded-[5px] text-white text-lg font-bold cursor-pointer"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
