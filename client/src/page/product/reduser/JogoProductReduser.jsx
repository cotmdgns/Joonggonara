export const initiaJogoProductReduser = {
    stepState : 1,
    productCode : 0
}

export const JogoProductReduser = (state, action) =>{
    switch(action.type){
        case "nextCategory" : // step 2로 가기 위한 상태값
            return{
                ...state,
                stepState : state.stepState + 1
            }
        default:
            return state;
    }
}