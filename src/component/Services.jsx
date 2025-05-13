import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
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

  // Handle checkbox toggle
  const handleCheckboxChange = (id) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, selected: !service.selected } : service
    );
    setServices(updatedServices);
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
        <input
          type="text"
          name=""
          placeholder="Burleson Sand Volvo A40G Water Truck"
          className="py-2 px-3 mt-2 w-full h-[40px] bg-[var(--background)] border border-[var(--neutral-400)] rounded-[8px] text-sm leading-[171%] text-[#495057]"
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
                  <td className="px-4 py-2 border-b-2 border-r-2">
                    <input
                      type="checkbox"
                      checked={service.selected}
                      onChange={() => handleCheckboxChange(service.id)}
                      className="mr-2"
                    />
                  </td>
                  <td className="px-4 py-2 border-b-2 border-r-2">
                    {service.selected ? service.tokens : 0}
                  </td>
                  <td className="px-4 py-2 border-b-2">
                    {service.selected ? service.hourly : 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Services;
