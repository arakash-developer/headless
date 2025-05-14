import { createContext, useState } from "react";

export let Contex = createContext();

let User = ({ children }) => {
  let [assetTerm, setAssetTerm] = useState(false);
  let [invitation, setInvitation] = useState({});
  let [islogin, setIsLogin] = useState(false);

  return (
    <Contex.Provider value={{ assetTerm, setAssetTerm,invitation, setInvitation, islogin, setIsLogin }}>
      {children}
    </Contex.Provider>
  );
};

export default User;
