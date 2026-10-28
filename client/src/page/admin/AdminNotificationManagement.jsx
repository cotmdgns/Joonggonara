

//css
import "./css/AdminNotificationManagement.scss"

// 네비게이트
import { useNavigate } from "react-router-dom";
import { useParams,useLocation} from "react-router-dom";
import { adminNotificationManagementSelectAPI } from "./api/AdminPageAPI";
import { useEffect, useReducer } from "react";
import { AdminNotificationReduser, initiaAdminNotificationReduser } from "./reduser/AdminNotificationReduser";

// 관리자 페이지 [ 공지사항 관리 ]
// 이 페이지는 일반 공지사항이랑 같이 쓸 예정임
// url 로케이션으로 구분해서 사용할 예정
// 그러면 공지사항은 금방 뚝딱 끝
const AdminNotificationManagement = () =>{
    // 네비
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(
    AdminNotificationReduser,
    initiaAdminNotificationReduser,
    );
    const {notificationList} = state;

    //공지사항 전체조회하기
    const notificationManagementSelect = async () =>{
        const result = await adminNotificationManagementSelectAPI();
        dispatch({type:"notificationList", payload : result.data})
    }

    // 공지사항 상세 디테일
    const notificationButton = (code) =>{
        navigate(`/layoutAdmin/adminNotificationManagement/AdminNotification/${code}`);
    }
    // 공지사항 생성 디테일
    const notificationCreateButton = () =>{
        navigate(`/layoutAdmin/adminNotificationManagement/AdminNotification/create`);
    }

    // 왼쪽으로 이동
    const leftButton = () =>{

    }

    // 오른쪽으로 이동
    const rightButton = () =>{
        
    }

    // 페이징 버튼
    const moveButton = () =>{

    }

    useEffect(()=>{
        notificationManagementSelect()
        console.log(state.notificationList)
    },[])
    return (
        <>
            <div id="notification">
                <div id="notificationHeader">공지사항관리</div>
                <div id="notificationCenter">
                    <div>
                        <table className="managementTable">
                            <thead className="managementTableH">
                                <tr>
                                    <th id="number">넘버</th>
                                    <th id="title">공지사항 이름</th>
                                    <th id="name">만든이</th>
                                    <th id="boo">광고여부</th>
                                    <th id="boo">사용여부</th>
                                    <th id="date">생성날짜</th>
                                </tr>
                            </thead>
                            {notificationList.map((list,index)=>{
                                return(
                                <tbody className="managementTableB" key={index}>
                                    <tr style={{cursor:"pointer"}} onClick={()=>{notificationButton(list.notificationManagementCode)}}>
                                        <td>{list.notificationManagementCode}</td>
                                        <td>{list.notificationManagementTitle}</td>
                                        <td>{list.userName}</td>
                                        <td>{list.notificationManagementBannerBoo ? "사용중":"사용안함"}</td>
                                        <td>{list.notificationManagementBoo  ? "사용중":"사용안함"}</td>
                                        <td>{list.notificationManagementCreate.substring(0, 10)}</td>
                                    </tr>
                                </tbody>
                                )
                            })}

                        </table>
                    </div>
                    <div id="paging">
                        <div className="pageB">◀</div>
                        <div className="pageB">1</div>
                        <div className="pageB">1</div>
                        <div className="pageB">1</div>
                        <div className="pageB">1</div>
                        <div className="pageB">1</div>
                        <div className="pageB">1</div>
                        <div className="pageB">▶</div>
                        <div id="createButton" onClick={() => {notificationCreateButton()}}>생성</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AdminNotificationManagement;