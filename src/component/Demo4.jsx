import React, { useContext, useEffect } from "react";

import { Contex } from "../context/User";

const Demo4 = () => {
  let { islogin } = useContext(Contex);
  useEffect(() => {
    console.log("islogin", islogin);
  });

  return <div>Demo4</div>;
};

export default Demo4;
