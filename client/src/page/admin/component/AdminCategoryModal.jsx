import { useReducer } from "react";
import { AdminCategoryReduser, initiaAdminCategoryReduser } from "../reduser/AdminCategoryReduser";

const AdminCategoryModal = ({categoryModalDown}) =>{

        const [state,dispatch] = useReducer(AdminCategoryReduser,initiaAdminCategoryReduser)
        const {categoryStateData,modalState} = state;

    return (
        <>
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>대분류 및 ㄴㄴㄴㄴ 관리</h3>
                    <button className="close-x-btn" onClick={categoryModalDown}>✕</button>
                </div>

                <div className="modal-body">
                    <div className="input-group">
                        <label>대분류 명칭</label>
                        <div className="flex-row">
                            <input type="text"  />
                            <button className="btn-edit">수정</button>
                            <button className="btn-confirm">확인</button>
                        </div>
                    </div>

                    <div className="minor-section">
                        <div className="minor-header-row">
                            <label>하위 카테고리 목록</label>
                            <button className="btn-add">소분류 추가</button>
                        </div>

                        <div className="minor-box-list">
                            <div className="minor-item">
                                <span>콘솔 게임기</span>
                                <button className="btn-delete-icon">✎</button>
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