export const initiaMyPageReduser = {
  categoryState: "", //카테고리 상태값
  profileState: true, // 프로필 수정 상태값

  result1 : [],
  result2 : [],
  result3 : [],
  result4 : [],
  result5 : [],
  result6 : [],

  userInfo : "",
};

export const MyPageReduser = (state, action) => {
  switch (action.type) {
    case "myPageState": // 마이페이지로
      return {
        ...state,
        profileState: true,
      };
    case "myPageProfileState": // 프로필 편집으로
      return {
        ...state,
        profileState: false,
      };
    case "result1": // result1
      return {
        ...state,
        result1: action.payload,
      };
    case "result2": // result2
      return {
        ...state,
        result2: action.payload,
      };
    case "result3": // result3
      return {
        ...state,
        result3: action.payload,
      };
    case "result4": // result4
      return {
        ...state,
        result4: action.payload,
      };
    case "result5": // result5
      return {
        ...state,
        result5: action.payload,
      };
    case "result6": // result6
      return {
        ...state,
        result6: action.payload,
      };

    case "userInfo": // 사용자 정보
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state; 
  }
};
