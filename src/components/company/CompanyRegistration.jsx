import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DownArrow from "@public/icons/down.svg";

// Toast style config
const toastStyle = {
  position: "bottom-left",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  style: {
    background: "var(--primary2)",
    color: "#fff",
  },
};

const showToast = (message) => toast.error(message, toastStyle);

const FormField = ({
  label,
  value,
  onChange,
  name,
  type = "text",
  placeholder,
  wrapperClass = "flex flex-col gap-y-2",
}) => (
  <div className={wrapperClass}>
    <label className="text-[var(--primary2)] text-base font-medium">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full h-[50px] py-3 px-4 bg-[#F4F5F9] border border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer"
    />
  </div>
);

const CompanyRegistration = () => {
  const location = useLocation(); // Use useLocation to get the passed state
  const userEmail = location.state?.useremail; // Retrieve the useremail passed via state
  console.log("userEmail:", userEmail); // Log the userEmail for debugging

  const [formData, setFormData] = useState({
    companyName: "",
    businessEmail: userEmail, // Initialize with userEmail as businessEmail
    phone: "",
    extension: "",
    address: "",
    companySize: "",
    industry: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Consolidated validation logic
  const validateForm = () => {
    const {
      companyName,
      businessEmail,
      phone,
      address,
      companySize,
      industry,
    } = formData;

    if (!companyName) return "Company Name is required";
    if (!businessEmail.trim()) return "Business Email is required";
    if (!phone.trim()) return "Phone is required";
    if (!address.trim()) return "Company Address is required";
    if (!companySize.trim()) return "Company Size is required";
    if (!industry.trim()) return "Industry is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) return showToast(validationError);

    const token = localStorage.getItem("auth_token");
    if (!token)
      return showToast("Authentication token missing. Please log in.");

    try {
      setLoading(true);

      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/register-company",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData), // Send the full formData with businessEmail
        }
      );

      const data = await response.json();
      setLoading(false);

      if (data.status === "success") {
        navigate("/dashboard");
        toast.success(
          data.message || "Company registered successfully!",
          toastStyle
        );
        localStorage.setItem("com_auth_token", "akash");
        handleClear();
      } else {
        showToast(data.message || "Something went wrong");
      }
    } catch (err) {
      setLoading(false);
      showToast("Failed to register. Please try again.");
      console.error("Error submitting form:", err);
    }
  };

  const handleClear = () => {
    setFormData({
      companyName: "",
      businessEmail: userEmail, // Keep businessEmail as userEmail even after clearing the form
      phone: "",
      extension: "",
      address: "",
      companySize: "",
      industry: "",
      website: "",
    });
    setLoading(false); // Reset loading state when clearing the form
  };

  // UseEffect to reset form after successful submission
  useEffect(() => {
    if (!loading && formData.companyName === "") {
      setFormData({
        companyName: "",
        businessEmail: userEmail,
        phone: "",
        extension: "",
        address: "",
        companySize: "",
        industry: "",
        website: "",
      });
    }
  }, [loading, userEmail]);

  return (
    <div>
      <h2 className="text-[var(--primary2)] text-[28px] leading-8 not-italic font-semibold">
        Register Your Company
      </h2>
      <p className="text-[#919191] text-base not-italic font-normal leading-6 mt-3 mb-6">
        Add your company details to start using your dashboard and invite team
        members
      </p>

      <div className="max-w-[793px] py-[43px] px-[50px] bg-[#FFF] rounded-[5px] companyregform">
        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
          <FormField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <FormField
            label="Business Email"
            name="businessEmail"
            type="email"
            value={formData.businessEmail} // Use formData.businessEmail here
            readOnly // Make the field read-only
          />
          <div className="flex gap-x-[41px]">
            <FormField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              wrapperClass="w-1/2"
            />
            <FormField
              label="Extension"
              name="extension"
              value={formData.extension}
              onChange={handleChange}
              wrapperClass="w-1/2"
            />
          </div>
          <FormField
            label="Company Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <div className="flex gap-x-[42px]">
            <div className="w-full">
              <label className="text-[var(--primary2)] text-base font-medium">
                Company Size
              </label>
              <div className="relative cursor-pointer">
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full h-[50px] py-3 px-4 border bg-[#F4F5F9] border-[#DBDCDE] rounded-[8px] appearance-none cursor-pointer"
                >
                  <option value="">Select One</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51+">51+</option>
                </select>
                <img
                  className="absolute top-1/2 -translate-y-1/2 right-[16px]"
                  src={DownArrow}
                  alt="down-arrow"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="text-[var(--primary2)] text-base font-medium">
                Industry
              </label>
              <div className="relative cursor-pointer">
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full h-[50px] py-3 px-4 border bg-[#F4F5F9] border-[#DBDCDE] rounded-[8px] appearance-none cursor-pointer"
                >
                  <option value="">Select One</option>
                  <option value="Tech">Tech</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                </select>
                <img
                  className="absolute top-1/2 -translate-y-1/2 right-[16px]"
                  src={DownArrow}
                  alt="down-arrow"
                />
              </div>
            </div>
          </div>

          <FormField
            label="Website (Optional)"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />

          <div className="flex gap-[42px] items-center">
            <button
              type="submit"
              disabled={loading}
              className="py-[18px] px-[60px] bg-[var(--primary)] border border-[var(--primary)] rounded-[5px] text-white text-base font-bold cursor-pointer"
            >
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Register Company"
              )}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="py-[18px] px-[60px] bg-[#FFF] text-[var(--primary2)] border border-[#919191] rounded-[5px] cursor-pointer overflow-hidden text-center text-ellipsis text-base not-italic font-semibold leading-[1.31rem]"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegistration;
