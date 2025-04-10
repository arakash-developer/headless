import React, { useEffect, useState } from "react";
import RootLayout from "./component/RootLayout";
// React Router dom........
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import InviteUser from "./component/InviteUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Register />}></Route>
      <Route index path="/home" element={<Register />}></Route>
      <Route path='/inviteuser' element={<InviteUser />}></Route>
      {/* <Route path='/service' element={<Service />}></Route> */}
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
