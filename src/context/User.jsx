import { createContext, useState } from "react";

export let Contex = createContext();

let User = ({ children }) => {
  let [forgetHide, setForgetHide] = useState(false);
  let [registrationHide, setregistrationHide] = useState(false);
  let [assetTerm, setAssetTerm] = useState(false);
  let [invitation, setInvitation] = useState({});
  let [islogin, setIsLogin] = useState(false);

  return (
    <Contex.Provider
      value={{
        setregistrationHide,
        forgetHide,
        registrationHide,
        setForgetHide,
        assetTerm,
        setAssetTerm,
        invitation,
        setInvitation,
        islogin,
        setIsLogin,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export default User;
