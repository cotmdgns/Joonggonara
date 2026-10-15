//css
import "./css/adminUserManagement.scss"

// 테이블 컴포넌트
import AdminUserTable from "./component/AdminUserTable";

import { useState } from "react";
// 관리자 페이지 [ 사용자 관리 ]
const AdminUserManagement = () =>{
    // 토글상태값
    const [toggleState, setToggleState] = useState({
        user: false,
        manage: false,
        stop: false,
        delete: false,
    });
    
    // 상태값 변경하기
    const toggleStateButton = (num) => {
        switch(num){
        case 1:
            setToggleState(prev => ({ ...prev, user: !prev.user }));
            break;
        case 2:
            setToggleState(prev => ({ ...prev, manage: !prev.manage }));
            break;
        case 3:
            setToggleState(prev => ({ ...prev, stop: !prev.stop }));
            break;
        case 4:
            setToggleState(prev => ({ ...prev, delete: !prev.delete }));
            break;
        default:
            break;
        }
    }

    return (
        <>
            <div id="management">
                <div className="managementName" onClick={()=>{toggleStateButton(1)}}>일반 사용자</div>
                <div id="managementSun"></div>
                {toggleState.user && <AdminUserTable></AdminUserTable>}
            </div>
            <div id="management">
                <div className="managementName" onClick={()=>{toggleStateButton(2)}}>관리자 사용자</div>
                <div id="managementSun"></div>
                {toggleState.manage && <AdminUserTable></AdminUserTable>}
            </div>
            <div id="management">
                <div className="managementName" onClick={()=>{toggleStateButton(3)}}>정지된 사용자</div>
                <div id="managementSun"></div>
                {toggleState.stop && <AdminUserTable></AdminUserTable>}
            </div>
            <div id="management">
                <div className="managementName" onClick={()=>{toggleStateButton(4)}}>삭제한 사용자</div>
                <div id="managementSun"></div>
                {toggleState.delete && <AdminUserTable></AdminUserTable>}  
            </div>
        </>
    )
}


export default AdminUserManagement;