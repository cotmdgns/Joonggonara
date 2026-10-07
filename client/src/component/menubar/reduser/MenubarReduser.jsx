export const initiaMenubarReduser = {
    // 모달창 띄우기 위한 상태값
    categoryModalBoo : false,

    // 모달창 옆 카테고리 상태값
    categoryState : 0
}

export const MenubarReduser = (state,action) => {
    switch(action.type){
        case "MenubarTrue":
            return {
                ...state,
                categoryModalBoo : true
            }
        case "MenubarFalse":
            return {
                ...state,
                categoryModalBoo : false
            }
        case "CategoryState":
            return {
                ...state,
                categoryState : action.payload
            }
    }
}