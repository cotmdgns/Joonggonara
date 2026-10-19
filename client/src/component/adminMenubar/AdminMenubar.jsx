//css
import "./css/AdminMenubar.scss"

// 아이콘
import { FaUserFriends } from "react-icons/fa"; // 사용자
import { IoHomeOutline } from "react-icons/io5";// 홈
import { GrHostMaintenance } from "react-icons/gr"; // 메인
import { ImList } from "react-icons/im"; // 카테고리
import { GrUserPolice } from "react-icons/gr";// 신고누적
import { SiNotion } from "react-icons/si"; // 게시글
import { AiOutlineNotification } from "react-icons/ai"; // 공지

// 리액트
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminMenubar = () =>{
    // 메인에서 사용하는 카테고리는 관리자에서 관라하지만
    // 괸리자에서 사용하는 카테고리는 개발자가 직접관리하는걸로 [ 이유는 관리자가 관리자페이지를 관리한다? 뭔가..]
    // 여기서는 전역관리 필요없음 [ 이유는 따로 들고다닐 데이터가 없음, 각각의 관리에서는 필요하겠다만 ]
    
    const [categoryState, setCategoryState] = useState(1)
    // 카테고리 상태 변경 버튼
    const categoryStateButton = (index) => {
        setCategoryState(index)
        switch(index){
            case 1:
                // 메인페이지
                navigate("/layoutAdmin")
                break;
            case 2:
                //사용자관리
                navigate("adminUserManagement")
                break;
            case 3:
                //공지사항관리
                navigate("adminNotificationManagement")
                break;
            case 4:
                //신고현황관리
                navigate("adminDeclarationManagement")
                break;
            // case 5:
            //     //게시글관리
            //     navigate("adminNoticeManagement")
            //     break;
            case 6:
                // /카테고리관리
                navigate("adminCategoryManagement")
                break;
            case 7:
                // 홈으로 이동
                navigate("/")
                break;
        }
    }
    // 네비
    const navigate = useNavigate();
    return (
        <>
            <div id="adminMenubarBox">
                <div id="adminMenubarBoxHeader">
                    이웃사람(관리페이지)
                </div>
                <div id="adminMenubarBoxCategory">
                    <div onClick={()=>{categoryStateButton(1)}} id={categoryState == 1 && "categoyTrue"}><GrHostMaintenance></GrHostMaintenance>메인페이지</div>
                    <div onClick={()=>{categoryStateButton(2)}} id={categoryState == 2 && "categoyTrue"}><FaUserFriends></FaUserFriends>사용자 관리</div>
                    <div onClick={()=>{categoryStateButton(3)}} id={categoryState == 3 && "categoyTrue"}><AiOutlineNotification></AiOutlineNotification>공지사항 관리</div>
                    <div onClick={()=>{categoryStateButton(4)}} id={categoryState == 4 && "categoyTrue"}><GrUserPolice></GrUserPolice>신고현황 관리</div>
                    {/* <div onClick={()=>{categoryStateButton(5)}} id={categoryState == 5 && "categoyTrue"}><SiNotion></SiNotion>게시글 관리</div> */}
                    <div onClick={()=>{categoryStateButton(6)}} id={categoryState == 6 && "categoyTrue"}><ImList></ImList>카테고리 관리</div>
                    <div onClick={()=>{categoryStateButton(7)}} id={categoryState == 7 && "categoyTrue"}><IoHomeOutline></IoHomeOutline>관리자페이지에서 나가기</div>
                </div>
            </div>
        </>
    )
}

export default AdminMenubar;