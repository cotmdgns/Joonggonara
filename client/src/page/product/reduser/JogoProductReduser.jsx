
export const initiaJogoProductReduser = {
    // 여기 상품 리스트 등록 할때 사용하는 변수들
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

    // 상세페이지에서 사용하는 변수명들
    // 검색용 데이터
    search : "",
    price1 : "",
    price2 : "",
    address1 : "",
    address2 : "",

    // 상세페이지 종합 리스트 데이터
    selectNotificationList : [],


    ///// 디테일 상세 페이지 데이터들
    noticeDetilData:"",
    noticeDetilUesrData:"",
    noticeDetilDataImg:[],
    total : 0,
    lastSaleDay : null,


    // 신고하기에서 사용할 예정
    arr : ["욕설 및 비방","스팸 및 광고","음란성 컨텐츠","불법정보 포함","사기 및 협박"],
    checkList : [],   
    modal : false,              // 모달상태값
    type:"",                    // 게시글이냐 댓글이냐
    singoText : "",             // 신고내용
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

        /////////////////////////// 상세페이지에서 사용한 상태관리
        case "selectNotificationList":  // 상세 종합 데이터
            return{
                ...state,
                selectNotificationList : action.payload,
            }

        /////////////////////////////// 
        case "noticeDetilData":  // 디테일 상세 페이지 데이터 
            return{
                ...state,
                noticeDetilData : action.payload,
            }
        case "noticeDetilDataImg":  // 디테일 상세 페이지 데이터 
            return{
                ...state,
                noticeDetilDataImg : action.payload,
            }
        case "noticeDetilUesrData":  // 디테일 상세페이지 유저 정보 
            return{
                ...state,
                noticeDetilUesrData : action.payload,
            }
        case "total":  // 총 거래수
            return{
                ...state,
                total : action.payload,
            }
        case "lastSaleDay":  // 마지막 거래 날짜
            return{
                ...state,
                lastSaleDay : action.payload,
            }


        case "modalTrue":  // 모달 true
            return{
                ...state,
                modal : !state.modal,
                type : action.payload,
            }
        case "modalFalse":  // 모달 false
            return{
                ...state,
                modal : !state.modal,
                type : "",
            }
        case "check" :      // 체크 박스
            return{
                ...state,
                check : action.payload,

            }
        case "singoText" :      // 신고 텍스트
            return{
                ...state,
                singoText : action.payload,
            }

        case "checkListAdd":
            return {
                ...state,
                checkList: [...state.checkList, action.payload]
            };

        case "checkListRemove":
            return {
                ...state,
                checkList: state.checkList.filter(
                    item => item !== action.payload
                )
            };


        default:
            return state;
    }
}