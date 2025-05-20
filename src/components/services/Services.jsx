import InfoIcon from "@assets/InfoIcon";
import TimeIcon from "@assets/TimeIcon";
import Token from "@assets/Token";
import AssetDoccuments from "@components/services/AssetDoccuments";
import AssetTerm from "@components/services/AssetTerm";
import { Contex } from "@context/User";
import { Button, Input, Select, Tooltip } from "antd";
import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import AssetInformation from "./layers/AssetInformation";
import AssetManager from "./layers/AssetManager";

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
          w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center text-white text-[12px]
          ${isChecked ? "bg-black border-black" : "border-gray-400"}
        `}
      >
        {isChecked && <FaCheck className="text-md" />}
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

const FileUploadForm = ({ index, onChange }) => {
  const handleFileChange = (e) => {
    onChange(index, "file", e.target.files[0]);
  };

  const handleInputChange = (e) => {
    onChange(index, e.target.name, e.target.value);
  };

  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h4 className="mb-2 font-semibold">Upload Section {index + 1}</h4>

      <input
        type="file"
        name="file"
        className="block mb-2"
        onChange={handleFileChange}
      />

      <input
        type="text"
        name="label"
        placeholder="Label (optional)"
        className="block mb-2 p-2 border rounded w-full"
        onChange={handleInputChange}
      />
    </div>
  );
};

const Services = () => {
  const [activeButton, setActiveButton] = useState(null); // Track the active button
  const [services, setServices] = useState([
    { id: 1, name: "Residual Analysis", tokens: 3, hourly: 20, selected: true },
    {
      id: 2,
      name: "Appraisal / Valuation",
      tokens: 2,
      hourly: 15,
      selected: false,
    },
    {
      id: 3,
      name: "Insurance Quotation",
      tokens: 1,
      hourly: 25,
      selected: false,
    },
    {
      id: 4,
      name: "Residual Insurance",
      tokens: 4,
      hourly: 30,
      selected: false,
    },
  ]);
  const [selected, setSelected] = useState({ value: "lucy", label: "Lucy" });
  const [usageTypesellected, setUsageTypeselected] = useState("");

  // Handle checkbox toggle
  const handleCheckboxChange = (id) => {
    setActiveButton(id); // Set the active button on click
    console.log(`Button ${id} clicked`);

    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, selected: !service.selected } : service
    );
    setServices(updatedServices);
  };

  const options = [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ];
  const sourceType = [
    { value: "Dealer", label: "Dealer" },
    { value: "Broker", label: "Broker" },
    { value: "Syndication", label: "Syndication" },
    { value: "Direct", label: "Direct" },
  ];
  const NewUsed = [
    { value: "new", label: "New" },
    { value: "used", label: "Used" },
  ];
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

  const handleChange = (option) => {
    setSelected(option);
    console.log("Selected:", option);
  };
  const handleUsageTypeChange = (option) => {
    setSelected(option);
    setUsageTypeselected(option);
  };
  const [forms, setForms] = useState([{ name: "", email: "" }]);

  let { setAssetTerm, assetTerm } = useContext(Contex);
  // Add a new empty form
  const addForm = () => {
    setForms([...forms, { name: "", email: "" }]);
    setAssetTerm(!assetTerm);
  };

  // Update form data when user types
  const updateFormData = (index, field, value) => {
    const updated = [...forms];
    updated[index][field] = value;
    setForms(updated);
  };

  const [uploads, setUploads] = useState([
    { file: null, label: "", isChecked: false },
  ]);

  const addUploadForm = () => {
    setUploads([...uploads, { file: null, label: "", isChecked: false }]);
  };

  const updateUploadData = (index, field, value) => {
    const updated = [...uploads];
    updated[index][field] = value;
    setUploads(updated);
  };
  let [cancel, setCancel] = useState(false);
  const handleCancelAsset = () => {
    setCancel(!cancel);
  };
  return (
    <div className="mr-10">
      <div className="mt-5">
        <h1 className="font-semibold text-4xl leading-[125%] text-[var(--text-normal)]">
          Create Residual Analysis
        </h1>
        <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] mt-2">
          Dashboard / Services /
          <span className="text-[--text-normal]">Create Residual Analysis</span>
        </p>
      </div>
      <div className="mt-8 pt-3 px-4 pb-4 bg-[var(--secondary] servicecard rounded-[8px]">
        <h2 className="text-[var(--Text-Normal)] text-lg not-italic font-semibold leading-7">
          Project Information
        </h2>
        <p className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]">
          Project Name
        </p>
        <Input
          className="custom-black-input py-2 px-3 mt-2 w-full h-[40px] bg-[var(--background)] border border-[var(--neutral-400)] rounded-[8px] text-sm leading-[171%] text-[#495057]"
          placeholder="Michael Adams"
        />
      </div>
      <div className="pt-3 pb-[33px] pl-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <h3 className="font-semibold text-lg leading-[156%] text-[var(--text-normal)]">
          Select Services
        </h3>
        <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
          Choose which services you want to include in this residual analysis
          project
        </p>
        <div className="table-responsive mt-[25px] mb-[17px]">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-3 font-medium text-xs text-[var(--text-secondary)] border-b border-r border-[var(--neutral)] text-left">
                  Services
                </th>
                <th className="px-6 py-3 font-medium text-xs text-[var(--text-secondary)] border-b border-r border-[var(--neutral)] text-left">
                  <FaCheck />
                </th>
                <th className="px-6 py-3 font-medium text-xs text-[var(--text-secondary)] border-b border-r border-[var(--neutral)] text-left">
                  Tokens
                </th>
                <th className="px-6 py-3 font-medium text-xs text-[var(--text-secondary)] border-b border-r border-[var(--neutral)] text-left">
                  Hourly
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-6 py-2 border-b border-r">
                    <label className="flex items-center font-normal text-sm leading-[171%] text-[#343a40]">{service.name}</label>
                  </td>
                  <td className="px-6 py-2 border-b border-r-2">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(service.id)}
                      id={`checkbox-${service.id}`}
                      className="peer hidden" // Hide the native checkbox
                    />

                    <label
                      htmlFor={`checkbox-${service.id}`}
                      className="flex items-center justify-center cursor-pointer w-5 h-5 rounded-md bg-transparent peer-checked:bg-[var(--primary2)] peer-checked:border-[var(--primary2)] border-2 border-[var(--neutral-400)]"
                    >
                      {service.id === activeButton && (
                        <FaCheck className="text-[#FFF] text-[15px] font-bold" />
                      )}
                    </label>
                  </td>
                  <td className="px-6 py-2 border-b border-r">
                    <Tooltip title="Paid with tokens">
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
                        <Token color="var(--text-secondary)" />
                      </Button>
                    </Tooltip>
                  </td>
                  <td className="px-6 py-2 border-b border-r">
                    <Tooltip title="Paid Hourly">
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
                        <TimeIcon color="var(--text-secondary)" />
                      </Button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pt-3 pb-[33px] px-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <h3 className="font-semibold text-lg leading-[156%] text-[#343a40]">
          Customer Information
        </h3>
        <form className="mt-3 flex gap-x-6 items-center justify-between">
          <div className="w-1/2 flex flex-col gap-y-[2px]">
            <label
              htmlFor=""
              className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
            >
              Lessee No
            </label>
            <Input
              className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
              placeholder="L-1001"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-y-[2px]">
            <label
              htmlFor=""
              className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
            >
              Lessee
            </label>

            <Input
              className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
              placeholder="Apex Digital Solutions"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-y-[2px]">
            <label
              htmlFor=""
              className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
            >
              Cell
            </label>
            <Input
              className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
              placeholder="Michael Adams"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-y-[2px]">
            <label
              htmlFor=""
              className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
            >
              Communication
            </label>
            <Select
              defaultValue="true"
              style={{ height: "40px" }}
              onChange={handleChange}
              className="w-full custom-select"
              dropdownMatchSelectWidth={false}
            >
              {options.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  <div className="flex items-center gap-x-2">
                    <Tooltip title="Is the AMI representatives authorized to communicate directly with the Lessee?">
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
        </form>
      </div>
      <div className="pt-3 pb-[33px] px-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <h3 className="font-semibold text-lg leading-[156%] text-[#343a40]">
          Source Information
        </h3>

        <form className="mt-3 ">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Source No
                </label>
                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="S-1002"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Source Name
                </label>

                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter source name"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Source Type
                </label>
                <Select
                  defaultValue="Dealer"
                  style={{ height: "40px" }}
                  onChange={handleChange}
                  className="w-full custom-select"
                  dropdownMatchSelectWidth={false}
                >
                  {sourceType.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <p>{option.label}</p>
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>{" "}
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Contact
                </label>
                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter contact name"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Title
                </label>

                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter title"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Communication
                </label>
                <Select
                  defaultValue="true"
                  style={{ height: "40px" }}
                  onChange={handleChange}
                  className="w-full custom-select"
                >
                  {options.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <div className="flex items-center gap-x-2">
                        <Tooltip title="Is the AMI representatives authorized to communicate directly with the Lessee?">
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
            </div>{" "}
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Phone Number 1
                </label>
                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter phone number 1"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Phone Number 2
                </label>

                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter phone number 2"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Cell
                </label>
                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter cell number"
                />
              </div>
            </div>{" "}
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Email
                </label>
                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter email address"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Website
                </label>
                <Input
                  className="custom-black-input font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter website"
                />
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </form>
      </div>

      {forms.map((form, index) => (
        <AssetTerm key={index} />
      ))}

      <div className="mt-4 max-w-[183px] ml-auto">
        <Button
          onClick={addForm}
          className="w-full py-2 px-4 flex gap-x-2 items-center rounded-[8px] bg-[var(--neutral] h-10"
        >
          <FaPlus />
          <p className="font-medium text-sm leading-[171%] text-[#343a40]">
            Add Another Asset
          </p>
        </Button>
      </div>

      {uploads.map((upload, index) => (
        <AssetDoccuments
          key={index}
          index={index}
          onChange={updateUploadData}
        />
      ))}

      <div className="mt-4 max-w-[183px] ml-auto">
        <Button
          onClick={addUploadForm}
          className="w-full py-2 px-4 flex gap-x-2 items-center rounded-[8px] bg-[var(--neutral] h-10"
        >
          <FaPlus />
          <p className="font-medium text-sm leading-[171%] text-[#343a40]">
            Add Another Asset
          </p>
        </Button>
      </div>
      <AssetInformation />
      <AssetManager />
      <div className="flex gap-x-2 items-center mt-6 mb-[62px]">
        <button className="bg-[var(--neutral)] font-medium text-sm leading-[171%] text-[var(--text-disabled)] py-3 px-4 rounded-[8px] border border-[var(--neutral)]">
          Submit
        </button>
        <button
          onClick={handleCancelAsset}
          className="py-3 px-4 rounded-[8px] border border-[#343a40] font-medium text-sm leading-[171%] text-[#343a40]"
        >
          Cancel
        </button>
      </div>

      {cancel && (
        <div className="popUp h-[253px] w-[656px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-[var(--pop-up)] text-center py-[58px]">
          <h2 className="font-medium text-2xl leading-[117%] text-[var(--primary2)]">
            Are you sure you want to cancel?
          </h2>
          <p className="font-normal text-base leading-[150%] text-center text-[var(--text-secondary)] mt-4 mb-[26px]">
            All unsaved changes will be lost.
          </p>
          <div className="flex gap-x-2 items-center justify-center">
            <button className="py-2 px-[30px] bg-[var(--primary)] rounded-[5px] font-medium text-sm leading-[171%] text-[var(--secondary)] border border-[var(--primary)]">
              Yes
            </button>
            <button
              onClick={handleCancelAsset}
              className="py-2 px-[30px] bg-[var(--secondary)] rounded-[5px] border border-[var(--primary2)] font-medium text-sm leading-[171%] text-[#343a40]"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
