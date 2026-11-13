export const initiaMyPageReduser = {
  categoryState: "", //카테고리 상태값
  profileState: true, // 프로필 수정 상태값

  // 메뉴바 옆 상태값들
  result1 : [],
  result2 : [],
  result3 : [],
  result4 : [],
  result5 : [],
  result6 : [],

  userInfo : "",


  // 프로필 수정하기 위한 상태값들
  userProfile : null,
  userNickName : null,
  userOldPwd : null,
  userNewPwd : null,
  userNewPwdCheck : null,
  userAddress : null,
  userAddressDetail : null,
  addressData : null,
  addressDetailData : null,
  userInfoData : null,
};

export const MyPageReduser = (state, action) => {
  switch (action.type) {
    case "myPageState": // 마이페이지로
      return {
        ...state,
        profileState: true,
        userProfile : null,
        userNickName : null,
        userOldPwd : null,
        userNewPwd : null,
        userNewPwdCheck : null,
        userAddress : null,
        userAddressDetail : null,
        addressData : null,
        addressDetailData : null,
        userInfoData : null,
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


    ///////////////////// 유저 정보 업데이트를 위한 상태값
    case "userProfile": // 사용자 정보
      return {
        ...state,
        userProfile: action.payload[0],
      };
    case "userNickName": // 사용자 닉네임
      return {
        ...state,
        userNickName: action.payload,
      };
    case "userOldPwd": // 사용자 이전 비밀번호
      return {
        ...state,
        userOldPwd: action.payload,
      };
    case "userNewPwd": // 사용자 새로운 비밀번호
      return {
        ...state,
        userNewPwd: action.payload,
      };
    case "userNewPwdCheck": // 사용자 새로운 비밀번호 체크
      return {
        ...state,
        userNewPwdCheck: action.payload,
      };
    case "addressInfo": // 사용자 주소
      console.log(action.payload)
      return {
        ...state,
        addressData: action.payload.sido,
        addressDetailData : action.payload.sigungu,
        userAddress : action.payload.roadAddress,
        };
    case "userAddressDetail": 
      return {
        ...state,
        userAddressDetail: action.payload,
        };
    case "userInfoData": // 사용자 자기소개
      return {
        ...state,
        userInfoData: action.payload,
      };






    default:
      return state; 
  }
};
