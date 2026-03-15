import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Layout</div>,
  },
  {
    path: "/auth",
    element: <div>Authentication Layout</div>,
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
