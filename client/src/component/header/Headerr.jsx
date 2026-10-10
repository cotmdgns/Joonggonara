import imgLogo from "../../img/LogImg.png";


// jsx import
import AddressModal from "./modal/AddressModal";
import CategoryModal from "./modal/CategoryModal";
import PriceeModal from "./modal/PriceeModal";
import Menubar from "../menubar/Menubar";

// css
import "./css/Header.scss"

// 아이콘
import { CiLogin } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"; // 검색아이콘
import { GoChevronDown } from "react-icons/go";
import { RiAdminFill } from "react-icons/ri";

// api
import { addressApi,addressDetailApi } from "./api/HeaderApi";

// 리액트
import { useReducer,useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 전역관리 리듀서
import { HeaderResuser, initiaHeaderReduser } from "./reduser/HeaderReduser";

/* 데이터는 전역관리로 사용할 예정 */
const Headerr = () =>{

    const navigate = useNavigate();

    // 헤더 전역관리 리듀서
    const [state,dispatch] = useReducer(HeaderResuser,initiaHeaderReduser)
    const {
        addressToggle,
        priceToggle,
        categoryToggle,
        loginBoo
    } = state;

    // 로고 버튼 ( 메인페이지 )
    const logoBuuton=()=>{
        navigate("/")
    }
    // 로그인 버튼
    const loginButton = () =>{
        navigate("/login")
    }
    // 로그아웃 버튼
    const logoutButton = () =>{
        alert("로그아웃")
    }
    // 회원가입
    const signUpButton = () =>{
        navigate("/signUp")
    }
    // 내 정보
    const userInfoPage = () => {
        navigate("/myPage")
    }
    // 통합 검색
    const searchBox = () =>{
        alert("검색")
    }
    // 알림
    const alram = () =>{
        alert("알람")
    }
    // 관리자
    const admin = () =>{
        alert("알람")
    }

    // 상세 검색
    const searchButton = () =>{

    }

    // 검색 api 호출
    const searchAPIButton = () =>{

    }
    // 안심 거래 캠페인 네비
    const nav = (code) =>{

    }
    return (
        <>
            <div id="headerBox">
                <div id="headerBoxL">
                    <img id="headerLogo" src={imgLogo} onClick={logoBuuton}/>
                    <div id="headerLogoText" onClick={logoBuuton}>이웃 상품</div>
                </div>

                <div id="headerBoxC">
                    <div id="headerSearch" onClick={searchButton}>
                        <FaSearch/>
                        <input type="text" id="headerSearchInput" placeholder="상세 검색.."/>
                    </div>
                </div>
                <div id="headerBoxR">
                    {loginBoo ? 
                    <div id="headerInfoBox">
                        <div id="headerInfo" onClick={loginButton}>
                            <div id="headerFont"><CiLogin /></div>
                            <div id="headerText">로그인</div>
                        </div>
                        <div id="headerInfo" onClick={signUpButton}>
                            <div id="headerFont"><FaUserPlus/></div>
                            <div id="headerText">회원가입</div>
                        </div>
                    </div>
                    :
                    <div id="headerInfoBox">
                        <div id="headerInfo" onClick={logoutButton}>
                            <div id="headerFont"><CiLogout/></div> 
                            <div id="headerText">로그아웃</div>
                        </div>
                        <div id="headerInfo" onClick={userInfoPage}>
                            <div id="headerFont"><FaUserCog/></div>
                            <div id="headerText">내 정보</div>
                        </div>
                        <div id="headerInfo" onClick={alram}>
                            <div id="headerFont"><CiAlarmOn/></div>
                            <div id="headerText">알림</div>
                        </div>
                        <div id="headerInfo" onClick={admin}>
                            <div id="headerFont"><RiAdminFill/></div>
                            <div id="headerText">관리자</div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div>
                <Menubar/>
            </div>
        </>
    )
}

export default Headerr;