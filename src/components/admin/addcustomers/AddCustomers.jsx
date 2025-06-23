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
      <div className="mt-6 mb-4 p-8 bg-[var(--secondary)] rounded-[8px]">
        <label
          htmlFor="email"
          className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
        >
          Username
        </label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
        />
      </div>
    </>
  );
};

export default AddCustomers;
