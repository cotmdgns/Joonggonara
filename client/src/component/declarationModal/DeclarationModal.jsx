// scss
import "./css/DeclarationModal.scss"


// 일단 완성했고 나중에 리덕스 만들어서 데이터 전역관리하고, api 연결하기
const DeclarationModal = ({modalClose}) =>{
    return (
        <div id="declarationModal1">
            <div id="declarationModalBox">
                <div id="declarationModalHeader">
                    <div id="modalHeader">게시글 신고 or 댓글 신고</div>
                </div>
                <div id="declarationModalCenter">
                    <div id="declarationDiv">
                        <div id="declarationDivH1">신고 대상 정보</div>
                        <div id="declarationDivInfo1">
                            <div>아이디 : <span>아이디정보...</span></div>
                        </div>
                        <div id="declarationDivInfo1">
                            <div>정보 : <span>게시글정보...</span></div>
                        </div>
                        <div id="declarationDivInfo1">
                            <div>신고유형 : <span>[댓글]</span></div>
                        </div>
                    </div>
                    <div id="declarationDiv">
                        <div id="declarationDivH1">신고 사유</div>
                        <div id="declarationDivInfo4">
                            <div id="infoBox">
                                <div id="infoBox2">
                                    <input type="checkbox"></input>
                                    <div>욕설 및 비방</div>
                                </div>
                                <div id="infoBox2">
                                    <input type="checkbox"></input>
                                    <div>스팸 및 광고</div>
                                </div>
                                <div id="infoBox2">
                                    <input type="checkbox"></input>
                                    <div>음란성 컨텐츠</div>
                                </div>
                                <div id="infoBox2">
                                    <input type="checkbox"></input>
                                    <div>불법정보 포함</div>
                                </div>
                                <div id="infoBox2">
                                    <input type="checkbox"></input>
                                    <div>사기 및 협박</div>
                                </div>
                                <div id="infoBox2">
                                    <input type="checkbox"></input>
                                    <div>기타</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="declarationDiv">
                        <div id="declarationDivH1">상세 내용(선택)</div>
                        <div id="declarationDivInfo4">
                            <div id="infoBox">
                                <textarea>1.컨텐츠 삭제랑 이용정지는 같이 사용가능 2. 신고반려랑은 같이 불가능</textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="declarationModalFooter">
                    <div id="button">신고완료</div>
                    <div id="button" onClick={modalClose}>창 닫기</div>
                </div>
            </div>
        </div>
    )
}

export default DeclarationModal;