import DownArrow2 from "@/assets/DownArrow2";
import DownArrowIcon from "@/assets/DownArrowIcon";
import DownArrowicon2 from "@/assets/DownArrowicon2";
import DownloadIcon from "@/assets/DownloadIcon";
import Draft from "@/assets/Draft";
import EditIcon from "@/assets/EditIcon";
import LeftArrow from "@/assets/LeftArrow";
import RightArrowIcon2 from "@/assets/RightArrowIcon2";
import UploadsIcon from "@/assets/UploadsIcon";
import { Checkbox, Select } from "antd";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import CustomSort from "./layers/CustomSort";
import { Link } from "react-router-dom";

const ManageAssets = () => {
  const structureType = [
    { value: "Status All", label: "Status All" },
    { value: "Status All", label: "Status All" },
  ];
  const AssetTypeAll = [
    { value: "Asset Type All", label: "Asset Type All" },
    { value: "Asset Type All2", label: "Asset Type All 2" },
  ];
  const StatusAll = [
    { value: "Status All", label: "Status All" },
    { value: "Status All2", label: "Status All 2" },
  ];
  const ClearFilter = [
    { value: "Clear Filter", label: "Clear Filter" },
    { value: "Clear Filter2", label: "Clear Filter 2" },
  ];
  const usageType = [
    { value: "Add Filter", label: "Add Filter", description: "Add Filter" },
    {
      value: "Add Filter2",
      label: "Add Filter 2",
      description: "Add Filter 2",
    },
    {
      value: "Add Filter3",
      label: "Add Filter 3",
      description: "Add Filter 3",
    },
  ];
  const categoryOptions = [
    { value: "segmentRep", label: "Segment Rep" },
    { value: "banking", label: "Banking/Lessor" },
    { value: "endUser", label: "End User" },
    { value: "oemDealer", label: "OEM/Dealer" },
  ];
  let [category, setCategory] = useState("");
  const handleCategoryChange = (option) => {
    setCategory(option);
  };
  const handleUsageTypeChange = (option) => {
    setSelected(option);
    setUsageTypeselected(option);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const assets = [
    {
      projectId: "P1231",
      assetType: "Water Truck",
      date: "10 May, 2025",
      status: {
        value: "active",
        color: "text-[var(--primary)]",
      },
      health: "-",
      action: {
        value: "-",
        color: "text-[#343a40]",
      },
      color: "bg-[var(--neutral-100)]",
    },
    {
      projectId: "P1001",
      assetType: "Dump Truck",
      date: "18 April, 2025",
      status: {
        value: "active",
        color: "text-[var(--primary)]",
      },
      health: "-",
      action: {
        value: "-",
        color: "text-[#343a40]",
      },
      color: "bg-[var(--secondary)]",
    },
    {
      projectId: "P1120",
      assetType: "Aerial Lift",
      date: "15 April, 2025",
      status: {
        value: "active",
        color: "text-[var(--primary)]",
      },
      health: "Bad",
      action: {
        value: "View Report",
        color: "text-[var(--primary)] underline",
      },
      color: "bg-[var(--neutral-100)]",
    },
    {
      projectId: "P2285",
      assetType: "Bulldozer",
      date: "12 April, 2025",
      status: {
        value: "active",
        color: "text-[var(--primary)]",
      },
      health: "Average",
      action: {
        value: "View Report",
        color: "text-[var(--primary)] underline",
      },
      color: "bg-[var(--secondary)]",
    },
    {
      projectId: "P8030",
      assetType: "Forklift",
      date: "10 April, 2025",
      status: {
        value: "inactive",
        color: "text-[#343a40]",
      },
      health: "-",
      action: {
        value: "-",
        color: "text-[#343a40]",
      },
      color: "bg-[var(--neutral-100)]",
    },
    {
      projectId: "P2202",
      assetType: "Glow Lights",
      date: "10 April, 2025",
      status: {
        value: "active",
        color: "text-[var(--primary)]",
      },
      health: "Good",
      action: {
        value: "View Report",
        color: "text-[var(--primary)] underline",
      },
      color: "bg-[var(--secondary)]",
    },
    {
      projectId: "P5000",
      assetType: "Transformer",
      date: "8 April, 2025",
      status: {
        value: "inactive",
        color: "text-[#343a40]",
      },
      health: "Bad",
      action: {
        value: "View Report",
        color: "text-[var(--primary)] underline",
      },
      color: "bg-[var(--neutral-100)]",
    },
    {
      projectId: "P5002",
      assetType: "Excavator",
      date: "5 April, 2025",
      status: {
        value: "inactive",
        color: "text-[#343a40]",
      },
      health: "Average",
      action: {
        value: "View Report",
        color: "text-[var(--primary)] underline",
      },
      color: "bg-[var(--secondary)]",
    },
    {
      projectId: "P8005",
      assetType: "Forklift",
      date: "5 April, 2025",
      status: {
        value: "active",
        color: "text-[var(--primary)]",
      },
      health: "Average",
      action: {
        value: "View Report",
        color: "text-[var(--primary)] underline",
      },
      color: "bg-[var(--neutral-100)]",
    },
    {
      projectId: "P8328",
      assetType: "Wind Turbine",
      date: "30 March, 2025",
      status: {
        value: "active",
        color: "text-[var(--primary)]",
      },
      health: "Excellent",
      action: {
        value: "View Report",
        color: "text-[var(--primary)] underline",
      },
      color: "bg-[var(--secondary)]",
    },
  ];
  const usersInformation = [
    {
      username: "jdoe92",
      firstName: "John",
      lastName: "Doe",
      role: "Admin",
      email: "jdoe92@gmail.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "emily_smith",
      firstName: "Emily",
      lastName: "Smith",
      role: "Manager",
      email: "emily.smith@outlook.com",
    },
    {
      username: "michaelb85",
      firstName: "Michael",
      lastName: "Brown",
      role: "Asset Manager",
      email: "michaelb85@yahoo.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "sarah.james",
      firstName: "Sarah",
      lastName: "James",
      role: "Financial Officer",
      email: "sarah.james@gmail.com",
    },
    {
      username: "tony.j",
      firstName: "Tony",
      lastName: "Johnson",
      role: "Data Scientist",
      email: "tony.j@gmail.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "claire_lee",
      firstName: "Claire",
      lastName: "Lee",
      role: "Service Coordinator",
      email: "claire.lee@icloud.com",
    },
    {
      username: "ryan_williams",
      firstName: "Ryan",
      lastName: "Williams",
      role: "Analyst",
      email: "ryan.williams@outlook.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "andrew_07",
      firstName: "Andrew",
      lastName: "Davis",
      role: "Analyst",
      email: "andrew_07@hotmail.com",
    },
    {
      username: "mia.adams",
      firstName: "Mia",
      lastName: "Adams",
      role: "Analyst",
      email: "mia.adams@gmail.com",
      color: "bg-[var(--secondary)]",
    },
    {
      username: "jason_22",
      firstName: "Jason",
      lastName: "Taylor",
      role: "User",
      email: "jason_22@yahoo.com",
    },
  ];

  return (
    <div className="mr-10">
      <div className="mt-5">
        <h1 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">
          Manage Customers
        </h1>
        <p className="mt-2 font-normal text-sm leading-[171%] text-[var(--gray)]">
          Dashboard /
          <span className="font-normal text-sm leading-[171%] text-[var(--primary2)]">
            {" "}
            Manage Customers
          </span>
        </p>
      </div>

      <div className="flex justify-end my-6">
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2 py-2 px-8 rounded-[8px] bg-[var(--primary)]  text-[var(--secondary)] cursor-pointer border border-[var(--primary)]">
            {" "}
            <FaPlus />
            <Link to='/manageassets/addassets' className="inline-block font-medium text-sm leading-[200%] text-center">
              Add Assets
            </Link>
          </div>
          <div className="flex items-center gap-x-2 py-2 px-8  text-[#343a40] cursor-pointer border border-[var(--text-secondary)] rounded-[8px]">
            <UploadsIcon />
            <h3 className="font-medium text-sm leading-[200%] text-center text-[#343a40]">
              Import Assets Data
            </h3>
          </div>
          <div className="flex items-center gap-x-2 py-2 px-8  text-[#343a40] cursor-pointer border border-[var(--text-secondary)] rounded-[8px]">
            <DownloadIcon />
            <h3 className="font-medium text-sm leading-[200%] text-center text-[#343a40]">
              Export Assets Data
            </h3>
          </div>
        </div>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <div className=" flex gap-x-3 items-center">
          <CustomSort defaultValue="Status All" option={StatusAll} />
          <CustomSort defaultValue="Asset Type All" option={AssetTypeAll} />
          <div className="min-w-[125px] flex flex-col gap-y-[2px]">
            <div className="relative cursor-pointer">
              <Select
                placeholder={
                  <span className="font-normal text-xs leading-[135%] text-[#343a40]">
                    {categoryOptions[0].label}
                  </span>
                }
                onChange={handleCategoryChange}
                className="w-full custom-select no-arrow-select bg-[var(--background)] !h-8 "
                dropdownMatchSelectWidth={false}
              >
                {categoryOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    <p className="font-normal text-xs leading-[135%] text-[#343a40]">
                      {option.label}
                    </p>
                  </Select.Option>
                ))}
              </Select>
              <div className="absolute top-1/2 -translate-y-1/2 right-[16px] pointer-events-none">
                <DownArrow2 color="var(--text-secondary)" />
              </div>
            </div>
          </div>
          <CustomSort
            defaultValue="Clear Filter"
            color="red"
            option={ClearFilter}
          />
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
            Rows per page:
          </p>
          <div className="p-2 border border-[var(--neutral-400)] rounded-[8px]">
            <div className="flex gap-x-[5px] items-center">
              <p className="font-normal text-xs leading-[135%] text-[var(--primary2)]">
                10
              </p>
              <DownArrowIcon />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 p-4 bg-[var(--secondary)] servicecard rounded-[8px]">
        <table class="table-auto w-full border-collapse">
          <thead>
            <tr class="text-left bg-[var(--secondary)]">
              <th class="p-4 border border-gray-300 border-t-0 border-l-0 font-medium text-xs text-[var(--text-secondary)]">
                <Checkbox
                  className="custom-red-checkbox"
                  onChange={onChange}
                ></Checkbox>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Username
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  First Name
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Last Name
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Role
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  E-Mail
                  <IoFilterOutline className="text-md" />
                </div>
              </th>

              <th class="p-4 border border-gray-300 border-t-0 border-l-0 border-r-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Action
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {usersInformation.map((user, index) => (
              <tr class={`${user?.color}`}>
                <td class="p-4 border border-gray-300 border-t-0 border-l-0">
                  <Checkbox
                    className="custom-red-checkbox"
                    onChange={onChange}
                  ></Checkbox>
                </td>
                <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                  {user?.username}
                </td>
                <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                  {user?.firstName}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40] capitalize ${user?.status} `}
                >
                  {user?.lastName}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40] capitalize ${user?.status} `}
                >
                  {user?.role}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40] capitalize ${user?.status} `}
                >
                  {user?.email}
                </td>
                <td class="p-4 border border-gray-300 border-t-0 border-l-0 border-r-0">
                  <div className="flex items-center gap-x-3">
                    <div className="rounded-[8px] w-10 h-10 flex items-center justify-center border-2 border-[var(--neutral-400)] bg-[var(--secondary)] cursor-pointer">
                      <EditIcon />
                    </div>
                    <div className="rounded-[8px] w-10 h-10 flex items-center justify-center border-2 border-[var(--neutral-400)] bg-[var(--secondary)] cursor-pointer">
                      <Draft />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 mb-[88px] flex justify-between items-center">
        <p className="font-normal text-sm leading-[171%] text-[var(--gray)]">
          1-10 of 120 items
        </p>
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center justify-center h-10 w-10 border border-[var(--neutral)] rounded-[8px] bg-[var(--neutral)] cursor-pointer">
            <p className="font-normal text-sm leading-[171%] text-center text-[#343a40]">
              <LeftArrow className="text-[#ADB5BD]" />
            </p>
          </div>
          <div className="flex items-center justify-center h-10 w-10 border border-[var(--primary2)] rounded-[8px] bg-[var(--secondary)] cursor-pointer">
            <p className="font-normal text-sm leading-[171%] text-center text-[#343a40]">
              1
            </p>
          </div>
          <div className="flex items-center justify-center h-10 w-10 border border-[var(--neutral-400)] rounded-[8px] bg-[var(--secondary)] cursor-pointer">
            <p className="font-normal text-sm leading-[171%] text-center text-[#343a40]">
              2
            </p>
          </div>
          <div className="flex items-center justify-center h-10 w-10 border border-[var(--neutral-400)] rounded-[8px] bg-[var(--secondary)] cursor-pointer">
            <p className="font-normal text-sm leading-[171%] text-center text-[#343a40]">
              3
            </p>
          </div>
          <div className="flex items-center justify-center h-10 w-10 border border-[var(--neutral-400)] rounded-[8px] bg-[var(--secondary)] cursor-pointer">
            <p className="font-normal text-sm leading-[171%] text-center text-[#343a40]">
              4
            </p>
          </div>
          <div className="flex items-center h-10 border border-[var(--neutral-400)] rounded-[8px] bg-[var(--secondary)] cursor-pointer px-3">
            <p className="font-normal text-sm leading-[171%] text-[#343a40] w-[90px]">
              10
            </p>
            <div className="text-[#6F7482]">
              <DownArrowicon2 />
            </div>
          </div>
          <div className="flex items-center justify-center h-10 w-10 border border-[var(--neutral)] rounded-[8px] bg-[var(--neutral)] cursor-pointer">
            <p className="font-normal text-sm leading-[171%] text-center text-[#343a40]">
              <RightArrowIcon2 className="text-[var(--text-normal)]" />
            </p>
          </div>
          <div className="font-normal text-sm leading-[171%] text-center text-[#343a40]">
            /Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAssets;
