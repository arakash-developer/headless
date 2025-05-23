import DownArrow2 from "@/assets/DownArrow2";
import postRegistration from "@/lib/postRegistration";
import SignupIllustration from "@public/signupillustration.jpg";
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
    if (!formData.firstName)
      return toast.error("First Name is required", toastStyle);
    if (!formData.lastName)
      return toast.error("Last Name is required", toastStyle);
    if (!formData.title) return toast.error("Title is required", toastStyle);
    if (!formData.company)
      return toast.error("Company name is required", toastStyle);
    if (!formData.phone)
      return toast.error("Phone number is required", toastStyle);
    if (!formData.extension)
      return toast.error("Extension number is required", toastStyle);
    if (!formData.mobile)
      return toast.error("Mobile number is required", toastStyle);
    if (!formData.email) return toast.error("Email is required", toastStyle);
    setCurrent(current + 1);
  };
  let handleuserSubmitstep1 = async () => {
    if (!formData.userName)
      return toast.error("Username is required", toastStyle);
    if (!formData.password)
      return toast.error("Password is required", toastStyle);
    if (!formData.confirmPassword)
      return toast.error("Confirm Password is required", toastStyle);
    if (formData.password !== formData.confirmPassword)
      return toast.error("Password does not match", toastStyle);
    else {
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
      let response = await postRegistration(datas);
      if (response?.login) {
        setCurrent(current + 1);
        toast.success(response.message, {
          ...toastStyle,
          style: { background: "var(--primary)", color: "#fff" },
        });
      }
      toast.error(response, toastStyle);
    }
  };
  const next = () => {
    if (current === 0) {
      handleuserSubmitstep0();
    }
    if (current === 1) {
      handleuserSubmitstep1();
    }
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

  // let handleSubmitform = async () => {
  //   let datas = {
  //     username: userName,
  //     password: password,
  //     email: email,
  //     firstName: firstName,
  //     lastName: lastName,
  //     title: title,
  //     company: company,
  //     phone: phone,
  //     extension: extension,
  //     code: code,
  //   };
  //   let response = await postRegistration(datas);
  //   if (response?.login) {
  //     navigate("/regsuccess");
  //     toast.success(response.message, {
  //       ...toastStyle,
  //       style: { background: "var(--primary)", color: "#fff" },
  //     });
  //   }
  //   toast.error(response, toastStyle);
  // };
  return (
    <>
      {current < 2 && (
        <div className="max-w-[1098px] pl-[55px] pt-[45px] pb-[29px] bg-[#fff] rounded-[5px] formboxshadow">
          <div className="flex justify-between items-start">
            <div className="">
              <div className="max-w-[540px]">
                <h2 className="text-[32px] not-italic font-semibold text-4xl leading-[125%] text-[var(--primary2)]">
                  Create your Account
                </h2>
                <p className="mt-2 font-normal text-base leading-[150%] text-[var(--text-secondary)]">
                  Please provide your details below to set up your new account.
                  This will allow you to access all features and manage your
                  profile securely
                </p>
              </div>
              <div className="mt-[28px] max-w-[540px]">
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
                      <div className="form mt-[28px] flex flex-col gap-y-5">
                        <div className="w-full">
                          <FormField
                            label="Invitation Code (Optional)"
                            value={formData.extension}
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
                              type="number"
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
                            type="number"
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
                                defaultValue="Select One"
                                style={{ height: "40px" }}
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
                                defaultValue="Select One"
                                style={{ height: "40px" }}
                                onChange={handleCategoryChange}
                                className="w-full custom-select no-arrow-select bg-[var(--background)] "
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
                    <div className="mt-[28px] flex flex-col gap-y-5">
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
                          <span className="text-[var(--primary)] mt-1">
                            Strong
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
                      Next Step
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
            <div className="mt-[97px]">
              <img src={SignupIllustration} alt={SignupIllustration} />
            </div>
          </div>
        </div>
      )}
      {current === 2 && (
        <div className="mt-[138px] py-10 px-[100px] rounded-lg bg-[var(--secondary)] text-center ">
          <h2 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">
            Thank You for Registering!
          </h2>
          <h3 className="font-semibold text-lg leading-[156%] text-[#343a40] mt-5 mb-6">
            Check Your Email to Activate Your Account
          </h3>
          <p className="font-normal text-base leading-[150%] text-center text-[var(--text-secondary)] pb-6 max-w-[818px] mx-auto">
            To complete your registration, please check your email and follow
            the confirmation link we just sent to [
            <span className="text-[var(--primary)]">john@gmail.com</span>]. Your
            response is required to activate your account. If you don’t see the
            email within a few minutes, please check your{" "}
            <span className="font-semibold text-[var(--primary2)]"> spam</span>
            or
            <span className="font-semibold text-[var(--primary2)]">
              junk folder.
            </span>
          </p>
          <Link
            to="https://mail.google.com/mail/u/0/#inbox"
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
      className="custom-black-input bg-[var(--background)] font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-lg h-10"
    />
  </div>
);

export default Register;
