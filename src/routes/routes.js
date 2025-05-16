// src/routes.js
import CompanyRegSuc from "@components/company/CompanyRegSuc";
import Dashboard from "@components/daahboard/Dashboard";
import Login from "@components/login/Login";
import CompanyRegistration from "@components/company/CompanyRegistration";
import Register from "@components/registers/Register";
import Services from "@components/services/Services";
import CompanyDataViewer from "@components/company/CompanyDataViewer";
import RegistrationSuccess from "@components/registers/RegistrationSuccess";
import Residualanalysis from "@components/residualanalysis/Residualanalysis";
export const routes = [
  // { path: "/about", component: About, access: "public" },
  { path: "/login", component: Login, access: "guest" },
  { path: "/register", component: Register, access: "guest" },
  { path: "/dashboard", component: Dashboard, access: "private" },
  { path: "/services", component: Services, access: "private" },
  { path: "/companyregSuc", component: CompanyRegSuc, access: "private" },
  { path: "/companydata", component: CompanyRegSuc, access: "private" },
  { path: "/companyregistration", component: CompanyRegistration, access: "private" },
  { path: "/regsuccess", component: RegistrationSuccess, access: "private" },
  { path: "/residualanalysis", component: Residualanalysis, access: "private" },
];
