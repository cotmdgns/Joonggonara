import "./css/MainNotice.scss"

// 이미지
import imgwww from "../../img/default1.jpg" 

// 아이콘
import { FaRegHeart } from "react-icons/fa"; // 빈하트
import { FaHeart } from "react-icons/fa";    // 하트

const MainNotice = ({number}) => {
    const noticeLike = () =>{
        alert(number);
    }

    return (
        <>
            <div id="mainNotice">
                <img src={imgwww} id="mainNoticeImg"/>
                <div id="mainNoticeText">[오버홀/올제치] RADO Silver Horse 빈티지 오토매틱 시계</div>
                <div id="mainNoticePrice">59,000원</div>
                <div id="mainNoticeTime">5시간 전</div>
                <div id="mainNoticeIcon" onClick={noticeLike}><FaRegHeart/></div>
            </div>
        </>
    )
}

export default MainNotice;