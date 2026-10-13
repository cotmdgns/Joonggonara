import { useReducer } from "react";
import InputTag from "../../../component/inputTag/InputTag";
import imgwww from "../../../img/default1.jpg";
import {
  initiaMenubarReduser,
  MenubarReduser,
} from "../../../component/menubar/reduser/MenubarReduser";

const MyPageProfile = () => {
  const [state, dispatch] = useReducer(MenubarReduser, initiaMenubarReduser);

  // 취소하기
  const profileCloseButton = () => {};

  // 수정하기
  const profileUpdateButton = () => {};

  return (
    <>
      <div id="myPageBox">
        <div id="profileBox">
          <div id="profileImg">
            <img src={imgwww} id="img"></img>
            <div id="imgUpdate">사진 변경</div>
            <div id="imgDefault">기본이미지로 변경</div>
          </div>
          <div id="profileInfo">
            <div>
              <div>
                <div>닉네임</div>
                <InputTag />
              </div>
              <div>
                <div>지역</div>
                <div>
                  <select></select>
                  <select></select>
                </div>
              </div>
              <div>
                <div>상세주소</div>
                <InputTag />
              </div>
              <div>
                <div>자기소개</div>
                <InputTag />
              </div>
            </div>
            <div id="profileButton">
              <div>취소</div>
              <div>저장</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageProfile;
