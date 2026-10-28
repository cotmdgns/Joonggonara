import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./page/Main/Main";
import Login from "./page/Login/Login";
import SignUp from "./page/signUp/SignUp";
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
                index: true, // 메인
                element: <Main />,
            },
            {
                path:"myPage",  // 내 정보
                element: <MyPage/>,
            },
            {
                path:"jogoProduct/:category", // 상품페이지 [ 상위 카테고리가 하나뿐일 떄]
                element: <JogoProduct/>,
            },
            {
                path:"jogoProduct/:category/:category2", // 상품페이지 [ 상위 밑에 하위 카테고리가 존재할 때 ]
                element: <JogoProduct/>,
            },
            {
                path:"jogoProductDetail/product/:code", // 디테일페이지
                element: <JogoProductDetail/>,
            },
            {
                path : "NotificationManagement", // 공지사항 관리   // 그냥 페이지 새롭게 하나 만들어야 함
                element :<AdminNotificationManagement/>
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
                // 공지사항 수정 페이지
                path : "adminNotificationManagement/AdminNotification/update/:code", 
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