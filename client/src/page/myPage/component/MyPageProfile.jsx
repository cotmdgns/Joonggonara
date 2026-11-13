import { useReducer } from "react";
import { FaCamera } from "react-icons/fa";
import AddressOpenAPI from "../../../component/AddressOpenAPI";
import {  userProfileUpdateAPI } from "../api/MyPageAPI";

const MyPageProfile = ({profileCloseButton,state,dispatch,categoryUpdate}) => {

  // 사용자 프로필 변경하기
  const userProfileUpdate = async ()=>{
    const formdata = new FormData();
    // append에 들어가는 값들은 삼항연산자로
    // 변경사항이 없으면 기존 데이터, 변경사항이 있으면 변경 데이터
    // 저거 키들 배열로 두고
    // 값들도 배열로 둬서 반복문 돌리면 되는거 아닌감..
    const arrList = [
      "userCode",
      "userProfile",
      "userNickName",
      "userOldPwd",
      "userNewPwd",
      "userNewPwdCheck",
      "userAddress",
      "userAddressDetail",
      "addressData",
      "addressDetailData",
      "userInfoData"
    ]
      const stateList = [
      state.userInfo.userCode,
      state.userProfile,
      state.userNickName,
      state.userOldPwd,
      state.userNewPwd,
      state.userNewPwdCheck,
      state.userAddress,
      state.userAddressDetail,
      state.addressData,
      state.addressDetailData,
      state.userInfoData
    ] 


    if(state.userNewPwdCheck !== state.userNewPwd){
      alert("새 비밀번호가 틀립니다.")
      return
    }
    for(let i = 0; i<arrList.length;i++){
      if(stateList[i] != null && stateList[i].toString().trim() !== ""){
          formdata.append(arrList[i], stateList[i]);
      }
    }

 
    

    const result = await userProfileUpdateAPI(formdata)

    if(result.data == "notPassword"){
      alert("비밀번호가 틀렸습니다.")
      return
    }

    alert("변경되었습니다.")
    selectUserInfo()
    profileCloseButton()
  }
  console.log(state.userInfo)
  return (
    <>
      <div id="myPageBox">
        <div id="profileBox">
          <div id="profileBoxHeader">
            <div id="profileBoxHeaderH1">프로필 편집</div>
            <div id="profileBoxHeaderH1Info">회원님의 정보를 수정할 수 있습니다.</div>
          </div>
          <div id="profileBoxBody">
            <div id="profileBoxInfo">프로필 이미지</div>
            <div id="profileBoxInfo2">
              <img src={
                state.userProfile == null ?
                `http://localhost:8080/userProfile/${state.userInfo.userCode}/${state.userInfo.userImg}`
                :
                URL.createObjectURL(state.userProfile)
                } id="img"></img>
              <div id="info2Box">
                <label htmlFor="profileImg">
                  <div id="profile"><FaCamera/>    프로필 변경하기</div>
                </label>
                <input type="file" id="profileImg"  accept="image/*" onChange={(e)=>{
                  dispatch({type:"userProfile" , payload : e.target.files })
                }}></input>
                <div id="info2BoxInfo">JPG, PNG, 형식의 이미지</div>
              </div>
            </div>
          </div>
          <div id="profileBoxBody">
            <div id="profileBoxInfo">닉네임</div>
            <div id="profileBoxInfo2">
              <input placeholder={state.userInfo.userNickname} value={state.userNickName ?? ""} onChange={(e)=>{
                dispatch({type:"userNickName",payload : e.target.value})
              }}></input>
            </div>
          </div>
          <div id="profileBoxBody">
            <div id="profileBoxInfo">비밀번호 변경</div>
            <div>
              <div id="profileBoxInfo2">
                <input type="password" placeholder="현재 비밀번호를 입력해주세요." 
                value={state.userOldPwd ?? ""} 
                onChange={(e)=>{
                dispatch({type:"userOldPwd",payload : e.target.value})
              }}></input>
              </div>
              <div id="profileBoxInfo2">
                <input type="password" placeholder="새 비밀번호를 입력해주세요." 
                value={state.userNewPwd ?? ""} 
                onChange={(e)=>{
                dispatch({type:"userNewPwd",payload : e.target.value})
              }}></input>
              </div>
              <div id="profileBoxInfo2">
                <input type="password" placeholder="새 비밀번호를 한번 더 입력해주세요." 
                value={state.userNewPwdCheck ?? ""} 
                onChange={(e)=>{
                dispatch({type:"userNewPwdCheck",payload : e.target.value})
              }}></input>
              </div>
            </div>
          </div>
          <div id="profileBoxBody">
            <div id="profileBoxInfo">주소</div>
            <div id="profileBoxInfo2">
              <div id="profileBoxInfo2Address">
                <div  id="profileBoxInfo2Address2">
                  <input value={state.userAddress} placeholder={state.userInfo.userAddress ?? ""}></input>
                  <div id="addressButton"><AddressOpenAPI state={state} dispatch={dispatch}></AddressOpenAPI></div>
                </div>
                <div>
                  <input placeholder={state.userInfo.userAddressDetail} 
                        value={state.userAddressDetail} 
                        onChange={(e)=>{
                        dispatch({type:"userAddressDetail",payload : e.target.value})
                  }}></input>
                </div>
              </div>
            </div>
          </div>
          <div id="profileBoxBody">
            <div id="profileBoxInfo">자기 소개</div>
            <div id="profileBoxInfo2">
              <input placeholder={state.userInfo.userInfo == null ? "없음" : state.userInfo.userInfo}
                  value={state.userInfoData} 
                  onChange={(e)=>{
                    dispatch({type:"userInfoData",payload : e.target.value})
                  }}
                  ></input>
            </div>
          </div>
          <div id="profileBoxButton">
            <div id="buttonClose" onClick={profileCloseButton}>취소하기</div>
            <div id="buttonUpdate" onClick={()=>{userProfileUpdate()}}>변경하기</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageProfile;
