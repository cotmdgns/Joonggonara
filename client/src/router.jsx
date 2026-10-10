import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./page/Main/Main";
import Login from "./page/Login/Login";
import SignUp from "./page/signUp/SignUp";
import NoticeDetail from "./page/noticeDetail/NoticeDetail";
import MyPage from "./page/myPage/MyPage";

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
                path:"noticeDetail",
                element: <NoticeDetail/>,
            },
            {
                path:"myPage",
                element: <MyPage/>,
            },
            // { 이렇게
            //     path: "login",
            //     element: <Login />,
            // }
        ]
    },
    {
        path: "login",
        element: <Login />,
    },
    { 
        path: "signUp",
        element: <SignUp />,
    }
])

export default router;