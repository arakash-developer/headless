import { Contex } from "@context/User";
import Loginbanner from "@public/logIn.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

  return (
    <>
      <div className="loginBox bg-[#fff] max-w-[1099px] mb-[171px] rounded-[5px] pl-[125px] pr-[20px] py-5 flex gap-[80px] h-full items-center">
        <div className="max-w-[380px]">
          <h3 className="text-[var(--primary2)] text-4xl not-italic font-bold leading-10">
            Log In
          </h3>
          <p className="text-[#919191] text-base not-italic font-normal leading-6 mt-[8px] mb-[28px]">
            Good to see you again! Enter your details to continue using the
            dashboard
          </p>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-y-[20px]">
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="email"
                  className="text-[var(--primary2)] text-base not-italic font-medium leading-[normal]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="password"
                  className="text-[var(--primary2)] text-base not-italic font-medium leading-[normal]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
                  required
                />
              </div>
            </div>
            <div className="mt-2 mb-6 flex items-center gap-3 cursor-pointer">
              <input type="checkbox" />
              <p className="text-[#919191] text-sm font-normal">
                Remember Password
              </p>
            </div>
            <button
              type="submit"
              className="py-[8px] px-8 bg-[var(--primary)] rounded-[5px] text-white text-base font-bold max-w-[192px] cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="">
          <img
            className="bg-cover rounded-[5px] w-[564px] h-[633px]"
            src={Loginbanner}
            alt="Login Banner"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
