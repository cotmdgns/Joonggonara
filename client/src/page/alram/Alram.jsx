import { useEffect } from "react";
import "../alram/scss/Alram.scss";

const Alram = () => {
  return (
    <>
      <div id="alramPage">
        <div id="alramBodyHeader">
          <div id="alramBodyH1">알람</div>
          <div id="alramBodyH1Info">
            해당 페이지에서 사용자에게 온 알람을 확인할 수 있습니다.
          </div>
        </div>
        <div id="alramBody">
          <div>전체</div>
          <div>좋아요</div>
          <div>공지사항</div>
        </div>
        <div id="alramPaging">
          {/* 여기서 반복문 */}
          <div id="alramPaging1">
            <div id="alramPagingImg">이미지?</div>
            <div>
              <div>내가 올린 상품에 좋아요가 생겼어요!</div>
              <div>[상품제목] 게시글에 또 다른 사용자가 좋요아 눌렀어요!</div>
              <div>좋아요 알림</div>
            </div>
          </div>
          <div id="alramPaging1">
            <div>몇시간전</div>
            <div>이미지</div>
          </div>
        </div>
        <div id="alramPagingButton">알람페ㄴㄴ이지 이동</div>
      </div>
    </>
  );
};

export default Alram;
