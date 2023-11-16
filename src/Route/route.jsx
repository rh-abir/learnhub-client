import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/authentication/login/Login";

import Singup from "../pages/authentication/login/signup/Singup";
import Home from "../pages/home/Home";
import Courses from "../pages/home/courses/Courses";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Singup />,
      },
    ],
  },
]);

export default router;
