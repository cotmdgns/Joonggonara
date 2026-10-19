import BannerBox from "../../component/banner/BannerBox";
import MainNotice from "../../component/mainNotice/MainNotice";
import "./css/Main.scss"

import { useNavigate } from "react-router-dom";

const Main = () =>{
    // 네비게이션
    const navigate = useNavigate();

    const notices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // 상세페이지 이동
    const gotoDetailProduct = (code) =>{
        navigate(`jogoProductDetail/product/${code}`)
    }

    // 추천, 우리동네 상품 전용 버튼
    const gotoSubSelect = (code) =>{
        navigate(`jogoProductDetail/product/${code}`)
    }

    return(
        <>
            <BannerBox/> {/* 배너 */}
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