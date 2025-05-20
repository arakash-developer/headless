import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Contex } from "../../context/User";

const Register = () => {
  const navigate = useNavigate();
  const [toastError, setToastError] = useState("Error");
  const [agree, setAgree] = useState(false);
  let { invitation, setInvitation } = useContext(Contex);
  const [formData, setFormData] = useState({
    code: "",
    email: "",
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",
    extension: "",
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
      background: "var(--primary2)",
      color: "#fff",
    },
  };
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("logintoken");
    if (token) {
      navigate("/dashboard", { replace: true });
    } else {
      setChecking(false);
    }
  }, []);

  if (checking) return null;

  const registerCheck = (e) => {
    e.preventDefault();

    const { email, firstName, lastName, title, company, phone, extension } =
      formData;

    if (!email) return showError("Email is required");
    if (!firstName) return showError("First Name is required");
    if (!lastName) return showError("Last Name is required");
    if (!title) return showError("Title is required");
    if (!company) return showError("Company is required");
    if (!phone) return showError("Phone number is required");
    if (!extension) return showError("Extension is required");
    if (!agree)
      return showError("Please agree to the Terms and Privacy Policy");

    toast.success("Next Step!", {
      ...toastStyle,
      style: { background: "var(--primary)", color: "#fff" },
    });
    setInvitation(formData);
    navigate("/register2");
  };

  const showError = (msg) => {
    setToastError(msg);
    toast.error(msg, toastStyle);
  };

  return (
    <>
      <h2 className="text-[var(--primary2)] pb-5 text-[32px] not-italic font-semibold leading-[normal]">
        Create your Account
      </h2>
      <div className="max-w-[855px] px-[65px] py-[37px] bg-[#fff] rounded-[5px] formboxshadow">
        <div className="max-w-[280px] mx-auto flex justify-between items-center relative">
          <div className="bg-[var(--primary)] w-[22px] h-[22px] rounded-full border-[1px] border-[var(--primary)] relative z-[2] flex justify-center items-center text-[12px]">
            {/* <FaCheck className="text-[#fff]" /> */}
          </div>
          <div className="w-full border-[1px] border-[var(--primary)] absolute z-[1]"></div>
          <div className="bg-[var(--primary)] w-[32px] h-[32px] rounded-full border-[1px] border-[var(--primary)] relative z-[2]"></div>
        </div>
        <div className="pt-[25px] max-w-[346px] mx-auto flex justify-between items-center ">
          <p className="text-[var(--primary2)] text-base not-italic font-semibold leading-[normal]">
            User Info
          </p>
          <p className="text-[#919191] text-base not-italic font-medium leading-[normal]">
            Create Account
          </p>
        </div>

        <form
          className="flex flex-col gap-y-6 pt-[58px]"
          onSubmit={registerCheck}
        >
          {/* Invitation Code */}
          <FormField
            label="Invitation Code (Optional)"
            value={formData.code || invitation.code}
            onChange={(val) => setFormData({ ...formData, code: val })}
          />

          {/* Email */}
          <FormField
            label="Email"
            type="email"
            required
            value={formData.email || invitation.email}
            onChange={(val) => setFormData({ ...formData, email: val })}
          />

          {/* First & Last Name */}
          <div className="flex gap-x-[41px]">
            <FormField
              label="First Name"
              value={formData.firstName || invitation.firstName}
              onChange={(val) => setFormData({ ...formData, firstName: val })}
              wrapperClass="w-1/2"
            />
            <FormField
              label="Last Name"
              value={formData.lastName || invitation.lastName}
              onChange={(val) => setFormData({ ...formData, lastName: val })}
              wrapperClass="w-1/2"
            />
          </div>

          {/* Title & Company */}
          <div className="flex gap-x-[41px]">
            <FormField
              label="Title"
              value={formData.title || invitation.title}
              onChange={(val) => setFormData({ ...formData, title: val })}
              wrapperClass="w-1/2"
            />
            <FormField
              label="Company"
              value={formData.company || invitation.company}
              onChange={(val) => setFormData({ ...formData, company: val })}
              wrapperClass="w-1/2"
            />
          </div>

          {/* Phone & Extension */}
          <div className="flex gap-x-[41px]">
            <FormField
              label="Phone"
              placeholder="(123) 4567890"
              type="number"
              value={formData.phone || invitation.phone}
              onChange={(val) => setFormData({ ...formData, phone: val })}
              wrapperClass="w-1/2"
            />
            <FormField
              label="Extension"
              placeholder="123"
              value={formData.extension || invitation.extension}
              onChange={(val) => setFormData({ ...formData, extension: val })}
              wrapperClass="w-1/2"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <p className="text-[#919191] text-sm font-normal">
              I acknowledge that I have read and agree to the Terms of Use and
              Privacy Policy.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-[18px] px-[60px] bg-[var(--primary)] rounded-[5px] text-white text-base font-bold max-w-[192px] cursor-pointer"
          >
            Continue
          </button>
        </form>
      </div>
    </>
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
      className="w-full h-[50px] py-3 px-4 border border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer"
    />
  </div>
);

export default Register;
