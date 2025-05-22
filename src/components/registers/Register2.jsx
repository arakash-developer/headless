import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Contex } from "../../context/User";
import postRegistration from "../../lib/postRegistration";

const Register2 = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  let [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [confirmpassword, setConfirmpassword] = useState("");
  let { invitation, setInvitation } = useContext(Contex);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const handleCaptchaChange = (token) => {
    console.log("reCAPTCHA token:", token);
    setCaptchaToken(token);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify reCAPTCHA");
      return;
    }

    // Submit your form with captchaToken
    console.log("Submitting form with reCAPTCHA token:", captchaToken);
  };

  const calculateStrength = (pass) => {
    let s = 0;
    if (pass.length >= 8) s++;
    if (/[A-Z]/.test(pass)) s++;
    if (/[a-z]/.test(pass)) s++;
    if (/\d/.test(pass)) s++;
    if (/[\W_]/.test(pass)) s++;
    return s;
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

  const handleChange = (e) => {
    console.log(score);

    const val = e.target.value;
    setPassword(val);
    setScore(calculateStrength(val));
  };

  let formData = {
    userName,
    password,
  };

  let handleSubmitform = async (e) => {
    e.preventDefault();
    if (!userName) return toast.error("Username is required", toastStyle);
    if (!password) return toast.error("Password is required", toastStyle);
    if (!confirmpassword)
      return toast.error("Confirm Password is required", toastStyle);
    if (password !== confirmpassword) {
      toast.error("Password does not match", toastStyle);
    } else {
      setInvitation({ ...invitation, ...formData });
      let datas = {
        username: userName,
        password: password,
        email: invitation.email,
        firstName: invitation.firstName,
        lastName: invitation.lastName,
        title: invitation.title,
        company: invitation.company,
        phone: invitation.phone,
        extension: invitation.extension,
        code: invitation.code,
      };
      // console.log(datas);
      let response = await postRegistration(datas);
      // console.log(response);
      if (response?.login) {
        navigate("/regsuccess");
        toast.success(response.message, {
          ...toastStyle,
          style: { background: "var(--primary)", color: "#fff" },
        });
      }
      toast.error(response, toastStyle);
    }
  };

  return (
    <>
      {message}
      <h2 className="text-[var(--primary2)] pb-5 text-[32px] not-italic font-semibold leading-[normal]">
        Create your Account
      </h2>
      <div className="max-w-[855px] px-[65px] py-[37px] bg-[#fff] rounded-[5px] formboxshadow">
        <div className="">
          <div className="max-w-[280px] mx-auto flex justify-between items-center relative">
            <div className="bg-[var(--primary)] w-[22px] h-[22px] rounded-full border-[1px] border-[var(--primary)] relative z-[2] flex justify-center items-center text-[12px]">
              {/* <FaCheck className="text-[#fff]" /> */}
            </div>
            <div className="w-full border-[1px] border-[var(--primary)] absolute z-[1]"></div>
            <div className="bg-[var(--primary)] w-[32px] h-[32px] rounded-full border-[1px] border-[var(--primary)] relative z-[2]"></div>
          </div>
          <div className="pb-[60px] pt-[25px] max-w-[346px] mx-auto flex justify-between items-center ">
            <p className="text-[var(--primary2)] text-base not-italic font-semibold leading-[normal]">
              User Info
            </p>
            <p className="text-[#919191] text-base not-italic font-medium leading-[normal]">
              Create Account
            </p>
          </div>

          <form action="" className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor=""
                className="text-[var(--primary2)] text-base not-italic font-medium leading-[normal]"
              >
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor=""
                className="text-[var(--primary2)] text-base not-italic font-medium leading-[normal]"
              >
                Password
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
              />

              <div className="">
                <p className="text-[var(--primary2)] text-base not-italic font-normal leading-6">
                  Password strength
                </p>
                <div
                  className="h-[6px] rounded-[4px] bg-[var(--primary2)] w-full my-[10px] transition-all duration-300"
                  style={{ width: `${(score / 5) * 100}%` }}
                ></div>
                <p className="text-[#919191] text-sm not-italic font-normal leading-[1.31rem]">
                  Minimum 6 characters
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor=""
                className="text-[var(--primary2)] text-base not-italic font-medium leading-[normal]"
              >
                Confirm Password
              </label>
              <input
                type="text"
                onChange={(e) => setConfirmpassword(e.target.value)}
                className="w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]"
              />
            </div>

            <div className="flex items-start gap-2">
              <Link
                to="/"
                className="py-[18px] px-[60px] rounded-[5px] text-[var(--primary2)] border border-[var(--primary2)] text-base not-italic font-bold leading-[normal] max-w-[192px] continue-button cursor-pointer"
              >
                Back
              </Link>
              <Link
                to="/"
                className="py-[18px] px-[60px] bg-[var(--primary)] rounded-[5px] text-[#FFF] text-base not-italic font-bold leading-[normal] max-w-[192px] continue-button cursor-pointer"
                onClick={handleSubmitform}
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register2;
