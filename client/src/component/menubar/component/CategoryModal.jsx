
// 리듀서
import { initiaMenubarReduser, MenubarReduser } from "../reduser/MenubarReduser";

// 컴포넌트
import CategoryDetailModal from "./CategoryDetailModal";

// 상태값은 리듀서로 관리하기
import { useReducer, useState } from "react";



const CategoryModal = () =>{
    const arrStr = ["노트북/PC","반려동물","게임","취미","도서/음반/문구","가전제품","패션의류","도서/음반/문구","가전제품","패션의류","도서/음반/문구","가전제품","패션의류"]
   
    // 리듀서
    const[state,dispatch] = useReducer(MenubarReduser,initiaMenubarReduser)
    const{categoryState} = state;


    return (
        <>
            <div id="CategoryModal"
                    onMouseEnter={()=> dispatch({type:"MenubarTrue"})} 
                    onMouseLeave={()=> dispatch({type:"MenubarFalse"})}
            >
                {/* 카테고리  이거 호퍼효과가 아니네*/}
                <div id="CategoryModalLeft">
                    {arrStr.map((arr,index)=>(
                    categoryState === index ? 
                        <div key={index} id="categoryTrue">{arr}</div> 
                        :
                        <div key={index} onMouseEnter={()=>dispatch({type:"CategoryState",payload : index})}>{arr}</div>
                    ))}
                </div>
                {/* 카테고리 디테일 [ 데이터 전달해서 받는 형식 ]*/}
                <CategoryDetailModal/>
            </div>
        </>
    )
}

export default CategoryModal;