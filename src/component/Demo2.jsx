import React, { useState } from "react";

const Demo2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",
    extension: "",
    code: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("https://4amitest-bli6.wp1.sh/wp-json/custom/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Registration successful!");
        setFormData({
          username: "",
          password: "",
          email: "",
          firstName: "",
          lastName: "",
          title: "",
          company: "",
          phone: "",
          extension: "",
          code: "",
        });
      } else {
        setMessage(`❌ ${data.error || "Registration failed"}`);
      }
    } catch (err) {
      setMessage("❌ Error while registering. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 space-y-4">
      {[
        { label: "Username", name: "username" },
        { label: "Password", name: "password", type: "password" },
        { label: "Email", name: "email", type: "email" },
        { label: "First Name", name: "firstName" },
        { label: "Last Name", name: "lastName" },
        { label: "Title", name: "title" },
        { label: "Company", name: "company" },
        { label: "Phone", name: "phone" },
        { label: "Extension", name: "extension" },
        { label: "Code", name: "code" },
      ].map(({ label, name, type = "text" }) => (
        <div key={name}>
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required={["username", "password", "email"].includes(name)}
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>

      {message && <p className="mt-4 text-sm">{message}</p>}
    </form>
  );
};

export default Demo2;
