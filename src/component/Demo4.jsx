import React, { useState } from "react";

const ServicesTable = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Residual Analysis", tokens: 3, hourly: 20, selected: true },
    { id: 2, name: "Appraisal / Valuation", tokens: 2, hourly: 15, selected: false },
    { id: 3, name: "Insurance Quotation", tokens: 1, hourly: 25, selected: false },
    { id: 4, name: "Residual Insurance", tokens: 4, hourly: 30, selected: false }
  ]);

  // Handle checkbox toggle
  const handleCheckboxChange = (id) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, selected: !service.selected } : service
    );
    setServices(updatedServices);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Select Services</h2>
      <p className="mb-4">Choose which services you want to include in this residual analysis project</p>
      
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-t-2 border-b-2 border-r-2 text-left bg-gray-100">Services</th>
            <th className="px-4 py-2 border-t-2 border-b-2 border-r-2 text-left bg-gray-100">Tokens</th>
            <th className="px-4 py-2 border-t-2 border-b-2 text-left bg-gray-100">Hourly</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b-2 border-r-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={service.selected}
                    onChange={() => handleCheckboxChange(service.id)}
                    className="mr-2"
                  />
                  {service.name}
                </label>
              </td>
              <td className="px-4 py-2 border-b-2 border-r-2">{service.selected ? service.tokens : 0}</td>
              <td className="px-4 py-2 border-b-2">{service.selected ? service.hourly : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
