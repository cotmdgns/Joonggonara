export const initiaSignUpReduser = {
    // 주소 정보
    addressArr : [], // 주소배열 정보 (17개 있음)
    addressDetailArr : [], // 주소상세배열 정보 (상황에 따라 달라짐)

    // 회원가입 정보
    userId : "",                // 사용자 아이디
    userPwd : "",               // 사용자 패스워드
    userName : "",              // 사용자 이름
    userEmail : "",             // 시용자 이메일
    userAddressDetail : "",       // 사용자 상세 주소
    userIdCheck : false,        // 사용자 아이디 체크 
    addressData : "",           // 주소 데이터
    addressDetailData : "",     // 주소 상세 데이터

    // 정규표현식 조건 여부
    userIdBoo : null,                // 사용자 아이디 조건여부
    userPwdBoo : null,               // 사용자 패스워드 조건여부
    userNameBoo : null,              // 사용자 이름 조건여부
    userEmailBoo : null,             // 시용자 이메일 조건여부
    userAddressDetailBoo : null,       // 사용자 상세 주소 조건여부

    // 정규표현식 조건 여부 텍스트
    userIdText : "",                // 사용자 아이디 조건여부 텍스트 
    userPwdText : "",               // 사용자 패스워드 조건여부 텍스트
    userNameText : "",              // 사용자 이름 조건여부 텍스트
    userEmailText : "",             // 시용자 이메일 조건여부 텍스트
    userAddressDetailText : "",       // 사용자 상세 주소 조건여부 텍스트
}


export const SignUpReduser = (state,action) =>{
    switch(action.type){
        case "addressArr" : // DB 주소 모음
             return{
                ...state,
                addressArr : action.payload,
            }
        case "addressDetailArr" : // DB 주소 상세 모음
            return{
                ...state,
                addressDetailArr : action.payload
            }
        case "addressDetailArrDefault" : // 선택 누를 시 값 초기화 시키기
            return{
                ...state,
                addressDetailArr : []
            }
        case "idJungbogCheck" : // 아이디 중복 체크
            return{
                ...state,
                userIdCheck : true,
            }
        case "idCheck" : // 아이디 체크
            // 정규표현식
            const idRegex = /^[a-zA-Z]{5,}$/.test(action.payload); // 아이디 정규표현식

            return{
                ...state,
                userId : action.payload,
                userIdBoo : action.payload !== "" ? idRegex : null ,
                userIdText : idRegex ? 
                ""
                :
                "아이디는 최소 5글자 이상입니다.",
            }
        case "pwdCheck" : // 비밀번호 체크
            const passwordRegex = /^.{8,}$/.test(action.payload); // 비밀번호 정규표현식
            return{
                ...state,
                userPwd : action.payload,
                userPwdBoo : action.payload !== "" ? passwordRegex : null ,
                userPwdText : passwordRegex ? 
                ""
                :
                "비밀번호는 최소 8글자 이상입니다.",
            }
        case "nameCheck" : // 이름 체크
            const nameRegex = /^[가-힣]{2,5}$/.test(action.payload); // 이름 정규표현식
            return{
                ...state,
                userName : action.payload,
                userNameBoo : action.payload !== "" ? nameRegex : null ,
                userNameText : nameRegex ? 
                ""
                :
                "이름은 최소 2글자 이상, 최대 5글자 이하 입니다.",
            }
        case "emailCheck" : // 이메일 체크
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(action.payload); // 이메일 정규표현식
            return{
                ...state,
                userEmail : action.payload,
                userEmailBoo : action.payload !== "" ? emailRegex : null ,
                userEmailText : emailRegex ? 
                ""
                :
                "이메일 주소를 옳바르게 입력해주세요.",
            }
        case "userAddressSava" : // 주소 상세 정보 저장하기

            let addressRegex = false;

            if (action.payload && action.payload.trim() !== "") {
                addressRegex = true;
            }
            
            return{
                ...state,
                userAddressDetail : action.payload,
                userAddressDetailBoo : action.payload !== "" ? addressRegex : null ,
                userAddressDetailText : addressRegex ? 
                ""
                :
                "상세 주소를 입력해주세요.",
            }
        case "idCheckBooTrue" :  // 아이디 체크 조건에 맞으면 true
            return{
                ...state,
                userIdCheck : true
            }
        case "idCheckBooFalse" : // 아이디 체크 조건에 안맞으면 false
            return{
                ...state,
                userIdCheck : false
            }
        case "addressData" :    // 주소 데이터
            return {
                ...state,
                addressData : action.payload
            }
        case "addressDetailData" :  // 주소 상세 데이터
            return {
                ...state,
                addressDetailData : action.payload
            }    
            

    }
}