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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
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
