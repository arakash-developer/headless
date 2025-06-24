const GlobalProfile = () => {
  let userData = JSON.parse(localStorage.getItem("user_data"));
  return (
    <div>
      <div className="mt-5">
        <h2 className="font-medium text-[24px] leading-[117%] text-[#343a40]">
          Profile
        </h2>
        <p className="font-normal text-base leading-[150%] text-[var(--gray)]">
          Dashboard / <span className="ml-1 text-[#343a40]">Profile</span>{" "}
        </p>
      </div>
      <div className="mt-[35px] mb-[173px] flex gap-x-5 items-start ">
        <div className="py-8 px-5 box_model_shadow bg-[var(--secondary)] rounded-[8px] min-w-[372px]">
          <div className="flex justify-center">
            <div className="h-[180px] w-[180px] rounded-full overflow-hidden flex  justify-center">
              <img
                className="w-full h-full"
                src={userData?.avatar_url}
                alt="Avatar"
              />
            </div>
          </div>
          <p className="mt-4 font-medium text-sm leading-[171%] text-center text-[#343a40]">
            Your Profile is 80% Complete
          </p>
          <div className="mt-2 mb-5 flex justify-center items-center">
            <div className=" rounded-[15px] bg-[var(--neutral)] w-[278px] h-[8px] relative">
              <div className="absolute top-0 left-0 h-full w-[80%] bg-[var(--primary)] rounded-[15px]"></div>
            </div>
          </div>
          <div className="text-center">
            <h2
              className="font-semibold text-[18px] leading-[156%] text-center text-[#343a40] 
            "
            >
              {userData?.first_name} {userData?.last_name}
            </h2>
            <p
              className="my-1 font-normal text-sm leading-[171%] text-center text-[var(--text-secondary)]
            "
            >
              {userData?.email}
            </p>
            <p className="font-normal text-sm leading-[171%] text-center text-[var(--text-secondary)]">
              Senior Leasing Manager
            </p>
            <p className="font-normal text-sm leading-[171%] text-center text-[var(--text-secondary)] my-1">
              Evergreen Equipment Leasing
            </p>
            <p className="font-normal text-sm leading-[171%] text-center text-[var(--text-secondary)]">
              Lessor
            </p>
            <p className="font-normal text-sm leading-[171%] text-[var(--primary2)] pb-5 border-b border-[var(--neutral)]">
              www.evergreenequipmentleasing.com
            </p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
                Username:
              </p>
              <p className="font-medium text-sm leading-[171%] text-[#343a40]">
                {userData?.username}
              </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
                Member Since:
              </p>
              <p className="font-medium text-sm leading-[171%] text-[#343a40]">
                28 April, 2025
              </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
                Membership:
              </p>
              <p className="font-medium text-sm leading-[171%] text-[#343a40]">
                Standard Plan
              </p>
            </div>
          </div>
        </div>
        <div className="box_model_shadow bg-[var(--secondary)] rounded-[8px] w-[702px] p-8">
          <div className="mb-8">
            <h2 className="font-medium text-[24px] leading-[117%] text-[var(--primary2)]">
              Personal Information
            </h2>
            <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)] mt-2">
              Update your personal details to keep your profile accurate and up
              to dates
            </p>
          </div>
          <div className="mb-6">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalProfile;
