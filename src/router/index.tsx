import { createHashRouter } from "react-router-dom";
import Layout from '@/layout'
import Home from "@/pages/Home";
import Login from '@/pages/Login';

const router = createHashRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ]
  },
]);

export default router;
