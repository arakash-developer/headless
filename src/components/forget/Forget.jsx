import EyeIcon from "@/assets/EyeIcon";
import Hiddeneye from "@/assets/Hiddeneye";
import Success from "@/assets/Success";
import GenarateOtp from "@/lib/GenarateOtp";
import GetOtp from "@/lib/GetOtp";
import PasswordReset from "@/lib/PasswordReset";
import emailjs from "@emailjs/browser";
import ForgetIcon from "@public/forget.png";
import { Flex, Input, theme, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const { Title } = Typography;
const ForgetDesign = ({ title, des, mail }) => {
  return (
    <div>
      <h2 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">
        {title}
      </h2>
      <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] mt-2 mb-[24px]">
        {des}{" "}
        {mail && (
          <span className="font-semibold text-[#343a40]">
            {mail ? mail : ""}
          </span>
        )}
      </p>
    </div>
  );
};

const Forget = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  let [passcode, setPasscode] = useState("");
  const form = useRef();
  const [status, setStatus] = useState();
  let [eyeon, seteyeon] = useState(false);
  let [eyeon2, seteyeon2] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const otpRef = useRef(null);
  const [otpInput, setOtpInput] = useState("");
  const API_BASE = "https://4amitest-bli6.wp1.sh/wp-json/otp/v1";
  const steps = [
    {
      title: "First",
      content: (
        <ForgetDesign
          title="Forgot Password?"
          des="Enter your sign-up email address to receive a password reset link"
        />
      ),
      nav: "Send Code",
    },
    {
      title: "Second",
      content: (
        <ForgetDesign
          title="Please Check Your Email"
          des="We have sent a code to"
          mail={email}
        />
      ),
      nav: "Verify",
    },
    {
      title: "Last",
      content: (
        <ForgetDesign
          title="Reset Password"
          des="Please enter your new password below"
        />
      ),
      nav: "Reset Password",
    },
    {
      title: "Last",
      content: null,
    },
  ];
  const sendOtp = async (callback) => {
    try {
      const res = await fetch(`${API_BASE}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setOtp(data.otp);
        console.log("OTP generated and saved.", data.otp);

        setMessage("OTP generated and saved.");
      } else {
        setMessage(data.message || "Error sending OTP");
      }
    } catch (err) {
      setMessage("Request failed. Please try again.");
    }
    callback();
  };

  const handleTogglePassword = () => {
    seteyeon(!eyeon);
  };
  const handleToggleConfirmPassword = () => {
    seteyeon2(!eyeon2);
  };

  const sendEmail = async () => {
    let otpcode = await GenarateOtp(email);
    if (!email) {
      console.log("Please enter your email address.");
      return;
    }
    emailjs
      .send(
        "service_nhcrdwf",
        "template_x2ndppk",
        {
          email: email,
          to_name: "Dear",
          passcode: otpcode,
        },
        {
          publicKey: "1Wii5-D0LrHJXSmie",
        }
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          form.current.reset();
          setStatus(true);
        },
        (error) => {
          setStatus("Failed to send email. Please try again.");
          console.error("FAILED...", error.text);
          setStatus(false);
        }
      );
  };
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
  let checkOtp = async (e) => {
    let genOtpString = await GetOtp(email);
    const enteredOtp = otpInput.join("");
    console.log("genOtpString", genOtpString);
    console.log("enteredOtp", enteredOtp);

    if (enteredOtp.length === 6) {
      if (enteredOtp === genOtpString) {
        console.log("OTP is correct");
        setCurrent(current + 1);
        return true;
      } else {
        toast.error("Invalid OTP", toastStyle);
        throw new Error("Invalid OTP");
      }
    } else {
      toast.error("Enter 6 digit OTP", toastStyle);
    }
  };

  let updateUserPassword = async () => {
    if (!password) {
      toast.error("Password is required", toastStyle);
    } else if (!confirmPassword) {
      toast.error("Confirm Password is required", toastStyle);
    } else if (password !== confirmPassword) {
      toast.error("Password does not match", toastStyle);
    } else {
      let reset = await PasswordReset(email, password);
      if (reset === true) {
        toast.success("Password Updated Successfully", toastStyle);
        setCurrent(current + 1);
      }
    }
  };
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current === 0) {
      if (!email) {
        toast.error("Email is required", toastStyle);
      } else if (!email.includes("@")) {
        toast.error("Please enter a valid email address", toastStyle);
      } else {
        sendOtp(sendEmail);
        setCurrent(current + 1);

        CountDownTimer();
      }
    } else if (current === 1) {
      let otp = checkOtp();
      if (otp === true) {
        setCurrent(current + 1);
      }
    } else if (current === 2) {
      if (updateUserPassword() === true) {
        setCurrent(current + 1);
      }
    }
    // setCurrent(current + 1);
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
  console.log("step lenth", steps.length);
  console.log("current", current);
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    setOtpInput(value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  let akash = async (e) => {
    e.preventDefault();
    let gen = await GetOtp(email);
    console.log("gggg", gen);
  };

  const [timeLeft, setTimeLeft] = useState(20);
  function CountDownTimer() {
    useEffect(() => {
      if (timeLeft <= 0) return;
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }, [timeLeft]);
  }

  return (
    <>
      <div
        className={` loginBox  rounded-[8px]  pr-4 ${
          current === 3
            ? "max-w-[1036px] mt-[120px] bg-[var(--secondary)] block"
            : "max-w-[1099px] pt-5 pb-5 mt-10 mb-[171px] bg-[var(--secondary)] flex justify-between items-start"
        } xl:mr-[80px]`}
      >
        <div
          className={`akash flex flex-col justify-between pl-[55px]  ${
            current === 3
              ? "py-[60px] h-auto w-full"
              : current === 2
              ? "py-[70px] h-[474px] w-[500px]"
              : "py-[105px] h-[474px] w-[500px]"
          } `}
        >
          {steps[current].content}
          {current === 0 && (
            <div>
              <label
                htmlFor=""
                className="font-medium text-sm leading-[171%] text-[var(--text-normal)]"
              >
                Email
              </label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                className="custom-black-input bg-[var(--background)] font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
              />
            </div>
          )}
          {current === 1 && (
            <div className="">
              <Flex gap="middle" className="custom-otp-input">
                <Input.OTP
                  formatter={(str) => str.toUpperCase()}
                  {...sharedProps}
                />
              </Flex>
            </div>
          )}
          {current === 2 && (
            <div className="flex flex-col gap-y-5">
              <div>
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-normal)]"
                >
                  New Password
                </label>
                <div className="relative">
                  <Input
                    type={eyeon ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] bg-[var(--background)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  />
                  <div
                    onClick={handleTogglePassword}
                    className="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    {eyeon ? <EyeIcon /> : <Hiddeneye />}
                  </div>
                </div>
                <p className="mt-[2px] font-normal text-xs leading-[135%] text-[var(--text-secondary)]">
                  Password strength:
                  <span className="text-[var(--primary)]">
                    {" "}
                    {checkPasswordStrength(password)}
                  </span>
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-normal)]"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    type={eyeon2 ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="custom-black-input bg-[var(--background)] font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  />
                  <div
                    onClick={handleToggleConfirmPassword}
                    className="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    {eyeon2 ? <EyeIcon /> : <Hiddeneye />}
                  </div>
                </div>
              </div>
            </div>
          )}
          {current === 3 && (
            <div className=" text-center h-full w-full">
              <div className="flex justify-center items-start">
                <Success />
              </div>
              <h2 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)] mt-6">
                Password Updated Successfully!
              </h2>
              <p className="font-normal text-base leading-[150%] text-center text-[var(--text-secondary)] mt-4 mb-6">
                Return to log in and log in with your new password
              </p>
              <Link
                to="/"
                className="font-medium text-sm leading-[200%] text-[var(--secondary)] py-2 px-8 rounded-[8px] bg-[var(--primary)] cursor-pointer inline-block"
              >
                Back to Log In
              </Link>
            </div>
          )}

          {current < steps.length - 1 && (
            <>
              <input
                onClick={() => next()}
                className={`mt-6 cursor-pointer font-medium text-sm leading-y-[28px] text-[var(--secondary)] bg-[var(--primary)] py-2 px-8 rounded-[8px] h-[44px] inline-block ${
                  current === 0
                    ? "max-w-[138px]"
                    : current === 1
                    ? "max-w-[104px]"
                    : "max-w-[172px]"
                }`}
                type="submit"
                value={steps[current].nav}
              />
              {current === 1 && (
                <div className="flex gap-x-1 items-center">
                  <p className="mt-6 font-medium text-sm leading-[171%] text-[var(--text-disabled)]">
                    Send code again in 00:{timeLeft}
                  </p>
                  <div className="mt-6 font-medium text-sm leading-[171%] text-[var(--text-disabled)] underline cursor-pointer">
                    send code
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {!(current === 3) && (
          <div className="px-8">
            <img
              className="w-[475px] h-[408px]"
              src={ForgetIcon}
              alt="forget"
            />
          </div>
        )}
      </div>
    </>
  );
};
function checkPasswordStrength(password) {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  const length = password.length;

  if (length < 6) return "Low";

  const strengthScore = [hasLower, hasUpper, hasNumber, hasSymbol].filter(
    Boolean
  ).length;

  if (length >= 8 && strengthScore >= 3) return "Strong";
  if (length >= 6 && strengthScore >= 2) return "Medium";

  return "Low";
}

export default Forget;
