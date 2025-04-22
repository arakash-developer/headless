import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanyRegSuc = () => {
  return (
    <>
      <div className="p-[60px] bg-[#E9E9E9] max-w-[800px]">
        <div className="w-[75px] h-[75px] bg-[#ED272C] mx-auto mb-10 rounded-full flex justify-center items-center">
          <FaCheck className="text-[#FFF] text-[32px] not-italic font-semibold leading-10" />
        </div>
        <h2 className="text-[#000] text-[32px] not-italic font-bold leading-10 text-center">
        Company Registration Successful!
        </h2>
        <p className="pt-6 pb-10 text-[#000] text-center text-[16px] not-italic font-normal leading-6 max-w-[680px]">
        Your company has been registered successfully.
        </p>
        <div className="w-full flex justify-center">
          <Link
            to="/dashboard"
            className="bg-[#ED272C] py-[18px] px-[60px] text-[#fff] text-[16px] not-italic text-center rounded-[5px]  font-semibold leading-7"
          >
          Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompanyRegSuc;
