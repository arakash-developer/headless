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

import { decryptText } from "@/lib/cryptoUtils";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmEmail = async () => {
  const { email } = useParams();
  const password = "my_secret_salt";
  const decrypted = await decryptText(email, password);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Confirming...");

  const API_URL = "https://4amitest-bli6.wp1.sh/wp-json/users/v1/confirm-email";
  const toastStyle = {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    style: {
      background: "var(--primary2)",
      color: "#fff",
    },
  };

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ decrypted }),
        });

        const result = await res.json();

        if (res.ok && result.success) {
          localStorage.setItem("logintoken", "akash123");
          navigate("/dashboard");
          toast.success("Email confirmed successfully!", toastStyle);
        } else {
          toast.error(result.error || "Confirmation failed.", toastStyle);
        }
      } catch (error) {
        toast.error("Something went wrong", toastStyle);
      } finally {
      }
    };

    if (email) {
      confirmEmail();
    } else {
      toast.error("No email provided to confirm.", toastStyle);
    }
  }, [email, navigate]);

  return null;
};

export default ConfirmEmail;
