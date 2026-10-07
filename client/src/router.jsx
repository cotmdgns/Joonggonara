import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./page/Main/Main";
import Login from "./page/Login/Login";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: "login",
                element: <Login />,
            }
        ]
    }
])

export default router;