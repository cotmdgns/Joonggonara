//
import "./css/AdminCategoryManagement.scss"


// 관리자 페이지 [ 카테고리 관리 ]
const AdminCategoryManagement = () => {
     const notices = [1, 2, 3, 4, 5, 6,4,5];

    const categoryUpButton = () =>{

    }
    const categoryDownButton = () =>{
        
    }

    return (
        <>
            <div id="categoryBody">
                <div id="categoryH1">카테고리 관리하기</div>
                <div id="categoryCreateButoon">
                    생성버튼
                </div>
                <div id="categoryBox">
                {notices.map((num,index)=>(
                    <div className="categoryUpBox">
                        <div className="categoryUp" key={index}>상위 카테고리<div id="UpButton">X</div></div>
                        <div className="categoryDownBox">
                            {notices.map((num,index)=>(
                                <div className="categoryDown" key={index}>하위 카테고리<div id="DownButton">X</div></div>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}




export default AdminCategoryManagement;