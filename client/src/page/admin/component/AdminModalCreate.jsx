import { useReducer } from "react";
import { AdminCategoryReduser, initiaAdminCategoryReduser } from "../reduser/AdminCategoryReduser";


const AdminModalCreate = ({modalCreateClose,categoryMajorCreate}) =>{
        const [state,dispatch] = useReducer(AdminCategoryReduser,initiaAdminCategoryReduser)
        const {categoryMajorText} = state;
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>대분류 생성</h3>
                        <button className="close-x-btn" onClick={modalCreateClose}>✕</button>
                    </div>

                    <div className="modal-body">
                        <div className="input-group">
                            <label>대분류 명칭</label>
                            <div className="flex-row">
                                <input type="text"  
                                    onChange={(e)=>{dispatch({type:"categoryMajorText",payload :e.target.value})}}
                                    value={categoryMajorText}
                                />
                            </div>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <button className="btn-close" onClick={modalCreateClose}>닫기</button>
                        <button className="btn-save" onClick={categoryMajorCreate}>저장</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminModalCreate;