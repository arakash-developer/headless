import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import Homeicon from "../../public/icons/home.svg";
import { SiGooglechrome, SiGooglehome } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import Avatar from "../../public/avatar.png";
const Sidebar = () => {
  let [active, setActive] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    if (
      location.pathname == "/register2" &&
      location.pathname == "/regsuccess"
    ) {
      setActive(true);
    }
  }, []);
  return (
    <div className="mt-[38px] w-72 h-full !bg-[red] sidebar flex flex-col justify-between">
      <ul className="flex flex-col gap-y-[18px]">
        <li>
          <NavLink
            className={`text-zinc-950/[0.7] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px] ${
              active ? "active" : ""
            }`}
            to="/"
          >
            <SiGooglehome />
            <p className="py-1">Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-zinc-950/[0.7] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px]"
            to="/inviteuser"
          >
            <FaPlus />
            <p className="py-1">Invite a User</p>
          </NavLink>
        </li>
      </ul>
      <div className="mb-[195px] w-full flex justify-center items-center">
        <div className="flex w-56 h-[72px] py-3  px-[10px]  items-center gap-3 bg-[#080607] rounded-[8px] justify-between">
          <img className="rounded-full" src={Avatar} alt={Avatar} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
          >
            <g clip-path="url(#clip0_419_1955)">
              <path
                d="M26.1066 4.39339C23.2735 1.56029 19.5066 0 15.5 0C11.4932 0 7.72649 1.56029 4.89339 4.39339C2.06029 7.22649 0.5 10.9934 0.5 15C0.5 19.0068 2.06029 22.7735 4.89339 25.6066C7.72649 28.4397 11.4932 30 15.5 30C19.5068 30 23.2735 28.4397 26.1066 25.6066C28.9397 22.7735 30.5 19.0068 30.5 15C30.5 10.9934 28.9397 7.22649 26.1066 4.39339ZM14.6211 5.58609C14.6211 5.10063 15.0145 4.70718 15.5 4.70718C15.9855 4.70718 16.3789 5.10063 16.3789 5.58609V12.1758C16.3789 12.6613 15.9855 13.0547 15.5 13.0547C15.0145 13.0547 14.6211 12.6613 14.6211 12.1758V5.58609ZM21.114 21.5554C19.5661 23.1033 17.5329 23.8772 15.4998 23.8772C13.4668 23.8772 11.4337 23.1033 9.88576 21.5554C6.79036 18.46 6.79036 13.423 9.88576 10.3274C10.2291 9.98428 10.7855 9.98428 11.1288 10.3274C11.4721 10.6705 11.4721 11.2271 11.1288 11.5704C8.71869 13.9806 8.71869 17.9022 11.1288 20.3126C12.3339 21.5174 13.9171 22.1201 15.4998 22.1201C17.0829 22.1203 18.6657 21.5179 19.871 20.3126C22.2811 17.9022 22.2813 13.9806 19.871 11.5704C19.5279 11.2271 19.5279 10.6707 19.8712 10.3274C20.2143 9.98405 20.7707 9.98405 21.114 10.3274C24.2096 13.423 24.2096 18.46 21.114 21.5554Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_419_1955">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
