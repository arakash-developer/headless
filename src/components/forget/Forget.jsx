import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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

  return (
    <>
      <div className="loginBox mt-10 rounded-[8px] pt-5 pb-5 pr-4 max-w-[1099px] xl:mr-[80px] mb-[171px]">
        <div className="pl-[55px] py-[104px]">
          <h2 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">Forgot Password?</h2>
          <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] max-w-[380px] mt-2 mb-[28px]">
            Enter your registered email address to receive a password reset link
          </p>
        </div>
      </div>

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
