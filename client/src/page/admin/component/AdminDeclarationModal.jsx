import "../css/AdminDeclarationManagement.scss"


const AdminDeclarationModal = ({adminModalClose}) =>{
    return (
        <>
            <div id="declarationModal">
                <div id="declarationModalBox">
                    <div id="declarationModalHeader">
                        <div id="modalHeader">신고 상세 내용</div>
                        <div id="modalStateYellow">[처리대기]</div>
                        {/* <div id="modalStateGreen">신고상태[조치완료]</div>
                        <div id="modalStateRed">신고상태[반려]</div> */}
                    </div>
                    <div id="declarationModalCenter">
                        <div id="declarationDiv">
                            <div id="declarationDivH1">신고 기본 정보</div>
                            <div id="declarationDivInfo1">
                                <div>신고 번호: <span>1</span></div>
                                <div>신고 유형: <span>댓글</span></div>
                                <div>신고 일자: <span>2026-10-16</span></div>
                                <div>신고자 ID: <span>userId1</span></div>
                                <div>처리 상태: <span id="modalStateYellow">[처리대기]</span></div>
                            </div>
                        </div>
                        <div id="declarationDiv">
                            <div id="declarationDivH1">대상 컨텐츠 정보</div>
                            <div id="declarationDivInfo2">
                                <div id="infoBox">
                                    <div id="infoBoxH3">게시글 제목</div>
                                    <div id="infoBoxH2">욕설 및 비방</div>
                                    <div id="infoBoxH3">작성자</div>
                                    <div id="infoBoxH2">userIDIDIDI</div>
                                </div>
                                <div id="infoBox">
                                    <div id="infoBoxH3">내용</div>
                                    <div id="infoBoxH2">아이 개@##@ㄴ아 그렇ㄱ ㅔ 사는ㄱ ㅓ아니야</div>
                                </div>
                            </div>
                        </div>
                        <div id="declarationDiv">
                            <div id="declarationDivH1">신고 사유 상세</div>
                            <div id="declarationDivInfo3">
                                <div id="infoBox">
                                    <div id="infoBoxH1">신고 사유</div>
                                    <div>욕설 및 비방</div>
                                </div>
                                <div id="infoBox">
                                    <div id="infoBoxH1">신고자 상세 의견</div>
                                    <div>다른 사용자에게 심한 욕설과 협박성 댓글을 달았습니다.</div>
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
                                    <textarea>1.컨텐츠 삭제랑 이용정지는 같이 사용가능 2. 신고반려랑은 같이 불가능</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="declarationModalFooter">
                        <div id="button">처리완료</div>
                        <div id="button" onClick={adminModalClose}>창 닫기</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDeclarationModal;