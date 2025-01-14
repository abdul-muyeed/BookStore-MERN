import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <h1>hello world</h1>,
        },
        {
            path: "/about",
            element: <h1>about</h1>,
        },
        {
            path: "/order",
            element: <h1>order</h1>,
        }
      ]
    },
  ]);