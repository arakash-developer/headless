import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <div className="flex items-start h-full">
        <Sidebar />
        <div className="bg-[#DBDCDE] h-full w-full">
          <div className="overflow-scroll h-[90%]">
            <div className="pl-[50px] pt-[35px]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Root;
