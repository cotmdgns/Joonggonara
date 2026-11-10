export const initiaAdminDeclarationReduser = {
    adminModal : false,
    modal : false,

    declarationList : [],               // 신고 관리 페이지
    declarationPaging : "",             // 신고 관리 페이지 페이징 처리

    detailData : "",                    // 신고 상세 데이터
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
    }   
}