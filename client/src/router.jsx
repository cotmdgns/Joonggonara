import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Main from "./page/Main/Main";
import Login from "./page/login/Login.jsx";
import SignUp from "./page/signUp/SignUp.jsx";
import MyPage from "./page/myPage/MyPage.jsx";
import JogoProductDetail from "./page/product/JogoProductDetail";
import JogoProduct from "./page/product/JogoProduct";
import LayoutAdmin from "./component/LayoutAdmin";
import AdminUserManagement from "./page/admin/AdminUserManagement";
import AdminDeclarationManagement from "./page/admin/AdminDeclarationManagement";
import AdminNoticeManagement from "./page/admin/AdminNoticeManagement";
import AdminNotificationManagement from "./page/admin/AdminNotificationManagement";
import AdminCategoryManagement from "./page/admin/AdminCategoryManagement";
import AdminNotification from "./page/admin/component/AdminNotification";
import Notification from "./page/notification/Notification.jsx";
import NotificationDetail from "./page/notification/compoenet/NotificationDetail";
import PrivateRoute from "./PrivateRoute";
import Alram from "./page/alram/Alram";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // 메인
        element: <Main />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "alram", // 알람
            element: <Alram />,
          },
          {
            path: "myPage", // 내 정보
            element: <MyPage />,
          },
          {
            path: "jogoProduct", // 상품페이지 [ 헤더 검색 ]
            element: <JogoProduct />,
          },
          {
            path: "jogoProduct/category/:category", // 상품페이지 [ 상위 카테고리가 하나뿐일 떄]
            element: <JogoProduct />,
          },
          {
            path: "jogoProduct/category/:category/:category2", // 상품페이지 [ 상위 카테고리가 하나뿐일 떄]
            element: <JogoProduct />,
          },
          {
            path: "jogoProduct/category/:category/:category2/:category3", // 상품페이지 [ 상위 밑에 하위 카테고리가 존재할 때 ]
            element: <JogoProduct />,
          },
          {
            path: "jogoProduct/weekly", // 이번 주 등록 된 상품
            element: <JogoProduct />,
          },
          {
            path: "jogoProduct/recommend", // 내 주소 추천 상품
            element: <JogoProduct />,
          },
          {
            path: "jogoProductDetail/product/:code", // 디테일페이지
            element: <JogoProductDetail />,
          },
          {
            path: "notification", // 일반 전용 공지사항 페이지
            element: <Notification />,
          },
          {
            path: "notification/notificationDetail/:code", // 일반 전용 공지사항 디테일 페이지
            element: <NotificationDetail />,
          },
        ],
      },

      // { 이렇게
      //     path: "login",
      //     element: <Login />,
      // }
    ],
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
    element: <PrivateRoute />,
    children: [
      {
        path: "layoutAdmin", // 관리자 페이지
        element: <LayoutAdmin />,
        children: [
          // {
          //     index: true,
          //     element: <AdminPage />,
          // },
          // {
          //     path : "adminUserManagement", // 사용자 관리
          //     element :<AdminUserManagement/>
          // }
          {
            index: true,
            element: <AdminUserManagement />,
          },
          {
            path: "adminDeclarationManagement", // 신고현황 관리
            element: <AdminDeclarationManagement />,
          },
          {
            path: "adminNoticeManagement", // 게시글 관리
            element: <AdminNoticeManagement />,
          },
          {
            path: "adminNotificationManagement", // 공지사항 관리
            element: <AdminNotificationManagement />,
          },
          {
            // 공지사항 상세 페이지
            path: "adminNotificationManagement/AdminNotification/:code",
            element: <AdminNotification />,
          },
          {
            // 공지사항 생성 페이지
            path: "adminNotificationManagement/AdminNotification/create",
            element: <AdminNotification />,
          },
          {
            // 공지사항 수정 페이지
            path: "adminNotificationManagement/AdminNotification/update/:code",
            element: <AdminNotification />,
          },
          {
            path: "adminCategoryManagement", // 카테고리 관리
            element: <AdminCategoryManagement />,
          },
        ],
      },
    ],
  },
]);

export default router;
