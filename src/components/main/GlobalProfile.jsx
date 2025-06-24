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
        </div>
        <div className="box_model_shadow bg-[var(--secondary)] rounded-[8px]"></div>
      </div>
    </div>
  );
};

export default GlobalProfile;
