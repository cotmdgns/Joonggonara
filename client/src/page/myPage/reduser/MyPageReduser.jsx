export const initiaMyPageReduser = {
  pageState: "", //첫페이지는 메인으로 설정할꺼
  categoryState: "", //카테고리 상태값
  profileState: "", // 프로필 수정 상태값
};

export const MyPageReduser = (state, action) => {
  switch (action) {
    case "myPageState": // 마이페이지로
      return {
        ...state,
        pageState: action.paylod,
      };
    case "myPageProfileState": // 프로필 편집으로
      return {
        ...state,
        pageState: action.paylod,
      };
  }
};
