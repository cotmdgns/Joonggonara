//슬라이드
import { SwiperSlide,Swiper } from "swiper/react"; 
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// 배너 컴포넌트
import MainBannerInfo from "./component/MainBanner";

// css
import "./css/Banner.scss"

const BannerBox = () =>{
    return (
        <>
            <div id="headerBoxBanner">
                <Swiper
                id="Bannerswiper"
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3} // 현재 보여주눈 view 갯수
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000, // 슬라이드 간의 지연 시간 (밀리초 단위)
                    disableOnInteraction: false, // 사용자가 슬라이드를 건드린 후에도 자동 재생 계속
                }}
                >
                    <SwiperSlide>
                        <MainBannerInfo/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MainBannerInfo/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MainBannerInfo/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MainBannerInfo/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default BannerBox;