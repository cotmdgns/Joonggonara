import { useEffect, useReducer } from "react";
import BannerBox from "../../component/banner/BannerBox";
import MainNotice from "../../component/mainNotice/MainNotice";
import {
  mainBannerSelectAPI,
  newNotificationSelectAPI,
  userAddressSelectAPI,
} from "./api/MainAPI";
import "./css/Main.scss";

import { useNavigate } from "react-router-dom";
import { initiaMainReduser, MainReduser } from "./component/MainReduser";

const Main = () => {
  // 네비게이션
  const navigate = useNavigate();

  const [state, dispath] = useReducer(MainReduser, initiaMainReduser);

  const {
    mainBannerSelectList, // 배너 리스트
    newNotificationSelectList, // 이번 주 추천 상품 리스트
    userAddressSelectList, // 동네에 올라온 최근 상품 리스트
  } = state;

  // 메인배너 리스트 가져오기
  const mainBannerSelect = async () => {
    const result = await mainBannerSelectAPI();
    dispath({ type: "mainBannerSelectList", payload: result.data });
  };

  // 배너 클릭 시 공지사항 페이지로 이동하기
  const gotoNotificationPage = (code) => {
    navigate(`/notification/notificationDetail/${code}`);
  };

  // 임시방편임 이거 나중에 지울꺼임
  const notices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 내 지역으로 해서 주변 상품 뽑아주기
  const userAddressSelect = async () => {
    const userCode = sessionStorage.getItem("uesrCode");
    const result = await userAddressSelectAPI(userCode);
    console.log("내 지역 상품");
    console.log(result.data);
    dispath({ type: "userAddressSelect", payload: result.data });
  };

  // 일주일안으로 생성된 데이터 확인하기 [ 정상 작동하는 중 ]
  const newNotificationSelect = async () => {
    // 이건 DB에서 현재 날짜에서 -7일 해서 계속 가져다주기
    const result = await newNotificationSelectAPI();
    console.log("일주일 상품");
    console.log(result.data);
    dispath({ type: "newNotificationSelect", payload: result.data });
  };

  // 상세페이지 이동
  const gotoDetailProduct = (code) => {
    navigate(`jogoProductDetail/product/${code}`);
  };

  useEffect(() => {
    mainBannerSelect();
    newNotificationSelect();
    userAddressSelect();
  }, []);

  return (
    <>
      <BannerBox
        state={state}
        dispath={dispath}
        mainBannerSelectList={mainBannerSelectList}
        gotoNotificationPage={gotoNotificationPage}
      />{" "}
      {/* 배너 */}
      <div id="mainBox">
        <div id="mainNoticeInfo">
          <div id="mainNoticeH1">우리 동네 상품</div>
          <div id="mainNoticeBox">
            {userAddressSelectList.map((num, index) => (
              <MainNotice
                key={index}
                list={num}
                gotoDetailProduct={gotoDetailProduct}
              />
            ))}
          </div>
          {notices.length >= 12 ? (
            <div id="noticeDetailLink">더보기</div>
          ) : (
            <></>
          )}
        </div>

        <div id="mainNoticeInfo">
          <div id="mainNoticeH1">추천 상품</div>
          <div id="mainNoticeBox">
            {newNotificationSelectList.map((list, index) => (
              <MainNotice
                key={index}
                list={list}
                gotoDetailProduct={gotoDetailProduct}
              />
            ))}
          </div>
          {notices.length >= 12 ? (
            <div id="noticeDetailLink">더보기</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
