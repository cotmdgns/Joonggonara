export const initiaAdminCategoryReduser = {
    "categoryStateData" : [],
    "modalState" : false,
    "modalCreateState" : false,

    // 카테고리 메이저
    "categoryMajorText" : ""
}


export const AdminCategoryReduser = (state,action) =>{
    switch(action.type){
        case "categoryStateData" :      // 카테고리 저장하기
            return {
                ...state,
                categoryStateData : action.payload,
            }
        case "categoryModalOpen" : // 카테고리 수정 모달 열기
            return {
                ...state,
                modalState : true
            }
        case "categoryModalClose" : // 카테고리 수정 모달 닫기
            return {
                ...state,
                modalState : false
            }

        case "modalCreateOpen" : // 카테고리 생성 모달 열기
            return {
                ...state,
                modalCreateState : true
            }
        case "modalCreateClose" : // 카테고리 생성 모달 닫기
            return {
                ...state,
                modalCreateState : false
            }
        case "categoryMajorText" : // 카테고리 메이저 텍스트 저장
            return {
                ...state,
                categoryMajorText : action.payload
            }


        default: 
            return state;
    }
}