import { useEffect, useReducer } from "react";
import { AdminCategoryReduser, initiaAdminCategoryReduser } from "../reduser/AdminCategoryReduser";

const AdminCategoryModal = ({categoryModalDown,state,dispatch}) =>{

    const {
        categoryMajorCodeM,
        categoryMajorTextM,
        categoryMinorCodeM,
        categoryMinorTextM,
        minorCreateState,
    } = state;

    // 대분류 이름 수정
    const categoryTextUpdate = () =>{
        console.log("")
    }

    // 소분류 추가하기 Boo
    const categoryMinorCreate = () =>{

    }


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
                            // onChange={}
                            />
                            <button className="btn-edit">수정</button>
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
                                        onChange={(e)=>{dispatch({type:"categoryMajorText",payload :e.target.value})}}
                                    />
                                    <button className="btn-delete-icon">추가</button>
                                </div>
                            }

                            {/* 이게 한 세트 */}
                            <div className="minor-item">
                                <span>콘솔 게임기</span>
                                <div>
                                    <button className="btn-delete-icon">X</button>
                                    <button className="btn-delete-icon">✎</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-close" onClick={categoryModalDown}>닫기</button>
                    <button className="btn-save">변경사항 저장</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminCategoryModal;