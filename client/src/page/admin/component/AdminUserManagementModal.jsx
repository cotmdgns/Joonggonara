import { IoCloseCircleOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect } from "react";
import { deleteHistoryAPI, stopHistoryAPI } from "../api/AdminPageAPI";


const AdminUserManagementModal = ({
        infoState,
        modalState,
        modalClose,
        rankUpdate, // 등급변경 함수
        userStop,   // 정지하기 함수
        userStopRollBack, // 정지 복구 함수
        userDeleteRollBack, // 정지 복구 함수
        userDelete,  // 삭제하기 함수
        dispatch,
        state,
    })=>{
        const {
            bodyHeaderState,
            deleteHistoryList,
            stopHistoryList,
        } = state;


    // 삭제이력
    const deleteHistory = async (code) =>{
        const result = await deleteHistoryAPI(code)
        console.log(result.data)
        dispatch({type:"deleteHistory" , payload : result.data})
    }
    // 정지이력
    const stopHistory = async (code) =>{
        const result = await stopHistoryAPI(code)
         console.log(result.data)
        dispatch({type:"stopHistory" , payload : result.data})
    }


    useEffect(() => {
        if(infoState?.userCode != null) {
            deleteHistory(infoState.userCode);
            stopHistory(infoState.userCode);
        }
    }, [infoState]);



    return(
        <>
        <div className={`modalBody ${modalState ? "active" : ""}`}>
            <div className="modalHeader">
                <div className="modalHeaderH1">사용자 정보</div>
                <div className="modalHeaderClose" onClick={()=>{modalClose()}}><IoCloseCircleOutline/></div>
            </div>
            <div className="modalDataBody">
                <div className="modalBodyLetf">
                    <div className="modalBodyLetfUp">
                        <img id="img"/>
                        <div id="info">
                            <div><span id="id">{infoState.userId}</span></div>
                            <div><span id="nicknmae">{infoState.userNickname}</span><span id="name">{infoState.userName}</span></div>
                        </div>
                    </div>
                    <div className="modalBodyLetfDown">
                        <div id="modalBodyLeftDownInfo"><span id="info"><MdOutlineEmail/>이메일</span><span>{infoState.userEmail}</span></div>
                        <div id="modalBodyLeftDownInfo"><span id="info"><CiCalendar/>가입일</span><span>{infoState.userCreate != null && infoState.userCreate.substring(0, 10)}</span></div>
                        <div id="modalBodyLeftDownInfo"><span id="info"><IoTimeOutline/>상태</span>
                            <span>
                                {infoState.userDelete != null ?  "삭제" : 
                                infoState.userStopDate != null ?  "정지" :
                                infoState.userDelete == null && infoState.userDelete == null &&  "정상"
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="modalBodyRight">
                    <div id="UGbosu">관리</div>
                    <div id={infoState.userManager == 1 ? "managerUpdate" : "managerUpdateAdmin"} onClick={()=>{rankUpdate()}}><FaUserFriends/>{infoState.userManager == 1 ? "관리자로 변경" : "일반 사용자로 변경"}</div>
                   
                   {infoState.userStopDate == null ? 
                    <div id="delete" onClick={()=>{userStop()}}><AiOutlineStop/>정지하기</div>
                   :
                    <div id="deleteRollBack" onClick={()=>{userStopRollBack()}}><AiOutlineStop/>복구하기</div>
                   }
                    
                    
                    
                    {infoState.userDelete == null ? 
                    <div id="delete" onClick={()=>{userDelete()}}><FaTrashAlt/>삭제하기</div>  
                    :
                    <div id="deleteRollBack" onClick={()=>{userDeleteRollBack()}}><AiOutlineStop/>복구하기</div>
                    }
                    
                </div>
            </div>
            <div className="modalDataBodys">
                <div className="modalDataBodysHeader">
                    <div id={bodyHeaderState === 1 ? "HeaderTrue" : ""} onClick={()=>{dispatch({type:"bodyHeaderState",payload : 1})}}>기본 정보</div>
                    <div id={bodyHeaderState === 2 ? "HeaderTrue" : ""} onClick={()=>{dispatch({type:"bodyHeaderState",payload : 2})}}>정지 이력</div>
                    <div id={bodyHeaderState === 3 ? "HeaderTrue" : ""} onClick={()=>{dispatch({type:"bodyHeaderState",payload : 3})}}>삭제 이력</div>
                </div>
                {bodyHeaderState === 1 &&
                <div className="modalDataBodysInfo">
                    <div id="modalDataBodysInfoHeader">상세 정보</div>
                    <div id="modalDataBodysInfoBody">
                        <div><span>사용자 ID</span><span id="box">{infoState.userId}</span></div>
                        <div><span>닉네임</span><span id="box">{infoState.userNickname}</span></div>
                        <div><span>이름</span><span id="box">{infoState.userName}</span></div>
                        <div><span>이메일</span><span id="box">{infoState.userEmail}</span></div>
                        <div><span>등급</span><span id="box">{infoState.userManager == 1 ? "일반 사용자" : "관리자"}</span></div>
                        <div><span>자기소개</span><span id="box">{infoState.userInfo    }</span></div>
                    </div>
                </div>
                }
                {bodyHeaderState === 2 &&
                <div className="modalDataBodysInfo">
                    <div id="modalDataBodysInfoHeader">상세 정보</div>
                    <div id="modalDataBodysInfoBody">
                        {stopHistoryList.map((history,index)=>{
                            return(
                                <>
                                <div key={index}><span>삭제된 날짜</span><span id="box">{history.userStopDate}</span></div>
                                <div><span>삭제풀린 날짜</span><span id="box">{history.userStopLooseDate}</span></div>
                                </>
                            )
                        })}
                    </div>
                </div>
                }
                {bodyHeaderState === 3 &&
                <div className="modalDataBodysInfo">
                    <div id="modalDataBodysInfoHeader">상세 정보</div>
                    <div id="modalDataBodysInfoBody">
                        {deleteHistoryList.map((history,index)=>{
                            return(
                                <>
                                <div key={index}><span>삭제된 날짜</span><span id="box">{history.userDelete}</span></div>
                                <div><span>삭제풀린 날짜</span><span id="box">{history.userDeleteLoose}</span></div>
                                </>
                            )
                        })}
                    </div>
                </div>
                }

            </div>
            <div onClick={()=>{modalClose()}} className="modalFooter">닫기</div>
        </div>
        </>
    )
}

export default AdminUserManagementModal;