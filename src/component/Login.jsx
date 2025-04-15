import React from "react";
import Loginbanner from "../../public/loginbanner.png";

const Login = () => {
  return (
    <div className="h-full">
      <div className="loginBox bg-[#fff] max-w-[1036px] mr-[64px] mb-[171px] rounded-[5px] px-[125px] py-5 grid grid-cols-2 gap-[80px] h-full items-center">
        <div className="max-w-[380px]">
          <h3 className="text-[#080607] text-4xl not-italic font-bold leading-10">
            Log In
          </h3>
          <p className="text-[#919191] text-base not-italic font-normal leading-6 mt-3 mb-[28px]">
            Good to see you again! Enter your details to continue using the
            dashboard
          </p>
          <form action="" className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor=""
                className="text-[#080607] text-base not-italic font-medium leading-[normal]"
              >
                Email
              </label>
              <input
                type="text"
                // onChange={(e) => setUserName(e.target.value)}
                className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor=""
                className="text-[#080607] text-base not-italic font-medium leading-[normal]"
              >
                Password
              </label>
              <input
                type="text"
                // onChange={(e) => setUserName(e.target.value)}
                className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
              />
            </div>
            {/* Terms Checkbox */}
            <div className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 rounded"
                // checked={agree}
                // onChange={(e) => setAgree(e.target.checked)}
              />
              <p className="text-[#919191] text-sm font-normal">
                Remember Password
              </p>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="py-[18px] px-[60px] bg-[#ED272C] rounded-[5px] text-white text-base font-bold max-w-[192px] cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="">
          <img className="bg-cover rounded-[5px]" src={Loginbanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
