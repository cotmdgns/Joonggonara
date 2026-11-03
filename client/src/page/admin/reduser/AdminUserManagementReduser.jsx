export const initiaAdminUserManagementReduser = {
    modalState : false,             // 모달창 상태값
    modalData : "",                  // 모달창에 데이터 전달용도
    bodyHeaderState : 1,

    infoState : "",         

    deleteHistoryList : [],         // 삭제 이력값
    stopHistoryList : [],           // 정지 이력값

    jgUserInfoList:[],
    pageMake:"",
    selectAll : 0,
    selectNormal : 0,
    selectStop : 0,
    selectDelete : 0,


    searchSelectManager : 0 ,       // 등급
    searchSelectState : "all",      // 상태
    searchSelectName : "",          // 이름
}


export const AdminUserManagementReduser = (state,action) =>{
    switch(action.type){
        case "modalState" :// 모달창 상태값         
            return{
                ...state,
                modalState : true,
                infoState : action.payload
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
        case "userALlSelect" :              // 페이지 로드 시 모든 정보
            return {
                ...state,
                jgUserInfoList:action.payload.jgUserInfoList,
                pageMake:action.payload.pageMake,
                selectAll : action.payload.selectAll,
                selectNormal : action.payload.selectNormal,
                selectStop : action.payload.selectStop,
                selectDelete : action.payload.selectDelete,
            }
        case "infoState" :// 모달창 상태값         
            return{
                ...state,
                infoState : action.payload
            }
        case "deleteHistory" :
            return {
                ...state,
                deleteHistoryList : action.payload,
            }
        case "stopHistory" :
            return{
                ...state,
                stopHistoryList : action.payload,
            }
        case "searchSelectManager" :        //등급
            return{
                ...state,
                searchSelectManager : action.payload,
            }
        case "searchSelectState" :          //상태
            return{
                ...state,
                searchSelectState : action.payload,
            }
        case "searchSelectName" :          //검색 이름
            return{
                ...state,
                searchSelectName : action.payload,
            }
    }
}