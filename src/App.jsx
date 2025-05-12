import React from "react";
import RootLayout from "./component/RootLayout";
// React Router dom........
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CompanyDataViewer from "./component/CompanyDataViewer";
import CompanyRegistration from "./component/CompanyRegistration";
import CompanyRegSuc from "./component/CompanyRegSuc";
import Dashboard from "./component/Dashboard";
import Demo from "./component/Demo";
import Demo2 from "./component/Demo2";
import Demo3 from "./component/Demo3";
import InviteUser from "./component/InviteUser";
import Login from "./component/Login";
import Password from "./component/Password";
import Register from "./component/Register";
import Register2 from "./component/Register2";
import RegistrationSuccess from "./component/RegistrationSuccess";
import LoginProtected from "./Protect Rule/LoginProtected";
import ProtectedCompany from "./Protect Rule/ProtectedCompany";
import Demo4 from "./component/Demo4";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Register />}></Route>
      <Route index path="/" element={<Register />}></Route>
      <Route index path="/register2" element={<Register2 />}></Route>
      <Route path="/inviteuser" element={<InviteUser />}></Route>
      <Route path="/demo" element={<Demo />}></Route>
      <Route path="/password" element={<Password />}></Route>
      <Route path="/regsuccess" element={<RegistrationSuccess />}></Route>
      <Route path="/demo2" element={<Demo2 />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/demo3" element={<Demo3 />}></Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedCompany>
            <Dashboard />
          </ProtectedCompany>
        }
      ></Route>
      <Route
        path="/companyregistration"
        element={
          <LoginProtected>
            <CompanyRegistration />
          </LoginProtected>
        }
      ></Route>
      <Route path="/companyregSuc" element={<CompanyRegSuc />}></Route>
      <Route path="/companydata" element={<CompanyDataViewer />}></Route>
      <Route path="/demo4" element={<Demo4 />}></Route>
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
