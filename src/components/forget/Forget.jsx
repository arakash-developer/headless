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
    <div className="mt-10 bg-[var(--background)] rounded-[8px]">
      ssss
    </div>





      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="capitalize" type="text" name="to_name" placeholder="NAME" required />
        
        <label>Email</label>
        <input type="email" name="email" required />
        
        <label>Passcode</label>
        <input type="text" name="passcode" required />
        
        <input className="cursor-pointer" type="submit" value="Send" />
      </form>

      {status && (
        <p className={`mt-4 ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
          {status}
        </p>
      )}
    </>
  );
};

export default Forget;
