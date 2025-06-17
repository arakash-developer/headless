import { useState } from "react";

// Function to generate a random 5-character alphanumeric invitation code
const generateInvitationCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let invitationCode = "";
  for (let i = 0; i < 5; i++) {
    invitationCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return invitationCode;
};

const Form = () => {
  const [formData, setFormData] = useState({
    code: "",
    mobile: "",
    email: "",
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    phone: "",
    extension: "",
    source: "",
    category: "",
  });

  const [invitationCode, setInvitationCode] = useState(""); // State to store the invitation code
  const [successMessage, setSuccessMessage] = useState(""); // For displaying success message
  const [isLoading, setIsLoading] = useState(false); // For displaying loading state
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error message

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate the invitation code when the form is submitted
    const code = generateInvitationCode();

    // Set the invitation code in the form data
    setFormData((prevData) => ({
      ...prevData,
      code: code, // Add the generated invitation code to the form data
    }));
    setIsLoading(true); // Set loading state to true

    try {
      // Send form data (including the invitation code) to the backend using fetch
      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/headless-form/v1/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, code: code }), // Send form data with the generated code
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Handle success
        console.log("Form data successfully submitted:", data);
        setSuccessMessage(
          `Form submitted successfully! Your invitation code: ${data.invitation_code}`
        );
        setFormData({
          // Reset form fields after successful submission
          code: "",
          mobile: "",
          email: "",
          firstName: "",
          lastName: "",
          title: "",
          company: "",
          phone: "",
          extension: "",
          source: "",
          category: "",
        });
      } else {
        // Handle error response from server
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form. Please try again later.");
    } finally {
      setIsLoading(false); // Set loading state to false when the request is done
    }
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Mobile:
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Extension:
          <input
            type="text"
            name="extension"
            value={formData.extension}
            onChange={handleChange}
          />
        </label>
        <label>
          Source:
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>

      {/* Display Loading State */}
      {isLoading && <p>Submitting form...</p>}

      {/* Display Success Message */}
      {successMessage && (
        <div>
          <p>{successMessage}</p>
        </div>
      )}

      {/* Display Error Message */}
      {errorMessage && (
        <div style={{ color: "red" }}>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
