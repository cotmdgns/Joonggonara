import { GoArrowRight } from "react-icons/go";
import imgwww from "../../../img/default1.jpg"
import { SwiperSlide,Swiper } from "swiper/react"; 
import "../css/Banner.scss"

const MainBannerInfo = () =>{
    return (
        <>
            <div id="MainBannerBox">
                <img src={imgwww} id="MainBannerImg"/>
                <div id="MainBannerInfo">
                    <div id="MainBannerTitle">오늘도 안심하는 이웃나라</div>
                    <div id="MainBannerLink">
                        <div>안심보장 프로젝트의 시작</div>
                        <div id="LinkText">바로가기<GoArrowRight/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBannerInfo;