import React, { useState } from 'react';

// Reusable form component
const UserForm = ({ index, onChange }) => {
  const handleChange = (e) => {
    onChange(index, e.target.name, e.target.value);
  };

  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h4 className="mb-2">User Form {index + 1}</h4>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="block mb-2 p-2 border"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="block mb-2 p-2 border"
        onChange={handleChange}
      />
    </div>
  );
};

const App = () => {
  const [forms, setForms] = useState([{ name: '', email: '' }]);

  // Add a new empty form
  const addForm = () => {
    setForms([...forms, { name: '', email: '' }]);
  };

  // Update form data when user types
  const updateFormData = (index, field, value) => {
    const updated = [...forms];
    updated[index][field] = value;
    setForms(updated);
  };

  return (
    <div className="p-6">
      {forms.map((form, index) => (
        <UserForm key={index} index={index} onChange={updateFormData} />
      ))}

      <button
        onClick={addForm}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Another User Form
      </button>

      {/* Debug: Show final form data */}
      <pre className="mt-6 bg-gray-100 p-4 rounded">{JSON.stringify(forms, null, 2)}</pre>
    </div>
  );
};

export default App;
