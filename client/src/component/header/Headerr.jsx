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

// api
import { addressApi,addressDetailApi } from "./api/HeaderApi";

// 리액트
import { useReducer,useEffect } from "react";

// 전역관리 리듀서
import { HeaderResuser, initiaHeaderReduser } from "./reduser/HeaderReduser";

/* 데이터는 전역관리로 사용할 예정 */
const Headerr = () =>{
    // 임시방편 로그인 조건 [ 로그인이 되어야하느 ㄴ조건임 ]
    const loginBoo = true;
    // 헤더 전역관리 리듀서
    const [state,dispatch] = useReducer(HeaderResuser,initiaHeaderReduser)
    const {
        addressToggle,
        priceToggle,
        categoryToggle
    } = state;

    // 로그 버튼 ( 메인페이지 )
    const logoBuuton=()=>{
        alert("메인페이지")
    }
    // 로그인 버튼
    const loginButton = () =>{
        alert("로그인")
    }
    // 로그아웃 버튼
    const logoutButton = () =>{
        alert("로그아웃")
    }
    // 회원가입
    const signUpButton = () =>{
        alert("회원가입")
    }
    // 내 정보
    const userInfoPage = () => {
        alert("내 정보")
    }
    // 통합 검색
    const searchBox = () =>{
        alert("검색")
    }
    // 알림
    const alram = () =>{
        alert("알람")
    }

    // 위치
    const addresButton = () =>{
        if(addressToggle){
            dispatch({type:"addresButtonClose"})
        }else{
            dispatch({type:"addresButtonOpen"})
        }
    }

    // 가격
    const priceButton = () =>{
        if(priceToggle){
            dispatch({type:"priceButtonClose"})
        }else{
            dispatch({type:"priceButtonOpen"})  
        }
        
    }

    // 카테고리
    const categoryButton = () =>{
        if(categoryToggle){
            dispatch({type:"categoryButtonClose"})
        }else{
            dispatch({type:"categoryButtonOpen"})
        }

    }
    // 상세 검색
    const searchButton = () =>{

    }

    // 검색 api 호출
    const searchAPIButton = () =>{

    }
    // 안심 거래 캠페인 네비

    // 이웃나라에서 알려주는 사기 예방 Tip
    return (
        <>
            <div id="headerBox">
                <div id="headerBoxL">
                    <img id="headerLogo" src={imgLogo} onClick={logoBuuton}/>
                    <div id="headerLogoText" onClick={logoBuuton}>이웃상품</div>
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