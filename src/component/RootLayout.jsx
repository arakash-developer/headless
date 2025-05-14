import { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Contex } from "../context/User";

const Root = () => {
  let {assetTerm}=useContext(Contex)
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  },[assetTerm]);
  return (
    <div className="h-full overflow-hidden">
      <div className="flex items-start h-full">
        <Sidebar />
        <div className="h-full w-full">
          <Navbar />
          <div className="overflow-scroll h-[90%] bg-[var(--background)]" ref={containerRef}>
            <div className="px-[50px] pt-[35px]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Root;
