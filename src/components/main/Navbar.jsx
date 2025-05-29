import DownArrow from "@/assets/DownArrow";
import NotifyIcon from "@/assets/NotifyIcon";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [routeName, setRouteName] = useState("");
  let token = localStorage.getItem("logintoken");
  let userData = JSON.parse(localStorage.getItem("user_data"));

  useEffect(() => {
    // Get the first part of the path after "/"
    const currentRoute = window.location.pathname.split("/")[1];
    setRouteName(currentRoute);
  }, [location.pathname]);
  return (
    <>
      <nav className="mt-[32px] mb-6 mr-[80px] flex justify-between items-center">
        {token && (
          <>
            <div className="ml-8 flex items-center relative">
              <Input
                type="text"
                // onChange={onChange}
                // onBlur={onBlur}
                placeholder="Search"
                className="custom-black-input w-[372px] h-[40px] py-2 px-[40px] bg-[var(--secondary)] border border-[var(--neutral-400)] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer text-[#919191] font-normal text-sm leading-[171%] text-[var(--text-disabled)]"
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
                      clipRule="evenodd"
                      d="M9.74991 12.7796C12.6606 11.5427 14.0174 8.1805 12.7804 5.26997C11.5434 2.35945 8.18098 1.00274 5.27028 2.23968C2.35958 3.47663 1.0028 6.83882 2.23982 9.74934C3.47683 12.6599 6.83921 14.0166 9.74991 12.7796Z"
                      stroke="#919191"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5586 11.5581L15.9999 15.9998"
                      stroke="#919191"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex gap-x-[25px] items-center">
              <NotifyIcon />
              <div className="flex gap-x-1 items-center">
                <div className="w-[35px] h-[35px] overflow-hidden rounded-full">
                  <img src={userData?.avatar_url} alt="Avatar" />
                </div>
                <DownArrow />
              </div>
            </div>
          </>
        )}
        {!token && (
          <div
            className="flex justify-end w-full
           items-center"
          >
            <Link to={routeName === "" ? "/signup" : "/"} className="">
              <p className="font-normal text-base leading-[150%] text-right text-var(--primary2)">
                {routeName === 'forget' ? 'Remember Password?': routeName === "" ? "New to 4AMI?" : "Already have an account?"}

                <span className="ml-1 not-italic font-semibold text-lg leading-[156%] text-[var(--primary)]">
                  {routeName === 'forget'? "Log In": routeName === "" ? "Sign Up" : "Log In"}
                </span>
              </p>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
