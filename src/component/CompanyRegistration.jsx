import React from "react";
import DownArrow from "../../public/icons/down.svg";
const FormField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  wrapperClass = "flex flex-col gap-y-2",
}) => (
  <div className={wrapperClass}>
    <label className="text-[#080607] text-base font-medium">{label}</label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      //   onChange={(e) => onChange(e.target.value)}
      className="w-full h-[50px] py-3 px-4 bg-[#F4F5F9] border border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer"
    />
  </div>
);

const CompanyRegistration = () => {
  return (
    <div>
      <h2 className="text-[#080607] text-[28px] leading-8 not-italic font-semibold">
        Register Your Company
      </h2>
      <p className="text-[#919191] text-base not-italic font-normal leading-6 mt-3 mb-6">
        Add your company details to start using your dashboard and invite team
        members
      </p>
      <div className="max-w-[793px] py-[43px] px-[50px] bg-[#FFF] rounded-[5px] companyregform">
        <form className="flex flex-col gap-y-6">
          {/* Invitation Code */}
          <FormField
            label="Company Name"
            type="text"
            // onChange={(val) => setFormData({ ...formData, code: val })}
          />

          {/* Email */}
          <FormField
            label="Business Email"
            type="email"
            required
            // value={formData.email || invitation.email}
            // onChange={(val) => setFormData({ ...formData, email: val })}
          />

          <div className="flex gap-x-[41px]">
            <FormField
              label="Phone"
              //   value={formData.firstName || invitation.firstName}
              //   onChange={(val) => setFormData({ ...formData, firstName: val })}
              wrapperClass="w-1/2"
            />
            <FormField
              label="Extension"
              //   value={formData.lastName || invitation.lastName}
              //   onChange={(val) => setFormData({ ...formData, lastName: val })}
              wrapperClass="w-1/2"
            />
          </div>
          {/* Company Address */}
          <FormField
            label="Company Address"
            type="text"
            required
            // value={formData.email || invitation.email}
            // onChange={(val) => setFormData({ ...formData, email: val })}
          />
          <div className="flex gap-x-[42px]">
            {/* Source */}
            <div className="w-full">
              <label className="text-[#080607] text-base font-medium">
                Company Size
              </label>
              <div className="relative cursor-pointer">
                <select
                  //   value={formData.source}
                  //   onChange={(e) =>
                  //     setFormData({ ...formData, source: e.target.value })
                  //   }
                  className="w-full h-[50px] py-3 px-4 border bg-[#F4F5F9] border-[#DBDCDE] rounded-[8px] appearance-none"
                >
                  <option value="">Select One</option>
                  <option value="Referral">Referral</option>
                  <option value="Event">Event</option>
                  <option value="Social">Social</option>
                </select>
                <img className="absolute top-1/2 -translate-y-1/2 right-[16px]" src={DownArrow} alt="" />
              </div>
            </div>
            {/* Industry */}
            <div className="w-full">
              <label className="text-[#080607] text-base font-medium">
                Industry
              </label>
              <select
                //   value={formData.source}
                //   onChange={(e) =>
                //     setFormData({ ...formData, source: e.target.value })
                //   }
                className="w-full h-[50px] py-3 px-4 border bg-[#F4F5F9] border-[#DBDCDE] rounded-[8px] appearance-none"
              >
                <option value="">Select One</option>
                <option value="Referral">Referral</option>
                <option value="Event">Event</option>
                <option value="Social">Social</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegistration;
