
// scss
import "./css/AdminDeclarationManagement.scss"

//컴포넌트 
import AdminDeclarationModal from "./component/AdminDeclarationModal";

//리액트
import { useState } from "react";



// 관리자 페이지 [ 신고현황 관리 ]
const AdminDeclarationManagement = () =>{

    const[boo,setBoo] = useState(false)

    // 모달창 끄기
    const modalClose = ()=>{
        setBoo(!boo);
    }

    // 모달창 열기
    const modalOpen = () =>{    
        setBoo(!boo);
    }

    return (
        <> 
            <div>  
                <div onClick={() => {modalOpen()}}>button</div>
                {boo && <AdminDeclarationModal modalClose={modalClose}/>}
            </div>
        </>
    )
}

export default AdminDeclarationManagement;