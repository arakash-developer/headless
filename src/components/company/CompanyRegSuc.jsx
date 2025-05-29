import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanyRegSuc = () => {
  return (
    <>
      <div className="pt-10 pb-[72px] bg-[var(--secondary)] max-w-[1036px] mx-auto h-[348px] mt-[123px]">
        <div className="w-[75px] h-[75px] bg-[var(--primary)] mx-auto  rounded-full flex justify-center items-center">
          <FaCheck className="text-[#FFF] text-[32px] not-italic font-semibold leading-10" />
        </div>
        <div className="text-center mt-[19px] mb-6">
          <h2 className="text-[#000] text-[32px] text-center font-semibold  leading-[125%] text-[var(--primary2)]">
            Company Registration Successful!
          </h2>
          <p className="mt-[10px] text-[#000] text-center text-[16px] font-normal text-base leading-[150%] text-[var(--text-secondary)]">
            Your company has been registered successfully.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Link
            to="/dashboard"
            className="bg-[var(--primary)] py-2 px-8 text-[#fff] text-[16px] text-center rounded-[5px] font-medium text-sm leading-[28px] text-[var(--secondary)] inline-block"
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompanyRegSuc;
