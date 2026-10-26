import { useEffect, useReducer } from "react";
import { AdminCategoryReduser, initiaAdminCategoryReduser } from "../reduser/AdminCategoryReduser";
import { 
    categoryMinorCreateAPI,
    CategoryMinorSelectAPI
 } from "../api/AdminPageAPI";

const AdminCategoryModal = ({
    categoryMinorCreate, // 카테고리 마이너 생성
    categoryMinorDelete, // 카테고리 마이너 삭제
    categoryTextUpdate, // 카테고리 메이저 수정
    categoryModalDown,  // 모달창 듣기
    categoryState,      // 카테고리 상태값 ( 메이저, 마이너 정보)
    state,
    dispatch,
    categoryMinorSelect,
}) =>{

    const {
        categoryMajorCodeM, // 여기에 메이저 코드 있음
        categoryMajorTextM,
        categoryMinorCodeM,
        categoryMinorTextM,
        categoryMinorText,
        minorCreateState,
        categoryStateMinor,
        categoryMinorArr,
    } = state;  



    useEffect(()=>{
        categoryMinorSelect()
    },[])

    return (
        <>
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>대분류 및 소분류 관리</h3>
                    <button className="close-x-btn" onClick={categoryModalDown}>✕</button>
                </div>

                <div className="modal-body">
                    <div className="input-group">
                        <label>대분류 명칭</label>
                        <div className="flex-row">
                            <input type="text" 
                            value={categoryMajorTextM} 
                            onChange={(e) => {
                                dispatch({type:"categoryMajorTextMUpdate",payload:e.target.value})
                            }}
                            />
                            <button className="btn-edit" onClick={categoryTextUpdate}>수정</button>
                        </div>
                    </div>

                    <div className="minor-section">
                        <div className="minor-header-row">
                            <label>하위 카테고리 목록</label>
                            {!minorCreateState ? 
                            <button className="btn-add" onClick={() => {
                                dispatch({type:"minorCreateStateTrue"})
                            }}>소분류 추가</button>
                            :
                            <button className="btn-add" onClick={() => {
                                dispatch({type:"minorCreateStateFalse"})
                            }}>소분류 닫기</button>
                            }
                            
                            
                        </div>

                        <div className="minor-box-list">
                            {minorCreateState && 
                                <div className="minor-item">
                                    <input type="text"  
                                        value={categoryMinorText}
                                        onChange={(e)=>{
                                            dispatch({type:"categoryMinorTextCreate",payload : e.target.value})
                                        }}
                                    />
                                    <button className="btn-delete-icon"
                                        onClick={categoryMinorCreate}
                                    >추가</button>
                                </div>
                            }

                            {/* 이게 한 세트 */}
                            {categoryMinorArr.map((data,index)=>{
                                return (
                                <div className="minor-item" key={index}>
                                    <span>{data.categoryStateMinorText}</span>
                                    <div>
                                        <button className="btn-delete-icon" onClick={()=>{
                                            categoryMinorDelete(data.categoryStateMinorCode)
                                        }}>X</button>
                                    </div>
                                </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-save" onClick={categoryModalDown}>닫기</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminCategoryModal;