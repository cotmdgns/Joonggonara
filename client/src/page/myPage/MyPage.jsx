//css
import "./css/MyPage.scss";




// 아이콘
import { FaLocationDot } from "react-icons/fa6"; // 주소
import { CiStar } from "react-icons/ci"; // 별
import { FaStar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6"; // 사용자
import { GiBackwardTime } from "react-icons/gi"; // 타임라인
import { FaRegHeart } from "react-icons/fa"; // 하트
import { FaHome } from "react-icons/fa"; // 판매중
import { IoCartOutline } from "react-icons/io5"; // 구매완료
import { FiUsers } from "react-icons/fi"; // 나눔신청

import MyNotice from "../../component/mainNotice/MyNotice";

// 리엑트
import { useState, useReducer, useEffect } from "react";

// 컴포넌트
import MyPageProfile from "./component/MyPageProfile";

// myPage 전역관리
import { MyPageReduser, initiaMyPageReduser } from "./reduser/MyPageReduser";
import { buyProductAPI, freeProductAPI, interestProductAPI, purchaseHistoryProductAPI, saleProductAPI, selectUserInfoAPI, selectUserProductAPI } from "./api/MyPageAPI";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  //카테고리 상태값 [ 정상작동 중 ]
  const [categoryState, setCategoryState] = useState(1);
  // 카테고리 상태변경 [ 정상작동 중 ]
  const categoryUpdate = (index) => {
    setCategoryState(index);
  };

  // 리듀서 [ 이걸로 변경할 예정 ] [ 정상작동 중 ]
  const [state, dispatch] = useReducer  (MyPageReduser, initiaMyPageReduser);

  const navigate = useNavigate();

  // 마이페이지 수정으로 변경 [ 정상작동 중 ]
  const profileUpdate = () => {
    dispatch({type:"myPageProfileState"})
  };
  // 상세 상품페이지로 이동  [ 정상작동 중 ]
  const gotoDetailProduct = (code) => {
    navigate(`/jogoProductDetail/product/${code}`);
  };

  // 사용자 정보 가져와야 함 [ 총합 포인트 점수도 같이 가져와야 함]
  const selectUserInfo = async () =>{
    const code = sessionStorage.getItem("userCode")
    const result = await selectUserInfoAPI(code);
    dispatch({type:"userInfo", payload : result.data})
    console.log(result.data)
  }

  // 종합 데이터 가져오기 [ 정상작동 중 ]
  const totalProudctList = async ()=>{
    const result1 = await selectUserProductAPI(sessionStorage.getItem("userCode"));
    const result2 = await purchaseHistoryProductAPI(sessionStorage.getItem("userCode"));
    const result3 = await interestProductAPI(sessionStorage.getItem("userCode"));
    const result4 = await saleProductAPI(sessionStorage.getItem("userCode"));
    const result5 = await buyProductAPI(sessionStorage.getItem("userCode"));
    const result6 = await freeProductAPI(sessionStorage.getItem("userCode"));
    dispatch({type : "result1" , payload : result1.data})
    dispatch({type : "result2" , payload : result2.data})
    dispatch({type : "result3" , payload : result3.data})
    dispatch({type : "result4" , payload : result4.data})
    dispatch({type : "result5" , payload : result5.data})
    dispatch({type : "result6" , payload : result6.data})
  }
  useEffect(()=>{
    totalProudctList()
    selectUserInfo()
  },[])

  //// 프로필변경 함수
  // 취소버튼 [ 정상작동 중 ]
  const profileCloseButton = () => {
    dispatch({type : "myPageState"})
  };

  

  return (
    <>
      {state.profileState ? (
        <div id="myPageBox">
          <div id="myPageInfo">
            <div id="myPageCategory">
              <div
                className={
                  categoryState === 1
                    ? "myPageCategoryBox"
                    : "myPageCategoryBoxFalse"
                }
                onClick={() => {
                  categoryUpdate(1);
                }}
              >
                <div>
                  <FaRegUser />
                </div>
                <div>프로필 관리</div>
              </div>
              <div
                className={
                  categoryState === 2
                    ? "myPageCategoryBox"
                    : "myPageCategoryBoxFalse"
                }
                onClick={() => {
                  categoryUpdate(2);
                }}
              >
                <div>
                  <GiBackwardTime />
                </div>
                <div>거래내역</div>
              </div>
              <div
                className={
                  categoryState === 3
                    ? "myPageCategoryBox"
                    : "myPageCategoryBoxFalse"
                }
                onClick={() => {
                  categoryUpdate(3);
                }}
              >
                <div>
                  <FaRegHeart />
                </div>
                <div>관심상품</div>
              </div>
              <div
                className={
                  categoryState === 4
                    ? "myPageCategoryBox"
                    : "myPageCategoryBoxFalse"
                }
                onClick={() => {
                  categoryUpdate(4);
                }}
              >
                <div>
                  <FaHome />
                </div>
                <div>판매중</div>
              </div>
              <div
                className={
                  categoryState === 5
                    ? "myPageCategoryBox"
                    : "myPageCategoryBoxFalse"
                }
                onClick={() => {
                  categoryUpdate(5);
                }}
              >
                <div>
                  <IoCartOutline />
                </div>
                <div>구매완료</div>
              </div>
              <div
                className={
                  categoryState === 6
                    ? "myPageCategoryBox"
                    : "myPageCategoryBoxFalse"
                }
                onClick={() => {
                  categoryUpdate(6);
                }}
              >
                <div>
                  <FiUsers />
                </div>
                <div>나눔상품</div>
              </div>
            </div>
            <div id="myPageProfile">
              <div id="myPageProfileBox">
                <div id="myPageProfileBoxInfo">
                  <div id="myPageProfileBoxInfo2">
                    <img id="myPageProfileBoxImg" src={`http://localhost:8080/userProfile/${state.userInfo.userId}/userProfile/${state.userInfo.userImg}`}></img>
                    <div id="myPageProfileBoxInfo3">
                      <div id="myPageProfileBoxInfoName">
                        {state.userInfo.userName}
                      </div>
                      <div id="myPageProfileBoxInfoAddress">
                        <FaLocationDot></FaLocationDot>{state.userInfo.addressData},{state.userInfo.addressDetailData} <span>{state.userInfo.userAddressDetail}</span>
                      </div> 
                      <div id="myPageProfileBoxInfoPoint">
                        <span id="icon">
                          <FaStar />
                        </span>
                        매너점수 : {state.userInfo.userTotalPointer}
                      </div>
                    </div>
                  </div>
                  <div id="myPageProfileBoxUserInfo">
                    {state.userInfo.userInfo == null ? "내용이 없습니다." : state.userInfo.userInfo}
                  </div>
                </div>
                <div
                  onClick={() => {
                    profileUpdate();
                  }}
                  id="myPageProfileUpdateButton"
                >
                  프로필 편집
                </div>
              </div>
              <div id="myPageCenter">
                <div id="myPageSale">
                  판매중 : <span>{state.result4.length}</span>건
                  <div id="homeIcon">
                    <FaHome />
                  </div>
                </div>
                <div id="myPageSuccess">
                  구매 완료 : <span>{state.result5.length}</span>건
                  <div id="SuccessIcon">
                    <IoCartOutline />
                  </div>
                </div>
                <div id="myPageNanum">
                  나눔 신청 : <span>{state.result6.length}</span>건
                  <div id="NanumIcon">
                    <FiUsers />
                  </div>
                </div>
              </div>
              {categoryState == 1 && (
                <div id="myPageRegistration">
                  <div id="myPageRegistrationHeader">
                    <div id="myPageRegistrationH1">전체상품</div>
                    <div id="myPageRegistrationButton">전체보기</div>
                  </div>
                  <div id="myPageRegistrationCenter">
                    {state.result1.map((result,index)=>{
                      return(
                        <MyNotice
                            key={index}
                            list={result}
                            gotoDetailProduct={gotoDetailProduct}
                        ></MyNotice>
                      )
                    })}
                  </div>
                </div>
              )}
              {categoryState == 2 && (
                <div id="myPageRegistration">
                  <div id="myPageRegistrationHeader">
                    <div id="myPageRegistrationH1">거래 내역</div>
                    <div id="myPageRegistrationButton">전체보기</div>
                  </div>
                  <div id="myPageRegistrationCenter">
                    {state.result2.map((result,index)=>{
                      return(
                        <MyNotice
                            key={index}
                            list={result}
                            gotoDetailProduct={gotoDetailProduct}
                        ></MyNotice>
                      )
                    })}
                  </div>
                </div>
              )}
              {categoryState == 3 && (
                <div id="myPageRegistration">
                  <div id="myPageRegistrationHeader">
                    <div id="myPageRegistrationH1">관심상품</div>
                    <div id="myPageRegistrationButton">전체보기</div>
                  </div>
                  <div id="myPageRegistrationCenter">
                    {state.result3.map((result,index)=>{
                      return(
                        <MyNotice
                            key={index}
                            list={result}
                            gotoDetailProduct={gotoDetailProduct}
                        ></MyNotice>
                      )
                    })}
                  </div>
                </div>
              )}
              {categoryState == 4 && (
                <div id="myPageRegistration">
                  <div id="myPageRegistrationHeader">
                    <div id="myPageRegistrationH1">판매중</div>
                    <div id="myPageRegistrationButton">전체보기</div>
                  </div>
                  <div id="myPageRegistrationCenter">
                    {state.result4.map((result,index)=>{
                      return(
                        <MyNotice
                            key={index}
                            list={result}
                            gotoDetailProduct={gotoDetailProduct}
                        ></MyNotice>
                      )
                    })}
                  </div>
                </div>
              )}
              {categoryState == 5 && (
                <div id="myPageRegistration">
                  <div id="myPageRegistrationHeader">
                    <div id="myPageRegistrationH1">구매완료</div>
                    <div id="myPageRegistrationButton">전체보기</div>
                  </div>
                  <div id="myPageRegistrationCenter">
                    {state.result5.map((result,index)=>{
                      return(
                        <MyNotice
                            key={index}
                            list={result}
                            gotoDetailProduct={gotoDetailProduct}
                        ></MyNotice>
                      )
                    })}
                  </div>
                </div>
              )}
              {categoryState == 6 && (
                <div id="myPageRegistration">
                  <div id="myPageRegistrationHeader">
                    <div id="myPageRegistrationH1">나눔상품</div>
                    <div id="myPageRegistrationButton">전체보기</div>
                  </div>
                  <div id="myPageRegistrationCenter">
                    {state.result6.map((result,index)=>{
                      return(
                        <MyNotice
                            key={index}
                            list={result}
                            gotoDetailProduct={gotoDetailProduct}
                        ></MyNotice>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <MyPageProfile 
        profileCloseButton={profileCloseButton}
        state={state}
        dispatch={dispatch}
        ></MyPageProfile>
      )}
    </>
  );
};

export default MyPage;
