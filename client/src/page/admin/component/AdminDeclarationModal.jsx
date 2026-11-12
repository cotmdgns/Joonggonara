import "../css/AdminDeclarationManagement.scss"


const AdminDeclarationModal = ({adminModalClose,singoCreateButton,state,dispatch,gotoLink}) =>{

    return (
        <>
            <div id="declarationModal">
                <div id="declarationModalBox">
                    <div id="declarationModalHeader">
                        <div id="modalHeader">신고 상세 내용</div>
                        <div id={state.detailData.userDeclarationA.userDeclarationBoo === "처리대기" ? "modalStateYellow" 
                                    : state.detailData.userDeclarationA.userDeclarationBoo === "처리완료" ? "modalStateGreen" : "modalStateRed"}>[{state.detailData.userDeclarationA.userDeclarationBoo}]</div>
                    </div>
                    <div id="declarationModalCenter">
                        <div id="declarationDiv">
                            <div id="declarationDivH1">신고 기본 정보</div>
                            <div id="declarationDivInfo1">
                                <div>신고 번호: <span>{state.detailData.userDeclarationA.userDeclarationCode}</span></div>
                                <div>신고 유형: <span>{state.detailData.userDeclarationA.userDeclarationType}</span></div>
                                <div>신고 일자: <span>{state.detailData?.userDeclarationA?.userDeclarationCreate?.substring(0,10)}</span></div>
                                <div>신고자 ID: <span>{state.detailData.userName}</span></div>
                                <div>처리 상태: 
                                    <span >[{state.detailData.userDeclarationA.userDeclarationBoo}]</span>
                                </div>
                            </div>
                        </div>
                        <div id="declarationDiv">
                            <div id="declarationDivH1">대상 컨텐츠 정보</div>
                            <div id="declarationDivInfo3">
                                <div id="infoBox">
                                    <div id="infoBoxH1">게시글 제목</div>
                                    <div>{state.detailData.userDeclarationA.noticeText}</div>
                                </div>
                                <div id="infoBox">
                                    <div id="infoBoxH1">작성자 ID</div>
                                    <div>{state.detailData.noticeUserName}</div>
                                </div>
                                <div id="infoBox">
                                    <div id="infoBoxH1">링크</div>
                                    <div id="gotoLink" onClick={()=>{gotoLink(state.detailData.userDeclarationA.noticeCode)}}>바로가기</div>
                                </div>
                                <div id="infoBox">
                                    <div id="infoBoxH1">신고 사유</div>
                                    <div>{state.detailData.userDeclarationA.userDeclarationOption}</div>
                                </div>
                                <div id="infoBox">
                                    <div id="infoBoxH1">신고자 상세 의견</div>
                                    <div>{state.detailData.userDeclarationA.userDeclarationText}</div>
                                </div>
                            </div>
                        </div>
                        <div id="declarationDiv">
                            <div id="declarationDivH1">관리자 조치 처리</div>
                            <div id="declarationDivInfo4">
                                
                                <div id="infoBox">
                                    <div id="infoBoxH1">조치 결과 선택</div>
                                    {state.detailData.userDeclarationA.userDeclarationBoo === "처리대기" && 
                                    <>
                                    <div id="infoBox2">
                                        <input type="checkbox" onClick={()=>{
                                            dispatch({type:"checkBoo" , payload : "cantentDelete"})
                                        }} checked={state.checkBoo == "cantentDelete" ? true : false}></input>
                                        <div>대상 컨텐츠 삭제</div>
                                    </div>
                                    <div id="infoBox2">
                                        <input type="checkbox" onClick={()=>{
                                            dispatch({type:"checkBoo" , payload : "userStateStop"})
                                        }} checked={state.checkBoo == "userStateStop" ? true : false}></input>
                                        <div>작성자 이용 정지</div>
                                        <select onChange={(e)=>{
                                            dispatch({type:"selectOption", payload : e.target.value})
                                        }}>
                                            <option value="1">1일</option>
                                            <option value="7">7일</option>
                                            <option value="15">15일</option>
                                            <option value="30">30일</option>
                                            <option value="9999">영구정지</option>
                                        </select>
                                    </div>
                                    <div id="infoBox2">
                                        <input type="checkbox" onClick={()=>{
                                            dispatch({type:"checkBoo" , payload : "singoBack"})
                                        }} checked={state.checkBoo == "singoBack" ? true : false}></input>
                                        <div>신고 반려</div>
                                    </div>
                                    </>
                                   }
                                   {(state.detailData.userDeclarationA.userDeclarationBoo === "처리완료" || 
                                   state.detailData.userDeclarationA.userDeclarationBoo === "반려") &&
                                    <>
                                    <div id="infoBox2">
                                        <div>
                                        {state.detailData.userDeclarationA.userDeclarationStateBoo === "cantentDelete" ? "컨텐츠 삭제" :
                                        state.detailData.userDeclarationA.userDeclarationStateBoo === "userStateStop" ? "사용자 정지" : "반려"
                                        }
                                        </div>
                                    </div>
                                    </>
                                    }

                                </div>
                                <div id="infoBox">
                                    <div id="infoBoxH1">처리 의견</div>
                                    <textarea onChange={(e)=>{
                                        dispatch({type:"textState" , payload : e.target.value})
                                    }}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="declarationModalFooter">
                        <div id="button" onClick={()=>{singoCreateButton(state.detailData.userDeclarationA)}}>처리완료</div>
                        <div id="button" onClick={adminModalClose}>창 닫기</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDeclarationModal;