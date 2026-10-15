import { Outlet } from "react-router-dom";

// 컴포넌트
import AdminMenubar from "./adminMenubar/AdminMenubar";

const LayoutAdmin = () => {
    return (
        <>
            <div>
                <AdminMenubar></AdminMenubar>
                <div id="adminLayoutHeaderBox">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default LayoutAdmin;