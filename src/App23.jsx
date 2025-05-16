import Login from "@components/login/Login";
import RootLayout from "@components/main/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppRouter from "./AppRouter";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/login" element={<Login />}></Route>
    </Route>
  )
);

const App = () => (
  <div className="h-[100vh]">
    <RouterProvider router={router} />
  </div>
);

export default App;
