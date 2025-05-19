import EyeIcon from "@/assets/EyeIcon";
import Hiddeneye from "@/assets/Hiddeneye";
import { Contex } from "@context/User";
import Loginbanner from "@public/logIn.png";
import { Checkbox } from "antd";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from 'antd';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let { setIsLogin, islogin } = useContext(Contex);
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { username: email, password };

    try {
      const response = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (!response.ok) {
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
        toast.error("Invalid credentials", toastStyle);
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      // Store the JWT token and user data in localStorage for future requests
      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user_data", JSON.stringify(data.user)); // Store user data

      // Now check if the company email exists
      const companyDataResponse = await fetch(
        "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/company-data",
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      const companyData = await companyDataResponse.json();

      if (companyData.status === "success") {
        const companyEmails = companyData.data.map(
          (company) => company.businessEmail
        );
        if (companyEmails.includes(email)) {
          localStorage.setItem("logintoken", "akash@123");
          localStorage.setItem("com_auth_token", "akash");
          setIsLogin(true);
          navigate("/dashboard", { state: { user: data.user } });
        } else {
          setIsLogin(true);
          localStorage.setItem("logintoken", "akash@123");
          navigate("/companyregistration", { state: { useremail: email } });
        }
      } else {
        toast.error(
          companyData.message || "Failed to load company data.",
          toastStyle
        );
      }

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
          background: "var(--primary)",
          color: "#fff",
        },
      };
      toast.success("Login Successful!", toastStyle);
    } catch (error) {
      setError(error.message); // Show error if credentials are invalid
    }
  };
  let [eyeon, seteyeon] = useState(false);
  const handleTogglePassword = () => {
    seteyeon(!eyeon);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <div className="mt-[40px] loginBox bg-[#fff] max-w-[1099px] xl:mr-[80px] mb-[171px] rounded-[5px] pl-[125px] pr-[20px] py-5 grid grid-cols-2 gap-[80px] h-full items-center">
        <div className="max-w-[380px] py-[47px]">
          <h3 className="not-italic font-semibold text-4xl leading-[125%] text-[var(--primary2)]">
            Sign In
          </h3>
          <p className="text-[#919191] not-italic mt-[8px] mb-[28px] font-normal text-base leading-[150%] text-[var(--text-secondary)]">
            Good to see you again! Enter your details to continue using the
            dashboard
          </p>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-y-[20px]">
              <div className="flex flex-col gap-y-2 custom-red-input">
                <label
                  htmlFor="email"
                  className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
                >
                  Email
                </label>
                
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
                  required
                />
              </div>
              <div className="flex flex-col gap-y-2 custom-red-input">
                <label
                  htmlFor="email"
                  className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
                >
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={eyeon ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)]"
                    required
                  />
                  <div
                    onClick={handleTogglePassword}
                    className="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    {eyeon ? <EyeIcon /> : <Hiddeneye />}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-6">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="">
                    <Checkbox
                      onChange={onChange}
                      className="custom-red-checkbox"
                    ></Checkbox>
                  </div>

                  <p className="text-[var(--text-secondary)] font-normal text-xs leading-[135%] text-var(--primary2)">
                    Remember Password
                  </p>
                </div>
                <Link className="font-normal text-xs leading-[135%] text-[var(--primary)]">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="py-[8px] px-8 bg-[var(--primary)] rounded-[5px] text-white max-w-[192px] cursor-pointer font-medium text-sm leading-[200%] text-var(--secondary)"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="">
          <img
            className="bg-cover rounded-[5px]"
            src={Loginbanner}
            alt="Login Banner"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
