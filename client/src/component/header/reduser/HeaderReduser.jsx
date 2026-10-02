export const initiaHeaderReduser = {
    // 헤더 센터 관리
    addressToggle : false,
    priceToggle : false,
    categoryToggle : false,

    addressData : "",
    priceData : 0,
    category : "",


    // 사용자 로그인 여부
    loginBoo : false
}

export const HeaderResuser = (state,action) =>{
    switch(action.type){
        // 위치 모달 열고 닫기
        case "addresButtonOpen":
            return{
                ...state,
                addressToggle : true,
                priceToggle : false,
                categoryToggle : false
            }
        case "addresButtonClose":
            return{
                ...state,
                addressToggle : false
            }
        // 가격 모달 열고 닫기
        case "priceButtonClose":
            return{
                ...state,
                priceToggle : false
            }   
        case "priceButtonOpen":
            return{
                ...state,
                addressToggle : false,
                priceToggle : true,
                categoryToggle : false
            }  
        // 카테고리 열고 닫기 
        case "categoryButtonClose":
            return{
                ...state,
                categoryToggle : true
            }    
        case "categoryButtonOpen":
            return{
                ...state,
                addressToggle : false,
                priceToggle : false,
                categoryToggle : true
            }              
    }
}