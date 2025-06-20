import Draft from "@/assets/Draft";
import { Button, Checkbox, Input, Select, Tooltip } from "antd";
import { IoFilterOutline } from "react-icons/io5";
import FilterIcon from "./../../assets/FilterIcon";
import CustomSort from "./layers/CustomSort";

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
        value: "Pending",
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
      projectId: "P1001",
      assetType: "Dump Truck",
      date: "18 April, 2025",
      status: {
        value: "Pending",
        color: "text-[#343a40]",
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
        value: "Completed",
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
        value: "Completed",
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
        value: "Pending",
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
        value: "Completed",
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
        value: "Completed",
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
      projectId: "P5002",
      assetType: "Excavator",
      date: "5 April, 2025",
      status: {
        value: "Completed",
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
      projectId: "P8005",
      assetType: "Forklift",
      date: "5 April, 2025",
      status: {
        value: "Completed",
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
        value: "Completed",
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

      <div className="my-6 flex items-center relative">
        <Input
          type="text"
          // onChange={onChange}
          // onBlur={onBlur}
          placeholder="Search"
          className="custom-black-input w-[320px] h-[40px] py-2 px-[40px] bg-[var(--secondary)] border border-[var(--neutral-400)] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer text-[#919191] font-normal text-sm leading-[171%] text-[var(--text-disabled)]"
        />
        <div className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.74991 12.7796C12.6606 11.5427 14.0174 8.1805 12.7804 5.26997C11.5434 2.35945 8.18098 1.00274 5.27028 2.23968C2.35958 3.47663 1.0028 6.83882 2.23982 9.74934C3.47683 12.6599 6.83921 14.0166 9.74991 12.7796Z"
                stroke="#919191"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5586 11.5581L15.9999 15.9998"
                stroke="#919191"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="mb-4 flex gap-x-3 items-center">
        <CustomSort defaultValue="Status All" option={StatusAll} />
        <CustomSort defaultValue="Asset Type All" option={AssetTypeAll} />

        <div className="min-w-[125px] flex flex-col gap-y-[2px]">
          <Select
            defaultValue="Add Filter"
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
                        borderRadius: "0",
                        border: "none",
                        padding: "0",
                        fontSize: "16px",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      <div className="text-[var(--primary)]">
                        <FilterIcon />
                      </div>
                    </Button>
                  </Tooltip>
                  <p className="font-normal text-xs leading-[135%] text-[var(--primary)]">
                    {option.label}
                  </p>
                </div>
              </Select.Option>
            ))}
          </Select>
        </div>
        <CustomSort
          defaultValue="Clear Filter"
          color="red"
          option={ClearFilter}
        />
      </div>
      <div class="mt-8 p-4 bg-[var(--secondary)] servicecard rounded-[8px]">
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
                  Project ID
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Asset Type
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Date
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Status
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Health
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0">
                <div className="flex justify-between items-center font-medium text-xs text-[var(--text-secondary)]">
                  Action
                  <IoFilterOutline className="text-md" />
                </div>
              </th>
              <th class="p-4 border border-gray-300 border-t-0 border-l-0 border-r-0 font-medium text-xs text-[var(--text-secondary)]">
                -
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
                <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                  {asset.date}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] ${asset?.status?.color}`}
                >
                  {asset?.status?.value}
                </td>
                <td class="p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] text-[#343a40]">
                  {asset.health}
                </td>
                <td
                  class={`p-4 ml-2 border border-gray-300 border-t-0 border-l-0 font-normal text-sm leading-[171%] ${asset?.action?.color}`}
                >
                  {asset?.action?.value}
                </td>
                <td class="p-4 border border-gray-300 border-t-0 border-l-0 border-r-0">
                  <div className="rounded-[8px] w-10 h-10 flex items-center justify-center border-2 border-[var(--neutral-400)] bg-[var(--secondary)] cursor-pointer">
                    <Draft />
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
