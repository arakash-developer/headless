import React, { useEffect, useState } from "react";
import RootLayout from "./component/RootLayout";
// React Router dom........
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/Demo";
import Register from "./component/Register";
import Register2 from "./component/Register2";
import InviteUser from "./component/InviteUser";
import Demo from "./component/Demo";
import Password from "./component/Password";
import RegistrationSuccess from "./component/RegistrationSuccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Register />}></Route>
      <Route index path="/" element={<Register />}></Route>
      <Route index path="/register2" element={<Register2 />}></Route>
      <Route path='/inviteuser' element={<InviteUser />}></Route>
      <Route path='/demo' element={<Demo />}></Route>
      <Route path='/password' element={<Password />}></Route>
      <Route path='/regsuccess' element={<RegistrationSuccess />}></Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="h-[100vh]">
      {/* //Router Provider..... */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
