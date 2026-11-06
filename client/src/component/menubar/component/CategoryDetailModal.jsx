import { useNavigate, useParams } from "react-router-dom"
import "../css/Menubar.scss"

const CategoryDetailModal = ({
    categoryMinorList,
    categoryMinorListList,
    categoryMinorListData,
    state}) =>{

    // 네비
    const navigate = useNavigate()
    const param = useParams();

    const {textState} = state;

    // 상품페이지 이동
    const gotoCategory = (product) =>{
        // / 이거때문에 경로가 이상해짐 넘어갈 때 변경해줘야 함
        let majorText = textState.replaceAll("/","&");
        let text = product.replaceAll("/","&")
        navigate(`/jogoProduct/${majorText}/${text}`);
    }
    // 상품 - 상품페이지 이동
    const gotoCategoryCategory = (product,product2) =>{
        // / 이거때문에 경로가 이상해짐 넘어갈 때 변경해줘야 함
        let majorText = textState.replaceAll("/","&");
        let text = product.replaceAll("/","&")
        let text2 = product2.replaceAll("/","&")
        navigate(`/jogoProduct/${majorText}/${text}/${text2}`);
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