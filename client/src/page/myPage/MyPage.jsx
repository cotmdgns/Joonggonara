//css
import "./css/MyPage.scss"


// 이미지 주소
import imgwww from "../../img/default1.jpg" 


// 아이콘
import { FaLocationDot } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const MyPage =()=>{
    return (
        <>
            <div id="myPageBox">
                <div id="myPageBoxBack">
                    <div id="myPageUserInfo">
                        <div id="myPageUserInfoProfile">
                            <img src={imgwww}/>
                        </div>
                        <div id="myPageUserInfoName">
                            <div id="nickName">사용자 이름</div>
                            <div id="name">채승훈</div>
                            <div id="address"><FaLocationDot/>경기도, 태전동</div>
                        </div>
                        <div id="myPageUserInfoPoint">
                            <div id="maner">매너온도</div>
                            <div id="ondo"><span id="ondoReal">4.5</span> / 5.0</div>
                            <div id="manerStar"><CiStar/><CiStar/><CiStar/><CiStar/><CiStar/></div>
                        </div>
                    </div>
                </div>
                <div id="myPageBoxInfo">

                </div>
            </div>
        </>
    )
}


export default MyPage;