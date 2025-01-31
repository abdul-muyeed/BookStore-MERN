import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/book/cartPage";
import CheckoutPage from "../pages/book/CheckoutPage";
import SignleBook from "../pages/home/SignleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/book/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>about</h1>,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "book/:id",
        element: <SignleBook />,
      },
    ],
  },{
    path:"/dashboard",
    element: <AdminRoute><div>Admin Dashboard</div></AdminRoute>,
    children:[
      {
        path:"add-new-book",
        element: <AdminRoute><div>Add new booj</div></AdminRoute>
      },
      {
        path:"edit-book/:id",
        element:<AdminRoute><div>Edit Book</div></AdminRoute>
      },
      {
        path:"manage-books",
        element: <AdminRoute><div>Manage Book</div></AdminRoute>
      }
    ]
  },{
    path:"/admin",
    element: <AdminLogin/> ,
  }
]);
