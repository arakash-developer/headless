import EyeIcon from "@/assets/EyeIcon";
import Hiddeneye from "@/assets/Hiddeneye";
import Success from "@/assets/Success";
import emailjs from "@emailjs/browser";
import ForgetIcon from "@public/forget.png";
import { Flex, Input, theme, Typography } from "antd";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
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
        mail="m.adams@gmail.com"
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
const Forget = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); 
  let [eyeon, seteyeon] = useState(false);
  let [eyeon2, seteyeon2] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleTogglePassword = () => {
    seteyeon(!eyeon);
  };
  const handleToggleConfirmPassword = () => {
    seteyeon2(!eyeon2);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nhcrdwf", "template_x2ndppk", form.current, {
        publicKey: "1Wii5-D0LrHJXSmie",
      })
      .then(
        () => {
          setStatus("Email sent successfully!");
          form.current.reset(); // Clear form after success
        },
        (error) => {
          setStatus("Failed to send email. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
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
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
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
              <Input className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]" />
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
      <form ref={form} onSubmit={sendEmail} className="hidden">
        <label>Name</label>
        <input
          className="capitalize"
          type="text"
          name="to_name"
          placeholder="NAME"
          required
        />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Passcode</label>
        <input type="text" name="passcode" required />

        <input className="cursor-pointer" type="submit" value="Send" />
      </form>

      {status && (
        <p
          className={`mt-4 ${
            status.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </>
  );
};

export default Forget;
