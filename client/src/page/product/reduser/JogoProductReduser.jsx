
export const initiaJogoProductReduser = {
    stepState : 1,
    productCode : 0,
    categoryMajorList : [],             
    categoryMinorList: [],
    categoryMinorListAndList: [],
    textState : "",             // 얘가 카테고리?일껄 마이너
    zonecode : "",
    roadAddress : "",
    addressDetail : "",         // 상세주소
    productPrice : "",           // 상품 가격
    productName:"",             // 상품 이름 
    categoryMinorCode : 0,         //
    categoryMinorListCode : 0,         //
    productInfo : "",           // 상품 설명란
    productCheck : false,       // 상품 무료 체크

    numState : 0,               // 이미지 상태값
    imgList : [],               // 이미지 리스트
    imgListServer : [],         // 서버로 이동할 리스트
}

export const JogoProductReduser = (state, action) =>{

    switch(action.type){
        case "nextCategory" : // step 2로 가기 위한 상태값
            return{
                ...state,
                stepState : state.stepState + 1
            }
        case "prevCategory" : // step 뒤로가기
            return{
                ...state,
                stepState : state.stepState - 1,
                textState : "",     // 텍스트 초기화
                zonecode : "",      // 주소 초기화
                roadAddress :"",    // 주소 초기화
                productName : "",
                productPrice : 0,
                productInfo : "",
                productFree : false,
                numState : 0,
                categoryMinorListAndList : [],      // 리스트 초기화
                categoryMinorListCode : 0,             // 데이터 초기화하련ㄴ데         
                imgList : [],                   // 이미지 리스트 초기화
            }
        case "categoryMajorList": // 카테고리 메이저 상품
            return{
                ...state,
                categoryMajorList : action.payload,
            };
        case "textState": // 카테고리 메이저 상품
            return{
                ...state,
                textState : action.payload,
            };
        case "addressInfo": // 주소 매이져 정보
            return{
                ...state,
                zonecode : action.payload.zonecode,
                roadAddress : action.payload.roadAddress,
            };
        case "categoryMinorList": // 주소 마이너 정보
            return{
                ...state,
                categoryMinorList : action.payload,
            };
        case "categoryMinorListAndList": // 주소 마이너 정보에 마이너
            console.log(action.payload)
            return{
                ...state,
                categoryMinorListAndList: action.payload,
            };


            //////////////////  게시글 만들 때 필요한 리덕스 상태값
        case "imgList": // 이미지 저장리스트
            return{
                ...state,
                imgListServer: action.payload,
                imgList: action.payload,
            };
        case "numState": // 이미지 저장리스트
            return{
                ...state,
                numState: action.payload,
            };
        case "categoryMinorCode": // 마이너 카테고리
            return{
                ...state,
                categoryMinorCode: action.payload,
            };
        case "categoryMinorListCode": // 마이너 리스트 카테고리
            return{
                ...state,
                categoryMinorListCode: action.payload,
            };
        case "productName": // 상품 이름
            return{
                ...state,
                productName: action.payload,
            };
        case "productPrice": // 상품 가격
            return{
                ...state,
                 productPrice: action.payload,
            };
        case "productCheck": // 상품 무료 나눔 Boo
            return{
                ...state,
                productCheck: !state.productCheck,
            };
        case "productInfo": // 상품 설명란
            return{
                ...state,
                productInfo: action.payload,
            };
        case "addressDetail": // 상세주소
            return{
                ...state,
                addressDetail: action.payload,
            };







        default:
            return state;
    }
}