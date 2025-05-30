import DownArrow2 from "@/assets/DownArrow2";
import { Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  wrapperClass = "flex flex-col gap-y-[2px]",
}) => (
  <div className={wrapperClass}>
    <label className="text-[var(--text-normal)] font-medium text-sm leading-[171%]">
      {label}
    </label>
    <Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="custom-black-input w-full h-[40px] py-2 px-3 bg-[var(--background)] border border-[var(--neutral-400)] rounded-[8px]  placeholder:text-[#919191] placeholder:text-sm"
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
        navigate("/companydata");
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
  const [selected, setSelected] = useState();
  const handleIndustryChange = (option) => {
    formData.industry = option;
  };
  const [selectedCompany, setSelectedCompany] = useState();
  const handleCompanyChange = (option) => {
    formData.companySize = option;
  };
  const industryOptions = [
    { value: "tech", label: "Tech" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
  ];

  const companySize = [
    { value: "1-10", label: "1-10" },
    { value: "11-50", label: "11-50" },
    { value: "51+", label: "51+" },
  ];

  return (
    <div>
      <h2 className="text-[var(--primary2)] text-[28px]  not-italic font-semibold text-4xl leading-[125%]">
        Register Your Company
      </h2>
      <p className="text-[#919191] not-italic mt-2 max-w-[795px] font-normal text-base leading-[150%] text-[var(--text-secondary)]">
        Add your company details to start using your dashboard and invite team
        members
      </p>

      <div className="mt-6 max-w-[795px] py-8 px-8 bg-[#FFF] rounded-[5px] companyregform mb-[116px]">
        <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
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
            label="Mobile"
            name="mobile"
            type="text"
            value={formData.businessEmail} // Use formData.businessEmail here
            readOnly // Make the field read-only
          />
          <FormField
            label="Company Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <div className="flex gap-x-[42px]">
            <div className="w-full">
              <label className="text-[var(--text-normal)] font-medium text-sm leading-[171%] ">
                Company Size
              </label>
              <div className="relative cursor-pointer">
                <Select
                  placeholder={
                    <span style={{ color: "#ADB5BD" }}>Select One</span>
                  }
                  style={{ height: "40px" }}
                  onChange={handleCompanyChange}
                  className="w-full custom-select no-arrow-select"
                  dropdownMatchSelectWidth={false}
                >
                  {companySize.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <p>{option.label}</p>
                    </Select.Option>
                  ))}
                </Select>
                <div className="absolute top-1/2 -translate-y-1/2 right-[16px] pointer-events-none">
                  <DownArrow2 color="var(--text-secondary)" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="text-[var(--text-normal)] font-medium text-sm leading-[171%]">
                Industry
              </label>
              <div className="relative cursor-pointer">
                <Select
                  placeholder={
                    <span style={{ color: "#ADB5BD" }}>Select One</span>
                  }
                  style={{ height: "40px" }}
                  onChange={handleIndustryChange}
                  className="w-full custom-select no-arrow-select"
                  dropdownMatchSelectWidth={false}
                >
                  {industryOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <p>{option.label}</p>
                    </Select.Option>
                  ))}
                </Select>
                <div className="absolute top-1/2 -translate-y-1/2 right-[16px] pointer-events-none">
                  <DownArrow2 color="var(--text-secondary)" />
                </div>
              </div>
            </div>
          </div>

          <FormField
            label="Website (Optional)"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />

          <div className="mt-1 flex gap-x-6 items-center">
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-8 h-[44px] bg-[var(--primary)] border border-[var(--primary)] rounded-[5px] text-white  cursor-pointer  font-medium text-sm leading-[200%] text-center text-[var(--secondary)]"
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
              className="py-2 px-8 h-[44px] bg-[#FFF] text-[var(--primary2)] border border-[#919191] rounded-[5px] cursor-pointer overflow-hidden text-ellipsis  not-italic font-medium text-sm leading-[200%] text-center text-[#343a40]"
            >
              Discard Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegistration;
