export const initiaMainReduser ={
    mainBannerSelectList : [],              // 배너 리스트
    weekNoticeList : [],                // 이번 주 추천 상품
    addressNoticeList : [],             // 동네에 올라온 최근 상품
}

export const MainReduser = (state,action) =>{
    switch(action.type){
        case "mainBannerSelectList" :
            return{
                ...state,
                mainBannerSelectList : action.payload,
            }
    }
}