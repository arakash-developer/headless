import Credit from "@/assets/Credit";
import DataRepresent from "@/assets/DataRepresent";
import FilterIcon from "@/assets/FilterIcon";
import InProgress from "@/assets/InProgress";
import PopularEquipment from "@/assets/PopularEquipment";
import ResPlus from "@/assets/ResPlus";
import SearchDas from "@/assets/SearchDas";
import Shopimg from "@/assets/Shopimg";
import Graph1 from "@public/graph1.png";
import Graph2 from "@public/graph2.png";
import { Button, Select, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { FaAngleRight, FaPlus } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomSort from "../residualanalysis/layers/CustomSort";

const toastStyle = {
  position: "bottom-left",
  autoClose: 3000,
  theme: "colored",
  style: { background: "var(--primary2)", color: "#fff" },
};

const Administrator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user =
    location.state?.user || JSON.parse(localStorage.getItem("user_data"));
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dashboardAnlytics, setDashboardAnlytics] = useState({
    totalResidual: 0,
    inProgress: 0,
    myListings: 0,
    creditLeft: 0,
  });
  const [data, setData] = useState(false);
  // Fetch company data without using an auth token
  const fetchCompanyData = async () => {
    try {
      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/company-data"
      );

      const data = await response.json();

      if (data.status === "success") {
        // Find the company data where the email matches the logged-in user
        const companyData = data.data.find(
          (company) => company.businessEmail === user?.email
        );
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
    localStorage.removeItem("logintoken");
    localStorage.removeItem("com_auth_token");
    navigate("/login"); // Navigate to login page after logout
    toast.success("Logged out successfully", toastStyle);
  };
  const assets = [
    {
      projectId: "P1001",
      assetType: "Dump Truck",
      date: "18 April, 2025",
      status: {
        value: "Completed",
        color: "text-[var(--primary)]",
      },
      health: "Excellent",
      color: "bg-[var(--secondary)]",
      residualValue: 140000,
    },
    {
      projectId: "P1120",
      assetType: "Aerial Lift",
      date: "15 April, 2025",
      status: {
        value: "Pending",
        color: "text-[#343a40]",
      },
      health: "Average",
      color: "bg-[var(--neutral-100)]",
      residualValue: 48500,
    },
    {
      projectId: "P2285",
      assetType: "Bulldozer",
      date: "12 April, 2025",
      status: {
        value: "Completed",
        color: "text-[var(--primary)]",
      },
      health: "Poor",
      color: "bg-[var(--secondary)]",
      residualValue: 7500,
    },
  ];
  const structureType = [
    { value: "Project ID All", label: "Project ID All" },
    { value: "Project ID All2", label: "Project ID All 2" },
  ];
  const AssetTypeAll = [
    { value: "Asset Type All", label: "Asset Type All" },
    { value: "Asset Type All2", label: "Asset Type All 2" },
  ];
  const StatusAll = [
    { value: "Status All", label: "Status All" },
    { value: "Status All2", label: "Status All 2" },
  ];
  const ClearFilter = [
    { value: "Clear Filter", label: "Clear Filter" },
    { value: "Clear Filter2", label: "Clear Filter 2" },
  ];
  const usageType = [
    { value: "Add Filter", label: "Add Filter", description: "Add Filter" },
    {
      value: "Add Filter2",
      label: "Add Filter 2",
      description: "Add Filter 2",
    },
    {
      value: "Add Filter3",
      label: "Add Filter 3",
      description: "Add Filter 3",
    },
  ];
  const handleUsageTypeChange = (option) => {
    setSelected(option);
    setUsageTypeselected(option);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="mr-10">
      <div className="mt-5">
        <h2 className="text-[var(--primary2)] font-semibold text-4xl leading-[125%] text-[#343a40]">
          Admin Dashboard
        </h2>
        <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] mt-2 capitalize">
          Good Morning, {user?.first_name}. Here's your overview.
          <span className="text-[#343a40;]"> All Residual Analysis</span>
        </p>
      </div>
      <div className="w-full mt-6 mb-5 flex justify-end items-center">
        <button className="py-2 px-8 bg-[var(--primary)] rounded-[8px] font-medium text-sm leading-[171%] text-[var(--secondary)] flex items-center gap-x-2">
          <FaPlus />
          Create New
        </button>
      </div>
      <div className="flex justify-between items-center mb-6 gap-x-6">
        <div className="dashboard-box w-[250px] xl:w-1/2 p-5 flex gap-x-[35px] justify-between items-start bg-[var(--secondary)] rounded-[8px]">
          <div className="flex flex-col gap-y-[8px]">
            <p className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]">
              Total Residuals
            </p>
            <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
              {dashboardAnlytics?.totalResidual}
            </h2>
          </div>
          <div className="flex justify-center items-center p-2 rounded-[8px] bg-[#CFE3FF]">
            <SearchDas />
          </div>
        </div>
        <div className="dashboard-box w-[250px] xl:w-1/2 p-5 flex gap-x-[35px] justify-between items-start bg-[var(--secondary)] rounded-[8px]">
          <div className="flex flex-col gap-y-[8px]">
            <p className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]">
              In Progress
            </p>
            <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
              {dashboardAnlytics?.inProgress}
            </h2>
          </div>
          <div className="flex justify-center items-center p-2 rounded-[8px] bg-[#FFF3D5]">
            <InProgress />
          </div>
        </div>
        <div className="dashboard-box w-[250px] xl:w-1/2 p-5 flex gap-x-[35px] justify-between items-start bg-[var(--secondary)] rounded-[8px]">
          <div className="flex flex-col gap-y-[8px]">
            <p className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]">
              My Listings
            </p>
            <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
              {dashboardAnlytics?.myListings}
            </h2>
          </div>
          <div className="flex justify-center items-center p-2 rounded-[8px] bg-[#CAF8FF]">
            <Shopimg />
          </div>
        </div>
        <div className="dashboard-box w-[250px] xl:w-1/2 p-5 flex gap-x-[35px] justify-between items-start bg-[var(--secondary)] rounded-[8px]">
          <div className="flex flex-col gap-y-[8px]">
            <p className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]">
              Credits Left
            </p>
            <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
              {dashboardAnlytics?.creditLeft}
            </h2>
          </div>
          <div className="flex justify-center items-center p-2 rounded-[8px] bg-[#DEF9FF]">
            <Credit />
          </div>
        </div>
      </div>
      <div className="mt-6 w-full">
        <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
          Residual Analysis
        </h2>
        <div className="mt-3 bg-[var(--secondary)] h-[236px] text-center flex flex-col justify-center items-center dashboard-box gap-y-[18px]">
          <ResPlus />
          <p className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]">
            Start by creating your first residual analysis
          </p>
        </div>
      </div>
      {data && (
        <>
          <div className="mt-6 w-full">
            <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
              Residual Analysis
            </h2>
            <div className="mt-5 mb-3 flex gap-x-3 items-center">
              <CustomSort
                defaultValue="Project ID All"
                option={structureType}
              />
              <CustomSort defaultValue="Asset Type All" option={AssetTypeAll} />
              <CustomSort defaultValue="Status All" option={StatusAll} />

              <div className="min-w-[125px] flex flex-col gap-y-[2px]">
                <Select
                  defaultValue="Add Filter"
                  onChange={handleUsageTypeChange}
                  className="w-full"
                  dropdownMatchSelectWidth={false}
                >
                  {usageType.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <div className="flex items-center gap-x-2">
                        <Tooltip title={option.description}>
                          <Button
                            style={{
                              backgroundColor: "transparent",
                              borderRadius: "0",
                              border: "none",
                              padding: "0",
                              fontSize: "16px",
                              transition: "background-color 0.3s ease",
                            }}
                          >
                            <div className="text-[var(--primary)]">
                              <FilterIcon />
                            </div>
                          </Button>
                        </Tooltip>
                        <p className="font-normal text-xs leading-[135%] text-[var(--primary)]">
                          {option.label}
                        </p>
                      </div>
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <CustomSort
                defaultValue="Clear Filter"
                color="red"
                option={ClearFilter}
              />
            </div>
            <div className="py-[14px] px-5 bg-[var(--secondary)] rounded-[8px] dashboard-box">
              <table class="table-auto w-full border-collapse">
                <thead>
                  <tr class="text-left bg-[var(--secondary)]">
                    <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                      <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                        Project ID
                        <IoFilterOutline className="text-md" />
                      </div>
                    </th>
                    <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                      <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                        Asset Type
                        <IoFilterOutline className="text-md" />
                      </div>
                    </th>
                    <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                      <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                        Date
                        <IoFilterOutline className="text-md" />
                      </div>
                    </th>
                    <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                      <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                        Status
                        <IoFilterOutline className="text-md" />
                      </div>
                    </th>
                    <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                      <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                        Residual Value
                        <IoFilterOutline className="text-md" />
                      </div>
                    </th>
                    <th class="p-4 border border-gray-300 border-t-0 border-l-0 border-r-0">
                      <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                        Health
                        <IoFilterOutline className="text-md" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset, index) => (
                    <tr class={`${asset?.color}`}>
                      <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                        {asset.projectId}
                      </td>
                      <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                        {asset.assetType}
                      </td>
                      <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                        {asset.date}
                      </td>
                      <td
                        class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] ${asset?.status?.color}`}
                      >
                        {asset?.status?.value}
                      </td>
                      <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                        ${asset?.residualValue}
                      </td>
                      <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 border-r-0 font-normal text-sm leading-[171%] text-[#343a40]">
                        {asset.health}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Link
            to="/analyses"
            className="mt-3 mb-6 flex justify-end items-center gap-x-2 font-medium text-sm leading-[171%] text-[var(--primary)] text-right"
          >
            View All Analyses
            <FaAngleRight />
          </Link>
          <div className="w-full mt-[60px] flex items-center gap-x-6">
            <div className="w-1/2 h-[449px] bg-[var(--secondary)] rounded-[8px] dashboard-box p-6 overflow-hidden">
              <img className="w-full h-full" src={Graph1} alt="" />
            </div>
            <div className="w-1/2 h-[449px] bg-[var(--secondary)] rounded-[8px] dashboard-box p-6">
              <img className="w-full h-full" src={Graph2} alt="" />
            </div>
          </div>
        </>
      )}
      <div className="w-full h-[450px] mt-6 flex justify-between items-center gap-x-6">
        <div className="h-full w-full bg-[var(--secondary)] rounded-[8px] dasboard-box px-6 pt-5 pb-[105px] flex flex-col items-start  justify-between dashboard-box">
          <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
            Data Representation
          </h2>
          <div className="w-full flex justify-center flex-col items-center">
            <DataRepresent />
            <p className="mt-8 font-medium text-sm leading-[171%] text-[var(--text-disabled)]">
              Data Representation chart will appear here
            </p>
          </div>
        </div>
        <div className="h-full w-full bg-[var(--secondary)] rounded-[8px] dasboard-box px-6 pt-5 pb-[105px] flex flex-col items-start  justify-between dashboard-box">
          <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
            Popular Equipment Categories
          </h2>
          <div className="w-full flex justify-center flex-col items-center">
            <PopularEquipment />
            <p className="mt-8 font-medium text-sm leading-[171%] text-[var(--text-disabled)]">
              Category distribution chart will appear here
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[500px] dashboard-container max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <ToastContainer />
        <h1 className="text-3xl font-semibold text-center mb-6">
          Welcome, {user?.username}!
        </h1>

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
            <p className="font-medium text-lg">
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
          <div className="detail-item">
            <p className="font-medium text-lg">
              <strong>Username:</strong> {user?.username}
            </p>
          </div>
          <div className="detail-item">
            <p className="font-medium text-lg">
              <strong>First Name:</strong> {user?.first_name}
            </p>
          </div>
          <div className="detail-item">
            <p className="font-medium text-lg">
              <strong>Last Name:</strong> {user?.last_name}
            </p>
          </div>
          <div className="detail-item">
            <p className="font-medium text-lg">
              <strong>Roles:</strong>{" "}
              {user?.roles?.join(", ") || "No roles assigned"}
            </p>
          </div>
        </div>

        {/* Company Data Section */}
        {loading ? (
          <p className="text-gray-600">Loading company data...</p>
        ) : company ? (
          <div className="company-info mt-8">
            <h2 className="text-xl font-semibold text-[var(--primary2)] mb-4">
              Company Information
            </h2>
            <div className="company-details space-y-4">
              <div className="detail-item">
                <p className="font-medium text-lg">
                  <strong>Company Name:</strong> {company.companyName || "-"}
                </p>
              </div>
              <div className="detail-item">
                <p className="font-medium text-lg">
                  <strong>Email:</strong> {company.businessEmail || "-"}
                </p>
              </div>
              <div className="detail-item">
                <p className="font-medium text-lg">
                  <strong>Phone:</strong> {company.phone || "-"}
                </p>
              </div>
              <div className="detail-item">
                <p className="font-medium text-lg">
                  <strong>Size:</strong> {company.companySize || "-"}
                </p>
              </div>
              <div className="detail-item">
                <p className="font-medium text-lg">
                  <strong>Industry:</strong> {company.industry || "-"}
                </p>
              </div>
              <div className="detail-item">
                <p className="font-medium text-lg">
                  <strong>Website:</strong>{" "}
                  {company.website ? (
                    <a
                      href={company.website}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
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
            className="py-[10px] px-[30px] bg-[var(--primary)] rounded-[5px] text-white text-lg font-bold cursor-pointer"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Administrator;
