import { createHashRouter } from "react-router-dom";
import Layout from '@/layout'
import Home from "@/pages/Home";
import About from "@/pages/About";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ]
  },
]);

export default router;
