
// scss
import "./css/AdminDeclarationManagement.scss"

//컴포넌트 
import AdminDeclarationModal from "./component/AdminDeclarationModal";

//리액트
import { useEffect, useReducer, useState } from "react";
import { AdminDeclarationReduser, initiaAdminDeclarationReduser } from "./reduser/AdminDeclarationReduser";
import { selectDeclarationAPI } from "./api/AdminPageAPI";
import { useNavigate, useSearchParams } from "react-router-dom";



// 관리자 페이지 [ 신고현황 관리 ]
const AdminDeclarationManagement = () =>{

    const navigate = useNavigate();
    const[state,dispatch] =useReducer(AdminDeclarationReduser,initiaAdminDeclarationReduser)
   
    // 전체 신고리스트 가져오기
    const selectDeclaration = async () =>{
        const result = await selectDeclarationAPI(pageNum)
        dispatch({type:"declarationList" ,payload : result.data.declarationDTO})
        dispatch({type:"declarationPaging" ,payload : result.data.pageMake})
    }
    // 모달창 끄기
    const adminModalClose = ()=>{
        dispatch({type:"adminModal"})
    }

    // 모달창 열기
    const adminModalOpen = (info) =>{    
        dispatch({type:"adminModal", payload : info})       
    }

    // 신고 처리완료 버튼
    const singoCreateButton = ()=>{

    }

    const gotoLink = (code)=>{
        navigate(`/jogoProductDetail/product/${code}`)
    }

    // 이럴꺼면 페이징 전용 컴포넌트 하나 만들어 둘꺼 ㅅㅂ
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNum = Number(searchParams.get("pageNum") || 1);

    const createButton = () => {
        const result = [];
        for (let i = 1; i <= state.declarationPaging.endPage; i++) {
        if (pageNum === i) {
            result.push(
            <div
                key={i}
                className="active"
                onClick={() => setSearchParams({ pageNum: String(i) })}
            >
                {i}
            </div>,
            );
        } else {
            result.push(
            <div key={i} onClick={() => setSearchParams({ pageNum: String(i) })}>
                {i}
            </div>,
            );
        }
        }
        return result;
    };

    useEffect(()=>{
        selectDeclaration()
    },[])

      useEffect(() => {
        selectDeclaration();
    }, [pageNum]);

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
                
                <div className="managementInfoTableBox">
                    {/* 아래 css 가져와야 함 */}
                    <div id="managementInfoTableSearch">
                        <input id="managementInfoTableSearchInput" type="text" placeholder="검색할 아이디를 입력.."/>
                        <div>
                            <select id="managementInfoTableSearchSelect" >
                                <option value="all">전체 상태</option>
                                <option value="normal">처리 대기</option>
                                <option value="stop">처리 완료</option>
                                <option value="delete">반려</option>
                            </select>
                            <button id="managementInfoTableSearchButton">검색</button>
                        </div>
                    </div>
                    {/*  위 css 가져와야 함 */}
                    <table className="managementInfoTable">
                        <thead>
                            <tr>
                                <th className="number">번호</th>
                                <th>신고 유형</th>
                                <th>대상 컨텐츠</th>
                                <th>신고사유</th>
                                <th>신고자</th>
                                <th>신고일자</th>
                                <th>처리상태</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* 여기에 반복문 돌려야 함 */}
                            {state.declarationList.map((info,index)=>{
                                return(
                                <tr key={index} onClick={()=>{adminModalOpen(info)}}>
                                    <td className="number">{info.userDeclarationA.userDeclarationCode}</td>
                                    <td>{info.userDeclarationA.userDeclarationType}</td>
                                    <td>{info.userDeclarationA.userDeclarationText}</td>
                                    <td>{info.userDeclarationA.userDeclarationOption.replaceAll("/",",")}</td>
                                    <td>{info.userName}</td>
                                    <td>{info?.userDeclarationA?.userDeclarationCreate?.substring(0, 10)}</td>
                                    <td>{info.userDeclarationA.userDeclarationBoo}</td>
                                </tr>
                                )
                            })}

                        </tbody>
                    </table>

                    <div className="pagination">
                        {state.declarationPaging.prev &&
                        <button type="button" className="pageArrow">
                            &lt;
                        </button>
                        }
                        {createButton()}
                        {state.declarationPaging.next &&
                        <button type="button" className="pageArrow">
                            &gt; 
                        </button>
                        }
                    </div>
                </div>
            </div>
            {state.adminModal && <AdminDeclarationModal 
            adminModalClose={adminModalClose}
            singoCreateButton={singoCreateButton}
            gotoLink={gotoLink}
            state={state}
            dispatch={dispatch}
            />}
        </>
    )
}


export default AdminDeclarationManagement;