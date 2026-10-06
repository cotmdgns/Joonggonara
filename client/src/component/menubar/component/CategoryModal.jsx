import CategoryDetailModal from "./CategoryDetailModal";
import { useState } from "react";

const CategoryModal = () =>{
    const arrStr = ["노트북/PC","반려동물","게임","취미","도서/음반/문구","가전제품","패션의류","도서/음반/문구","가전제품","패션의류","도서/음반/문구","가전제품","패션의류"]

    // 상태값
    const [categoryState, setCategoryState] = useState(0)

    return (
        <>
            <div id="CategoryModal">
                {/* 카테고리  이거 호퍼효과가 아니네*/}
                <div id="CategoryModalLeft">
                    {arrStr.map((arr,index)=>(
                    categoryState === index ? 
                        <div key={index} id="categoryTrue">{arr}</div> 
                        :
                        <div key={index} onMouseEnter={()=>setCategoryState(index)}>{arr}</div>
                    ))}
                </div>
                {/* 카테고리 디테일 [ 데이터 전달해서 받는 형식 ]*/}
                <CategoryDetailModal/>
            </div>
        </>
    )
}

export default CategoryModal;