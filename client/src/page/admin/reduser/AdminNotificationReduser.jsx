export const initiaAdminNotificationReduser = {

  notificationList : [],    // [ 어드민 ] 공지사항 전체 리스트
  notificationDetail : "",  // [ 어드민 ] 공지사항 디테일 정보

  pagingData : "", // 페이징 종합 데이터
  pagingButtonArr : [], // 페이징 endPage로 만든 버튼

  textEditor: "", // 공지사항 내용
  textEditorUpdateState : "", // 공지사항 수정 내용
  titleUpdateState : "",      // 공지사항 수정 제목
  title: "", // 공지사항 제목
  bannerBooState: false, // 공지사항 배너 상태 값
  updateBoo: false, // 공지사항 배너 사용 여부
  baanerImg: "", // 배너 이미지
};

export const AdminNotificationReduser = (state, action) => {
  switch (action.type) {
    case "pageState": // 현재 페이지 상태
      return {
        ...state,
        updateBoo: action.payload,
      };
    case "updateBoo": // 업데이트 상태 페이지 조건
      return {
        ...state,
        updateBoo: action.payload,
      };
    case "bannerBooState": // 업데이트 상태 페이지 조건
      return {
        ...state,
        bannerBooState: !state.bannerBooState,
      };
    case "textEditorState": // 텍스트 에디터 상태값
      return {
        ...state,
        textEditor: action.payload,
      };

    case "textEditorUpdateState": // 텍스트 에디터 상태값
      return {
        ...state,
        textEditorUpdateState: action.payload,
      };
    case "titleUpdateState": // 텍스트 에디터 상태값
      return {
        ...state,
        titleUpdateState: action.payload,
      };

    case "titleState": // 제목 상태값
      return {
        ...state,
        title: action.payload,
      };
    case "imgState":
      return {
        ...state,
        baanerImg: action.payload.preview,
        bannerFile: action.payload.file,
      };
    case "":
      return {
        ...state,
      };
    case "notificationList" : // 공지사항 전체 리스트 
      return {
        ...state,
        notificationList : action.payload,
        
      }
    case "pagingData" : // 공지사항 페이징 처리
      return {
        ...state,
        pagingData : action.payload,
        
      }
    case "notificationDetail" : // 공지사항 디테일 정보
      return {
        ...state,
        notificationDetail : action.payload,
      }
      
  }
};
