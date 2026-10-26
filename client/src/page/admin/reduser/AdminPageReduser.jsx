export const initiaAdminPageReduser = {
    "mainSelectUseAllCount" : 0,
    "mainSelectNoticeAllCount" : 0,
}


export const AdminPageReduser = (state,action) =>{
    switch(action.type){
        case "mainSelectUseAll" : // 전체 이용자
            return {
                ...state,
                mainSelectUseAllCount : action.payload
            }
        case "mainSelectNoticeAll" : // 전체 게시글
            return {
                ...state, 
                mainSelectNoticeAllCount : action.payload
            }
    }
} 