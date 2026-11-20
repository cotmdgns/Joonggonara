import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () =>{
    
    const token = sessionStorage.getItem("token");
        
   
    // 로그인하지 않은 경우
    if (!token) {
        alert("로그인을 해주세요.")
        return <Navigate to="/login" replace />;
    }



    // 로그인했다면 자식 페이지 보여주기
    return <Outlet />;
}

export default PrivateRoute;