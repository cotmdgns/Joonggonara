export const initiaSignUpReduser = {
    addressArr : [], // 주소배열 정보 (17개 있음)
    addressDetailArr : [], // 주소상세배열 정보 (상황에 따라 달라짐)
}



export const SignUpReduser = (state,action) =>{
    switch(action.type){
        case "addressArr" :
             return{
                ...state,
                addressArr : action.paylod,
            }
        case "addressDetailArr" :
            return{
                ...state,
                addressDetailArr : action.paylod
            }
        case "addressDetailArrDefault" :
            return{
                ...state,
                addressDetailArr : []
            }
    }
}