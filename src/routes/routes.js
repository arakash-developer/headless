// src/routes.js
import CompanyRegistration from "@components/company/CompanyRegistration";
import CompanyRegSuc from "@components/company/CompanyRegSuc";
import Dashboard from "@components/daahboard/Dashboard";
import InviteUser from "@components/InviteUser";
import Login from "@components/login/Login";
import Register from "@components/registers/Register";
import Register2 from "@components/registers/Register2";
import RegistrationSuccess from "@components/registers/RegistrationSuccess";
import Residualanalysis from "@components/residualanalysis/Residualanalysis";
import Services from "@components/services/Services";
export const routes = [
  // public routes
  { path: "/register2", component: Register2, access: "public" },
  { path: "/", component: Register, access: "public" },
  { path: "/inviteuser", component: InviteUser, access: "public" },
  { path: "/register", component: Register, access: "public" },
  { path: "/login", component: Login, access: "public" },
  // private routes
  { path: "/companyregSuc", component: CompanyRegSuc, access: "private" },
  { path: "/dashboard", component: Dashboard, access: "private" },
  { path: "/services", component: Services, access: "private" },
  { path: "/companydata", component: CompanyRegSuc, access: "private" },
  {
    path: "/companyregistration",
    component: CompanyRegistration,
    access: "private",
  },
  { path: "/regsuccess", component: RegistrationSuccess, access: "private" },
  { path: "/residualanalysis", component: Residualanalysis, access: "private" },
];
