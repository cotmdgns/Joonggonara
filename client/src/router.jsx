import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./page/Main/Main";
import Login from "./page/Login/Login";
import SignUp from "./page/signUp/SignUp";
import NoticeDetail from "./page/noticeDetail/NoticeDetail";
import MyPage from "./page/myPage/MyPage";
import JogoProductDetail from "./page/product/JogoProductDetail";
import JogoProduct from "./page/product/JogoProduct";
import JogoProductCreate from "./page/product/JogoProductCreate";
import AdminPage from "./page/admin/AdminPage";

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
            {
                path:"jogoProductDetail", // 디테일페이지 [ 코드 필요 ]
                element: <JogoProductDetail/>,
            },
            {
                path:"jogoProduct", // 상품페이지 [ 코드 필요 ]
                element: <JogoProduct/>,
            },
            {
                path:"jogoProductCreate",
                element: <JogoProductCreate/>,
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
    },
    {
        path:"adminPage", // 어드민 페이지
        element: <AdminPage/>,
    },
])

export default router;