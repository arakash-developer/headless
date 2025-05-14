import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div className="h-full overflow-hidden">
      <div className="flex items-start h-full">
        <Sidebar />
        <div className="h-full w-full">
          <Navbar />
          <div className="overflow-scroll h-[90%] bg-[var(--background)]">
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
