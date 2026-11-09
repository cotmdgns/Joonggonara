// scss
import { useState } from "react";
import "./css/DeclarationModal.scss"


// 일단 완성했고 나중에 리덕스 만들어서 데이터 전역관리하고, api 연결하기
const DeclarationModal = ({
    modalClose,
    state,
    dispatch,
    singoButton,
    singoCheck
}) =>{
    const [checkList, setCheckList] = useState([]);
    
    return (
        <div id="declarationModal1">
            <div id="declarationModalBox">
                <div id="declarationModalHeader">
                    <div id="modalHeader">{state.type} 신고</div>
                </div>
                <div id="declarationModalCenter">
                    <div id="declarationDiv">
                        <div id="declarationDivH1">신고 대상 정보</div>
                        <div id="declarationDivInfo1">
                            <div>아이디 : <span>{state.noticeDetilUesrData.userNickname}</span></div>
                        </div>
                        {state.type == "게시글" ? 
                        <>
                        <div id="declarationDivInfo1">
                            <div>제목 : <span>{state.noticeDetilData.jgnoticeTitle}</span></div>
                        </div>             
                        </> 
                        :
                         <>
                        <div id="declarationDivInfo1">
                            <div>내용 : <span>댓글이면 댓글 쓴 내용으로 갈예정</span></div>
                        </div>  
                         </>}

                        <div id="declarationDivInfo1">
                            <div>신고유형 : <span>[{state.type}]</span></div>
                        </div>
                    </div>
                    <div id="declarationDiv">
                        <div id="declarationDivH1">신고 사유</div>
                        <div id="declarationDivInfo4">
                            <div id="infoBox">
                                {state.arr.map((text,index)=>{
                                    return(
                                    <div id="infoBox2" key={index}>
                                        <input type="checkbox"
                                        onChange={(e)=>{
                                            if (e.target.checked) {
                                                dispatch({
                                                    type: "checkListAdd",
                                                    payload: text
                                                });
                                            } else {
                                                dispatch({
                                                    type: "checkListRemove",
                                                    payload: text
                                                });
                                            }
                                        }}></input>
                                        <div>{text}</div>
                                    </div>  
                                    )
                                })}
                                {/* <div id="infoBox2">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div id="declarationDiv">
                        <div id="declarationDivH1">상세 내용</div>
                        <div id="declarationDivInfo4">
                            <div id="infoBox">
                                <textarea  
                                onChange={(e)=>{
                                    console.log(e.target.value)
                                    dispatch({type:"singoText",payload : e.target.value})
                                }}
                        ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="declarationModalFooter">
                    <div id="button" onClick={singoButton}>신고완료</div>
                    <div id="button" onClick={modalClose}>창 닫기</div>
                </div>
            </div>
        </div>
    )
}

export default DeclarationModal;