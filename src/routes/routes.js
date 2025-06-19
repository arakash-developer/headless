// src/routes.js
import Error from "@/components/error/Error";
import Profiles from "@/components/profile/Profiles";
import CompanyRegistration from "@components/company/CompanyRegistration";
import CompanyRegSuc from "@components/company/CompanyRegSuc";
import Dashboard from "@components/daahboard/Dashboard";
import Forget from "@components/forget/Forget";
import InviteUser from "@components/InviteUser";
import Login from "@components/login/Login";
import Register from "@components/registers/Register";
import RegistrationSuccess from "@components/registers/RegistrationSuccess";
import Residualanalysis from "@components/residualanalysis/Residualanalysis";
import Services from "@components/services/Services";

import Administrator from "@/components/administrator/Administrator";
import AdminServices from "@/components/adminservices/AdminServices";
import Demo from "@/components/demo/Demo";
import Demo2 from "@/components/demo/Demo2";
import Demo3 from "@/components/demo/Demo3";
import Demo4 from "@/components/demo/Demo4";
import Demo5 from "@/components/demo/Demo5";
import Demo6 from "@/components/demo/Demo6";
import Demo7 from "@/components/demo/Demo7";
import Manageservices from "@/components/manageservices/Manageservices";
import ManageUser from "@/components/manageuser/ManageUser";
import ConfirmEmail from "@/components/registers/ConfirmEmail";
import Alluser from "@components/demo/Alluser";
import ManageCustomers from "@/components/managecustomers/ManageCustomers";
export const routes = [
  // public routes
  // { path: "*", component: Error, access: "public" },

  // guest routes
  { path: "/demo7", component: Demo7, access: "guest" },
  { path: "/", component: Login, access: "guest" },
  { path: "/signup", component: Register, access: "guest" },
  { path: "/inviteuser", component: InviteUser, access: "administrator" },
  { path: "/forget", component: Forget, access: "guest" },
  { path: "/confirmemail/:email", component: ConfirmEmail, access: "guest" },
  // demo routes
  { path: "/alluser", component: Alluser, access: "guest" },
  { path: "/demo", component: Demo, access: "guest" },
  { path: "/demo2", component: Demo2, access: "guest" },
  { path: "/demo3", component: Demo3, access: "guest" },
  { path: "/demo4", component: Demo4, access: "guest" },
  { path: "/demo5", component: Demo5, access: "guest" },
  { path: "/demo6", component: Demo6, access: "guest" },
  { path: "/demo7", component: Demo7, access: "guest" },
  // private routes
  { path: "/companyregSuc", component: CompanyRegSuc, access: "private" },
  { path: "/dashboard", component: Dashboard, access: "private" },
  { path: "/services", component: Services, access: "private" },
  { path: "/companydata", component: CompanyRegSuc, access: "private" },
  { path: "/profiles", component: Profiles, access: "private" },
  {
    path: "/companyregistration",
    component: CompanyRegistration,
    access: "private",
  },
  {
    path: "/administrator",
    component: Administrator,
    access: "administrator",
  },
  {
    path: "/manageusers",
    component: ManageUser,
    access: "administrator",
  },
  {
    path: "/manageservices",
    component: Manageservices,
    access: "administrator",
  },
  {
    path: "/adminservices",
    component: AdminServices,
    access: "administrator",
  },
  {
    path: "/managecustomers",
    component: ManageCustomers,
    access: "administrator",
  },
  { path: "/regsuccess", component: RegistrationSuccess, access: "guest" },
  { path: "/residualanalysis", component: Residualanalysis, access: "private" },
  // wildcard 404 route — must be last
  { path: "*", component: Error, access: "public" },
];
