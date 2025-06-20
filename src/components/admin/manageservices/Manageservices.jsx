import DownArrow2 from "@/assets/DownArrow2";
import DownloadIcon from "@/assets/DownloadIcon";
import Draft from "@/assets/Draft";
import EditIcon from "@/assets/EditIcon";
import UploadsIcon from "@/assets/UploadsIcon";
import { Checkbox, Select } from "antd";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomSort from "./layers/CustomSort";
import DownArrowIcon from "@/assets/DownArrowIcon";

const Manageservices = () => {
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

  return (
    <div className="mr-10">
      <div className="mt-5">
        <h1 className="font-semibold text-[32px] leading-[125%] text-[var(--primary2)]">
          Manage Services
        </h1>
        <p className="mt-2 font-normal text-sm leading-[171%] text-[var(--gray)]">
          Dashboard /
          <span className="font-normal text-sm leading-[171%] text-[var(--primary2)]">
            {" "}
            Manage Services
          </span>
        </p>
      </div>
      <div className="flex justify-end my-6">
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2 py-2 px-8 rounded-[8px] bg-[var(--primary)]  text-[var(--secondary)] cursor-pointer border border-[var(--primary)]">
            {" "}
            <FaPlus />
            <Link
              to="/addservices"
              className="inline-block font-medium text-sm leading-[200%] text-center"
            >
              Add Services 
            </Link>
          </div>
          <div className="flex items-center gap-x-2 py-2 px-8  text-[#343a40] cursor-pointer border border-[var(--text-secondary)] rounded-[8px]">
            <UploadsIcon />
            <h3 className="font-medium text-sm leading-[200%] text-center text-[#343a40]">
              Import Services  Data
            </h3>
          </div>
          <div className="flex items-center gap-x-2 py-2 px-8  text-[#343a40] cursor-pointer border border-[var(--text-secondary)] rounded-[8px]">
            <DownloadIcon />
            <h3 className="font-medium text-sm leading-[200%] text-center text-[#343a40]">
              Export Services  Data
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
        <div className="">
          <h2 className="font-medium text-[24px] leading-[117%] text-[var(--primary2)] mb-3">
            Services List
          </h2>
        </div>
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
                  Service Name
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Description
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Status
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
            {assets.map((asset, index) => (
              <tr class={`${asset?.color}`}>
                <td class="p-4 border border-gray-300 border-t-0 border-l-0">
                  <Checkbox
                    className="custom-red-checkbox"
                    onChange={onChange}
                  ></Checkbox>
                </td>
                <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                  {asset.projectId}
                </td>
                <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                  {asset.assetType}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40] capitalize ${asset.status.color} `}
                >
                  {asset.status.value}
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
      <div className="mt-4 mb-[88px]">
        <p className="font-normal text-sm leading-[171%] text-[var(--gray)]">
          1-10 of 120 items
        </p>
      </div>
    </div>
  );
};

export default Manageservices;
