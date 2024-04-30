import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ProfileUpdate from "../Pages/ProfileUpdate";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EstateDetails from "../Pages/EstateDetails";
import Contact from "../Pages/Contact";
import PrivateRoute from "./PrivateRoute";
import AddCraft from "../Pages/AddCraft";
import MyCrafts from "../Pages/MyCrafts";
import Update from "../Pages/Update";
import AllCrafts from "../Pages/AllCrafts";
import Details from "../Pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/Data/Data.json"),
      },
      {
        path: "/estates/:id",
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/Data/Data.json"),
      },
      {
        path: "/profile-update",
        element: (
          <PrivateRoute>
            <ProfileUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "/all",
        element: <AllCrafts></AllCrafts>,
        loader: () => fetch("http://localhost:5000/items"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_list",
        element: (
          <PrivateRoute>
            <MyCrafts />
          </PrivateRoute>
        ),
      },
      {
        path: "/items/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: "/items/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
