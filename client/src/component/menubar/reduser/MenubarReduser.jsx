export const initiaMenubarReduser = {
  // 모달창 띄우기 위한 상태값
  categoryModalBoo: false,

  // 모달창 옆 카테고리 상태값
  categoryState: 0,

  // 모달창 상품 생성 상태값
  productModalState : false,
};

export const MenubarReduser = (state, action) => {
  switch (action.type) {
    case "MenubarTrue": // 마우스 올리면 true
      return {
        ...state,
        categoryModalBoo: true,
      };
    case "MenubarFalse": // 마우스 내리면 false
      return {
        ...state,
        categoryModalBoo: false,
      };
    case "CategoryState": // 모달창 카테고리 hover 상태값
      return {
        ...state,
        categoryState: action.payload,
      };
    case "productCreateTrue": // 상품 생성 모달창 띄우기
      return{
        ...state,
        productModalState : true
      };
    case "productCreateFalse": // 상품 생성 모달창 내리기 
      return{
        ...state,
        productModalState : false
      };
  }
};
