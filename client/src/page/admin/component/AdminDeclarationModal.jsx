import "../css/AdminDeclarationManagement.scss"


const AdminDeclarationModal = ({adminModalClose,singoCreateButton,state,dispatch,gotoLink}) =>{
    console.log(state.detailData)

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
                                    
                                    <span id={state.detailData.userDeclarationA.userDeclarationBoo === "처리대기" ? "modalStateYellow" 
                                    : state.detailData.userDeclarationA.userDeclarationBoo === "처리완료" ? "modalStateGreen" : "modalStateRed"}>[{state.detailData.userDeclarationA.userDeclarationBoo}]</span>
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
                                    <div id="infoBox2">
                                        <input type="checkbox"></input>
                                        <div>대상 컨텐츠 삭제</div>
                                    </div>
                                    <div id="infoBox2">
                                        <input type="checkbox"></input>
                                        <div>작성자 이용 정지</div>
                                        <select>
                                            <option>1일</option>
                                            <option>7일</option>
                                            <option>15일</option>
                                            <option>30일</option>
                                            <option>영구정지</option>
                                        </select>
                                    </div>
                                    <div id="infoBox2">
                                        <input type="checkbox"></input>
                                        <div>신고 반려</div>
                                    </div>
                                </div>
                                <div id="infoBox">
                                    <div id="infoBoxH1">처리 의견</div>
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="declarationModalFooter">
                        <div id="button" onClick={singoCreateButton}>처리완료</div>
                        <div id="button" onClick={adminModalClose}>창 닫기</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDeclarationModal;