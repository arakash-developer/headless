import RootLayout from "./components/RootLayout";
// React Router dom........
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CompanyDataViewer from "./components/company/CompanyDataViewer";
import CompanyRegistration from "./components/company/CompanyRegistration";
import CompanyRegSuc from "./components/company/CompanyRegSuc";
import Dashboard from "./components/daahboard/Dashboard";
import Demo from "./components/demo/Demo";
import Demo2 from "./components/demo/Demo2";
import Demo3 from "./components/demo/Demo3";
import Demo4 from "./components/demo/Demo4";
import Demo5 from "./components/demo/Demo5";
import Demo6 from "./components/demo/Demo6";
import InviteUser from "./components/InviteUser";
import Reg1 from "./components/layers/Reg1";
import Reg2 from "./components/layers/Reg2";
import Login from "./components/Login";
import Password from "./components/Password";
import Register from "./components/registers/Register";
import Register2 from "./components/registers/Register2";
import RegistrationSuccess from "./components/registers/RegistrationSuccess";
import Services from "./components/services/Services";
import LoginProtected from "./Protect Rule/LoginProtected";
import ProtectedCompany from "./Protect Rule/ProtectedCompany";

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
      <Route path="/demo5" element={<Demo5 />}></Route>
      <Route path="/demo6" element={<Demo6 />}></Route>
      <Route path="/reg1" component={Reg1} />
      <Route path="/reg2" component={Reg2} />
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
      <Route path="/services" element={<Services />}></Route>
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
