import { NavLink } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-[var(--text-normal)]  font-semibold text-4xl leading-[125%] text-var(--primary2)">
          Company Profile
        </h1>
        <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] mt-2">
          Dashboard / Profiles /
          <span className="text-[#343a40;]"> Company Profile</span>
        </p>
      </div>
      <div className="mt-[35px]">
        <ul className="">
          <li>
            <NavLink className="font-medium text-sm leading-[171%] text-[#343a40]" to="#home">Company Information</NavLink>
          </li>
          <li>
            <NavLink to="#home">Address</NavLink>
          </li>
          <li>
            <NavLink to="#home">Key Contacts</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
