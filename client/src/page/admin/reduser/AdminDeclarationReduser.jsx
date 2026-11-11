export const initiaAdminDeclarationReduser = {
    adminModal : false,
    modal : false,

    declarationList : [],               // 신고 관리 페이지
    declarationPaging : "",             // 신고 관리 페이지 페이징 처리

    detailData : "",                    // 신고 상세 데이터
    checkBoo : "",                      // 체크여부 확인
    selectOption : "1",                   // 디폴트 값
    textState: "",
    selectDeclarationTotal:"",

    // 검색용 두개
    searchUseId : "",
    searchOption : "",
}   


export const AdminDeclarationReduser = (state,action)=>{
    switch(action.type){
        case "adminModal" :
            return{
                ...state,
                adminModal : !state.adminModal,
                detailData : action.payload,
            }
        case "declarationList" :
            return{
                ...state,
                declarationList : action.payload,
            }
        case "declarationPaging" :
            return{
                ...state,
                declarationPaging : action.payload,
            }
        case "checkBoo" :           // 체크여부
            return{
                ...state,
                checkBoo : action.payload,
            }
        case "selectOption" :           // select Option 벨류
            return{
                ...state,
                selectOption : action.payload,
            }
        case "textState" :           // select Option 벨류
            return{
                ...state,
                textState : action.payload,
            }
        case "selectDeclarationTotal" :           // select Option 벨류
            return{
                ...state,
                selectDeclarationTotal : action.payload,
            }
        case "searchOption" :           // searchOption
            return{
                ...state,
                searchOption : action.payload,
            }
        case "searchUseId" :           // searchUseId
            return{
                ...state,
                searchUseId : action.payload,
            }
    }   
}