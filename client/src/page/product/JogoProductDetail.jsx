import { useNavigate, useParams } from "react-router-dom";
import "./css/JogoProduct.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import DeclarationModal from "../../component/declarationModal/DeclarationModal";

// 아이콘
import { FaRegHeart } from "react-icons/fa"; // 빈하트
import { FaHeart } from "react-icons/fa"; // 하트


import { GoChevronRight } from "react-icons/go";
import { createDeclarationButtonAPI, saleJGNoticeAPI, selectProductDataAPI, subscribeNoticeCreateAPI, subscribeNoticeDeleteAPI, subscribeNoticeSelectAPI } from "./api/productAPI";
import { useEffect, useReducer } from "react";
import { initiaJogoProductReduser, JogoProductReduser } from "./reduser/JogoProductReduser";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AdminDeclarationModal from "../admin/component/AdminDeclarationModal";
// 상세페이지
const JogoProductDetail = () =>{
    const param = useParams("code");
    const navigate = useNavigate();
    const[state,dispatch] = useReducer(JogoProductReduser,initiaJogoProductReduser)

    // 상품 데이터 가져오기
    const selectProductData = async () =>{
        const result = await selectProductDataAPI(param.code)
        console.log(result.data)
        dispatch({type:"noticeDetilData" , payload : result.data.notice})
        dispatch({type:"noticeDetilUesrData" , payload : result.data.jgUserInfo})
        dispatch({type:"noticeDetilDataImg" , payload : result.data.noticeImgs})
        dispatch({type:"total" , payload : result.data.saleTotal})
        dispatch({type:"lastSaleDay" , payload : result.data.lastSale})
    }

    useEffect(()=>{
        selectProductData();
        ubscribeNoticeSelect()
    },[])   
    // 찜 상태  [ 정상작동중.. get으로 body 보냈다가 왜 안되는지 15분간 뻘짓함 ]
    const ubscribeNoticeSelect = async () =>{
        const data = {
            "jGNoticeCode" : param.code,
            "userCode" : sessionStorage.getItem("userCode"),
        }
        const result = await subscribeNoticeSelectAPI(data)
        dispatch({type : "subscribeState", payload : result.data})
    }

    
    // 찜하기 [ 저장하기 ]
    const subscribe = async () => {
        const data = {
            jGNoticeCode : param.code,
            userCode : sessionStorage.getItem("userCode"),
        }
        await subscribeNoticeCreateAPI(data)
        ubscribeNoticeSelect()
    }
    // 찜 취소하기 [ 정상작동 ]
    const subscribeFalse = async () => {
        const data = {
            jGNoticeCode : param.code,
            userCode : sessionStorage.getItem("userCode"),
        }
        await subscribeNoticeDeleteAPI(data)
        ubscribeNoticeSelect()
    }

    // 구매하기
    const buyProduct = async () => {
        const data = {
            jGNoticeCode : param.code,
            userCode : sessionStorage.getItem("userCode"),
        }
        await saleJGNoticeAPI(data);
        selectProductData()
        alert("구매완료")
    }

    // 신고하기 [ 정상작동 함 ]
    const singoButton = async () => {
        let arr = "";
        for(let i = 0; i < state.checkList.length ;i++){
            arr += state.checkList[i] + "/";
        }

        const data = {
            type : state.type,              // 게시글이냐 댓글이냐
            arrText : arr,                  // 신고항목 붙여서 DB에 저장한 다음 나중에 구분자 선택해서 꺼내쓰기
            singoText : state.singoText,    // 텍스트
            userCode : sessionStorage.getItem("userCode"),
            noticeUserCode : state.noticeDetilData.userCode,
            noticeCode : state.noticeDetilData.jgnoticeCode,
            noticeText : state.noticeDetilData.jgnoticeText,
        }
        if(state.checkList <= 0){
            alert("최소 하나 이상 체크해주세요.")
            return
        }
        if(state.singoText == ""){
            alert("내용을 입력해주세요.")
            return
        }
        console.log(data)

        const result = await createDeclarationButtonAPI(data);
        if(result.data){
            alert("정상적으로 생생 되었습니다.")
            // singoButtonModalFalse()
        }else{
            alert("오류 발생.")
        }
        // API 호출
    }
    // 신고하기 [ 모달 열기 ]
    const singoButtonModalTrue = (type) => {
        dispatch({type:"modalTrue", payload:type})

    }
    // 신고하기 [ 모달 닫기 ]
    const singoButtonModalFalse = () => {
        dispatch({type:"modalFalse"})
    }

    // 상품 제목 위 카테고리 선택 시 이동하는 네비게이션    [ 정상 작동 중임 ] 
    const gotoPage = (code) =>{
        // 1이면 카테고리 한개
        switch(code){
            case 1 :
                navigate("/jogoProduct/" + state.noticeDetilData.jgnoticeProductTypeMajor)
                return 
            case 2 :
                navigate("/jogoProduct/" + state.noticeDetilData.jgnoticeProductTypeMajor +"/" + state.noticeDetilData.jgnoticeProductTypeMinor)
                return 
            case 3 :
                navigate("/jogoProduct/" + 
                    state.noticeDetilData.jgnoticeProductTypeMajor + "/" 
                    + state.noticeDetilData.jgnoticeProductTypeMinor + "/" 
                    + state.noticeDetilData.jgnoticeProductTypeMinorList 
                )
                return 
        }
    }

    return (
        <>
            <div id="JogoProductDetailBody">
                <Swiper
                    // 사용할 모듈 등록
                    id="JogoProductDetailImg"
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={50} // 슬라이드 간격 (px)
                    slidesPerView={1} // 한 화면에 보여줄 슬라이드 개수
                    loop={true} // 무한 반복 여부
                    navigation={true} // 좌우 화살표 버튼 사용 여부
                    >
                    {state.noticeDetilDataImg.map((img,index)=>{
                        return (
                            <>
                            <SwiperSlide key={index}><img id="img" src={`http://localhost:8080/notice/${img.jgnoticeCode}/${img.jgnoticeImg}`}/></SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>

                <div id="JogoProductDetailInfo">
                    <div>
                        <div id="JogoProductDetailInfoH2">
                            {state.noticeDetilData.jgnoticeProductTypeMajor != null &&
                                <>
                                    <span style={{"cursor":"pointer"}} onClick={()=>gotoPage(1)}>
                                    {state.noticeDetilData.jgnoticeProductTypeMajor}
                                    </span>
                                    <GoChevronRight/>
                                </>
                            }
                            {state.noticeDetilData.jgnoticeProductTypeMinor != null &&
                                <>
                                    <span style={{"cursor":"pointer"}} onClick={()=>gotoPage(2)}>
                                    {state.noticeDetilData.jgnoticeProductTypeMinor}
                                    </span>
                                    <GoChevronRight/>
                                </>
                            }
                            {state.noticeDetilData.jgnoticeProductTypeMinorList != null &&
                                <>
                                    <span style={{"cursor":"pointer"}} onClick={()=>gotoPage(3)}>
                                    {state.noticeDetilData.jgnoticeProductTypeMinorList}
                                    </span>
                                </>
                            }
                        </div>
                        <div id="JogoProductDetailInfoText">{state.noticeDetilData.jgnoticeText}</div>
                        <div id="JogoProductDetailInfoPrice">{state.noticeDetilData.jgnoticeProductPrice}원</div>
                        <div id="JogoProductDetailInfoDate">생성날짜 : {state?.noticeDetilData?.jgnoticeCreate?.substring(0,10)}</div>     
                        <div id="JogoProductDetailInfoDate">사용자 이름 : {state.noticeDetilUesrData.userNickname}</div>
                        <div id="JogoProductDetailInfoDate">마지막 거래일 : {state.lastSaleDay == null ? "없음" : state.lastSaleDay}</div>
                        <div id="JogoProductDetailInfoDate">총거래 : {state.total}</div>
                    </div>
                    <div id="JogoProductDetailBody2">
                        <div id="JogoProductDetailInfoTitle">상품설명</div>
                        <div id="JogoProductDetailInfoBox">{state.noticeDetilData.jgnoticeTitle}</div>
                    </div>
                    <div id="JogoProductbutton">

                    {state.noticeDetilData.userCode == sessionStorage.getItem("userCode") ? 
                        <>
                        <div id="buttonInsert">본인상품</div>  
                        </>
                    : 
                    state.noticeDetilData.jgnoticeSaleBoo ? 
                    <>
                        {state.subscribeState ? 
                        <div id="buttonCreate" onClick={()=>{subscribe()}}><FaRegHeart/>저장하기</div> 
                        :
                        <div className="buttonCreateFalse" onClick={()=>{subscribeFalse()}}><FaHeart/>취소하기</div> 
                        }
                        <div id="buttonInsert">판매완료</div>                     
                    </>
                    : 
                    <>
                        {state.subscribeState ? 
                        <div id="buttonCreate" onClick={()=>{subscribe()}}><FaRegHeart/>저장하기</div> 
                        :
                        <div className="buttonCreateFalse" onClick={()=>{subscribeFalse()}}><FaHeart/>취소하기</div> 
                        }
                        
                        <div id="buttonDelete" onClick={() =>{singoButtonModalTrue("게시글")}}>신고하기</div> 
                        <div id="buttonInsert" onClick={()=>{buyProduct()}}>구매하기</div>                     
                    </>
                    }

                        
                    </div>
                </div>
            </div>

            {/* 모달창 */}
            {state.modal && <DeclarationModal 
                modalClose={singoButtonModalFalse}
                state={state}
                dispatch={dispatch}
                singoButton={singoButton}
                ></DeclarationModal>}
            
        </>
    )
}

export default JogoProductDetail;