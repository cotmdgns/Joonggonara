export const initiaAdminCategoryReduser = {
    "categoryStateData" : [],
    "modalState" : false,
    "modalCreateState" : false,

    "minorCreateState" : false, // 메이저 생성 상태 관리

    "categoryMajorText" : "",    // 카테고리 메이저
    "categoryMinorText" : "",    // 카테고리 마이너

    // 메이저 수정 모달창에서 사용할 변수들
    "categoryMajorCodeM" : 0,     // 카테고리 메이저 코드 
    "categoryMajorTextM" : "",     // 카테고리 메이저 텍스트 
    "categoryMinorArr" : [] ,       // 배열 데이터
    "categoryMinorCodeM" : 0,     // 카테고리 메이저 - 마이너 코드
    "categoryMinorTextM" : "",     // 카테고리 메이저 - 마이너 텍스트 

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
                modalState : true,
                categoryMajorCodeM : action.payload.categoryStateMajorCode,    
                categoryMajorTextM : action.payload.categoryStateMajorText,
            }
        case "categoryModalClose" : // 카테고리 수정 모달 닫기
            return {
                ...state,
                modalState : false, 
            }
        case "categoryMinorDataState" : /// 모달창 열때 데이터를 관리 안함.
            return {
                ...state,
                categoryMinorArr : action.payload,
            }
        case "modalCreateOpen" : // 카테고리 생성 모달 열기

            return {
                ...state,
                modalCreateState : true,    
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
        case "minorCreateStateTrue" :
            return{
                ...state,
                minorCreateState : true
            }
        case "minorCreateStateFalse" :
            return{
                ...state,
                minorCreateState : false,
                categoryMinorText : ""
            }
        case "categoryMajorTextMUpdate" : // 수정하기
            return {
                ...state,
                categoryMajorTextM : action.payload,
            }
        case "categoryMinorTextCreate" :   // 카테고리 마이너 추가히기
            return {
                ...state,
                categoryMinorText : action.payload,
            }
        default: 
            return state;
    }
}