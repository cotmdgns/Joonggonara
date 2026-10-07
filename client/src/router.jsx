import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./page/Main/Main";
import SignUp from "./page/signUp/SignUp";
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
                path: "signUp",
                element: <SignUp />,
            }
            // { 이렇게
            //     path: "login",
            //     element: <Login />,
            // }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
])

export default router;