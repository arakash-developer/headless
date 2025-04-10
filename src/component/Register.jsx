import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    console.log("reCAPTCHA token:", token);
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify reCAPTCHA");
      return;
    }

    // Submit your form with captchaToken
    console.log("Submitting form with reCAPTCHA token:", captchaToken);
  };
  return (
    <>
      <div className="max-w-[855px] px-[80px] py-[30px] pt-[62px] bg-[#fff]">
        <div className="">
          <h2 className="text-[#080607] text-center text-[32px] not-italic font-semibold leading-[normal]">
            Create your Account
          </h2>
          <div className="pt-[50px] max-w-[280px] mx-auto flex justify-between items-center relative">
            <div className="bg-[#ED272C] w-[32px] h-[32px] rounded-full border-[1px] border-[#ED272C] relative z-[2]"></div>
            <div className="w-full border-[1px] border-[#ED272C] absolute z-[1]"></div>
            <div className="bg-[#ED272C] w-[22px] h-[22px] rounded-full border-[1px] border-[#ED272C] relative z-[2]"></div>
          </div>
          <div className="pb-[60px] pt-[25px] max-w-[346px] mx-auto flex justify-between items-center ">
            <p className="text-[#080607] text-base not-italic font-semibold leading-[normal]">
              User Info
            </p>
            <p className="text-[#919191] text-base not-italic font-medium leading-[normal]">
              Create Account
            </p>
          </div>

          <form action="" className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor=""
                className="text-[#080607] text-base not-italic font-medium leading-[normal]"
              >
                Invitation Code (Optional)
              </label>
              <input
                type="text"
                className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor=""
                className="text-[#080607] text-base not-italic font-medium leading-[normal]"
              >
                Email
              </label>
              <input
                type="text"
                required
                className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
              />
            </div>

            <div className="flex items-start justify-between gap-x-[41px]">
              <div className="w-1/2 flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-[#080607] text-base not-italic font-medium leading-[normal] "
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-[#080607] text-base not-italic font-medium leading-[normal]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
                />
              </div>
            </div>
            <div className="flex items-start justify-between gap-x-[41px]">
              <div className="w-1/2 flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-[#080607] text-base not-italic font-medium leading-[normal] "
                >
                  Title
                </label>

                <input
                  type="text"
                  required
                  className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-[#080607] text-base not-italic font-medium leading-[normal]"
                >
                  Company
                </label>
                <input
                required
                  type="text"
                  className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
                />
              </div>
            </div>
            <div className="flex items-start justify-between gap-x-[41px]">
              <div className="w-1/2 flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-[#080607] text-base not-italic font-medium leading-[normal] "
                >
                  Phone
                </label>
                <input
                  type="text"
                  required
                  placeholder="(123) 23232323"
                  className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-2">
                <label
                  htmlFor=""
                  className="text-[#080607] text-base not-italic font-medium leading-[normal]"
                >
                  Extension
                </label>
                <input
                  type="text"
                  required
                  placeholder="123"
                  className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="rounded flex w-5 h-5 items-center cursor-pointer"
                required
              />
              <p className="text-[#919191] text-sm not-italic font-normal leading-[normal]">
                I acknowledge that I have read and agree to the Terms of Use and
                Privacy Policy.
              </p>
            </div>

            <ReCAPTCHA
              sitekey="6LexKxIrAAAAAOvHn0uFYdSxW6blTsRqhdz-rOhF"
              onChange={handleCaptchaChange}
            />
            <p className="pt-3 mb-[34px] text-[#919191] text-sm not-italic font-normal leading-[normal]">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            <button className="py-[18px] px-[60px] bg-[#ED272C] rounded-[5px] text-[#FFF] text-base not-italic font-bold leading-[normal] max-w-[192px] continue-button cursor-pointer">Continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
