import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastStyle = {
  position: "bottom-left",
  autoClose: 3000,
  theme: "colored",
  style: { background: "var(--primary2)", color: "#fff" },
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
      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/company-data",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
      <h2 className="text-2xl font-bold text-[var(--primary2)] mb-4">
        Registered Companies
      </h2>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : companies.length === 0 ? (
        <p className="text-gray-500">No company data found.</p>
      ) : (
        <ol className="list-decimal pl-6">
          {companies.map((company, idx) => (
            <li key={idx} className="mb-4">
              <div>
                <strong>Company Name:</strong> {company.companyName || "-"}
              </div>
              <div>
                <strong>Email:</strong> {company.businessEmail || "-"}
              </div>
              <div>
                <strong>Phone:</strong> {company.phone || "-"}
              </div>
              <div>
                <strong>Size:</strong> {company.companySize || "-"}
              </div>
              <div>
                <strong>Industry:</strong> {company.industry || "-"}
              </div>
              <div>
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
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CompanyDataViewer;
