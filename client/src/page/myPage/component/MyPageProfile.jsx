import { useReducer } from "react";
import InputTag from "../../../component/inputTag/InputTag";
import { initiaMyPageReduser, MyPageReduser } from "../reduser/MyPageReduser";

const MyPageProfile = ({profileCloseButton,state,dispatch}) => {

  // 변경사항 수정버튼
  // 변경하고 새로고침
  const profileUpdateButton = () => {};

  // 기본이미지로 변경
  // 변경하고 새로고침
  const defaultImgUpdate = () =>{}

  // 이미지 변경
  // 변경하고 새로고침
  const userImgUpdate = () => {}

  console.log(state.userInfo)

  return (
    <>
      <div id="myPageBox">
        <div id="profileBox">
          <div id="profileImg">
            <img src={`http://localhost:8080/userProfile/${state.userInfo.userId}/userProfile/${state.userInfo.userImg}`} id="img"></img>
            <div id="imgUpdate">프로필 사진 변경</div>
            <div id="imgDefault">기본이미지로 변경</div>
          </div>
          <div id="profileInfo">
            <div id="profileNicknameBox">
              <div id="textBox">닉네임</div>
              <div id="input">
                <InputTag PHText="여기에 DB에 저장된 아이디 들어갈 자리"/>
              </div>
            </div>
            <div id="profileAddressDefailBox">
              <div id="textBox">비밀번호</div>
              <div id="input">
                <InputTag PHText="여기에 DB에 저장된 비밀번호 들어갈 자리" TText={"password"}/>
              </div>
            </div>
            <div id="profileAddressDefailBox">
              <div id="textBox">상세주소</div>
              <div id="input">
                <InputTag PHText="여기에 DB에 저장된 상세주소 들어갈 자리"/>
              </div>
            </div>
            <div id="profileSelfBox">
              <div id="textBox">자기소개</div>
              <div id="input">
               <InputTag PHText="남들에게 본인을 소개해주세요! "/>
              </div>
            </div>
            <div id="profileButton">
              <div id="button1" onClick={() => {profileCloseButton()}}>취소</div>
              <div id="button2">변경사항 저장</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageProfile;
