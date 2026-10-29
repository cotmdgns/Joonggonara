import { GoArrowRight } from "react-icons/go";
import imgwww from "../../../img/default1.jpg"
import { SwiperSlide,Swiper } from "swiper/react"; 
import "../css/Banner.scss"

const MainBannerInfo = ({list,gotoNotificationPage}) =>{
    return (
        <>
            <div id="MainBannerBox" onClick={()=>{gotoNotificationPage(list.notificationManagementCode)}}>
                <img src={`http://localhost:8080/${list.notificationManagementCode}/${list.notificationManagementImg}`} id="MainBannerImg"/>
                <div id="MainBannerInfo">
                    <div id="MainBannerLink">
                        <div id="MainBannerTitle">{list.notificationManagementTitle}</div>
                        <div id="LinkText">바로가기<GoArrowRight/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBannerInfo;