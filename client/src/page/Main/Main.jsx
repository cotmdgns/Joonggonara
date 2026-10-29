import { useEffect, useReducer } from "react";
import BannerBox from "../../component/banner/BannerBox";
import MainNotice from "../../component/mainNotice/MainNotice";
import { mainBannerSelectAPI } from "./api/MainAPI";
import "./css/Main.scss"

import { useNavigate } from "react-router-dom";
import { initiaMainReduser, MainReduser } from "./component/MainReduser";

const Main = () =>{

    // 네비게이션
    const navigate = useNavigate();

    const [state,dispath] = useReducer(MainReduser,initiaMainReduser);

    const {
    mainBannerSelectList,          // 배너 리스트
    weekNoticeList,                // 이번 주 추천 상품 리스트
    addressNoticeList,             // 동네에 올라온 최근 상품 리스트
    } = state;

    // 메인배너 리스트 가져오기
    const mainBannerSelect = async () =>{
        const result = await mainBannerSelectAPI();
        console.log(result.data)
        dispath({type:"mainBannerSelectList", payload : result.data})
    }
    
    // 배너 클릭 시 공지사항 페이지로 이동하기
    const gotoNotificationPage = (code) =>{
        alert(code)
        // navigate('')
    }
    
    // 임시방편임 이거 나중에 지울꺼임
    const notices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // 상세페이지 이동
    const gotoDetailProduct = (code) =>{
        navigate(`jogoProductDetail/product/${code}`)
    }

    useEffect(()=>{
        mainBannerSelect()
    },[])


    return(
        <>
            <BannerBox 
                state={state} 
                dispath={dispath}
                mainBannerSelectList={mainBannerSelectList}
                gotoNotificationPage={gotoNotificationPage}
            /> {/* 배너 */}
            <div id="mainBox">
                <div id="mainNoticeInfo">
                    <div id="mainNoticeH1">우리 동네 상품</div>
                    <div id="mainNoticeBox">
                        {notices.map((num,index)=>(
                            <MainNotice key={index} number={num} gotoDetailProduct={gotoDetailProduct}/>
                        ))}
                    </div>
                    {notices.length >= 12 ? <div id="noticeDetailLink">더보기</div> : <></>}
                </div>
                
                <div id="mainNoticeInfo">
                    <div id="mainNoticeH1">추천 상품</div>
                    <div id="mainNoticeBox">
                        {notices.map((num,index)=>(
                            <MainNotice key={index} number={num} gotoDetailProduct={gotoDetailProduct}/>
                        ))}
                    </div>
                    {notices.length >= 12 ? <div id="noticeDetailLink">더보기</div> : <></>}
                </div>

            </div>
        </>
    )
}

export default Main;