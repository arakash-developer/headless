import ResidualanalysisIcon from "@/assets/ResidualanalysisIcon";
import HomeIcon from "@assets/HomeIcon";
import ServiceIcon from "@assets/ServiceIcon";
import Avatar from "@public/avatar.png";
import Logo from "@public/logo.png";
import { useEffect, useState } from "react";
import { SiGooglehome } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
const Sidebar = () => {
  let [active, setActive] = useState(false);
  const [key, setKey] = useState("");
  let [islogin, setIsLogin] = useState(false);
  let [userData, setUserData] = useState({});
  const location = useLocation();
  let [iscompanyrestored, setIsCompanyRestored] = useState(false);
  console.log(location.pathname);
  let con = localStorage.setItem("isCompanyRestored", true);
  useEffect(() => {
    let islogins = localStorage.getItem("logintoken");
    if (islogins) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    console.log("aaaaa", islogin);
    const storedObject = JSON.parse(localStorage.getItem("user_data"));
    setUserData(storedObject);
  }, []);
  const isActiveresidenanalysis = location.pathname === "/residualanalysis";

  return (
    <div className="h-full pt-[48px] sidebar">
      <div className="heading w-full flex justify-center items-center">
        <NavLink to="/">
          <img className="cursor-pointer" src={Logo} alt={Logo} />
        </NavLink>
      </div>
      <div className="mt-[111px] w-[230px] h-full flex flex-col justify-between">
        <ul className="flex flex-col gap-y-[18px]">
          {/* <li>
            <NavLink
              className={`text-zinc-950/[0.7] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px] ${
                active ? "active" : ""
              }`}
              activeClassName="active"
              to="/"
            >
              <SiGooglehome />
              <p className="py-1">Create Account</p>
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className={`text-zinc-950/[0.7] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px]`}
              activeClassName="active"
              to="/dashboard"
            >
              <HomeIcon />
              <p className="py-1">Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[var(--primary2)] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px]"
              to="/services"
              activeClassName="active"
            >
              <ServiceIcon />
              <p className="py-1">Services</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-zinc-950/[0.7] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px]"
              to="/residualanalysis"
              activeClassName="active"
            >
              <ResidualanalysisIcon />
              <p className="py-1">Residual Analysis</p>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className="text-zinc-950/[0.7] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px]"
              to="/inviteuser"
              activeClassName="active"
            >
              <FaPlus />
              <p className="py-1">Invite a User</p>
            </NavLink>
          </li> */}
        </ul>
        <div className="mb-[237px] w-full flex justify-center items-center">
          {islogin && (
            <div className="flex w-56 h-[72px] py-3  px-[10px]  items-center gap-3 bg-[var(--primary2)] rounded-[8px] justify-between">
              <div className="flex items-center gap-3">
                <img className="rounded-full" src={Avatar} alt={Avatar} />
                <div className="flex flex-col gap-[2px]">
                  <h3 className="text-[#FFF] text-base not-italic font-medium leading-5 capitalize">
                    {userData?.username}
                  </h3>
                  <p className="text-[#ABABAB] text-xs not-italic font-medium leading-5 capitalize">
                    {userData?.roles[0]}
                  </p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
              >
                <g clipPath="url(#clip0_419_1955)">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
