import { useNavigate } from "react-router-dom"
import "../css/Menubar.scss"

const CategoryDetailModal = () =>{

    // 네비
    const navigate = useNavigate()
    
    // 상품페이지 이동
    const gotoCategory = (product) =>{
        // / 이거때문에 경로가 이상해짐 넘어갈 때 변경해줘야 함
        let text = product.replaceAll("/","&")
        navigate(`/jogoProduct/${text}`);
    }
    // 상품 - 상품페이지 이동
    const gotoCategoryCategory = (product,product2) =>{
        // / 이거때문에 경로가 이상해짐 넘어갈 때 변경해줘야 함
        let text = product.replaceAll("/","&")
        let text2 = product2.replaceAll("/","&")
        navigate(`/jogoProduct/${text}/${text2}`);
    }
    const arrStr1 = ["노트북/PC","반려동물","게임","취미","도서/음반/문구","가전제품","노트북/PC","반려동물","게임","취미","도서/음반/문구","가전제품"]
    const arrStr2 = ["노트북/PC","반려동물","게임"]

    return (
        <>
            <div id="categoryDetailModal">
                {arrStr1.map((arr,index)=>(
                    <div key={index} className="category">
                        <div className="categoryName" 
                            onClick={() => {gotoCategory(arr)}}
                        >{arr}</div>
                        <div id="categoryDetailBox">
                            {arrStr2.map((arr2,index) => (
                                <div key={index} className="categoryDetail"
                                    onClick={()=>{gotoCategoryCategory(arr,arr2)}}
                                >{arr2}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategoryDetailModal;