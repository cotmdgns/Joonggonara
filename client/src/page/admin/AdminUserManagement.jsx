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
import { deleteHistoryAPI, rankUpdateAPI, stopHistoryAPI, userALlSelectlAPI, userDeleteAPI, userDeleteRollBackAPI, userStopAPI, userStopRollBackAPI } from "./api/AdminPageAPI";
import { useSearchParams } from "react-router-dom";

// 리듀서




// 관리자 페이지 [ 사용자 관리 ]
const AdminUserManagement = () =>{  

    const[state,dispatch] = useReducer(AdminUserManagementReduser,initiaAdminUserManagementReduser)
    const{
        modalState,
        modalData,
        jgUserInfoList,
        pageMake,
        selectAll,
        selectNormal,
        selectStop,
        selectDelete,
        infoState,
        searchSelectManager,
        searchSelectState,
        searchSelectName,
    } = state;

    /////////////////// 모달창에서 사용하는 함수들
    // 등급 변경 [ 정상작동함 ]
    const rankUpdate = async () =>{
        if(infoState.userManager === 1){
            if(window.confirm("관리자 등급으로 변경하시겠습니까?")){
                // 사용자 매니저상태 변경만 하면 끝
                const data = {
                    "userManager" : 2,
                    "userCode" : infoState.userCode,
                }
                const result = await rankUpdateAPI(data)
                dispatch({type:"infoState", payload : result.data})
                userALlSelect()
                alert("변경되었습니다.")
            }
        }else{
            if(window.confirm("일반 사용자 등급으로 변경하시겠습니까?")){
                // 사용자 매니저상태 변경만 하면 끝
                const data = {
                    "userManager" : 1,
                    "userCode" : infoState.userCode,
                }
                const result = await rankUpdateAPI(data)
                dispatch({type:"infoState", payload : result.data})
                userALlSelect()
                alert("변경되었습니다.")
            }
        }

    }
    // 정지하기 [ 정상작동함 ]
    const userStop = async ()=>{
        if(window.confirm("사용자 계정을 정지하시겠습니까?")){
            // 여기서의 정지는 무기한으로 가자
            const code = infoState.userCode;
            const result = await userStopAPI(code)
            dispatch({type:"infoState", payload : result.data})
            userALlSelect()
            alert("정지 되었습니다.")
        }
    }

    // 정지롤백하기 [ 정상작동함 ]
    const userStopRollBack = async ()=>{
        if(window.confirm("사용자 계정을 복구하시겠습니까?")){
            const data = {
                "userCode" : infoState.userCode,
                "userStopDate" : infoState.userStopDate,
            }
            const result = await userStopRollBackAPI(data)

            dispatch({type:"infoState", payload : result.data})
            userALlSelect()
            alert("복구 되었습니다.")
        }
    } 
    // 삭제하기 [ 정상작동함 ]
    const userDelete = async ()=>{
        if(window.confirm("사용자를 삭제하시겠습니까?")){
            const code = infoState.userCode;
            const result = await userDeleteAPI(code)
            dispatch({type:"infoState", payload : result.data})
            userALlSelect()
            alert("삭제 되었습니다.")
        }
    }
    // 삭제 된 사용자 아이디 롤백 시키기 [ 정상작동함 ]
    const userDeleteRollBack = async ()=>{
        if(window.confirm("사용자 계정을 복구하시겠습니까?")){
            const data = {
                "userCode" : infoState.userCode,
                "userDelete" : infoState.userDelete,
            }
            const result = await userDeleteRollBackAPI(data)
            dispatch({type:"infoState", payload : result.data})
            userALlSelect()
            alert("복구 되었습니다.")
        }
    }


    ///////////////////////////////////////////
    // 모달창 띄우기 (조건) [ 정상 작동 ]
    const userModal = (info) =>{
        dispatch({type:"modalState"})
        dispatch({type:"infoState", payload : info})
    }
    // 모달창 닫기
    const modalClose = () => {
        dispatch({type:"modalClose"})
        dispatch({type:"bodyHeaderState", payload : 1})
    }

    // 조건에 따른 전체 데이터 조회
    // 페이징부터 적용해야함 ;;
    const userALlSelect = async (code) =>{
        const data ={
            code : code == null ? 1:code,                  // 페이지 번호
            userId: searchSelectName,               // 사용자 이름
            userManager: searchSelectManager,            // 사용자 등급
            userStateBoo: searchSelectState            // 사용자 상태
        }
        const result = await userALlSelectlAPI(data);
        dispatch({type:"userALlSelect" ,payload:result.data})
    }
    

    const [searchParams,setSearchParams] = useSearchParams();
    const pageNum = Number(searchParams.get("pageNum") || 1);
    const createButton = () =>{
        const result = []
        for (let i = pageMake.startPage; i <= pageMake.endPage; i++) {
            if(pageNum === i){
             result.push(
                <button
                    type="button"
                    key={i}
                    className="active"
                    onClick={() => {setSearchParams({ pageNum: String(i) }),userALlSelect(i)}}
                    
                >
                    {i}
                </button>
            );               
            }else{
                result.push(
                <button
                    type="button"
                    key={i}
                    onClick={() => {setSearchParams({ pageNum: String(i) }),userALlSelect(i)}}
                >
                    {i}
                </button>
            );
            }

        }
        return result;
    }

    useEffect(()=>{
        userALlSelect();
    },[])
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
                        <div id="managementInfoBoxRigthCount">{selectAll}</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(138, 231, 150)"}}>
                        <div style={{background : "rgb(60, 215, 80)",color:"white"}}><FaUserCheck></FaUserCheck></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">정상 사용자</div>
                        <div id="managementInfoBoxRigthCount">{selectNormal}</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(243, 203, 143)"}}>
                        <div style={{background : "rgb(248, 165, 41)",color:"white"}}><FaUserSlash></FaUserSlash></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">정지된 사용자</div>
                        <div id="managementInfoBoxRigthCount">{selectStop}</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(241, 120, 120)"}}>
                        <div style={{background : "rgb(229, 43, 43)",color:"white"}}><IoTrashBinSharp></IoTrashBinSharp></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">삭제된 사용자</div>
                        <div id="managementInfoBoxRigthCount">{selectDelete}</div>
                    </div>
                </div>
            </div>
             <div id="managementInfoTable">
                <div id="managementInfoTableSearch">
                    <input id="managementInfoTableSearchInput" type="text" placeholder="검색할 아이디를 입력.."
                        value={searchSelectName}
                        onChange={(e)=>{
                            dispatch({type:"searchSelectName", payload : e.target.value})
                        }}
                    />
                    <div>
                        <select id="managementInfoTableSearchSelect" 
                                onChange={(e)=>{dispatch({type:"searchSelectManager",payload : e.target.value})}}
                        >
                            <option value="0">전체 등급</option>
                            <option value="2">관리자 등급</option>
                            <option value="1">일반 등급</option>
                        </select>
                        <select id="managementInfoTableSearchSelect" 
                                onChange={(e)=>{dispatch({type:"searchSelectState",payload : e.target.value})}}
                        >
                            <option value="all">전체 상태</option>
                            <option value="normal">정상 사용자</option>
                            <option value="stop">정지된 사용자</option>
                            <option value="delete">삭제한 사용자</option>
                        </select>
                        <button id="managementInfoTableSearchButton" onClick={()=>{userALlSelect(1)}}>검색</button>
                    </div>
                </div>
                <div className="managementInfoTableBox">
                    <table className="managementInfoTable">
                        <thead>
                            <tr>

                                <th className="number">번호</th>
                                <th>이름</th>
                                <th>아이디</th>
                                <th>등급</th>
                                <th>가입일</th>
                                <th>삭제일</th>
                                <th>정지일</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* 여기에 반복문 돌려야 함 */}
                            {jgUserInfoList.map((info,index)=>{
                                return(
                                <tr key={index} onClick={()=>{userModal(info)}}>

                                    <td className="number">{info.userCode}</td>
                                    <td>{info.userName}</td>
                                    <td>{info.userId}</td>
                                    <td>{info.userManager == 1 ? "일반 사용자" : "관리자"}</td>
                                    <td>{info.userCreate.substring(0, 10)}</td>
                                    <td>
                                        {info.userDelete != null ? 
                                        <span className="statusBadge deleted">{info.userDelete != null && info.userDelete.substring(0, 10)}</span>
                                        :
                                        <span>-</span>
                                        }
                                    </td>
                                    <td>
                                        {info.userStopDate != null ? 
                                        <span className="statusBadge suspended">{info.userStopDate != null && info.userStopDate.substring(0, 10)}</span>
                                        : 
                                        <span >-</span>
                                        }
                                    </td>
                                </tr>
                                )
                            })}

                        </tbody>
                    </table>

                    {/* 페이지네이션 */}
                    <div className="pagination">
                        {pageMake.prev &&
                        <button type="button" className="pageArrow"
                                                onClick={() => {setSearchParams({ pageNum: String(state.pageMake.startPage - 1) }),userALlSelect(state.pageMake.startPage - 1)}}
                        >
                            &lt;
                        </button>
                        }
                        {/* 여기에 버튼함수 만들어야 함 페이징 ㅇㅇ */}
                        {createButton()}
                        {pageMake.next &&
                        <button type="button" className="pageArrow"
                        onClick={() => {setSearchParams({ pageNum: String(state.pageMake.endPage + 1) }),userALlSelect(state.pageMake.endPage + 1)}}
                        >
                            &gt; 
                        </button>
                        }
                    </div>
                </div>
             </div>
            {/* 모달창 */}
            <AdminUserManagementModal 
                modalState={modalState} 
                modalClose={modalClose} 
                rankUpdate={rankUpdate}
                userStop={userStop}
                userStopRollBack = {userStopRollBack}
                userDelete={userDelete}
                userDeleteRollBack = {userDeleteRollBack}
                dispatch={dispatch}
                state={state}
                infoState={infoState}
            />
        </div>  
        </>
    )
}


export default AdminUserManagement;