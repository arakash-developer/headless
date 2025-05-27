import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ConfirmEmail = () => {
  const [formData, setFormData] = useState({});
  const API_URL = "https://4amitest-bli6.wp1.sh/wp-json/users/v1";
  const navigate = useNavigate();
  let {email} = useParams();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return null;
};

export default ConfirmEmail;
