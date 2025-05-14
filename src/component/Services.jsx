import { Button, Input, Select, Tooltip } from "antd";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import InfoIcon from "../assets/InfoIcon";
import TimeIcon from "../assets/TimeIcon";
import Token from "../assets/Token";
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

  const handleChange = (option) => {
    setSelected(option);
    console.log("Selected:", option);
  };

  return (
    <>
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
          className="py-2 px-3 mt-2 w-full h-[40px] bg-[var(--background)] border border-[var(--neutral-400)] rounded-[8px] text-sm leading-[171%] text-[#495057]"
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
                  <td className="px-4 py-2 border-b-2 border-r-2">
                    <label className="flex items-center">{service.name}</label>
                  </td>
                  <td className="px-6 py-2 border-b-2 border-r-2">
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
                  <td className="px-6 py-2 border-b-2 border-r-2">
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
                  <td className="px-6 py-2 border-b-2 border-r-2">
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
              className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
              className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
              className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
              className="w-full"
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
          <div className="">
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Source No
                </label>
                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="w-full"
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
            </div>{" "}
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Lessee No
                </label>
                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="w-full"
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
                  Lessee No
                </label>
                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="w-full"
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
            </div>{" "}
            <div className="flex gap-x-6 items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-[2px]">
                <label
                  htmlFor=""
                  className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
                >
                  Lessee No
                </label>
                <Input
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="w-full"
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Services;
