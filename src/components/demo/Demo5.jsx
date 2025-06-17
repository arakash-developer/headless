import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      message: message,
    };

    // Send the form data to the WordPress REST API using fetch
    fetch("https://4amitest-bli6.wp1.sh/wp-json/react-v1/submit-form/", {
      // Replace with your WordPress URL
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(formData), // Convert the form data to a JSON string
    })
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        // Handle the response from the WordPress API
        if (data.status === "success") {
          setResponseMessage("Form submitted successfully!");
        } else {
          setResponseMessage("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        setResponseMessage("Error submitting form. Please try again later.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default App;
