import { useDaumPostcodePopup } from "react-daum-postcode";

const AddressOpenAPI = ({state,dispatch,addressAPI}) => {

    // 우편번호 팝업 실행 함수
    const open = useDaumPostcodePopup();

    // 주소 선택 완료 시 실행
    const handleComplete = (data) => {
        console.log(data)
        console.log("주소:", data.roadAddress); // 경기 광주시 고불로 156-5"
        console.log("주소:", data.sido)         // "경기"
        console.log("주소:", data.sigungu)      // "광주시"
        // 회원가입이든 로그인이든 리덕스 상테값 이름 동일하게
        dispatch({type:"addressInfo",payload : data})
    };

    // 팝업 열기
    const handleClick = () => { 
        open({
            onComplete: handleComplete
        });
    };

    return (
        <>
            <button id={addressAPI} type="button" onClick={handleClick}>
                주소 검색
            </button>
        </>
    );
};

export default AddressOpenAPI;