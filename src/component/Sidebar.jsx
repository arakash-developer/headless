import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import Homeicon from "../../public/icons/home.svg";
import { SiGooglechrome, SiGooglehome } from "react-icons/si";
import { FaPlus } from "react-icons/fa";

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
    <div className="mt-[38px] w-72 h-full bg-[#fff] sidebar">
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
    </div>
  );
};

export default Sidebar;
