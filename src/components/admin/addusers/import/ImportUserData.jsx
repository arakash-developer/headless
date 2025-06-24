import DownloadIcon from "@/assets/DownloadIcon";
import ManualHand from "@/assets/ManualHand";
import UploadsIcon from "@/assets/UploadsIcon";
import { LoadingOutlined } from "@ant-design/icons";
import UploadIocn from "@public/upload2.svg";
import { Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const ImportUserData = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileInfo, setFileInfo] = useState(null);
  const [uploadRequest, setUploadRequest] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState(null);
  const navigate = useNavigate();

  const validateFile = (file) => {
    const isAllowedType =
      file.type === "application/json" ||
      file.type === "text/csv" ||
      file.name.endsWith(".json") ||
      file.name.endsWith(".csv");
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isAllowedType) {
      return {
        valid: false,
        error: "The File Type is Wrong! Please upload JSON or CSV files",
      };
    }
    if (!isLt5M) {
      return { valid: false, error: "File size exceeds 5MB limit" };
    }
    return { valid: true };
  };

  const beforeUpload = (file) => {
    const validation = validateFile(file);
    if (!validation.valid) {
      setFileError({ file, message: validation.error });
      setFileInfo({
        name: file.name,
        size: (file.size / 1024).toFixed(0),
      });
      return Upload.LIST_IGNORE;
    }
    setFileError(null);
    return true;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setUploading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setUploading(false);
        setFileInfo(url);
      });
    }
  };

  const customRequest = ({ file, onSuccess, onError, onProgress }) => {
    setUploading(true);
    setFileInfo({
      name: file.name,
      size: (file.size / 1024).toFixed(0), // KB
      type: file.type,
      thumb: URL.createObjectURL(file),
    });

    // Simulate upload with progress
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.random() * 20;
      if (percent >= 100) {
        percent = 100;
        clearInterval(interval);
        setTimeout(() => {
          setUploading(false);
          setProgress(100);
          onSuccess("ok");
        }, 500);
      }
      setProgress(percent);
      onProgress({ percent });
    }, 400);

    setUploadRequest(() => () => {
      clearInterval(interval);
      setUploading(false);
      setProgress(0);
      setFileInfo(null);
    });
  };

  const handleRemove = () => {
    if (uploadRequest) uploadRequest();
    setFileInfo(null);
    setProgress(0);
    setUploading(false);
    setFileError(null);
  };

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        navigate("/managecustomers/iportcustomerdata/importview");
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [progress, navigate]);

  // Drag event handlers
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    // Handle file drop directly on the box_model_shadow div
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      // Only handle the first file
      const file = files[0];
      // Validate file before upload
      const validation = validateFile(file);
      if (!validation.valid) {
        setFileError({ file, message: validation.error });
        setFileInfo({
          name: file.name,
          size: (file.size / 1024).toFixed(0),
        });
        return;
      }
      setFileError(null);
      // Manually trigger upload
      customRequest({
        file,
        onSuccess: () => {},
        onError: () => {},
        onProgress: () => {},
      });
    }
  };

  const uploadButton = (
    <div className="flex flex-col items-center justify-center">
      {uploading ? <LoadingOutlined /> : <img src={UploadIocn} alt="upload" />}
      <div className="mt-2 font-medium text-sm text-[#343a40]">Upload</div>
    </div>
  );

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
      <div
        className={`mt-6 mb-[58px] w-full  flex flex-col items-center justify-center cursor-pointer upload-box h-[564px] transition-all box_model_shadow
          ${
            dragActive
              ? "bg-[#FFEBEC] border-2 border-dashed border-[var(--primary2)]"
              : "bg-[var(--secondary)] border-2 border-dashed border-transparent"
          }
          rounded-[12px] relative`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ borderStyle: "dashed", borderWidth: 1 }}
      >
        <Upload
          name="file"
          showUploadList={false}
          customRequest={customRequest}
          beforeUpload={beforeUpload}
          accept=".json,.csv"
          className="w-full flex flex-col items-center"
          disabled={uploading}
          style={{ width: "100%" }}
        >
          {fileError && (
            <div className="flex flex-col items-center justify-center py-8 w-full">
              {/* File info box with red border and background */}
              <div className="w-[340px] bg-[] p-8 border border-[var(--error)] rounded-[8px] px-4 py-3 flex flex-col items-start mb-6">
                <div className="text-[#B71C1C] truncate font-semibold text-base leading-[150%] text-[var(--error)]">
                  {fileInfo?.name}
                </div>
                <div className="font-normal text-sm leading-[171%] text-[var(--text-secondary)]">
                  {fileInfo?.size} KB
                </div>
              </div>
              {/* Error message */}
              <div className="text-[24px] mt-6 mb-2 font-medium text-2xl leading-[117%] text-center text-[#343a40]">
                The File Type is Wrong!
              </div>
              <div className="mb-2 font-semibold text-lg leading-[156%] text-center text-[#343a40]">
                Please upload JSON or CSV files
              </div>
              <div className="mb-6 font-semibold text-lg leading-[156%] text-center text-[#343a40]">
                A file maximum size should be 5MB
              </div>
              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-[var(--primary)] px-8 py-2 rounded-[8px] font-medium text-sm leading-[200%] text-center text-[var(--secondary)] border border-[var(--primary)]"
                  onClick={() => {
                    setFileError(null);
                    setFileInfo(null);
                  }}
                >
                  <UploadsIcon />
                  Import a File
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border border-[#343a40] px-8 py-2 rounded-[8px] bg-[var(--secondary)]  font-medium text-sm leading-[200%] text-center text-[#343a40]"
                  onClick={() => navigate("/manual-entry")}
                >
                  <ManualHand />
                  Enter Manually
                </button>
              </div>
            </div>
          )}
          {!fileInfo && !fileError && (
            <div className="flex flex-col items-center justify-center py-8 w-full">
              <img src={UploadIocn} alt="upload" className="" />
              <div className="mt-6  mb-2 font-semibold text-[32px] leading-[125%] text-center text-[#343a40]">
                Drag and Drop Your File Here!
              </div>
              <div className="mb-1 font-semibold text-[18px] leading-[156%] text-center text-[#343a40]">
                Please upload JSON or CSV files
              </div>
              <div className="mb-4 font-semibold text-[18px] leading-[156%] text-center text-[#343a40]">
                A file maximum size should be 5MB
              </div>
              <button
                type="button"
                className="bg-[var(--primary)] px-8 py-[10px] flex items-center gap-2  shadow transition font-medium text-sm leading-[200%] text-center text-[var(--secondary)] rounded-[8px]"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // trigger file input
                  const input = document.querySelector(
                    '.upload-box input[type="file"]'
                  );
                  if (input) input.click();
                }}
              >
                <UploadsIcon />
                Import a File
              </button>
            </div>
          )}
        </Upload>
        {fileInfo && !fileError && (
          <div className="w-full flex flex-col items-center mt-4">
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-[340px]">
              <div className="flex items-center w-full">
                <img
                  src={fileInfo.thumb}
                  alt="file"
                  className="w-12 h-12 object-cover rounded mr-3 border"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm truncate">
                    {fileInfo.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {fileInfo.size} KB
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  {Math.round(progress)}%
                </div>
              </div>
              <div className="w-full mt-2">
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-red-500 rounded"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 font-semibold text-[32px] leading-[125%] text-center text-[#343a40]">
              {progress === 100 ? "Uploaded" : "Uploading.."}
            </div>
            {progress !== 100 && (
              <button
                className="mt-4 px-8 py-2 border border-[var(--text-secondary)] rounded-[8px] font-medium text-sm leading-[200%] text-center text-[#343a40]"
                onClick={handleRemove}
                disabled={!uploading}
              >
                Cancel
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ImportUserData;
