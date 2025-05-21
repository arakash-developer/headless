import EyeIcon from "@/assets/EyeIcon";
import Hiddeneye from "@/assets/Hiddeneye";
import Success from "@/assets/Success";
import GenarateOtp from "@/lib/GenarateOtp";
import GetOtp from "@/lib/GetOtp";
import emailjs from "@emailjs/browser";
import ForgetIcon from "@public/forget.png";
import { Flex, Input, theme, Typography } from "antd";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const { Title } = Typography;

const ForgetDesign = ({ title, des, mail }) => {
  return (
    <div>
      <h2 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">
        {title}
      </h2>
      <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] mt-2 mb-[28px]">
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
  let [passcode, setPasscode] = useState("120056");
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
          des=" Enter your registered email address to receive a password reset link"
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
  const sendOtp = async () => {
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
        setMessage("OTP generated and saved.");
      } else {
        setMessage(data.message || "Error sending OTP");
      }
    } catch (err) {
      setMessage("Request failed. Please try again.");
    }
  };

  const handleTogglePassword = () => {
    seteyeon(!eyeon);
  };
  const handleToggleConfirmPassword = () => {
    seteyeon2(!eyeon2);
  };

  const sendEmail = async () => {
    let otpcode = await GenarateOtp("akash.blinto@gmail.com");
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
          to_name: "Akashe",
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
    let genOtpstring = await GetOtp(email);
    let genotp = Number(genOtpstring);
    if (otpInput.length === 6) {
      let NumberotpInput = Number(otpInput.join(""));
      console.log("otpInput", NumberotpInput, typeof NumberotpInput);
      console.log("gentOtp", genotp, typeof genotp);
      if (NumberotpInput === genotp) {
        console.log("OTP is correct");
        setCurrent(current + 1);
      } else {
        toast.error("Invalid OTP", toastStyle);
      }
    } else {
      toast.error("Enter 6 digit OTP", toastStyle);
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
        setCurrent(current + 1);
        sendEmail();
      }
    } else if (current === 1) {
      checkOtp();
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
  return (
    <>
      <div
        className={` loginBox  rounded-[8px]  pr-4 ${
          current === 3
            ? "max-w-[885px] mt-[120px] bg-[var(--pop-up)] block"
            : "max-w-[1099px] pt-5 pb-5 mt-10 mb-[171px] bg-[var(--secondary)] flex justify-between items-start"
        } xl:mr-[80px]`}
      >
        <div
          className={`akash flex flex-col justify-between pl-[55px]  ${
            current === 3
              ? "py-[60px] h-auto w-full"
              : current === 2
              ? "py-[70px] h-[474px] w-[415px]"
              : "py-[105px] h-[474px] w-[415px]"
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
                className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                    className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  <span className="text-[var(--primary)]"> Strong</span>
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
                    className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                Return to sign in and sign in with your new password
              </p>
              <Link
                to="/"
                className="font-medium text-sm leading-[200%] text-[var(--secondary)] py-2 px-8 rounded-[8px] bg-[var(--primary)] cursor-pointer inline-block"
              >
                Back to Sign In
              </Link>
            </div>
          )}

          {current < steps.length - 1 && (
            <>
              <input
                onClick={() => next()}
                className="mt-8 cursor-pointer font-medium text-sm leading-[200%] text-[var(--secondary)] bg-[var(--primary)] py-2 px-8 rounded-[8px] max-w-[172px]"
                type="submit"
                value={steps[current].nav}
              />
              {current === 1 && (
                <p className="mt-6 font-medium text-sm leading-[171%] text-[var(--text-disabled)]">
                  Send code again in 00:20
                </p>
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
      {/* Down----- */}
      <form ref={form} onSubmit={akash} className="">
        <label>Name</label>
        <input
          className="capitalize"
          type="text"
          name="to_name"
          placeholder="NAME"
        />

        <label>Email</label>
        <input type="email" name="email" />

        <label>Passcode</label>
        <input type="text" name="passcode" />

        <input className="cursor-pointer" type="submit" value="Send" />
      </form>

      {/* {status && (
        <p
          className={`mt-4 ${
            // status.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )} */}
    </>
  );
};

export default Forget;
