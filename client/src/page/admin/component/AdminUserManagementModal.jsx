import { IoCloseCircleOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";


const AdminUserManagementModal = ({
        modalState,
        modalClose,
        rankUpdate, // 등급변경 함수
        userStop,   // 정지하기 함수
        userDelete,  // 삭제하기 함수
        dispatch,
        state,
    })=>{
        const {bodyHeaderState} = state;
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
                            <div><span id="id">아이디</span><span id="rank">등급</span></div>
                            <div><span id="nicknmae">닉네임</span><span id="name">채승훈</span></div>
                        </div>
                    </div>
                    <div className="modalBodyLetfDown">
                        <div id="modalBodyLeftDownInfo"><span id="info"><MdOutlineEmail/>이메일</span><span>cooccco@naver.com</span></div>
                        <div id="modalBodyLeftDownInfo"><span id="info"><CiCalendar/>가입일</span><span>2025-10-21 14:53</span></div>
                        <div id="modalBodyLeftDownInfo"><span id="info"><IoTimeOutline/>상태</span><span>정상</span></div>
                    </div>
                </div>
                <div className="modalBodyRight">
                    <div id="UGbosu">관리</div>
                    <div id="managerUpdate" onClick={()=>{rankUpdate()}}><FaUserFriends/>등급변경</div>
                    <div id="delete" onClick={()=>{userStop()}}><AiOutlineStop/>정지하기</div>
                    <div id="delete" onClick={()=>{userDelete()}}><FaTrashAlt/>삭제하기</div>
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
                        <div><span>사용자 ID</span><span id="box">user123</span></div>
                        <div><span>닉네임</span><span id="box">라쿤냥이</span></div>
                        <div><span>이름</span><span id="box">채승훈</span></div>
                        <div><span>이메일</span><span id="box">userj@naver.com</span></div>
                        <div><span>등급</span><span id="box">일반 사용자</span></div>
                        <div><span>자기소개</span><span id="box">안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</span></div>
                    </div>
                </div>
                }
                {bodyHeaderState === 2 &&
                <div className="modalDataBodysInfo">
                    <div id="modalDataBodysInfoHeader">상세 정보</div>
                    <div id="modalDataBodysInfoBody">
                        <div><span>정지된 날짜</span><span id="box">2026-10-16</span></div>
                        <div><span>정지풀린 날짜</span><span id="box">2026-10-16</span></div>
                    </div>
                </div>
                }
                {bodyHeaderState === 3 &&
                <div className="modalDataBodysInfo">
                    <div id="modalDataBodysInfoHeader">상세 정보</div>
                    <div id="modalDataBodysInfoBody">
                        <div><span>삭제된 날짜</span><span id="box">2026-10-16</span></div>
                        <div><span>삭제풀린 날짜</span><span id="box">2026-10-16</span></div>
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