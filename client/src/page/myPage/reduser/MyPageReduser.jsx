export const initiaMyPageReduser = {
  categoryState: "", //카테고리 상태값
  profileState: true, // 프로필 수정 상태값
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
    default:
      return state; // 👈 이 부분이 반드시 있어야 합니다!
  }
};
