import { useNavigate, useParams } from "react-router-dom"
import "../css/Menubar.scss"

const CategoryDetailModal = ({
    categoryMinorList,
    categoryMinorListList,
    categoryMinorListData,
    dispatchPro,
    state}) =>{

    // 네비
    const navigate = useNavigate()


    // 상품페이지 이동
    const gotoCategory = (product) =>{
        // / 이거때문에 경로가 이상해짐 넘어갈 때 변경해줘야 함
        let majorText = state.textState.replaceAll("/","&");
        let text = product.replaceAll("/","&")
        dispatchPro({type : "resetButton"})
        navigate(`/jogoProduct/category/${majorText}/${text}?pageNum=1&search=`);
    }
    // 상품 - 상품페이지 이동
    const gotoCategoryCategory = (product,product2) =>{
        // / 이거때문에 경로가 이상해짐 넘어갈 때 변경해줘야 함
        let majorText = state.textState.replaceAll("/","&");
        let text = product.replaceAll("/","&")
        let text2 = product2.replaceAll("/","&")
        dispatchPro({type : "resetButton"})
        navigate(`/jogoProduct/category/${majorText}/${text}/${text2}?pageNum=1&search=`);
    }

    return (
        <>
            <div id="categoryDetailModal">
                {categoryMinorList.map((arr,index)=>{
                    let smallData = arr.categoryStateMinorSmall;
                    return(
                        <div key={index} className="category">
                            <div className="categoryName" 
                                onClick={() => {
                                    gotoCategory(arr.categoryStateMinorBig.categoryStateMinorText)
                                }}
                            >{arr.categoryStateMinorBig.categoryStateMinorText}</div>
                            <div id="categoryDetailBox">
                                {smallData.map((arr2,index) => (
                                    <div key={index} className="categoryDetail"
                                        onClick={()=>{gotoCategoryCategory(arr.categoryStateMinorBig.categoryStateMinorText,arr2.categoryStateMinorText)}}
                                    >{arr2.categoryStateMinorText}</div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CategoryDetailModal;