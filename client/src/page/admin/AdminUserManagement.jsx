//css
import "./css/adminUserManagement.scss"

// 테이블 컴포넌트
import AdminUserManagementModal from "./component/AdminUserManagementModal";

// 아이콘
import { FaUser } from "react-icons/fa";            // 전체
import { FaUserCheck } from "react-icons/fa";       // 정상
import { FaUserSlash } from "react-icons/fa";       // 정지된
import { IoTrashBinSharp } from "react-icons/io5";  // 삭제된
import { useEffect, useReducer } from "react";
import { AdminUserManagementReduser, initiaAdminUserManagementReduser } from "./reduser/AdminUserManagementReduser";
import { userALlSelectlAPI } from "./api/AdminPageAPI";

// 리듀서




// 관리자 페이지 [ 사용자 관리 ]
const AdminUserManagement = () =>{  

    const[state,dispatch] = useReducer(AdminUserManagementReduser,initiaAdminUserManagementReduser)
    const{modalState,modalData,jgUserInfoList,pageMake} = state;

    // 등급 변경
    const rankUpdate = () =>{

    }

    // 정지하기
    const userStop = ()=>{

    }

    // 삭제하기
    const userDelete = ()=>{

    }

    // 모달창 띄우기 (조건) [ 정상 작동 ]
    const userModal = () =>{
        dispatch({type:"modalState"})
    }
    // 모달창 닫기
    const modalClose = () => {
        dispatch({type:"modalClose"})
    }

    // 조건에 따른 전체 데이터 조회
    const userALlSelect = async () =>{

        const data ={
            code : 0,                  // 페이지 번호
            userName: "",               // 사용자 이름
            userManager: "",            // 사용자 등급
            userStateBoo: ""            // 사용자 상태
        }

        const result = await userALlSelectlAPI(data);
        dispatch({type:"userALlSelect" ,payload:result.data})
    }

    useEffect(()=>{
        userALlSelect();
    },[])

    console.log(jgUserInfoList)
    console.log(pageMake)
    return (
        <>          
        <div id="management">
            <div id="managementHeader">
                <div id="managementHeaderH1">사용자 관리</div>
                <div id="managementHeaderInfo">사용자를 검색하고, 관리할 수 있습니다.</div>
            </div>
            <div id="managementInfo"> {/* 사용자 정보 박스 */}
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(184, 175, 244)"}}>
                        <div style={{background : "rgb(80, 56, 234)",color:"white"}}><FaUser></FaUser></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">전체 사용자</div>
                        <div id="managementInfoBoxRigthCount">0</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(138, 231, 150)"}}>
                        <div style={{background : "rgb(60, 215, 80)",color:"white"}}><FaUserCheck></FaUserCheck></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">정상 사용자</div>
                        <div id="managementInfoBoxRigthCount">0</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(243, 203, 143)"}}>
                        <div style={{background : "rgb(248, 165, 41)",color:"white"}}><FaUserSlash></FaUserSlash></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">정지된 사용자</div>
                        <div id="managementInfoBoxRigthCount">0</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(241, 120, 120)"}}>
                        <div style={{background : "rgb(229, 43, 43)",color:"white"}}><IoTrashBinSharp></IoTrashBinSharp></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">삭제된 사용자</div>
                        <div id="managementInfoBoxRigthCount">0</div>
                    </div>
                </div>
            </div>
             <div id="managementInfoTable">
                <div id="managementInfoTableSearch">
                    <input id="managementInfoTableSearchInput" type="text" placeholder="검색할 아이디를 입력.."/>
                    <div>
                        <select id="managementInfoTableSearchSelect">
                            <option value="all">전체 등급</option>
                            <option value="admin">관리자 등급</option>
                            <option value="nomal">일반 등급</option>
                        </select>
                        <select id="managementInfoTableSearchSelect">
                            <option>전체 상태</option>
                            <option>정상 사용자</option>
                            <option>정지된 사용자</option>
                            <option>삭제한 사용자</option>
                        </select>
                        <button id="managementInfoTableSearchButton">검색</button>
                    </div>
                </div>
                <div className="managementInfoTableBox">
                    <table className="managementInfoTable">
                        <thead>
                            <tr>
                                <th className="check">
                                    <input type="checkbox" />
                                </th>
                                <th className="number">번호</th>
                                <th>이름</th>
                                <th>아이디</th>
                                <th>가입일</th>
                                <th>삭제일</th>
                                <th>정지일</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* 여기에 반복문 돌려야 함 */}
                            <tr onClick={()=>{userModal()}}>
                                <td className="check">
                                    <input type="checkbox" />
                                </td>
                                <td className="number">1</td>
                                <td>채승훈</td>
                                <td>gd</td>
                                <td>2026-10-21</td>
                                <td>
                                    <span className="statusBadge deleted">2026-10-28</span>
                                </td>
                                <td>
                                    <span className="statusBadge suspended">2026-10-27</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* 페이지네이션 */}
                    <div className="managementPagination">
                        <div className="pageButtons">
                            {pageMake.prev &&
                            <button type="button" className="pageArrow">
                                &lt;
                            </button>
                            }
                            {/* 여기에 버튼함수 만들어야 함 페이징 ㅇㅇ */}
                            <button type="button" className="active">1</button>
                            <button type="button">2</button>
                            {pageMake.next &&
                            <button type="button" className="pageArrow">
                                &gt; 
                            </button>
                            }

                        </div>
                    </div>
                </div>
             </div>
            {/* 모달창 */}
            <AdminUserManagementModal 
                modalState={modalState} 
                modalClose={modalClose} 
                rankUpdate={rankUpdate}
                userStop={userStop}
                userDelete={userDelete}
                dispatch={dispatch}
                state={state}
            />
        </div>  
        </>
    )
}


export default AdminUserManagement;