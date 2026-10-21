export const initiaLoginReduser = {
    "userId" : "",
    "userPwd" : "",
}

export const LoginReduser = (state,action) => {
    switch(action.type){
        case "loginData" : // 사용자 아이디
            return {
                ...state,
                "userId" : action.payload
            }   
        case "pwdData" :  // 사용자 비밀번호
            return {
                ...state,
                "userPwd" : action.payload
            }
    }
}