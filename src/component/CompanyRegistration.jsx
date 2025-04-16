import React, { useState } from "react";
import DownArrow from "../../public/icons/down.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    background: "#080607",
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
  onBlur,
}) => (
  <div className={wrapperClass}>
    <label className="text-[#080607] text-base font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full h-[50px] py-3 px-4 bg-[#F4F5F9] border border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer"
    />
  </div>
);

const CompanyRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    businessEmail: "",
    phone: "",
    extension: "",
    address: "",
    companySize: "",
    industry: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value.trim()) {
      showToast(`${name.replace(/([A-Z])/g, ' $1')} is required`);
    }

    if (name === "businessEmail" && value) {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!valid) {
        showToast("Invalid email format");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      companyName,
      businessEmail,
      phone,
      address,
      companySize,
      industry,
    } = formData;

    if (!companyName.trim()) {
      showToast("Company Name is required");
    } else if (!businessEmail.trim()) {
      showToast("Business Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
      showToast("Invalid email format");
    } else if (!phone.trim()) {
      showToast("Phone is required");
    } else if (!address.trim()) {
      showToast("Company Address is required");
    } else if (!companySize.trim()) {
      showToast("Company Size is required");
    } else if (!industry.trim()) {
      showToast("Industry is required");
    } else {
      console.log("Submitted Data:", formData);
      toast.success("Company registered successfully!", toastStyle);
    }
  };

  const handleClear = () => {
    setFormData({
      companyName: "",
      businessEmail: "",
      phone: "",
      extension: "",
      address: "",
      companySize: "",
      industry: "",
      website: "",
    });
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-[#080607] text-[28px] leading-8 not-italic font-semibold">
        Register Your Company
      </h2>
      <p className="text-[#919191] text-base not-italic font-normal leading-6 mt-3 mb-6">
        Add your company details to start using your dashboard and invite team members
      </p>

      <div className="max-w-[793px] py-[43px] px-[50px] bg-[#FFF] rounded-[5px] companyregform">
        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
          <FormField label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} onBlur={handleBlur} />
          <FormField label="Business Email" name="businessEmail" type="email" value={formData.businessEmail} onChange={handleChange} onBlur={handleBlur} />
          <div className="flex gap-x-[41px]">
            <FormField label="Phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} wrapperClass="w-1/2" />
            <FormField label="Extension" name="extension" value={formData.extension} onChange={handleChange} wrapperClass="w-1/2" />
          </div>
          <FormField label="Company Address" name="address" value={formData.address} onChange={handleChange} onBlur={handleBlur} />

          <div className="flex gap-x-[42px]">
            <div className="w-full">
              <label className="text-[#080607] text-base font-medium">Company Size</label>
              <div className="relative cursor-pointer">
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full h-[50px] py-3 px-4 border bg-[#F4F5F9] border-[#DBDCDE] rounded-[8px] appearance-none cursor-pointer"
                >
                  <option value="">Select One</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51+">51+</option>
                </select>
                <img className="absolute top-1/2 -translate-y-1/2 right-[16px]" src={DownArrow} alt="down-arrow" />
              </div>
            </div>

            <div className="w-full">
              <label className="text-[#080607] text-base font-medium">Industry</label>
              <div className="relative cursor-pointer">
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full h-[50px] py-3 px-4 border bg-[#F4F5F9] border-[#DBDCDE] rounded-[8px] appearance-none cursor-pointer"
                >
                  <option value="">Select One</option>
                  <option value="Tech">Tech</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                </select>
                <img className="absolute top-1/2 -translate-y-1/2 right-[16px]" src={DownArrow} alt="down-arrow" />
              </div>
            </div>
          </div>

          <FormField label="Website (Optional)" name="website" value={formData.website} onChange={handleChange} />

          <div className="flex gap-[42px] items-center">
            <button type="submit" className="py-[18px] px-[60px] bg-[#ED272C] border border-[#ED272C] rounded-[5px] text-white text-base font-bold cursor-pointer">
              Register Company
            </button>
            <button type="button" onClick={handleClear} className="py-[18px] px-[60px] bg-[#FFF] text-[#080607] border border-[#919191] rounded-[5px] cursor-pointer overflow-hidden text-zinc-950/[0.5] text-center text-ellipsis text-base not-italic font-semibold leading-[1.31rem]">
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegistration;
