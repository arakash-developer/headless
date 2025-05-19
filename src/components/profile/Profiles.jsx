import { useEffect, useState } from "react";

const Profile = () => {
  const [activeHash, setActiveHash] = useState(
    window.location.hash || "#home1"
  );

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
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
        <ul className="flex items-center gap-x-[51px] companyProfile">
          <li>
            <a
              href="#home1"
              className={`font-medium text-sm leading-[171%] ${
                activeHash === "#home1"
                  ? "text-[#343a40] border-b-2 border-[var(--primary)]"
                  : "text-[var(--text-disabled)]"
              }`}
            >
              Company Information
            </a>
          </li>
          <li>
            <a
              href="#home2"
              className={`font-medium text-sm leading-[171%] ${
                activeHash === "#home2"
                  ? "text-[#343a40] border-b-2 border-[var(--primary)]"
                  : "text-[var(--text-disabled)]"
              }`}
            >
              Address
            </a>
          </li>
          <li>
            <a
              href="#home3"
              className={`font-medium text-sm leading-[171%] ${
                activeHash === "#home3"
                  ? "text-[#343a40] border-b-2 border-[var(--primary)]"
                  : "text-[var(--text-disabled)]"
              }`}
            >
              Key Contacts
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
