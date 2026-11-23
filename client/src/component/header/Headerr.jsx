import imgLogo from "../../img/LogImg.png";

// jsx import
import Menubar from "../menubar/Menubar";

// css
import "./css/Header.scss";

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

// 리액트
import { useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 전역관리 리듀서
import { HeaderResuser, initiaHeaderReduser } from "./reduser/HeaderReduser";
import {
  initiaMenubarReduser,
  MenubarReduser,
} from "../menubar/reduser/MenubarReduser";
import { searchNoticeSelectAPI } from "../../page/product/api/productAPI";
import AlramModal from "../../page/alram/component/AlramModal";
import { alramTotalAPI, selectAlramAPI } from "../../page/alram/api/AlramAPI";

/* 데이터는 전역관리로 사용할 예정 */
const Headerr = () => {
  const navigate = useNavigate();

  const [boo, setBoo] = useState(false);
  // 헤더 전역관리 리듀서
  const [state, dispatch] = useReducer(HeaderResuser, initiaHeaderReduser);
  const { addressToggle, priceToggle, categoryToggle, managerState, loginBoo } =
    state;

  // 마이페이지 전역관리 리듀서
  const [stateMyPage, dispatchMyPage] = useReducer(
    MenubarReduser,
    initiaMenubarReduser,
  );

  // 로고 버튼 ( 메인페이지 )
  const logoBuuton = () => {
    navigate("/");
  };
  // 로그인 버튼
  const loginButton = () => {
    navigate("/login");
  };
  // 로그아웃 버튼
  const logoutButton = () => {
    dispatch({ type: "logout" });
    navigate("/");
    alert("정상적으로 로그아웃 되었습니다.");
  };
  // 회원가입
  const signUpButton = () => {
    navigate("/signUp");
  };
  // 마이 페이지
  const userInfoPage = () => {
    navigate("/myPage");
  };

  // (알림)모달창 열기
  const alramOpen = () => {
    dispatch({ type: "alramModelOpen" });
  };
  // (알림)모달창 닫기
  const alramClose = () => {
    dispatch({ type: "alramModelClose" });
  };
  const selectAlram = async () =>{
    const result = await alramTotalAPI(sessionStorage.getItem("userCode"));
    dispatch({ type: "selectAlramTotal" , payload : result.data});
  }
  // 관리자
  const admin = () => {
    navigate("/layoutAdmin");
  };

  // 상세 검색
  const searchButton = () => {
    navigate(
      `/jogoProduct?pageNum=1&search=${encodeURIComponent(state.search)}`,
    );
    dispatch({ type: "searchButton", payload: "" });
  };

  useEffect(()=>{
    selectAlram();
  },[])
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userManager = sessionStorage.getItem("userManager");
    if (token != null) {
      dispatch({ type: "loginBoo" });
    }
    if (userManager == 2) {
      dispatch({ type: "managerState" });
    }
  }, []);

  return (
    <>
      <div id="headerBox">
        <div id="headerBoxL">
          <img id="headerLogo" src={imgLogo} onClick={logoBuuton} />
          <div id="headerLogoText" onClick={logoBuuton}>
            이웃 상품
          </div>
        </div>

        <div id="headerBoxC">
          <div id="headerSearch">
            <FaSearch />
            <input
              type="text"
              id="headerSearchInput"
              placeholder="상세 검색.."
              value={state.search}
              onChange={(e) => {
                dispatch({ type: "searchButton", payload: e.target.value });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchButton();
                }
              }}
            />
          </div>
        </div>
        <div id="headerBoxR">
          {!loginBoo ? (
            <div id="headerInfoBox">
              <div id="headerInfo" onClick={loginButton}>
                <div id="headerFont">
                  <CiLogin />
                </div>
                <div id="headerText">로그인</div>
              </div>
              <div id="headerInfo" onClick={signUpButton}>
                <div id="headerFont">
                  <FaUserPlus />
                </div>
                <div id="headerText">회원가입</div>
              </div>
            </div>
          ) : (
            <div id="headerInfoBox">
              <div id="headerInfo" onClick={logoutButton}>
                <div id="headerFont">
                  <CiLogout />
                </div>
                <div id="headerText">로그아웃</div>
              </div>
              <div id="headerInfo" onClick={userInfoPage}>
                <div id="headerFont">
                  <FaUserCog />
                </div>
                <div id="headerText">내 정보</div>
              </div>
              <div
                id="headerInfo"
                onClick={() => {
                  if (!state.alramModel) {
                    alramOpen();
                  } else {
                    alramClose();
                  }
                }}
              >
                <div id="headerFont">
                  <CiAlarmOn />
                </div>
                <div id="headerText">
                  알림
                  <div id="headerTotal">{state.selectAlramTotal}</div>
                  {state.alramModel && (
                    <AlramModal alramClose={alramClose} selectAlram={selectAlram}
                    ></AlramModal>
                  )}
                </div>
              </div>
              {managerState === "managerState" && (
                <div id="headerInfo" onClick={admin}>
                  <div id="headerFont">
                    <RiAdminFill />
                  </div>
                  <div id="headerText">관리자</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        <Menubar />
      </div>
    </>
  );
};

export default Headerr;
