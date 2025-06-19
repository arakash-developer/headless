import EyeIcon from "@/assets/EyeIcon";
import Hiddeneye from "@/assets/Hiddeneye";
import { Contex } from "@context/User";
import CloseIcon from "@public/close.svg";
import Loginbanner from "@public/logIn.jpg";
import { Checkbox, Input, notification } from "antd";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";
const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let { setIsLogin, islogin } = useContext(Contex);
  let [eyeon, seteyeon] = useState(false);
  const handleTogglePassword = () => {
    seteyeon(!eyeon);
  };
  const [checked, setChecked] = useState(false);
  let [loading, setLoading] = useState(false);

  const handleRemember = (e) => {
    setChecked(!checked);
  };

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
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      // toast.error("Email is required", toastStyle);
      api.info({
        message: (
          <h2 className="font-medium text-[22px] leading-[117%] text-[#343a40]">
            Email is required
          </h2>
        ),
        description: (
          <p className="font-normal text-xs leading-[135%] text-[var(--text-secondary)]">
            The new customer’s record is created successfully.
          </p>
        ),
        icon: <img src={CloseIcon} alt="close" className="w-6 h-6" />,
        placement: "topRight",
      });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address", toastStyle);
    } else if (!password) {
      toast.error("Password is required", toastStyle);
    } else {
      const loginData = { username: email, password };
      setLoading(true);
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

        const data = await response.json();
        if (response.ok) {
          toast.success("Login Successful!", {
            ...toastStyle,
            style: { background: "var(--primary)", color: "#fff" },
          });
          localStorage.setItem("user_data", JSON.stringify(data.user));
          if (data.user.roles[0] === "administrator") {
            localStorage.setItem("administrator", "akash@123");
            return navigate("/administrator", { state: { user: data.user } });
          }
        }
        if (!response.ok) {
          setLoading(false);
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

        // const data = await response.json();

        // Store the JWT token and user data in localStorage for future requests
        localStorage.setItem("auth_token", data.token);

        localStorage.setItem("logintoken", "akash123");

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

        if (data.user.roles[0] !== "administrator") {
          if (companyData.status === "success") {
            const companyEmails = companyData.data.map(
              (company) => company.businessEmail
            );
            if (companyEmails.includes(email)) {
              localStorage.setItem("logintoken", "akash@123");
              localStorage.setItem("com_auth_token", "akash");
              setIsLogin(true);
              navigate("/dashboard", { state: { user: data.user } });
              setLoading(false);
            } else {
              setIsLogin(true);
              localStorage.setItem("logintoken", "akash@123");
              navigate("/companyregistration", { state: { useremail: email } });
              setLoading(false);
            }
          } else {
            toast.error(
              companyData.message || "Failed to load company data.",
              toastStyle
            );
          }
        }
      } catch (error) {
        toast.error(error.message, toastStyle);
        setLoading(false);
        setError(error.message);
      }
    }
  };

  return (
    <>
      {contextHolder}
      <div className="mt-[40px] loginBox bg-[#fff] max-w-[1099px] xl:mr-[80px] mb-[171px] rounded-[8px] pl-[51px] pr-[16px] py-5 flex justify-between gap-[80px] h-full items-center">
        <div className="max-w-[380px] py-[48px]">
          <h3 className="text-[24px] text-[var(--primary2)] font-medium text-2xl leading-[117%]">
            Log Inv
          </h3>
          <p className="text-[#919191] mt-[8px] mb-[24px] text-[var(--text-secondary)]  font-normal text-base leading-[150%]">
            Good to see you! Enter your details to continue running residual
            analyses on your equipment
          </p>
          <form>
            <div className="flex flex-col gap-y-[16px]">
              <div className="flex flex-col gap-y-[2px]">
                <label
                  htmlFor="email"
                  className="text-[var(--primary2)] not-italic  font-medium text-sm leading-[171%] text-[#343a40]"
                >
                  Username
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)]  w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
                />
                <div className="flex justify-end">
                  <Link
                    to="/forget"
                    className="font-normal text-xs leading-[135%] text-[var(--primary)]"
                  >
                    Forgot Username?
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-y-[2px]">
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
                    className="custom-black-input focus:text-[var(--text-normal)] font-normal text-sm leading-[171%] border-[var(--neutral-400)] w-full h-[40px] border-[1.4px] border-[#DBDCDE] rounded-[8px] placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal] py-3 px-4 bg-[var(--background)] "
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
            <div className="mt-1 mb-6">
              <div className="w-full flex justify-between items-center">
                <div
                  onClick={handleRemember}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="flex items-center">
                    <Checkbox
                      checked={checked}
                      className="custom-red-checkbox"
                    ></Checkbox>
                  </div>

                  <p className="text-[var(--text-secondary)] font-normal text-xs leading-[135%] text-var(--primary2)">
                    Remember Password
                  </p>
                </div>
                <Link
                  to="/forget"
                  className="font-normal text-xs leading-[135%] text-[var(--primary)]"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="h-[44px] w-[110px] flex justify-center items-center py-[8px] px-8 bg-[var(--primary)] rounded-[8px] text-white max-w-[192px] cursor-pointer font-medium text-sm leading-y-[28px] text-var(--secondary)"
            >
              {loading ? (
                <ScaleLoader height="15px" width="2px" color="#fff" />
              ) : (
                "Log In "
              )}
            </button>
          </form>
        </div>
        <div className="h-full bg-red-500 rounded-[5px]">
          <img className="w-full h-full" src={Loginbanner} alt="Login Banner" />
        </div>
      </div>
    </>
  );
};

export default Login;
