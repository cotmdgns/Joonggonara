import MainNotice from "../../component/mainNotice/MainNotice";
import "./css/Main.scss"

const Main = () =>{
    return(
        <>
            <div id="mainBox">
                <div id="mainNoticeInfo">
                    <div id="mainNoticeH1">오늘 추천상품</div>
                    <div id="mainNoticeBox">
                        <MainNotice/>
                        <MainNotice/>
                        <MainNotice/>
                    </div>
                    <div id="noticeDetailLink">더보기</div>
                </div>
            </div>
        </>
    )
}

export default Main;