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
import Register2 from "@components/registers/Register2";
import RegistrationSuccess from "@components/registers/RegistrationSuccess";
import Residualanalysis from "@components/residualanalysis/Residualanalysis";
import Services from "@components/services/Services";
import Demo7 from '@components/demo/Demo7';
export const routes = [
  // public routes
  // { path: "*", component: Error, access: "public" },

  // guest routes
  { path: "/demo7", component: Demo7, access: "guest" },
  { path: "/", component: Login, access: "guest" },
  { path: "/register2", component: Register2, access: "guest" },
  { path: "/signup", component: Register, access: "guest" },
  { path: "/inviteuser", component: InviteUser, access: "guest" },
  { path: "/forget", component: Forget, access: "guest" },
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
  { path: "/regsuccess", component: RegistrationSuccess, access: "private" },
  { path: "/residualanalysis", component: Residualanalysis, access: "private" },
  // wildcard 404 route — must be last
  { path: "*", component: Error, access: "public" },
];
