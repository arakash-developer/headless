// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const ConfirmEmail = () => {
//   const API_URL = "https://4amitest-bli6.wp1.sh/wp-json/users/v1";

//   const navigate = useNavigate();
//   let { email } = useParams();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch(`${API_URL}/edit/${editingUser}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email }),
//     });
//   };
//   useEffect(() => {
//     navigate("/dashboard");
//   }, [navigate]);

//   return null;
// };

// export default ConfirmEmail;


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ConfirmEmail = () => {
  const { email } = useParams(); // Get email from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Confirming...");

  const API_URL = "https://4amitest-bli6.wp1.sh/wp-json/users/v1/confirm-email";

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const result = await res.json();

        if (res.ok && result.success) {
          setStatus("Email confirmed! Redirecting to dashboard...");
          
          setTimeout(() => navigate("/dashboard"), 2000);
        } else {
          setStatus(result.error || "Confirmation failed.");
        }
      } catch (error) {
        console.error("Error confirming email:", error);
        setStatus("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      confirmEmail();
    } else {
      setStatus("No email provided.");
      setLoading(false);
    }
  }, [email, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md text-center max-w-md w-full">
        <h1 className="text-xl font-semibold mb-4">Confirming your email...</h1>
        <p className="text-gray-700">{status}</p>
        {loading && <div className="mt-4 text-sm text-gray-500">Please wait...</div>}
      </div>
    </div>
  );
};

export default ConfirmEmail;

