// 컴포넌트
import CategoryDetailModal from "./CategoryDetailModal";

// 상태값은 리듀서로 관리하기
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/Menubar.scss"
import { categoryMajorListAPI, categoryMinorListAPI } from "../../../page/Main/api/MainAPI";

const CategoryModal = ({state,dispatch,navi}) =>{
   
    // 리듀서
    const{
        categoryState,          // 모달창옆 상태값
        categoryMajorList,      // 모달 메이저 리스트
        categoryMinorList,      // 모달 마이너 리스트 
        categoryMinorListList,  // 모달 마이너 리스트 리스트 
    } = state;

    // 카테고리 메이저 상품 리스트
    const categoryMajor = async () => {
        const result = await categoryMajorListAPI();
        dispatch({type:"categoryMajorList" , payload:result.data})
    }
     // 카테고리 마이너 상품 리스트
    const categoryMinor = async (code) =>{
        const result = await categoryMinorListAPI(code);
        dispatch({type:"categoryMinorList" , payload:result.data})
    }

    // 상품페이지 이동
    const gotoCategory = (product) =>{
        // / 이거때문에 경로가 이상해짐 넘어갈 때 변경해줘야 함
        let text = product.replaceAll("/","&")
        navi(`/jogoProduct/${text}`);
    }

    useEffect(()=>{
        categoryMajor();
    },[])

    useEffect(() => {
    if (categoryMajorList.length > 0) {
        categoryMinor(categoryMajorList[0].categoryStateMajorCode);
    }
    }, [categoryMajorList]);
    return (
        <>
            <div id="CategoryModal"
                    onMouseEnter={()=> dispatch({type:"MenubarTrue"})} 
                    onMouseLeave={()=> dispatch({type:"MenubarFalse"})}
            >
                {/* 카테고리  이거 호퍼효과가 아니네*/}
                <div id="CategoryModalLeft">
                    {categoryMajorList.map((arr,index)=>(
                    categoryState === index ? 
                        <div key={index} id="categoryTrue"
                            onClick={()=>{gotoCategory(arr.categoryStateMajorText)}}
                        >{arr.categoryStateMajorText}</div> 
                        :
                        <div key={index} 
                            onMouseEnter={()=>{
                                dispatch({type:"CategoryState",payload : index}),
                                dispatch({type:"textState",payload : arr.categoryStateMajorText}),
                                categoryMinor(arr.categoryStateMajorCode)
                            }}
                        >{arr.categoryStateMajorText}</div>
                    ))}
                </div>
                {/* 카테고리 디테일 [ 데이터 전달해서 받는 형식 ]*/}
                <CategoryDetailModal 
                    categoryMinorList={categoryMinorList}
                    categoryMinorListList={categoryMinorListList}
                    state={state}
                />
            </div>
        </>
    )
}

export default CategoryModal;