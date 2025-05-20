import emailjs from "@emailjs/browser";
import ForgetIcon from "@public/forget.png";
import { Flex, Input, theme, Typography } from "antd";
import { useRef, useState } from "react";
const { Title } = Typography;

const ForgetDesign = ({ title, des, mail }) => {
  return (
    <div>
      <h2 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">
        {title}
      </h2>
      <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] mt-2 mb-[28px]">
        {des}{" "}
        <span className="font-semibold text-[#343a40]">{mail ? mail : ""}</span>
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
    content: "Last-content",
    nav: "Reset Password",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];
const Forget = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // For showing messages

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
      {/* <Steps current={current} items={items} /> */}
      <div className="flex justify-between items-start loginBox mt-10 rounded-[8px] pt-5 pb-5 pr-4 max-w-[1099px] xl:mr-[80px] mb-[171px] bg-[var(--secondary)]">
        <div className="akash h-[474px] flex flex-col justify-between pl-[55px] py-[104px] w-[415px]">
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
              <Flex gap="middle">
                <Input.OTP
                  formatter={(str) => str.toUpperCase()}
                  {...sharedProps}
                />
              </Flex>
            </div>
          )}

          {current < steps.length - 1 && (
            <input
              onClick={() => next()}
              className="mt-8 cursor-pointer font-medium text-sm leading-[200%] text-[var(--secondary)] bg-[var(--primary)] py-2 px-8 rounded-[8px] max-w-[172px]"
              type="submit"
              value={steps[current].nav}
            />
          )}
        </div>
        <div className="px-8">
          <img className="w-[475px] h-[408px]" src={ForgetIcon} alt="forget" />
        </div>
      </div>

      <div>
        {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )} */}
        {/* {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )} */}
      </div>
      {/* 

*/}

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
