import DownArrow2 from "@/assets/DownArrow2";
import InviteImage from "@public/invitebanner.svg";
import { Input, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const InviteUser = () => {
  const navigate = useNavigate();
  const [toastError, setToastError] = useState("");
  const [selected, setSelected] = useState(""); // Add this missing state

  const [formData, setFormData] = useState({
    code: "",
    mobile: "",
    email: "",
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",
    extension: "",
    source: "",
    category: "",
  });

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
      background: "#FFC107",
      color: "#fff",
    },
  };

  const showError = (msg) => {
    setToastError(msg);
    toast.error(msg, toastStyle);
  };

  const registerCheck = (e) => {
    e.preventDefault();

    const {
      email,
      firstName,
      lastName,
      title,
      company,
      phone,
      extension,
      source,
      category,
    } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;
    const extRegex = /^[0-9]{1,5}$/;

    if (!firstName) return showError("First Name is required");
    if (!lastName) return showError("Last Name is required");
    if (!title) return showError("Title is required");
    if (!company) return showError("Company is required");
    if (!phone) return showError("Phone number is required");
    if (!phoneRegex.test(phone)) return showError("Enter a valid phone number");
    if (!extension) return showError("Extension is required");
    if (!extRegex.test(extension)) return showError("Enter a valid extension");
    if (!email) return showError("Email is required");
    if (!emailRegex.test(email)) return showError("Enter a valid email");
    if (!source) return showError("Please select a Source");
    if (!category) return showError("Please select a Category");

    toast.success("Next Step!", {
      ...toastStyle,
      style: { background: "var(--primary)", color: "#fff" },
    });

    navigate("/register2");
  };
  // categoryOptions;
  const handleSourceChange = (option) => {
    setSelected(option);
    setFormData({ ...formData, source: option });
  };

  const handleCategoryChange = (option) => {
    setFormData({ ...formData, category: option });
  };

  const categoryOptions = [
    { value: "segmentRep", label: "Segment Rep" },
    { value: "banking", label: "Banking/Lessor" },
    { value: "endUser", label: "End User" },
    { value: "oemDealer", label: "OEM/Dealer" },
  ];
  return (
    <div>
      <div className="mt-5"></div>

      <div className="max-w-[1098px] pt-[45px] pb-5 pl-[55px] pr-[22px] bg-[#fff] rounded-[5px] formboxshadow flex justify-between items-start gap-x-10">
        <div className="">
          <div className="">
            <h2 className="text-[var(--primary2)] text-[24px] font-medium text-2xl leading-[117%]">
              Send an Invitation
            </h2>
            <p className="max-w-[566px] mb-[28px] mt-2 font-normal text-base leading-[150%] text-[var(--text-secondary)]">
              Use this form to invite a business colleague or client to register
              and use the AMI website. Upon completion, a unique Invitation Code
              will be sent to your invitee. After they register, you will
              receive a notification email
            </p>
          </div>
          <form className="flex flex-col gap-y-4" onSubmit={registerCheck}>
            {/* First & Last Name */}
            <div className="flex gap-x-6">
              <FormField
                label="First Name"
                value={formData.firstName}
                onChange={(val) => setFormData({ ...formData, firstName: val })}
                wrapperClass="w-1/2"
              />
              <FormField
                label="Last Name"
                value={formData.lastName}
                onChange={(val) => setFormData({ ...formData, lastName: val })}
                wrapperClass="w-1/2"
              />
            </div>

            {/* Title & Company */}
            <div className="flex gap-x-6">
              <FormField
                label="Title"
                value={formData.title}
                onChange={(val) => setFormData({ ...formData, title: val })}
                wrapperClass="w-1/2"
              />
              <FormField
                label="Company"
                value={formData.company}
                onChange={(val) => setFormData({ ...formData, company: val })}
                wrapperClass="w-1/2"
              />
            </div>

            {/* Phone & Extension */}
            <div className="flex gap-x-6">
              <FormField
                label="Phone"
                type="text"
                value={formData.phone}
                onChange={(val) => setFormData({ ...formData, phone: val })}
                wrapperClass="w-1/2"
              />
              <FormField
                label="Extension"
                value={formData.extension}
                onChange={(val) => setFormData({ ...formData, extension: val })}
                wrapperClass="w-1/2"
              />
            </div>

            {/* mobile */}
            <FormField
              label="Mobile"
              type="text"
              required
              value={formData.mobile}
              onChange={(val) => setFormData({ ...formData, mobile: val })}
            />

            {/* Email */}
            <FormField
              label="Email"
              type="email"
              required
              value={formData.email}
              onChange={(val) => setFormData({ ...formData, email: val })}
            />
            <div className="flex gap-x-6">
              <div className="w-1/2">
                <FormField
                  label="Source"
                  type="text"
                  required
                  value={formData.source}
                  onChange={(val) => setFormData({ ...formData, source: val })}
                />
              </div>
              {/* Category */}
              <div className="w-1/2 flex flex-col gap-y-2">
                <label className="text-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]">
                  Category
                </label>
                <div className="relative cursor-pointer">
                  <Select
                    // defaultValue={<span style={{ color: "gray" }}>Select One</span>}
                    placeholder={
                      <span style={{ color: "#ADB5BD" }}>Select One</span>
                    }
                    style={{ height: "40px", color: "red" }}
                    onChange={handleCategoryChange}
                    value={formData.category || undefined}
                    className="w-full custom-select no-arrow-select bg-[var(--background)]"
                    dropdownMatchSelectWidth={false}
                  >
                    {categoryOptions.map((option) => (
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

            {/* Code Display */}
            <div className="">
              <label className="text-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]">
                Invitation Code
              </label>
              <div className="cursor-pointer">
                <p className="text-[var(--primary2)] font-medium text-sm leading-[200%] text-center text-[#343a40] rounded-[5px] py-2 px-8 border border-[#DBDCDE] inline-block">
                  Generate Code
                </p>
              </div>
            </div>

            <div className="py-2 px-3 border border-[var(--neutral-400)] rounded-[8px] bg-[var(--background)] text-[var(--primary2)] font-normal text-sm leading-[171%] text-[#343a40]">
              AXCD
            </div>
            {/* Submit & Clear */}
            <div className="flex gap-x-6 items-center mt-2">
              <button
                type="submit"
                className="py-2 px-4 bg-[var(--primary)] rounded-[5px] text-white  cursor-pointer font-medium text-sm leading-[200%] text-center text-[var(--secondary)] inline-block  border border-[var(--secondary)]"
              >
                Send Invitation
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    code: "",
                    email: "",
                    mobile: "",
                    firstName: "",
                    lastName: "",
                    title: "",
                    company: "",
                    phone: "",
                    extension: "",
                    source: "",
                    category: "",
                  });
                  setToastError("");
                }}
                className="py-2 px-4 border border-[#919191] rounded-[5px] text-[var(--primary2)80] cursor-pointer font-medium text-sm leading-[200%] text-center text-[#343a40]"
              >
                Discard Changes
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <img
            className="rounded-[8px]"
            src={InviteImage}
            alt={"invite image"}
          />
        </div>
      </div>
    </div>
  );
};

const FormField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  wrapperClass = "flex flex-col gap-y-2",
}) => (
  <div className={wrapperClass}>
    <label className="text-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]">
      {label}
    </label>
    <Input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
    />
  </div>
);

export default InviteUser;
