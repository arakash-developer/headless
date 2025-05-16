import RootLayout from "./components/main/RootLayout";
// React Router dom........
import { routes } from "@/routes/routes";
import { GuestRoute, PrivateRoute, PublicRoute } from "@routes/RouteWrappers";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Demo from "./components/demo/Demo";
import Demo4 from "./components/demo/Demo4";
import InviteUser from "./components/InviteUser";
import Password from "./components/Password";
import Register from "./components/registers/Register";
import Register2 from "./components/registers/Register2";
import Residualanalysis from "./components/residualanalysis/Residualanalysis";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<Register />}></Route>
      <Route index path="/" element={<Register />}></Route>
      <Route index path="/register2" element={<Register2 />}></Route>
      <Route path="/inviteuser" element={<InviteUser />}></Route>
      <Route path="/demo" element={<Demo />}></Route>
      <Route path="/password" element={<Password />}></Route>
      <Route path="/residualanalysis" element={<Residualanalysis />}></Route>

      <Route path="/demo4" element={<Demo4 />}></Route>
      <Route path="*" element={<Error />} />

      {routes.map(({ path, component: Component, access }) => {
        let element;

        if (access === "private") {
          element = (
            <PrivateRoute>
              <Component />
            </PrivateRoute>
          );
        } else if (access === "guest") {
          element = (
            <GuestRoute>
              <Component />
            </GuestRoute>
          );
        } else {
          element = (
            <PublicRoute>
              <Component />
            </PublicRoute>
          );
        }

        return <Route key={path} path={path} element={element} />;
      })}
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
