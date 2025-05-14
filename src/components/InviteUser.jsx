import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Key from "../../public/key.svg";

const InviteUser = () => {
  const navigate = useNavigate();
  const [toastError, setToastError] = useState("");

  const [formData, setFormData] = useState({
    code: "",
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

  return (
    <div>
      <div className="mt-5">
        <h2 className="text-[var(--primary2)] text-[28px] leading-8 font-semibold">
          Send an Invitation
        </h2>
        <p className="max-w-[813px] text-[#919191] text-base font-normal leading-6 mb-[30px]">
          Use this form to invite a business colleague or client to register and
          use the AMI website. Upon completion, a unique Invitation Code will be
          sent to your invitee. After they register, you will receive a
          notification email
        </p>
      </div>

      <div className="max-w-[855px] p-[60px] bg-[#fff] rounded-[5px] formboxshadow">
        <form
          className="flex flex-col gap-y-6 pt-[50px]"
          onSubmit={registerCheck}
        >
          {/* First & Last Name */}
          <div className="flex gap-x-[41px]">
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
          <div className="flex gap-x-[41px]">
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
          <div className="flex gap-x-[41px]">
            <FormField
              label="Phone"
              type="text"
              placeholder="(123) 4567890"
              value={formData.phone}
              onChange={(val) => setFormData({ ...formData, phone: val })}
              wrapperClass="w-1/2"
            />
            <FormField
              label="Extension"
              placeholder="123"
              value={formData.extension}
              onChange={(val) => setFormData({ ...formData, extension: val })}
              wrapperClass="w-1/2"
            />
          </div>

          {/* Email */}
          <FormField
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={(val) => setFormData({ ...formData, email: val })}
          />

          {/* Source */}
          <div>
            <label className="text-[var(--primary2)] text-base font-medium">
              Source
            </label>
            <select
              value={formData.source}
              onChange={(e) =>
                setFormData({ ...formData, source: e.target.value })
              }
              className="w-full h-[50px] py-3 px-4 border border-[#DBDCDE] rounded-[8px]"
            >
              <option value="">Select One</option>
              <option value="Referral">Referral</option>
              <option value="Event">Event</option>
              <option value="Social">Social</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="text-[var(--primary2)] text-base font-medium">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full h-[50px] py-3 px-4 border border-[#DBDCDE] rounded-[8px]"
            >
              <option value="">Select One</option>
              <option value="Client">Client</option>
              <option value="Partner">Partner</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Code Display */}
          <p className="pb-2 text-[var(--primary2)] text-base font-medium">
            Unique Invitation Code
          </p>
          <div className="rounded-[5px] py-5 px-4 flex gap-x-[9px] items-center border border-[#DBDCDE] cursor-pointer max-w-[167px]">
            <p className="overflow-hidden text-[var(--primary2)] text-sm font-semibold">
              Generate Code
            </p>
            <img src={Key} alt="key icon" />
          </div>

          {/* Submit & Clear */}
          <div className="flex gap-x-[42px] items-center">
            <button
              type="submit"
              className="py-[18px] px-[60px] bg-[var(--primary)] rounded-[5px] text-white text-base font-bold max-w-[275px] cursor-pointer"
            >
              Send Invitation
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  code: "",
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
                setToastError("");
              }}
              className="py-[18px] px-[60px] border border-[#919191] rounded-[5px] text-[var(--primary2)80] text-base font-bold max-w-[275px] cursor-pointer"
            >
              Clear Form
            </button>
          </div>
        </form>
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
    <label className="text-[var(--primary2)] text-base font-medium">
      {label}
    </label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-[50px] py-3 px-4 border border-[#DBDCDE] rounded-[8px] focus:outline-none"
    />
  </div>
);

export default InviteUser;
