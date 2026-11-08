export const initiaMainReduser = {
  mainBannerSelectList: [], // 배너 리스트
  newNotificationSelectList: [], // 일주일안으로 생성된 데이터 확인하기
  userAddressSelectList: [], // 내 지역으로 해서 주변 상품 뽑아주기
};

export const MainReduser = (state, action) => {
  switch (action.type) {
    case "mainBannerSelectList": //배너 리스트 상태값
      return {
        ...state,
        mainBannerSelectList: action.payload,
      };
    case "newNotificationSelect": // 일주일안으로 생성된 데이터 확인하기
      return {
        ...state,
        newNotificationSelectList: action.payload,
      };
    case "userAddressSelect": // 내 지역으로 해서 주변 상품 뽑아주기
      return {
        ...state,
        userAddressSelectList: action.payload,
      };
  }
};
