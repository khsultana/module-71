import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp> </SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
]);
export default route;
