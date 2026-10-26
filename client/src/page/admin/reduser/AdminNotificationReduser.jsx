export const initiaAdminNotificationReduser = {
    "textEditor" : "",          // 공지사항 내용
    "title" : "",               // 공지사항 제목
    "bannerBooState" : false,   // 공지사항 배너 상태 값
    "updateBoo" : false,        // 공지사항 배너 사용 여부
    "baanerImg" : "",           // 배너 이미지
}

export const AdminNotificationReduser = (state,action) =>{
    switch(action.type){
        case "pageState":           // 현재 페이지 상태
            return{
                ...state,
                updateBoo : action.payload,
            }
        case "updateBoo" :          // 업데이트 상태 페이지 조건
            return {
                ...state,
                updateBoo : action.payload
            }
        case "bannerBooState" :          // 업데이트 상태 페이지 조건
            return {
                ...state,
                bannerBooState : !state.bannerBooState
            }
    }
}