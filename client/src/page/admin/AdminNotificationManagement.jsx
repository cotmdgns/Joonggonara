

//css
import "./css/AdminNotificationManagement.scss"

// 네비게이트
import { useNavigate } from "react-router-dom";
import { useParams,useLocation} from "react-router-dom";

// 관리자 페이지 [ 공지사항 관리 ]
const AdminNotificationManagement = () =>{
    // 네비
    const navigate = useNavigate();

    // url 로케이션 전체?
    const location = useLocation()  

    // 공지사항 상세 디테일
    const notificationButton = (code) =>{
        navigate(`/layoutAdmin/adminNotificationManagement/AdminNotification/${code}`);
    }

    // 공지사항 생성 디테일
    const notificationCreateButton = () =>{
        navigate(`/layoutAdmin/adminNotificationManagement/AdminNotification/create`);
    }
    return (
        <>
            <div id="notification">
                <div id="notificationHeader">공지사항관리</div>
                <div id="notificationCenter">
                    <div>
                        <table className="managementTable">
                            <thead className="managementTableH">
                                <tr>
                                    <th>넘버</th>
                                    <th>공지사항 이름</th>
                                    <th>만든이</th>
                                    {location.pathname.includes("layoutAdmin")
                                        ? (
                                            <>
                                                <th>광고여부</th>
                                                <th>사용여부</th>
                                            </>
                                        )
                                        : <></>
                                    }
                                    <th>생성날짜</th>
                                </tr>
                            </thead>
                            <tbody className="managementTableB">
                                <tr style={{cursor:"pointer"}} onClick={()=>{notificationButton(1)}}>
                                    <td>1</td>
                                    <td>오늘도 안전한 광고</td>
                                    <td>어드민</td>
                                    {location.pathname.includes("layoutAdmin")
                                        ? (
                                            <>
                                            <td>O</td>
                                            <td>O</td>
                                            </>
                                        )
                                        : <></>
                                    }
                                    <td>2026-10-11</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>페이징역할(10개 보여주고, 10번까지)</div>
                    <div onClick={() => {notificationCreateButton()}}>생성버튼역할 포지션 앱솔루트사용해서 올리기</div>
                </div>
            </div>
        </>
    )
}


export default AdminNotificationManagement;