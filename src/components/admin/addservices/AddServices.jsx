import DownArrow2 from "@/assets/DownArrow2";
import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";

const AddServices = () => {
  const [activeHash, setActiveHash] = useState(
    window.location.hash || "#home1"
  );
  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || "#home1");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  const handleSourceChange = (option) => {
    setSelected(option);
  };
  const sourceOptions = [
    { value: "tech", label: "Tech" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
  ];
  return (
    <div>
      <div className="mt-5">
        <h1 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">
          Add Services
        </h1>
        <p className="mt-2 font-normal text-sm leading-[171%] text-[var(--gray)]">
          Dashboard / Manage Services /
          <span className="font-normal text-sm leading-[171%] text-[var(--primary2)]">
            {" "}
            Add Services
          </span>
        </p>
      </div>

      <div className="mt-[35px]">
        <ul className="flex items-center gap-x-[51px] companyProfile">
          <li>
            <a
              href="#home1"
              onClick={() => setActiveHash("#home1")}
              className={`font-medium text-sm leading-[171%] ${
                activeHash === "#home1"
                  ? "text-[#343a40] border-b-2 border-[var(--primary)]"
                  : "text-[var(--text-disabled)]"
              }`}
            >
              Basic Details
            </a>
          </li>
          <li>
            <a
              href="#home2"
              onClick={() => setActiveHash("#home2")}
              className={`font-medium text-sm leading-[171%] ${
                activeHash === "#home2"
                  ? "text-[#343a40] border-b-2 border-[var(--primary)]"
                  : "text-[var(--text-disabled)]"
              }`}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#home3"
              onClick={() => setActiveHash("#home3")}
              className={`font-medium text-sm leading-[171%] ${
                activeHash === "#home3"
                  ? "text-[#343a40] border-b-2 border-[var(--primary)]"
                  : "text-[var(--text-disabled)]"
              }`}
            >
              Requirements
            </a>
          </li>
        </ul>
        <div
          className="mt-5
        "
        >
          {activeHash === "#home1" && (
            <div className="py-6 pl-8 max-w-[849px] box_model_shadow bg-[var(--secondary)] rounded-[8px]">
              <div className="">
                <h2 className="font-medium text-[24px] leading-[117%] text-[#343a40]">
                  Basic Details
                </h2>
                <p className="font-normal text-sm leading-[171%] text-[var(--gray)]">
                  Basic details about your service
                </p>
              </div>
              <div className="mt-[35px] max-w-[716px] flex flex-col gap-y-5">
                <div className="">
                  <label
                    htmlFor="email"
                    className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
                  >
                    Service Name
                  </label>
                  <Input
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
                  />
                </div>
                <div className="flex gap-x-6 items-start w-full">
                  <div className="w-1/2">
                    <label
                      htmlFor="email"
                      className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
                    >
                      Service Type
                    </label>
                    <Input
                      type="text"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="email"
                      className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
                    >
                      Category
                    </label>
                    <div className="relative cursor-pointer">
                      <Select
                        // defaultValue={<span style={{ color: "gray" }}>Select One</span>}
                        placeholder={
                          <span style={{ color: "#ADB5BD" }}>Select One</span>
                        }
                        style={{ height: "40px", color: "red" }}
                        onChange={handleSourceChange}
                        value={selected} // Make Select controlled
                        className="w-full custom-select no-arrow-select bg-[var(--background)]"
                        dropdownMatchSelectWidth={false}
                      >
                        {sourceOptions.map((option) => (
                          <Select.Option
                            key={option.value}
                            value={option.value}
                          >
                            <p>{option.label}</p>
                          </Select.Option>
                        ))}
                      </Select>
                      <div className="absolute top-1/2 -translate-y-1/2 right-[16px] pointer-events-none">
                        <DownArrow2 color="var(--text-secondary)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="email"
                    className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
                  >
                    Description
                  </label>
                  <TextArea
                    className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)]"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}
          {activeHash === "#home2" && (
            <div>
              {/* Address Content */}
              <p>Address form or details go here.</p>
            </div>
          )}
          {activeHash === "#home3" && (
            <div>
              {/* Key Contacts Content */}
              <p>Key Contacts form or details go here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddServices;
