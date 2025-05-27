import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmEmail = () => {
  const [formData, setFormData] = useState({});
  const API_URL = "https://4amitest-bli6.wp1.sh/wp-json/users/v1";
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return null; 
};

export default ConfirmEmail;
