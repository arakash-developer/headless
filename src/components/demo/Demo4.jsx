import React, { useState } from "react";

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

const App = () => {
  const [uploads, setUploads] = useState([{ file: null, label: "" }]);

  const addUploadForm = () => {
    setUploads([...uploads, { file: null, label: "" }]);
  };

  const updateUploadData = (index, field, value) => {
    const updated = [...uploads];
    updated[index][field] = value;
    setUploads(updated);
  };

  return (
    <div className="p-6">
      {uploads.map((upload, index) => (
        <FileUploadForm key={index} index={index} onChange={updateUploadData} />
      ))}

      <button
        onClick={addUploadForm}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Another File Upload
      </button>

      {/* Debug Output */}
      <pre className="mt-6 bg-gray-100 p-4 rounded overflow-x-auto">
        {JSON.stringify(
          uploads.map((u) => ({
            label: u.label,
            file: u.file ? u.file.name : null,
          })),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default App;
