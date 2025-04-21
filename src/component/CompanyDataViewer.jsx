import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastStyle = {
  position: "bottom-left",
  autoClose: 3000,
  theme: "colored",
  style: { background: "#080607", color: "#fff" },
};

const CompanyDataViewer = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setCompanies(data.data);
        toast.success("Company data loaded successfully.", toastStyle);
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
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow">
      <ToastContainer />
      <h2 className="text-2xl font-bold text-[#080607] mb-4">Registered Companies</h2>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : companies.length === 0 ? (
        <p className="text-gray-500">No company data found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-sm text-[#080607]">
                <th className="py-2 px-4 border">Company Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Size</th>
                <th className="py-2 px-4 border">Industry</th>
                <th className="py-2 px-4 border">Website</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, idx) => (
                <tr key={idx} className="border-t text-sm hover:bg-gray-50">
                  <td className="py-2 px-4 border">{company.companyName || "-"}</td>
                  <td className="py-2 px-4 border">{company.businessEmail || "-"}</td>
                  <td className="py-2 px-4 border">{company.phone || "-"}</td>
                  <td className="py-2 px-4 border">{company.companySize || "-"}</td>
                  <td className="py-2 px-4 border">{company.industry || "-"}</td>
                  <td className="py-2 px-4 border">
                    {company.website ? (
                      <a href={company.website} className="text-blue-600 underline" target="_blank" rel="noreferrer">
                        {company.website}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompanyDataViewer;
