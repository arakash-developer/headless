import DownArrow2 from "@/assets/DownArrow2";
import { encryptText } from "@/lib/cryptoUtils";
import postRegistration from "@/lib/postRegistration";
import { sendConfirmationEmail } from "@/utils/emailUtils";
// import SignupIllustration from "@public/signupillustration.jpg";
import SignupIllustration from "@public/Illustration.svg";
import { Button, Checkbox, Input, Select, theme } from "antd";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Contex } from "../../context/User";
const steps = [
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
];
const Register = () => {
  const navigate = useNavigate();
  let { setForgetHide, forgetHide } = useContext(Contex);
  const [toastError, setToastError] = useState("Error");
  const [agree, setAgree] = useState(false);
  let { invitation, setInvitation } = useContext(Contex);
  const [selected, setSelected] = useState();
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
    email: "",
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",
    extension: "",
    password: "",
    userName: "",
    mobile: "",
    source: "",
    category: "",
    confirmPassword: "",
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

  const showError = (msg) => {
    setToastError(msg);
    toast.error(msg, toastStyle);
  };

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  let handleuserSubmitstep0 = () => {
    // Validate the required checkbox for terms and conditions

    // Validate invitation code if provided
    if (formData.code && !/^[A-Za-z0-9-]+$/.test(formData.code))
      return toast.error(
        "Invitation should be alphanumeric and hyphens only",
        toastStyle
      );

    // Validate required fields
    if (!formData.firstName)
      return toast.error("First Name is required", toastStyle);
    if (!formData.lastName)
      return toast.error("Last Name is required", toastStyle);
    if (!formData.title) return toast.error("Title is required", toastStyle);
    if (!formData.company)
      return toast.error("Company name is required", toastStyle);
    if (!formData.phone)
      return toast.error("Phone number is required", toastStyle);
    if (!/^\+?\(?\d{3}\)?[-\s\.]?\d{3}[-\s\.]?\d{4,6}$/.test(formData.phone))
      return toast.error("Enter a valid phone number", toastStyle);
    if (!formData.extension)
      return toast.error("Extension number is required", toastStyle);
    if (!formData.mobile)
      return toast.error("Mobile number is required", toastStyle);
    if (!/^\+?\(?\d{3}\)?[-\s\.]?\d{3}[-\s\.]?\d{4,6}$/.test(formData.mobile))
      return toast.error("Enter a valid mobile number", toastStyle);
    if (!formData.email) return toast.error("Email is required", toastStyle);
    if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(formData.email))
      return toast.error("Enter a valid email address", toastStyle);
    // If all validations pass, proceed to next step
    if (!checked) {
      return toast.error(
        "Please agree to the Terms and Privacy Policy",
        toastStyle
      );
    }
    setCurrent(current + 1);
  };

  let handleuserSubmitstep1 = async (callback) => {
    // Validate username
    if (!formData.userName)
      return toast.error("Username is required", toastStyle);
    if (!/^[a-z0-9_-]{3,15}$/.test(formData.userName))
      return toast.error(
        "Username should be between 3 to 15 characters, alphanumeric, hyphens and underscores only",
        toastStyle
      );

    // Validate password
    if (!formData.password)
      return toast.error("Password is required", toastStyle);
    if (formData.password.length < 8)
      return toast.error("Password must be at least 8 characters", toastStyle);

    // Validate password confirmation
    if (!formData.confirmPassword)
      return toast.error("Confirm Password is required", toastStyle);
    if (formData.password !== formData.confirmPassword)
      return toast.error("Password does not match", toastStyle);

    // If all validations pass, proceed with registration
    let datas = {
      username: formData.userName,
      password: formData.password,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      title: formData.title,
      company: formData.company,
      phone: formData.phone,
      extension: formData.extension,
      code: formData.code,
    };

    try {
      let response = await postRegistration(datas);
      if (response?.login) {
        setCurrent(current + 1);
        callback();
        toast.success(response.message, {
          ...toastStyle,
          style: { background: "var(--primary)", color: "#fff" },
        });
      } else {
        toast.error(response.message || "Registration failed", toastStyle);
      }
    } catch (error) {
      toast.error(
        "An error occurred during registration. Please try again.",
        toastStyle
      );
      console.error("Registration error:", error);
    }
  };
  const next = () => {
    if (current === 0) {
      handleuserSubmitstep0();
    }
    if (current === 1) {
      handleuserSubmitstep1(sendEmail);
      setForgetHide(true);
    }
  };
  // const next = () => {
  //   if (current === 0) {
  //     setCurrent(current + 1);
  //   }
  //   if (current === 1) {
  //     setCurrent(current + 1);
  //     setForgetHide(true);
  //   }
  // };
  let confirmmailbtn = (e) => {
    e.preventDefault();
    setForgetHide(false);
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const handleSourceChange = (option) => {
    setSelected(option);
    setFormData({ ...formData, source: option });
  };
  const handleCategoryChange = (option) => {
    setSelected(option);
    setFormData({ ...formData, category: option });
  };
  const sourceOptions = [
    { value: "tech", label: "Tech" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
  ];
  const categoryOptions = [
    { value: "tech", label: "Tech" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
  ];
  const handleRemember = (e) => {
    setChecked(!checked);
  };
  const sendEmail = async () => {
    const password = "myStrongSalt123";
    const encrypted = await encryptText(formData.email, password);
    if (!formData.email) {
      console.log("Please enter your email address.");
      return;
    }
    // emailjs.send(
    //   "service_nhcrdwf",
    //   "template_x2ndppk",
    //   {
    //     email: formData.email,
    //     to_name: "Dear",
    //     passcode: `https://4ami-client.wp1.sh/confirmemail/${formData.email}`,
    //   },
    //   {
    //     publicKey: "1Wii5-D0LrHJXSmie",
    //   }
    // );
    sendConfirmationEmail(
      formData.email,
      `https://4ami-client.wp1.sh/confirmemail/${formData.email}`
    ).then(
      () => {
        console.log("SUCCESS!");
        toast.success("Email sent successfully!", toastStyle);
      },
      (error) => {
        console.error("FAILED...", error.text);
        toast.error("Failed to send email. Please try again.", toastStyle);
      }
    );
  };
  return (
    <>
      {current < 2 && (
        <div className="max-w-[1098px] pl-[55px] pt-[45px] pb-[46px] pr-[22px] bg-[#fff] rounded-[5px] formboxshadow mb-[105px]">
          <div className="flex justify-between items-center">
            <div className="">
              <div className="max-w-[540px]">
                <h2 className="text-[32px] not-italic font-semibold text-4xl leading-[125%] text-[var(--primary2)]">
                  Create your Account
                </h2>
                <p className="mt-2 font-normal text-base leading-[150%] text-[var(--text-secondary)]">
                  Please provide your details below to set up your new account.
                  This will allow you to access all services and manage your
                  profile securely
                </p>
              </div>
              <div className="mt-6 max-w-[540px]">
                <div className="steps  flex flex-col justify-start items-end">
                  <div className="font-medium text-xs text-right text-[var(--primary)]">
                    Step {current === 0 ? "1" : "2"}{" "}
                    <span className="text-[var(--gray)]"> of 2</span>
                  </div>
                  <div className="mt-3 w-full h-3 rounded-[20px] bg-[var(--neutral)] overflow-hidden">
                    <div
                      className={`bg-[var(--primary)] h-full ${
                        current === 0 ? "w-[50%]" : "w-[100%]"
                      } rounded-[20px]`}
                    ></div>
                  </div>
                </div>

                <div className="">
                  {current === 0 && (
                    <div className="">
                      <div className="form mt-[28px] flex flex-col gap-y-4">
                        <div className="w-full">
                          <FormField
                            label="Invitation Code (Optional)"
                            value={formData.code}
                            onChange={(val) =>
                              setFormData({ ...formData, code: val })
                            }
                            type="text"
                            placeholder=""
                            wrapperClass=""
                          />
                        </div>
                        <div className="w-full flex gap-x-6">
                          <div className="w-1/2">
                            <FormField
                              label="First Name"
                              value={formData.firstName}
                              onChange={(val) =>
                                setFormData({ ...formData, firstName: val })
                              }
                              type="text"
                              placeholder=""
                              wrapperClass=""
                            />
                          </div>
                          <div className="w-1/2">
                            <FormField
                              label="Last Name"
                              value={formData.lastName}
                              onChange={(val) =>
                                setFormData({ ...formData, lastName: val })
                              }
                              type="text"
                              placeholder=""
                              wrapperClass=""
                            />
                          </div>
                        </div>
                        <div className="w-full flex gap-x-6">
                          <div className="w-1/2">
                            <FormField
                              label="Title"
                              value={formData.title}
                              onChange={(val) =>
                                setFormData({ ...formData, title: val })
                              }
                              type="text"
                              placeholder=""
                              wrapperClass=""
                            />
                          </div>
                          <div className="w-1/2">
                            <FormField
                              label="Company"
                              value={formData.company}
                              onChange={(val) =>
                                setFormData({ ...formData, company: val })
                              }
                              type="text"
                              placeholder=""
                              wrapperClass=""
                            />
                          </div>
                        </div>
                        <div className="w-full flex gap-x-6">
                          <div className="w-1/2">
                            <FormField
                              label="Phone"
                              value={formData.phone}
                              onChange={(val) =>
                                setFormData({ ...formData, phone: val })
                              }
                              type="text"
                              placeholder=""
                              wrapperClass=""
                            />
                          </div>
                          <div className="w-1/2">
                            <FormField
                              label="Extension"
                              value={formData.extension}
                              onChange={(val) =>
                                setFormData({ ...formData, extension: val })
                              }
                              type="text"
                              placeholder=""
                              wrapperClass=""
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <FormField
                            label="Mobile"
                            value={formData.mobile}
                            onChange={(val) =>
                              setFormData({ ...formData, mobile: val })
                            }
                            type="text"
                            placeholder=""
                            wrapperClass=""
                          />
                        </div>
                        <div className="w-full flex gap-x-6">
                          <div className="w-1/2">
                            <label className="text-[var(--text-normal)] font-medium text-sm leading-[171%] text-[#343a40]">
                              Source
                            </label>
                            <div className="relative cursor-pointer">
                              <Select
                                // defaultValue={<span style={{ color: "gray" }}>Select One</span>}
                                placeholder={
                                  <span style={{ color: "#ADB5BD" }}>
                                    Select One
                                  </span>
                                }
                                style={{ height: "40px", color: "red" }}
                                onChange={handleSourceChange}
                                className="w-full custom-select no-arrow-select bg-[var(--background)]"
                                dropdownMatchSelectWidth={false}
                              >
                                {sourceOptions.map((option) => (
                                  <Select.Option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    <p>{option.label}</p>
                                  </Select.Option>
                                ))}
                              </Select>
                              <div className="absolute top-1/2 -translate-y-1/2 right-[16px] pointer-events-none">
                                <DownArrow2 color="var(--text-secondary)" />
                              </div>
                            </div>
                          </div>

                          <div className="w-1/2 ">
                            <label className="text-[var(--text-normal)] font-medium text-sm leading-[171%] text-[#343a40]">
                              Category
                            </label>
                            <div className="relative cursor-pointer">
                              <Select
                                // defaultValue="Select One"
                                placeholder={
                                  <span style={{ color: "#ADB5BD" }}>
                                    Select One
                                  </span>
                                }
                                style={{ height: "40px" }}
                                onChange={handleCategoryChange}
                                className="w-full custom-select no-arrow-select bg-[var(--background)] inline-block"
                                dropdownMatchSelectWidth={false}
                              >
                                {categoryOptions.map((option) => (
                                  <Select.Option
                                    key={option.value}
                                    value={option.value}
                                  >
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
                        <div className="w-full">
                          <FormField
                            label="Email"
                            value={formData.email}
                            onChange={(val) =>
                              setFormData({ ...formData, email: val })
                            }
                            type="email"
                            placeholder=""
                            wrapperClass=""
                          />
                        </div>
                      </div>
                      <div
                        className="mt-3 flex items-center gap-x-2 cursor-pointer"
                        onClick={handleRemember}
                      >
                        <div className="flex items-center">
                          <Checkbox
                            checked={checked}
                            className="custom-red-checkbox"
                          ></Checkbox>
                        </div>
                        <p className="font-normal text-xs leading-[135%] text-[var(--text-disabled)]">
                          I acknowledge that I have read and agree to the Terms
                          of Use and Privacy Policy
                        </p>
                      </div>
                    </div>
                  )}
                  {current === 1 && (
                    <div className="mt-[28px] flex flex-col gap-y-4">
                      <div className="w-full">
                        <FormField
                          label="Username"
                          value={formData.userName}
                          onChange={(val) =>
                            setFormData({ ...formData, userName: val })
                          }
                          type="text"
                          placeholder=""
                          wrapperClass=""
                        />
                      </div>
                      <div className="w-full">
                        <FormField
                          label="Password"
                          value={formData.password}
                          onChange={(val) =>
                            setFormData({ ...formData, password: val })
                          }
                          type="text"
                          placeholder=""
                          wrapperClass=""
                        />
                        <p className="font-normal text-xs leading-[135%] text-[var(--text-secondary)]">
                          Password strength:{" "}
                          <span
                            className={`mt-1 ${
                              formData.password && formData.password.length >= 8
                                ? "text-[var(--primary)]"
                                : "text-[var(--text-secondary)]"
                            }`}
                          >
                            {!formData.password
                              ? "Not set"
                              : formData.password.length >= 8
                              ? "Strong"
                              : "Weak"}
                          </span>
                        </p>
                      </div>
                      <div className="w-full">
                        <FormField
                          label="  Confirm Password"
                          value={formData.confirmPassword}
                          onChange={(val) =>
                            setFormData({ ...formData, confirmPassword: val })
                          }
                          type="text"
                          placeholder=""
                          wrapperClass=""
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex gap-x-6 items-center">
                  {current > 0 && (
                    <button
                      className="py-2 px-8 h-[44px] leading-[200%] rounded-[8px]  font-medium text-sm  text-[var(--text-normal)] border border-[var(--text-secondary)]"
                      type="primary"
                      onClick={() => prev()}
                    >
                      Back
                    </button>
                  )}
                  {current < steps.length - 1 && (
                    <button
                      className="h-[44px] py-2 px-8 font-medium text-sm leading-[200%] text-[var(--secondary)] bg-[var(--primary)] rounded-[8px]"
                      type="primary"
                      onClick={() => next()}
                    >
                      {current === 1 ? "Sign Up" : "Next Step"}
                    </button>
                  )}
                  {current === steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => message.success("Processing complete!")}
                    >
                      Done
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <img src={SignupIllustration} alt={SignupIllustration} />
            </div>
          </div>
        </div>
      )}
      {current === 2 && (
        <div className="mt-[138px] py-10 px-[100px] rounded-lg bg-[var(--secondary)] text-center max-w-[1036px] mx-auto">
          <h2 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">
            Thank You for Signing Up!
          </h2>
          <h3 className="font-semibold text-lg leading-[156%] text-[var(--text-normal)] mt-5 mb-6">
            Check Your Email to Activate Your Account
          </h3>
          <p className="font-normal text-base leading-[150%] text-center text-[var(--text-secondary)] pb-6 max-w-[818px] mx-auto">
            To complete your sign-up, please check your email and follow the
            confirmation link we just sent to [
            <span className="text-[var(--primary)]">john@gmail.com</span>]. Your
            response is required to activate your account. If you don’t see the
            email within a few minutes, please check your <span></span>
            <span className="font-semibold text-[var(--primary2)]">
              {" "}
              spam
            </span>{" "}
            or
            <span className="font-semibold text-[var(--primary2)]">
              {" "}
              junk folder.
            </span>
          </p>
          <Link
            onClick={confirmmailbtn}
            to="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm leading-[200%] text-[var(--secondary)] inline-block rounded py-2  px-8 bg-[var(--primary)]"
          >
            Confirm Email
          </Link>
          <div className="mt-[88px]">
            <p className="font-normal text-base leading-[150%] text-center text-[var(--text-secondary)] pt-3 border-t border-[var(--neutral-400)] max-w-[815px] mx-auto">
              Still having trouble? Contact
              <span className="text-[var(--primary)]"> Support</span> for
              assistance. (
              <span className="text-[var(--primary)]"> Support@4ami.com</span>)
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const FormField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  wrapperClass = "flex flex-col gap-y-[2px]",
  isValid,
}) => (
  <div className={wrapperClass}>
    <label className="text-[var(--text-normal)] font-medium text-sm leading-[171%] text-[#343a40]">
      {label}
    </label>
    <Input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`custom-black-input bg-[var(--background)] font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border ${
        isValid === false
          ? "border-[var(--primary)]"
          : "border-[var(--neutral-400)]"
      } rounded-lg h-10`}
      status={isValid === false ? "error" : ""}
    />
  </div>
);

export default Register;
