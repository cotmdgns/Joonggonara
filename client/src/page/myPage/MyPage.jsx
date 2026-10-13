//css
import "./css/MyPage.scss";

// 이미지 주소
import imgwww from "../../img/default1.jpg";

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

// 리엑트
import { useState, useReducer } from "react";

// 컴포넌트
import MyPageProfile from "./component/MyPageProfile";

// myPage 전역관리
import { MyPageReduser, initiaMyPageReduser } from "./reduser/MyPageReduser";

const MyPage = () => {
  //카테고리 상태값
  const [categoryState, setCategoryState] = useState(1);
  // 프로필 수정 상태값
  const [profileState, setProfileState] = useState(false);

  // 리듀서 [ 이걸로 변경할 예정 ]
  const [state, dispatch] = useReducer(MyPageReduser, initiaMyPageReduser);

  // 카테고리 상태변경
  const categoryUpdate = (index) => {
    setCategoryState(index);
  };

  // 마이페이지 수정으로 변경
  const profileUpdate = () => {
    setProfileState(!profileState);
  };

  return (
    <>
      {!profileState ? (
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
                    <img id="myPageProfileBoxImg" src={imgwww}></img>
                    <div id="myPageProfileBoxInfo3">
                      <div id="myPageProfileBoxInfoName">
                        채승훈님 (Chea Seung hun)
                      </div>
                      <div id="myPageProfileBoxInfoAddress">
                        <FaLocationDot></FaLocationDot>경기도,태전동
                      </div>
                      <div id="myPageProfileBoxInfoPoint">
                        <span id="icon">
                          <FaStar />
                        </span>
                        매너점수 : 4.8
                      </div>
                    </div>
                  </div>
                  <div id="myPageProfileBoxUserInfo">
                    오늘도 이웃과 소중한 인연을 만들어보세요!
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
                  판매중 : <span>0</span>건
                  <div id="homeIcon">
                    <FaHome />
                  </div>
                </div>
                <div id="myPageSuccess">
                  구매 완료 : <span>0</span>건
                  <div id="SuccessIcon">
                    <IoCartOutline />
                  </div>
                </div>
                <div id="myPageNanum">
                  나눔 신청 : <span>0</span>건
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
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
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
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
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
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
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
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
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
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
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
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                    <div id="myPageProduct">상품1</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <MyPageProfile></MyPageProfile>
      )}
    </>
  );
};

export default MyPage;
