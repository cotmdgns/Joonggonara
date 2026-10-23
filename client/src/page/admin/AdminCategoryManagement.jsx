//
import { useEffect } from "react";
import { useReducer } from "react";
import { categoryMajorCreateAPI, categoryMajorDeleteAPI, categoryMinorDeleteAPI, categoryStateAPI } from "./api/AdminPageAPI";
import "./css/AdminCategoryManagement.scss"
import { AdminCategoryReduser, initiaAdminCategoryReduser } from "./reduser/AdminCategoryReduser";
import AdminCategoryModal from "./component/AdminCategoryModal";
import AdminModalCreate from "./component/AdminModalCreate";

// 관리자 페이지 [ 카테고리 관리 ]
const AdminCategoryManagement = () => {
    const [state,dispatch] = useReducer(AdminCategoryReduser,initiaAdminCategoryReduser)
    const {
        categoryStateData,
        modalState,
        modalCreateState,
    } = state;


    // 모달창(생성) 열기    [ 생성창은 끝 ]
    const modalCreateOpen = () =>{
        dispatch({type:"modalCreateOpen"})      
    }
    // 모달창(생성) 닫기 [ 생성창은 끝 ]
    const modalCreateClose = () =>{
        dispatch({type:"modalCreateClose"})        
    }

    // 모달창(수정) 열기
    const categoryModalUp = (data) =>{
        dispatch({type:"categoryModalOpen", payload:data})
    }
    // 모달창(수정) 닫기
    const categoryModalDown = () =>{
        dispatch({type:"categoryModalClose"})        
    }

    // 카테고리 메이저 생성하기 [ 정상 작동함 ]
    const categoryMajorCreate = async (text) =>{
        if(window.confirm("생성하시겠습니다?")){
            await categoryMajorCreateAPI(text)
            categoryState()
            modalCreateClose()
        }
    }
    // 카테고리 마이너 생성하기
    const categoryMinorCreate = async () =>{
        if(window.confirm("생성하시겠습니다?")){
            await categoryMajorDeleteAPI()
            categoryState()
        }
    }
    // 카테고리 메이저 삭제하기 [ 정상 작동함 ]
    const categoryMajorDelete = async (code) =>{
        if(window.confirm("정말로 삭제하시겠습니다?")){
            await categoryMajorDeleteAPI(code)      
            categoryState()
        }
    }
    // 카테고리 마이너 삭제하기 [  ]
    const categoryMinorDelete = async (code) =>{
        if(window.confirm("정말로 삭제하시겠습니다?")){
            await categoryMinorDeleteAPI(code)
            categoryState()
        }
    }

    // 카테고리 정보들 가져오기
    const categoryState = async () =>{
        const result = await categoryStateAPI();
        console.log(result.data)
        dispatch({type:"categoryStateData" , payload : result.data})
    }

    useEffect(()=>{
        categoryState()
    },[])

    return (
        <>
            <div id="categoryBody">
                <div id="categoryH1">카테고리 관리하기</div>
                {/* ---------------- 모달창 영역 ---------------- */}
                {modalState && (
                    <AdminCategoryModal 
                        state={state} 
                        dispatch={dispatch} 
                        categoryModalDown={categoryModalDown}
                        ></AdminCategoryModal>
                )}
                {modalCreateState && (
                    <AdminModalCreate 
                        state={state} 
                        dispatch={dispatch}
                        modalCreateClose={modalCreateClose} 
                        categoryMajorCreate={categoryMajorCreate}
                    ></AdminModalCreate>
                )}

                {/* ------------------------------------------- */}

                <div id="categoryBox">
                    <div id="bigCategory">
                        <div id="bigCategoryH2">대분류</div>
                        <div id="categoryCreateButoon"
                            onClick={() => modalCreateOpen()}
                        >
                        생성
                        </div>
                    </div>
                {categoryStateData.map((category,index)=>(
                    <div className="categoryUpBox"  key={index} >
                        <div className="categoryUp">
                            <div>{category.categoryStateMajor.categoryStateMajorText}</div>
                            <div id="button-list">
                                <div id="UpButton" onClick={() => categoryModalUp(category)}>✎</div>
                                <div id="UpButton" onClick={() => {categoryMajorDelete(category.categoryStateMajor.categoryStateMajorCode)}}>X</div>
                            </div>

                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}




export default AdminCategoryManagement;