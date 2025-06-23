import DownArrow2 from "@/assets/DownArrow2";
import UploadsIcon from "@/assets/UploadsIcon";
import CloseIcon from "@public/close.svg";
import { Checkbox, Input, notification, Select } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const AddCustomers = () => {
  let [formdata, setFormdata] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    extrention: "",
    mobile: "",
    role: "",
    password: "",
  });
  const [api, contextHolder] = notification.useNotification();
  // Generate a strong random password
  const generatePassword = () => {
    const length = 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setFormdata({ ...formdata, password });
  };

  // Password strength checker
  const getPasswordStrength = (password) => {
    if (!password) return "";
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length >= 12) score++;
    if (score >= 5) return "Strong";
    if (score >= 3) return "Medium";
    return "Weak";
  };

  const handleCategoryChange = (option) => {
    setFormdata({ ...formdata, role: option });
  };

  const roleOption = [
    { value: "segmentRep", label: "Segment Rep" },
    { value: "banking", label: "Banking/Lessor" },
    { value: "endUser", label: "End User" },
    { value: "oemDealer", label: "OEM/Dealer" },
  ];

  const [checked, setChecked] = useState(false);
  const handleRemember = (e) => {
    setChecked(!checked);
  };
  let [cancel, setCancel] = useState(false);

  // Reset form to initial state
  const clearForm = () => {
    setFormdata({
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      extrention: "",
      mobile: "",
      role: "",
      password: "",
    });
    setChecked(false);
  };

  // Show popup when Discard Changes is clicked
  const handleDiscardChanges = (e) => {
    e.preventDefault();
    setCancel(true);
  };

  // Hide popup
  const handleCancelAsset = () => {
    setCancel(false);
  };

  // Handle "Yes" in popup
  const handleConfirmDiscard = () => {
    clearForm();
    setCancel(false);
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formdata.username || formdata.username.trim().length < 3) {
      errors.username =
        "Username is required and must be at least 3 characters.";
    } else if (
      !formdata.email ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formdata.email)
    ) {
      errors.email = "Valid email is required.";
    } else if (!formdata.firstName || formdata.firstName.trim().length < 2) {
      errors.firstName =
        "First name is required and must be at least 2 characters.";
    } else if (!formdata.lastName || formdata.lastName.trim().length < 2) {
      errors.lastName =
        "Last name is required and must be at least 2 characters.";
    } else if (!formdata.phone || formdata.phone.length < 7) {
      errors.phone = "Phone is required and must be at least 7 digits.";
    } else if (!formdata.extrention || formdata.extrention.trim().length < 1) {
      errors.extrention = "Extrention is required.";
    } else if (!formdata.mobile || formdata.mobile.length < 7) {
      errors.mobile = "Mobile is required and must be at least 7 digits.";
    } else if (!formdata.role) {
      errors.role = "Role is required.";
    } else if (
      !formdata.password ||
      getPasswordStrength(formdata.password) === "Weak"
    ) {
      errors.password =
        "Password is required and must be at least Medium strength.";
    }
    // extrention is optional
    else {
      console.log("Form is valid", formdata);
    }

    return errors;
  };

  // NOTE: You are using Ant Design's notification, not Toastify.
  // If you want to use Toastify, you need to import it and use its API.
  // Example for Toastify (uncomment if you want to use):
  // import { toast } from "react-toastify";
  // import "react-toastify/dist/ReactToastify.css";
  // Place <ToastContainer /> in your app root.

  const handleCreate = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([field, message]) => {
        console.error(`Validation error [${field}]: ${message}`);
        // Using Ant Design notification:
        api.info({
          message: (
            <h2 className="text-[22px]  text-[#343a40] capitalize font-semibold text-lg leading-[156%] text-var(--secondary)">
              {field}
            </h2>
          ),
          description: (
            <p className="font-normal text-xs leading-[135%] text-[var(--text-secondary)]">
              {message}
            </p>
          ),
          icon: <img src={CloseIcon} alt="close" className="w-6 h-6" />, // Remove or fix import if needed
          placement: "topRight",
        });

        // If you want to use Toastify instead, use:
        // toast.error(message);
      });
    } else {
      console.log("Form submitted successfully:", formdata);
      // toast.success("Customer created successfully!"); // If using Toastify
    }
  };

  return (
    <>
      {contextHolder}
      <div className="mt-6">
        <h2 className="font-medium text-[24px] leading-[117%] text-var(--primary2)">
          Add Customer
        </h2>
        <p className="mt-2 font-normal text-base leading-[150%] text-[var(--text-secondary)]">
          Dashboard / Manage Customers /{" "}
          <span className="text-[#343a40]">Add Customer</span>
        </p>
      </div>
      <div className="flex justify-end">
        <Link to='/managecustomers/iportcustomerdata' className="flex items-center gap-x-2 py-2 px-8  text-[var(--secondary)] cursor-pointer border border-[var(--primary)] rounded-[8px] bg-[var(--primary)]">
          <UploadsIcon />
          <h3 className="font-medium text-sm leading-[200%] text-center">
            Import Customer Data
          </h3>
        </Link>
      </div>
      <div className="flex flex-col gap-y-5 mt-6 mb-4 p-8 bg-[var(--secondary)] rounded-[8px] w-full box_model">
        <div className="flex gap-x-6 items-start">
          <div className="inputbox w-1/2">
            <label
              htmlFor="username"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Username
            </label>
            <Input
              type="text"
              value={formdata.username}
              onChange={(e) =>
                setFormdata({ ...formdata, username: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
          <div className="inputbox w-1/2">
            <label
              htmlFor="email"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Email
            </label>
            <Input
              type="email"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
        </div>
        <div className="flex gap-x-6 items-start">
          <div className="inputbox w-1/2">
            <label
              htmlFor="firstName"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              First Name
            </label>
            <Input
              type="text"
              value={formdata.firstName}
              onChange={(e) =>
                setFormdata({ ...formdata, firstName: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
          <div className="inputbox w-1/2">
            <label
              htmlFor="email"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Last Name
            </label>
            <Input
              type="text"
              value={formdata.lastName}
              onChange={(e) =>
                setFormdata({ ...formdata, lastName: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
        </div>
        <div className="flex gap-x-6 items-start">
          <div className="inputbox w-1/2 flex gap-x-6 items-start">
            <div className="w-1/2">
              <label
                htmlFor="phone"
                className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
              >
                Phone
              </label>
              <Input
                type="number"
                value={formdata.phone}
                onChange={(e) =>
                  setFormdata({ ...formdata, phone: e.target.value })
                }
                className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="extrention"
                className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
              >
                Extrention
              </label>
              <Input
                type="text"
                value={formdata.extrention}
                onChange={(e) =>
                  setFormdata({ ...formdata, extrention: e.target.value })
                }
                className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
              />
            </div>
          </div>
          <div className="inputbox w-1/2">
            <label
              htmlFor="mobile"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Mobile
            </label>
            <Input
              type="number"
              value={formdata.mobile}
              onChange={(e) =>
                setFormdata({ ...formdata, mobile: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
        </div>
        <div className="">
          <label className="text-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]">
            Category
          </label>
          <div className="relative cursor-pointer">
            <Select
              // defaultValue={<span style={{ color: "gray" }}>Select One</span>}
              placeholder={<span style={{ color: "#ADB5BD" }}>Select One</span>}
              style={{ height: "40px", color: "red" }}
              onChange={handleCategoryChange}
              value={formdata.role || undefined}
              className="w-full custom-select no-arrow-select bg-[var(--background)]"
              dropdownMatchSelectWidth={false}
            >
              {roleOption.map((option) => (
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
        <div className="flex items-end gap-x-6 justify-between">
          <div className="">
            <label
              htmlFor="phone"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Password
            </label>
            <div className="cursor-pointer" onClick={generatePassword}>
              <p className="font-medium text-sm leading-[200%] text-[#343a40] px-4 py-[6px] border border-[var(--primary2)] rounded-[8px] inline-block w-[170px]">
                Generate Password
              </p>
            </div>
          </div>
          <div className="w-full relative">
            <Input
              type="text"
              value={formdata.password}
              onChange={(e) =>
                setFormdata({ ...formdata, password: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
            <p className="font-normal text-xs leading-[135%] text-[var(--text-secondary)] absolute top-1/2 -translate-y-1/2 right-4">
              Password strength:{" "}
              <span
                className={
                  getPasswordStrength(formdata.password) === "Strong"
                    ? "ml-1 text-[var(--primary)]"
                    : getPasswordStrength(formdata.password) === "Medium"
                    ? "ml-1 text-yellow-500"
                    : "ml-1 text-red-500"
                }
              >
                {getPasswordStrength(formdata.password)}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-[28px]">
          <p className="font-medium text-sm leading-[171%] text-[#343a40]">
            Send User Notification
          </p>
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={handleRemember}
          >
            <Checkbox
              checked={checked}
              className="custom-red-checkbox"
            ></Checkbox>
            <p className="font-normal text-xs leading-[135%] text-[var(--text-secondary)]">
              Send the new user an email about their account
            </p>
          </div>
        </div>
        <div className="mt-1 flex items-center gap-x-6">
          <button
            className="inline-block py-[6px] px-8 font-medium text-sm leading-[200%] text-center text-[var(--secondary)] bg-[var(--primary)] border border-[var(--primary)] rounded-[8px] cursor-pointer"
            onClick={handleCreate}
          >
            Create
          </button>
          <button
            className="inline-block py-[6px] px-4 font-medium text-sm leading-[200%] text-center text-[var(--text-normal)] bg-[var(--secondary)] border border-[var(--text-normal)] rounded-[8px] cursor-pointer"
            onClick={handleDiscardChanges}
          >
            Discard Changes
          </button>
          <button className="inline-block py-[6px] px-4 font-medium text-sm leading-[200%] text-center text-[var(--text-normal)] bg-[var(--secondary)] border border-[var(--text-normal)] rounded-[8px] cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
      {cancel && (
        <div className="popUp h-[253px] w-[656px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-[var(--pop-up)] text-center py-[58px]">
          <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
            Are you sure you want to cancel?
          </h2>
          <p className="font-normal text-base leading-[150%] text-center text-[var(--text-secondary)] mt-4 mb-[26px]">
            All unsaved changes will be lost.
          </p>
          <div className="flex gap-x-2 items-center justify-center">
            <button
              className="py-2 px-[30px] bg-[var(--primary)] rounded-[5px] font-medium text-sm leading-[171%] text-[var(--secondary)] border border-[var(--primary)]"
              onClick={handleConfirmDiscard}
            >
              Yes
            </button>
            <button
              onClick={handleCancelAsset}
              className="py-2 px-[30px] bg-[var(--secondary)] rounded-[5px] border border-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]"
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCustomers;
