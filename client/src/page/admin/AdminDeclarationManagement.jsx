
// scss
import "./css/AdminDeclarationManagement.scss"

//컴포넌트 
import AdminDeclarationModal from "./component/AdminDeclarationModal";
import DeclarationModal from "../../component/declarationModal/DeclarationModal";

//리액트
import { useState } from "react";



// 관리자 페이지 [ 신고현황 관리 ]
const AdminDeclarationManagement = () =>{

    const[boo,setBoo] = useState({
        adminModal : false,
        modal : false
    })

    ///// 너는 어드민에서 사용할 거
    // 모달창 끄기
    const adminModalClose = ()=>{
        setBoo(prev => ({ 
            ...prev,
            adminModal: !boo.adminModal
        }));
    }

    // 모달창 열기
    const adminModalOpen = () =>{    
        setBoo(prev => ({ 
            ...prev,
            adminModal: !boo.adminModal
        }));
    }
    return (
        <> 
            <div id="declarationManagement">  
                <div id="declarationManagementH1">신고현황 관리</div>
                <div id="declarationManagementHeader">
                    <div>
                        전체신고: <span>154</span>건
                    </div>
                    <div>
                        처리대기: <span>23</span>건
                    </div>
                    <div>
                        조치완료: <span>112</span>건
                    </div>
                    <div>
                        반려 <span>19</span>건
                    </div>
                </div>
                <div id="declarationManagementCenter">
                    <div id="declarationManagementCenterSearch">
                        <div id="state">
                            <div>처리상태</div>
                            <select>
                                <option>전체</option>
                                <option>처리대기</option>
                                <option>조치완료</option>
                                <option>반려</option>
                            </select>       
                        </div>
                        <div id="gubun">
                            <div>신고유형</div>
                            <select>
                                <option>전체</option>
                                <option>게시글</option>
                                <option>댓글</option>
                                <option>사용자</option>
                            </select>
                        </div>
                        <div id="search">
                            <input placeholder="검색어 입력..."></input>
                            <button>검색</button>
                        </div>
                    </div>
                    <div id="declarationManagementCenterTable">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>신고유형</th>
                                <th>대상 컨텐츠</th>
                                <th>신고 사유</th>
                                <th>신고자</th>
                                <th>신고 일자</th>
                                <th>처리 상태</th>
                                <th>관리자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>댓글</td>
                                <td>내용 : 야이이 @@#$!야</td>
                                <td>욕설 및 비방</td>
                                <td>신고자</td>
                                <td>2026-10-19</td>
                                <td>처리대기</td>
                                <td>채승훈</td>
                            </tr>
                        </tbody>
                        <div>
                            <div>왼쪽</div>
                            <div>1,23,4,5,6,7,</div>
                            <div>오른쪽</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// 나중에 사용할 클릭 이벤트
// <div onClick={() => {adminModalOpen()}}>신고 확인button</div>
// {boo.adminModal && <AdminDeclarationModal adminModalClose   ={adminModalClose}/>}

export default AdminDeclarationManagement;