import InfoIcon from "@assets/InfoIcon";
import { Button, Input, Select, Tooltip } from "antd";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const CustomRadio = ({ value, current, onChange, label }) => {
  const isChecked = value === current;
  return (
    <label className="flex items-center gap-x-[5px] cursor-pointer select-none">
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        className="peer hidden"
      />
      <div
        className={`
          w-[22px] h-[22px] rounded-[5px] border-2 flex items-center justify-center text-white text-[12px]
          ${isChecked ? "bg-black border-black" : "border-gray-400"}
        `}
      >
        {isChecked && <FaCheck className="text-md" />}
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

const AssetTerm = () => {
  const [usageTypesellected, setUsageTypeselected] = useState("");
  const [selected, setSelected] = useState({ value: "lucy", label: "Lucy" });
  const structureType = [
    { value: "FMV", label: "FMV" },
    { value: "TRAC", label: "TRAC" },
    { value: "Capital", label: "Capital" },
    { value: "$1 Out", label: "$1 Out" },
  ];
  const handleUsageTypeChange = (option) => {
    setSelected(option);
    setUsageTypeselected(option);
  };
  const usageType = [
    { value: "Hours", label: "Hours", description: "Hours per month" },
    { value: "Miles", label: "Miles", description: "Miles per month" },
    { value: "Cycles", label: "Cycles", description: "Cycles per month" },
    {
      value: "Other",
      label: "Other",
      description: "Gallons per month, Units per month, Feet per month, etc",
    },
  ];
  const NewUsed = [
    { value: "new", label: "New" },
    { value: "used", label: "Used" },
  ];
  const handleChange = (option) => {
    setSelected(option);
    console.log("Selected:", option);
  };
  return (
    <>
      <div className="pt-3 pb-[33px] px-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <h3 className="font-semibold text-lg leading-[156%] text-[#343a40]">
          Asset Information
        </h3>

        <form className="mt-3 ">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Subject Asset Type
                </label>
                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Water Truck"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Subject Make
                </label>

                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Volvo"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Subject Model
                </label>

                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="A40G"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Subject Year
                </label>

                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="2025"
                />
              </div>
            </div>
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Usage Type
                </label>
                <Select
                  defaultValue="Hours"
                  style={{ height: "40px" }}
                  onChange={handleUsageTypeChange}
                  className="w-full"
                  dropdownMatchSelectWidth={false}
                >
                  {usageType.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <div className="flex items-center gap-x-2">
                        <Tooltip title={option.description}>
                          <Button
                            style={{
                              backgroundColor: "transparent",
                              color: "",
                              borderRadius: "0",
                              border: "none",
                              padding: "0",
                              fontSize: "16px",
                              transition: "background-color 0.3s ease",
                            }}
                          >
                            <InfoIcon color="var(--text-secondary)" />
                          </Button>
                        </Tooltip>
                        <p>{option.label}</p>
                      </div>
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  {`Subject Current ${usageTypesellected}` ||
                    "Subject Current Hours"}
                </label>

                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder={
                    `Subject Current ${usageTypesellected}` ||
                    "Subject Current Hours"
                  }
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  New/Used
                </label>
                <Select
                  defaultValue="New"
                  style={{ height: "40px" }}
                  onChange={handleChange}
                  className="w-full"
                  dropdownMatchSelectWidth={false}
                >
                  {NewUsed.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <p>{option.label}</p>
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className="w-1/2"></div>
            </div>{" "}
          </div>
        </form>
      </div>

      <div className="pt-3 pb-[33px] px-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <h3 className="font-semibold text-lg leading-[156%] text-[#343a40]">
          Lease Terms
        </h3>

        <form className="mt-3 ">
          <div className="flex justify-between items-start gap-x-6">
            <div className="w-1/2 flex items-start gap-x-6">
              <div className="w-full flex flex-col gap-y-4">
                <div className="flex w-full justify-between items-start gap-x-6">
                  <div className="w-1/2 flex flex-col gap-y-[2px]">
                    <label
                      htmlFor=""
                      className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                    >
                      Application
                    </label>
                    <Input
                      className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                      placeholder="Water Truck"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col gap-y-[2px]">
                    <label
                      htmlFor=""
                      className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                    >
                      Environment
                    </label>

                    <Input
                      className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                      placeholder="Volvo"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-y-[2px]">
                  <label
                    htmlFor=""
                    className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                  >
                    Terms (Months)
                  </label>
                  <div className="flex items-center justify-between">
                    <CustomRadio
                      value="12"
                      current={selected}
                      onChange={setSelected}
                      label="12"
                    />
                    <CustomRadio
                      value="24"
                      current={selected}
                      onChange={setSelected}
                      label="24"
                    />
                    <CustomRadio
                      value="36"
                      current={selected}
                      onChange={setSelected}
                      label="36"
                    />
                    <CustomRadio
                      value="48"
                      current={selected}
                      onChange={setSelected}
                      label="48"
                    />
                    <CustomRadio
                      value="60"
                      current={selected}
                      onChange={setSelected}
                      label="60"
                    />
                    <CustomRadio
                      value="72"
                      current={selected}
                      onChange={setSelected}
                      label="72"
                    />
                    <CustomRadio
                      value="84"
                      current={selected}
                      onChange={setSelected}
                      label="84"
                    />
                    <CustomRadio
                      value="96"
                      current={selected}
                      onChange={setSelected}
                      label="96"
                    />
                    <div className="flex items-center gap-x-2">
                      <CustomRadio
                        value="0"
                        current={selected}
                        onChange={setSelected}
                        label=""
                      />
                      <div className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-1 pl-[10px] pr-[60px] border border-[var(--neutral-400)] rounded-[8px]">
                        Others
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-y-4">
              <div className="w-full flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Proposed HPY / MPY
                </label>
                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="2500"
                />
              </div>
              <div className="w-full flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  New/Used
                </label>
                <Select
                  defaultValue="FMV"
                  style={{ height: "40px" }}
                  onChange={handleChange}
                  className="w-full"
                  dropdownMatchSelectWidth={false}
                >
                  {structureType.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <p>{option.label}</p>
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AssetTerm;
