import { InboxOutlined } from "@ant-design/icons";
import { Input, Upload } from "antd";
const { Dragger } = Upload;

const uploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload", // Replace with your real API
  maxCount: 5, // Max 5 files per upload
  accept: ".csv,.xls,.xlsx,.pdf,.docx", // Accept specific file types
  showUploadList: {
    showRemoveIcon: true,
    showDownloadIcon: false,
  },
  headers: {
    Authorization: "Bearer your-token-here", // Optional: if your API requires it
  },
  beforeUpload(file) {
    const isAllowed = file.type.includes("application");
    if (!isAllowed) {
      message.error(`${file.name} is not a valid file type`);
    }
    const isUnder10MB = file.size / 1024 / 1024 < 10;
    if (!isUnder10MB) {
      message.error("File must be smaller than 10MB!");
    }
    return isAllowed && isUnder10MB;
  },
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log("Uploading:", info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const AssetDoccuments = () => {
  return (
    <>
      <div className="pt-3 pb-[33px] px-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <div className="rounded-lg bg-[var(--background)] border border-dashed border-[var(--text-secondary)]">
          <Dragger {...uploadProps} style={{ padding: "12px 12px 20px 12px" }}>
            <p className="ant-upload-drag-icon text-blue-500 text-3xl">
              <InboxOutlined />
            </p>
            <p className="text-base font-semibold">
              Click or drag file to this area to upload
            </p>
            <p className="text-sm text-gray-500">
              Upload multiple files such as .csv, .xls, .pdf or .docx. Max 5
              files. Max size 10MB.
            </p>
          </Dragger>
        </div>

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
                {/* <Select
                  defaultValue="Dealer"
                  style={{ height: "40px" }}
                  onChange={handleChange}
                  className="w-full"
                  dropdownMatchSelectWidth={false}
                >
                  {sourceType.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      <p>{option.label}</p>
                    </Select.Option>
                  ))}
                </Select> */}
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                {/* <Select
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
                </Select> */}
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
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
                  className="font-normal text-sm leading-[171%] text-[var(--text-disabled)] py-2 px-3 border border-[var(--neutral-400)] rounded-[8px]"
                  placeholder="Enter website"
                />
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AssetDoccuments;
