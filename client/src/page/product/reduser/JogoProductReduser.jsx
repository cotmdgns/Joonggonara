export const initiaJogoProductReduser = {
    stepState : 1,
    productCode : 0,
    categoryMajorList : [],
}

export const JogoProductReduser = (state, action) =>{
    switch(action.type){
        case "nextCategory" : // step 2로 가기 위한 상태값
            return{
                ...state,
                stepState : state.stepState + 1
            }
        case "prevCategory" : // step 뒤로가기
            return{
                ...state,
                stepState : state.stepState - 1
            }
        case "categoryMajorList": // 카테고리 메이저 상품
        return{
            ...state,
            categoryMajorList : action.payload,
        };
        default:
            return state;
    }
}