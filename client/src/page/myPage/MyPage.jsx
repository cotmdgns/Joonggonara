//css
import "./css/MyPage.scss"


// 이미지 주소
import imgwww from "../../img/default1.jpg" 


// 아이콘
import { FaLocationDot } from "react-icons/fa6";    // 주소
import { CiStar } from "react-icons/ci";            // 별
import { FaStar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";        // 사용자
import { GiBackwardTime } from "react-icons/gi";    // 타임라인
import { FaRegHeart } from "react-icons/fa";        // 하트

import { FaHome } from "react-icons/fa"; // 판매중 
import { IoCartOutline } from "react-icons/io5"; // 구매완료
import { FiUsers } from "react-icons/fi"; // 나눔신청


// 프로필 수정할 때 사용할 모달창
import MyPageProfile from "./MyPageProfile";
import InputTag from "../../component/inputTag/InputTag";

const MyPage =()=>{
    return (
        <>
            <div id="myPageBox">
                <div id="myPageHeader">
                    마이페이지 (My Page)
                </div>
                <div id="myPageInfo">
                    <div id="myPageCategory">
                        <div id="myPageCategoryProfile"><FaRegUser/>프로필 관리</div>
                        <div id="myPageCategoryPrice"><GiBackwardTime/>거래내역</div>
                        <div id="myPageCategoryProduct"><FaRegHeart/>관심상품</div>
                    </div>
                    <div id="myPageProfile">
                        <div id="myPageProfileBox">
                            <div id="myPageProfileBoxInfo">
                                <div id="myPageProfileBoxInfo2">
                                    <img id="myPageProfileBoxImg" src={imgwww}></img>
                                    <div id="myPageProfileBoxInfo3">
                                        <div id="myPageProfileBoxInfoName">채승훈님 (Chea Seung hun)</div>
                                        <div id="myPageProfileBoxInfoAddress"><FaLocationDot></FaLocationDot>경기도,태전동</div>
                                        <div id="myPageProfileBoxInfoPoint"><span id="icon"><FaStar/></span>매너점수 : 4.8</div>
                                    </div>
                                </div>
                                <div id="myPageProfileBoxUserInfo">오늘도 이웃과 소중한 인연을 만들어보세요!</div>
                            </div>
                            <div id="myPageProfileUpdateButton">
                                프로필 편집
                            </div>
                        </div>
                        <div id="myPageCenter">
                            <div id="myPageSale">판매중 : <span>0</span>건
                                <div id="homeIcon"><FaHome/></div>
                            </div>
                            <div id="myPageSuccess">구매 완료 : <span>0</span>건
                                <div id="SuccessIcon"><IoCartOutline/></div>
                            </div>
                            <div id="myPageNanum">나눔 신청 : <span>0</span>건
                                <div id="NanumIcon"><FiUsers/></div>
                            </div>
                        </div>
                        <div id="myPageRegistration">
                            <div id="myPageRegistrationHeader">
                                <div id="myPageRegistrationH1">최근 등록 물건</div>
                                <div id="myPageRegistrationButton">전체보기</div>
                            </div>
                            <div id="myPageRegistrationCenter"> 
                                <div id="myPageProduct">상품1</div>
                                <div id="myPageProduct">상품1</div>
                                <div id="myPageProduct">상품1</div>
                                <div id="myPageProduct">상품1</div>
                                <div id="myPageProduct">상품1</div>
                                <div id="myPageProduct">상품1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MyPage;