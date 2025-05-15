import AssecDocUpIcon from "@/assets/AssecDocUpIcon";
import { Select, Upload } from "antd";
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
  const handleChange = (option) => {
    setSelected(option);
    console.log("Selected:", option);
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
  return (
    <>
      <div className="pt-3 pb-[33px] px-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <h3 className="font-semibold text-lg leading-[156%] text-[#343a40]">
          Documents
        </h3>

        <form className="mt-3 ">
          <div className="flex flex-col gap-y-4">
            <div className="w-full flex flex-col gap-y-[2px]">
              <label
                htmlFor=""
                className="font-medium text-sm leading-[171%] text-[var(--text-secondary)]"
              >
                Maintenance Records
              </label>
              <Select
                defaultValue="Maintenance Records"
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
              </Select>
            </div>
            <div className="w-full rounded-lg bg-[var(--background)] border border-dashed border-[var(--text-secondary)]">
              <Dragger
                {...uploadProps}
                style={{ padding: "12px 12px 20px 12px" }}
              >
                <p className="ant-upload-drag-icon text-blue-500 text-3xl flex items-center justify-center mb-5">
                  <AssecDocUpIcon />
                </p>
                <p className="font-medium text-sm leading-[171%] text-center text-[#343a40]">
                  <span className=" text-[var(--primary)]">Upload images </span>
                  or drag and drop
                </p>
                <p className="font-normal text-xs leading-[135%] text-center text-[var(--text-secondary)]">
                  PDF, DOCX, XLSX, JPG, PNG up to 10MB
                </p>
              </Dragger>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AssetDoccuments;
