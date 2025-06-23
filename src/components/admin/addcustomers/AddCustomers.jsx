import DownArrow2 from "@/assets/DownArrow2";
import UploadsIcon from "@/assets/UploadsIcon";
import { Input, Select } from "antd";
import { useState } from "react";

const AddCustomers = () => {
  let [formdata, setFormdata] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    extrention: "",
    mobile: "",
    role: "",
    password: "",
  });
  const handleCategoryChange = (option) => {
    setFormdata({ ...formdata, role: option });
  };
  const categoryOptions = [
    { value: "segmentRep", label: "Segment Rep" },
    { value: "banking", label: "Banking/Lessor" },
    { value: "endUser", label: "End User" },
    { value: "oemDealer", label: "OEM/Dealer" },
  ];
  return (
    <>
      <div className="mt-6">
        <h2 className="font-medium text-[24px] leading-[117%] text-var(--primary2)">
          Add Customer
        </h2>
        <p className="mt-2 font-normal text-base leading-[150%] text-[var(--text-secondary)]">
          Dashboard / Manage Customers /{" "}
          <span className="text-[#343a40]">Add Customer</span>
        </p>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center gap-x-2 py-2 px-8  text-[var(--secondary)] cursor-pointer border border-[var(--primary)] rounded-[8px] bg-[var(--primary)]">
          <UploadsIcon />
          <h3 className="font-medium text-sm leading-[200%] text-center">
            Import Customer Data
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 mt-6 mb-4 p-8 bg-[var(--secondary)] rounded-[8px] w-full box_model">
        <div className="flex gap-x-6 items-start">
          <div className="inputbox w-1/2">
            <label
              htmlFor="username"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Username
            </label>
            <Input
              type="text"
              value={formdata.username}
              onChange={(e) =>
                setFormdata({ ...formdata, username: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
          <div className="inputbox w-1/2">
            <label
              htmlFor="email"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Email
            </label>
            <Input
              type="email"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
        </div>
        <div className="flex gap-x-6 items-start">
          <div className="inputbox w-1/2">
            <label
              htmlFor="firstName"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              First Name
            </label>
            <Input
              type="text"
              value={formdata.firstName}
              onChange={(e) =>
                setFormdata({ ...formdata, firstName: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
          <div className="inputbox w-1/2">
            <label
              htmlFor="email"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Last Name
            </label>
            <Input
              type="text"
              value={formdata.lastName}
              onChange={(e) =>
                setFormdata({ ...formdata, lastName: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
        </div>
        <div className="flex gap-x-6 items-start">
          <div className="inputbox w-1/2 flex gap-x-6 items-start">
            <div className="w-1/2">
              <label
                htmlFor="phone"
                className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
              >
                Phone
              </label>
              <Input
                type="number"
                value={formdata.phone}
                onChange={(e) =>
                  setFormdata({ ...formdata, phone: e.target.value })
                }
                className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="extrention"
                className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
              >
                Extrention
              </label>
              <Input
                type="text"
                value={formdata.extrention}
                onChange={(e) =>
                  setFormdata({ ...formdata, extrention: e.target.value })
                }
                className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
              />
            </div>
          </div>
          <div className="inputbox w-1/2">
            <label
              htmlFor="mobile"
              className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
            >
              Mobile
            </label>
            <Input
              type="number"
              value={formdata.mobile}
              onChange={(e) =>
                setFormdata({ ...formdata, mobile: e.target.value })
              }
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
            />
          </div>
        </div>
        <div className="">
          <label className="text-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]">
            Category
          </label>
          <div className="relative cursor-pointer">
            <Select
              // defaultValue={<span style={{ color: "gray" }}>Select One</span>}
              placeholder={<span style={{ color: "#ADB5BD" }}>Select One</span>}
              style={{ height: "40px", color: "red" }}
              onChange={handleCategoryChange}
              value={formdata.role || undefined}
              className="w-full custom-select no-arrow-select bg-[var(--background)]"
              dropdownMatchSelectWidth={false}
            >
              {categoryOptions.map((option) => (
                <Select.Option key={option.value} value={option.value}>
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
    </>
  );
};

export default AddCustomers;
