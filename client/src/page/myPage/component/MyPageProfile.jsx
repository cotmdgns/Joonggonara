import { useReducer } from "react";
import InputTag from "../../../component/inputTag/InputTag";
import imgwww from "../../../img/default1.jpg";
import { initiaMyPageReduser, MyPageReduser } from "../reduser/MyPageReduser";

const MyPageProfile = ({profileCloseButton}) => {
  // myPage 리듀서
  const [state, dispatch] = useReducer  (MyPageReduser, initiaMyPageReduser);
  const { profileState }  = state;

  // 임시더미데이터
    const arr1 = ["서울","서울","서울","서울","서울","서울","서울","서울","서울"]
    const arr2 = ["서울","서울","서울","서울","서울","서울","서울","서울","서울"]



  // 변경사항 수정버튼
  // 변경하고 새로고침
  const profileUpdateButton = () => {};

  // 기본이미지로 변경
  // 변경하고 새로고침
  const defaultImgUpdate = () =>{}

  // 이미지 변경
  // 변경하고 새로고침
  const userImgUpdate = () => {}
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
            <div id="profileNicknameBox">
              <div id="textBox">닉네임</div>
              <div id="input">
                <InputTag PHText="여기에 DB에 저장된 아이디 들어갈 자리"/>
              </div>
            </div>
            <div id="profileAddressDefailBox">
              <div id="textBox">비밀번호</div>
              <div id="input">
                <InputTag PHText="여기에 DB에 저장된 비밀번호 들어갈 자리"/>
              </div>
            </div>
            <div id="profileAddressBox">
              <div id="textBox">지역</div>
              <div id="addressSelct">
                  <select id="address">
                      {arr1.map((arr,index)=>(
                          <option key={index}>{arr}</option>
                      ))}
                  </select>
                  <div id="addressSpace"></div>
                  <select id="address">
                      {arr2 != null ? 
                      arr2.map((arr,index)=>(
                          <option  key={index}>{arr}</option>
                      ))
                      :
                      <option>------</option>
                      }
                  </select>
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
