export const initiaAdminUserManagementReduser = {
    modalState : false,             // 모달창 상태값
    modalData : "",                  // 모달창에 데이터 전달용도
    bodyHeaderState : 1,


    jgUserInfoList:[],
    pageMake:"",
}


export const AdminUserManagementReduser = (state,action) =>{
    switch(action.type){
        case "modalState" :// 모달창 상태값         
            return{
                ...state,
                modalState : true
            }
        case "modalClose" :// 모달창 닫기      
            return{
                ...state,
                modalState : false
            }
        case "modalData" :// 모달창에 데이터 전달용도
            return {
                ...state,
                modalData : action.payload,
            }
        case "bodyHeaderState" :// 바디 헤더 상태값 (기본상태,정지 이력.. 등등)
            return {
                ...state,
                bodyHeaderState : action.payload,
            }
        case "userALlSelect" :
            return {
                ...state,
                jgUserInfoList:action.payload.jgUserInfoList,
                pageMake:action.payload.pageMake,
            }

            
    }
}