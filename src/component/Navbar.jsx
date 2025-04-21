import React from "react"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-[48px] navbar px-[50px] flex justify-between items-center navbar">
      <div className="flex items-center relative">
        <input
          type="text"
          // onChange={onChange}
          // onBlur={onBlur}
          placeholder="Search"
          className="w-[372px] h-[50px] py-3 px-[40px] bg-[#F4F5F9] border border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer text-[#919191]"
        />
        <div className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M9.74991 12.7796C12.6606 11.5427 14.0174 8.1805 12.7804 5.26997C11.5434 2.35945 8.18098 1.00274 5.27028 2.23968C2.35958 3.47663 1.0028 6.83882 2.23982 9.74934C3.47683 12.6599 6.83921 14.0166 9.74991 12.7796Z"
                stroke="#919191"
                strokeWidth="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5586 11.5581L15.9999 15.9998"
                stroke="#919191"
                strokeWidth="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <Link to="/login" className="flex-shrink-0">
        <p className="text-[#000] text-base not-italic font-normal leading-6">
          Already have an account?{" "}
          <span className="text-[#ED272C] text-base not-italic font-medium leading-6">
            Log In
          </span>
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
