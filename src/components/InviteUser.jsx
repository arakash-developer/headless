import DownArrow2 from "@/assets/DownArrow2";
import InviteImage from "@public/invitebanner.svg";
import { Input, Select } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InviteUser = () => {
  const navigate = useNavigate();
  const [toastError, setToastError] = useState("");
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false); // For displaying loading state
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error message

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

  const registerCheck = async (e) => {
    e.preventDefault();

    // Existing validation code
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
      mobile,
      code,
    } = formData;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{7,15}$/;
    const mobileRegex = /^[0-9]{10,15}$/;
    const extRegex = /^[0-9]{1,5}$/;
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;

    // Name validations with more specific messages
    if (!firstName?.trim()) return showError("First Name is required");
    if (!nameRegex.test(firstName))
      return showError(
        "First Name must be 2-50 characters with only letters, spaces, hyphens, or apostrophes"
      );

    if (!lastName?.trim()) return showError("Last Name is required");
    if (!nameRegex.test(lastName))
      return showError(
        "Last Name must be 2-50 characters with only letters, spaces, hyphens, or apostrophes"
      );

    // Business info validations
    if (!title?.trim()) return showError("Title is required");
    if (title.length < 2 || title.length > 100)
      return showError("Title must be between 2 and 100 characters");

    if (!company?.trim()) return showError("Company is required");
    if (company.length < 2 || company.length > 100)
      return showError("Company name must be between 2 and 100 characters");

    // Phone validations
    if (!phone?.trim()) return showError("Phone number is required");
    if (!phoneRegex.test(phone))
      return showError("Enter a valid phone number (7-15 digits)");

    if (extension && !extRegex.test(extension))
      return showError("Enter a valid extension (1-5 digits)");

    // Mobile validation
    if (!mobile?.trim()) return showError("Mobile number is required");
    if (!mobileRegex.test(mobile))
      return showError("Enter a valid mobile number (10-15 digits)");

    // Email validation
    if (!email?.trim()) return showError("Email is required");
    if (!emailRegex.test(email))
      return showError("Enter a valid email address (e.g., name@example.com)");

    // Source and category validations
    if (!source?.trim()) return showError("Source is required");
    if (source.length < 2)
      return showError("Source must be at least 2 characters");

    if (!category) return showError("Please select a Category");

    // If no code exists, generate one
    let submissionCode = code;
    if (!submissionCode?.trim()) {
      // Generate a code if none exists
      submissionCode = generateRandomCode();
      setFormData({ ...formData, code: submissionCode });
      return showError("Please generate an invitation code first");
    }

    setIsLoading(true); // Set loading state to true
    setErrorMessage(""); // Clear any previous error message

    try {
      // Log form data for debugging
      console.log("Submitting form data:", {
        ...formData,
        code: submissionCode,
      });

      // Send form data to the backend using fetch
      
      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/headless-form/v1/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, code: submissionCode }),
        }
      );

      console.log("Response status:", response.status);

      // Parse the response as JSON
      let data;
      try {
        data = await response.json();
        console.log("Response data:", data);
      } catch (error) {
        console.error("Error parsing response:", error);
        throw new Error("Invalid response from server");
      }

      if (response.ok) {
        // Handle success
        console.log("Form data successfully submitted:", data);

        // Show success toast
        toast.success(`Invitation sent successfully!`, {
          ...toastStyle,
          style: { background: "var(--primary)", color: "#fff" },
        });

        // Reset form
        setFormData({
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

        // Navigate to next page
        navigate("/register2");
      } else {
        // Handle error response from server
        setErrorMessage(
          data.message || "Something went wrong. Please try again later."
        );
        showError(
          data.message || "Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form. Please try again later.");
      showError("Error submitting form. Please try again later.");
    } finally {
      setIsLoading(false); // Set loading state to false when the request is done
    }
  };

  // Helper function to generate a random code
  const generateRandomCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    const length = 6; // Code length

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  };

  // Function to generate a random code
  const generateInvitationCode = () => {
    // Generate a random alphanumeric code using the helper function
    const result = generateRandomCode();

    // Update formData with the generated code
    setFormData({ ...formData, code: result });

    // Show success message
    toast.success("Invitation code generated!", {
      ...toastStyle,
      style: { background: "var(--primary)", color: "#fff" },
    });
  };

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
      <div className="max-w-[1098px] pt-[45px] pb-5 pl-[55px] pr-[22px] bg-[#fff] rounded-[5px] formboxshadow flex justify-between items-start gap-x-10 mb-[26px]">
        <div className="">
          {/* Show error message if exists */}
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-md">
              {errorMessage}
            </div>
          )}

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
            <div className="flex items-end gap-x-6">
              <div className="w-1/2">
                <FormField
                  label="Source"
                  type="text"
                  required
                  description="where or how did we meet this person"
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

            <div className="flex gap-x-2 items-end">
              {/* Code Display */}
              <div className="w-[248px]">
                <label className="text-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]">
                  Invitation Code
                </label>
                <div className="cursor-pointer">
                  <p
                    className="text-[var(--primary2)] font-medium text-sm leading-[200%] text-center text-[#343a40] rounded-[8px] py-2 px-8 border border-[var(--text-secondary)] inline-block"
                    onClick={generateInvitationCode}
                  >
                    Generate Code
                  </p>
                </div>
              </div>

              <div className="w-full py-[10px] px-3 border border-[var(--neutral-400)] rounded-[8px] bg-[var(--background)] text-[var(--primary2)] font-normal text-sm leading-[171%] text-[#343a40]">
                {formData.code || "No code generated yet"}
              </div>
            </div>

            {/* Submit & Clear */}
            <div className="flex gap-x-6 items-center mt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`py-2 px-8 bg-[var(--primary)] rounded-[8px] text-white cursor-pointer font-medium text-sm text-center text-[var(--secondary)] block border border-[var(--secondary)] leading-[28px] ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Send Invitation"}
              </button>
              <button
                type="button"
                disabled={isLoading}
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
                  setErrorMessage("");
                }}
                className={`py-2 px-8 border border-[#919191] rounded-[8px] text-[var(--primary2)80] cursor-pointer font-medium text-sm text-center text-[#343a40] leading-[28px] ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
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
          <div className="pt-[45px] flex justify-end items-center gap-x-4">
            <Link
              to="https://4ami.com/terms-of-use-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-xs text-[var(--primary2)] underline"
            >
              Terms of Use
            </Link>
            <Link
              to="https://4ami.com/privacy-policy-agreement/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-xs text-[var(--primary2)] underline"
            >
              Privacy Policy
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://4ami.com/cookie-policy/"
              className="font-normal text-xs text-[var(--primary2)] underline"
            >
              Cookie Policy
            </Link>
            <Link
              to="https://4ami.com/anti-bribery-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-xs text-[var(--primary2)] underline"
            >
              Anti Bribery Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormField = ({
  label,
  value,
  onChange,
  description,
  type = "text",
  placeholder,
  wrapperClass = "flex flex-col gap-y-2",
}) => (
  <div className={wrapperClass}>
    <div className="">
      <label className="text-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]">
        {label}
      </label>
      {description && (
        <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
          {description}
        </p>
      )}
    </div>
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
