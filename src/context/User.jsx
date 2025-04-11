import { createContext, useState } from "react";
export let Contex = createContext();
let User = ({ children }) => {
  let [invitation, setInvitation] = useState({});
  return (
    <Contex.Provider value={{ invitation, setInvitation }}>
      {children}
    </Contex.Provider>
  );
};
export default User;
