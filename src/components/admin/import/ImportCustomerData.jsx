import DownloadIcon from "@/assets/DownloadIcon";
import UploadIocn from "@public/upload2.svg";

const ImportCustomerData = () => {
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

      <div className="mt-6">
        <h2 className="font-semibold text-lg leading-[156%] text-[#343a40] text-[18px]">
          Instructions
        </h2>
        <div>
          <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
            1. Please ensure the steps of the form includes the following fields
            in this order:{" "}
            <span className="font-medium text-[#343a40] ml-1 lowercase">
              {" "}
              Username, FullName, Role, Email, PhoneNumber
            </span>{" "}
          </p>
          <p className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
            2. Upload your completed file below
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="font-semibold text-[18px] leading-[156%] text-[#343a40]">
          Use this template to easily import customer data
        </h2>
        <button className="flex items-center gap-2 text-[#343a40]">
          <DownloadIcon />
          <p className="font-medium text-sm leading-[200%] text-[#343a40] underline">
            Download Pre-Mapped Template
          </p>
        </button>
      </div>
      <div className="mt-6 bg-[var(--secondary)] rounded-[8px] w-full box_model flex flex-col items-center justify-start cursor-pointer">
        <img src={UploadIocn} alt={UploadIocn} />
      </div>
    </>
  );
};

export default ImportCustomerData;
