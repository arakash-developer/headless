import { Input } from "antd";

const AssetInformation = () => {
  return (
    <>
      <div className="pt-3 pb-[33px] px-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <h3 className="font-semibold text-lg leading-[156%] text-[#343a40]">
          Asset Location Information
        </h3>

        <form className="mt-3 ">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Asset Location 1
                </label>
                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter asset location 1"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="custom-black-input font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Asset Location 2
                </label>

                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter asset location 2"
                />
              </div>
            </div>{" "}
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  City
                </label>
                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter city name"
                />
              </div>
              <div className="w-1/2 flex items-start gap-x-6 justify-between">
                <div className="w-1/2 flex flex-col gap-y-[2px]">
                  <label
                    htmlFor=""
                    className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                  >
                    State
                  </label>

                  <Input
                    className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                    placeholder="Enter state name"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-y-[2px]">
                  <label
                    htmlFor=""
                    className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                  >
                    ZIP
                  </label>

                  <Input
                    className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                    placeholder="Enter ZIP code"
                  />
                </div>
              </div>
            </div>{" "}
          </div>
        </form>
      </div>
    </>
  );
};

export default AssetInformation;
