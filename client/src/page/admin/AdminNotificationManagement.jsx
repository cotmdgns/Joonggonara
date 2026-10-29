

//css
import "./css/AdminNotificationManagement.scss"

// 네비게이트
import { useNavigate, useSearchParams } from "react-router-dom";
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
    const {notificationList,pagingData,pagingButtonArr} = state;

    ////공지사항 전체조회하기
    // url에 있는 파라미터 pageNum 꺼내서 사용하기
    const [searchParams,setSearchParams] = useSearchParams();

    const pageNum = Number(searchParams.get("pageNum") || 1);

    const notificationManagementSelect = async () =>{
        const result = await adminNotificationManagementSelectAPI(pageNum);
        console.log(result.data)
        dispatch({
            type: "notificationList",
            payload: result.data.notificationManagementList
        });

        dispatch({
            type: "pagingData",
            payload: result.data.pageMake
        });
        
        createButton()
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
        setSearchParams({ pageNum: pagingData.startPage - 1 })
    }

    // 오른쪽으로 이동
    const rightButton = () =>{
        setSearchParams({ pageNum: pagingData.endPage +1 })
    }

    // 페이징 버튼 만드는 함수
    const createButton = () =>{
        const result = []
        for (let i = 1; i <= pagingData.endPage; i++) {
            result.push(
                <div
                    key={i}
                    className="pageB"
                    onClick={() => setSearchParams({ pageNum: String(i) })}
                >
                    {i}
                </div>
            );
        }
        return result;
    }

    useEffect(()=>{
        notificationManagementSelect()
    },[])

    useEffect(() => {
        notificationManagementSelect();
    }, [pageNum]);

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
                        {pagingData.prev && 
                        <div className="pageB" onClick={()=>{
                            leftButton()
                        }}>◀</div>
                        }
                        
                        {createButton()}
                        {pagingData.next && 
                        <div className="pageB" onClick={()=>{
                            rightButton()
                        }}>▶</div>  
                        }
                        <div id="createButton" onClick={() => {notificationCreateButton()}}>생성</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AdminNotificationManagement;