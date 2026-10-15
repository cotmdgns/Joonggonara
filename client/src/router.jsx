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
            // 페이지 안에는 
            // 1. 기본적은 통계를 볼 수 있는 공간
            // 2. 사용자 정지 또는 풀어줄 수 있는 공간
            // 3. 생성된 사용자, 거래내역
            // 4. 사용자 신고내역 확인
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
                path : "adminCategoryManagement", // 카테고리 관리
                element :<AdminCategoryManagement/>
             },
        ]
    },
])


export default router;