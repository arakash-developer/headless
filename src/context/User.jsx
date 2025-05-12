import { createContext, useState } from "react";

export let Contex = createContext();

let User = ({ children }) => {
  let [invitation, setInvitation] = useState({});
  let [islogin, setIsLogin] = useState(false);

  return (
    <Contex.Provider value={{ invitation, setInvitation, islogin, setIsLogin }}>
      {children}
    </Contex.Provider>
  );
};

export default User;
