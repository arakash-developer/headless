// AppRouter.jsx
import Dashboard from "@components/daahboard/Dashboard";
import Login from "@components/login/Login";
import { Route } from "react-router-dom";

const AppRouter = () => (
  <>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
  </>
);

export default AppRouter;
