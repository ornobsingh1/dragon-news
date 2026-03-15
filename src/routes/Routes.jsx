import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/auth",
    element: <div>Authentication Layout</div>,
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
]);

export default router;
