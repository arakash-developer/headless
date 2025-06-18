// import { sendConfirmationEmail } from "@/utils/emailUtils";
// const Demo5 = () => {
//   let jor = () => {
//     sendConfirmationEmail("akash.blinto@gmail.com", "content");
//     console.log("jor");
//   };
//   return (
//     <div>
//       <div className="hover:text-red-600" onClick={jor}>
//         click
//       </div>
//     </div>
//   );
// };

// export default Demo5;

import { useState } from "react";

const AdminRegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",
    extension: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous messages
    setErrorMessage("");
    setSuccessMessage("");

    // Check if email is provided
    if (!formData.email) {
      setErrorMessage("Email is required.");
      return;
    }

    try {
      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/admin-register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("User registered successfully!");
        setFormData({
          email: "",
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          title: "",
          company: "",
          phone: "",
          extension: "",
        });
      } else {
        setErrorMessage(
          result.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage(
        "There was an error processing the request. Please try again later."
      );
    }
  };

  return (
    <div className="container">
      <h2>Admin User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email (Required)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Username (Optional)</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password (Required)</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name (Optional)</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name (Optional)</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Title (Optional)</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Company (Optional)</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone (Optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Extension (Optional)</label>
          <input
            type="text"
            name="extension"
            value={formData.extension}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register User</button>
      </form>

      {errorMessage && <div className="error">{errorMessage}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
    </div>
  );
};

export default AdminRegisterForm;
