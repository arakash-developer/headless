import { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Contex } from "@context/User";
import Sidebar from "@components/main/Sidebar";
import Navbar from "@components/main/Navbar";

const Root = () => {
  const { assetTerm } = useContext(Contex);
  const containerRef = useRef(null);
  const isFirstRender = useRef(true); // Track initial render

  // useEffect(() => {
  //   // Skip the effect on the initial mount
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   // Scroll to bottom when assetTerm changes
  //   if (containerRef.current) {
  //     containerRef.current.scrollTo({
  //       top: containerRef.current.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [assetTerm]); // ✅ Only run when assetTerm changes

  return (
    <div className="h-full overflow-hidden">
      <div className="flex items-start h-full">
        <Sidebar />
        <div className="h-full w-full">
          <Navbar />
          <div
            className="overflow-y-scroll h-[90%] bg-[var(--background)]"
            ref={containerRef}
          >
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
