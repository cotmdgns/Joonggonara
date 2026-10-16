import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./page/Main/Main";
import Login from "./page/Login/Login";
import SignUp from "./page/signUp/SignUp";
import NoticeDetail from "./page/noticeDetail/NoticeDetail";
import MyPage from "./page/myPage/MyPage";
import JogoProductDetail from "./page/product/JogoProductDetail";
import JogoProduct from "./page/product/JogoProduct";
import AdminPage from "./page/admin/AdminPage";
import LayoutAdmin from "./component/LayoutAdmin";
import AdminUserManagement from "./page/admin/AdminUserManagement";
import AdminDeclarationManagement from "./page/admin/AdminDeclarationManagement";
import AdminNoticeManagement from "./page/admin/AdminNoticeManagement";
import AdminNotificationManagement from "./page/admin/AdminNotificationManagement";
import AdminCategoryManagement from "./page/admin/AdminCategoryManagement";
import AdminNotification from "./page/admin/component/AdminNotification";
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
        path:"layoutAdmin", // 관리자 페이지
        element: <LayoutAdmin />,
        children : [
            {
                index: true,
                element: <AdminPage />,
            },
            {
                path : "adminUserManagement", // 사용자 관리
                element :<AdminUserManagement/>
            },
            {
                path : "adminDeclarationManagement", // 신고현황 관리
                element :<AdminDeclarationManagement/>
            },
            {
                path : "adminNoticeManagement", // 게시글 관리
                element :<AdminNoticeManagement/>
            },
            {
                path : "adminNotificationManagement", // 공지사항 관리
                element :<AdminNotificationManagement/>
            },
            {
                // 공지사항 상세 페이지
                path : "adminNotificationManagement/AdminNotification/:code", 
                element :<AdminNotification/>
            },
            {
                // 공지사항 생성 페이지
                path : "adminNotificationManagement/AdminNotification/create", 
                element :<AdminNotification/>
            },
            {
                path : "adminCategoryManagement", // 카테고리 관리
                element :<AdminCategoryManagement/>
             },
        ]
    },
])


export default router;