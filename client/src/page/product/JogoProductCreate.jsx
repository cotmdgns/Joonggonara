// 아이콘
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCamera } from "react-icons/fa";

// 컴포넌트
import JogoProductCategory from "./component/JogoProductCategory";
import InputTag from "../../component/inputTag/InputTag";

// 리액트
import { useEffect, useReducer } from "react";

// css
import "./css/JogoProduct.scss";

// 리듀서
import {
  initiaJogoProductReduser,
  JogoProductReduser,
} from "./reduser/JogoProductReduser";
import {
  categoryMajorListAPI,
  categoryMinorListAPI,
} from "../Main/api/MainAPI";
import AddressOpenAPI from "../../component/AddressOpenAPI";
import { noticeCreateAPI } from "./api/productAPI";

const JogoProductCreate = ({ productCreateClose }) => {
  // 리듀서
  const [state, dispatch] = useReducer(
    JogoProductReduser,
    initiaJogoProductReduser,
  );
  const {
    stepState,
    categoryMajorList,
    categoryMinorList,
    categoryMinorListAndList,
    textState,
    zonecode,
    roadAddress,
    numState,
    imgList,
    addressDetail,
  } = state;
  // 카테고리 메이저 상품 리스트
  const categoryMajor = async () => {
    const result = await categoryMajorListAPI();
    dispatch({ type: "categoryMajorList", payload: result.data });
  };

  useEffect(() => {
    categoryMajor();
  }, []);

  // 다음 step으로
  const nextStep = async (text) => {
    const result = await categoryMinorListAPI(text.categoryStateMajorCode);

    dispatch({ type: "categoryMinorList", payload: result.data });
    dispatch({
      type: "categoryMinorCode",
      payload: result.data[0].categoryStateMinorBig.categoryStateMinorCode,
    });
    dispatch({ type: "textState", payload: text.categoryStateMajorText });
    dispatch({ type: "nextCategory" });

    // 첫 번째 Big의 Small 목록 가져오기
    if (result.data.length > 0) {
      categoryMinorCheck(
        result.data[0].categoryStateMinorBig.categoryStateMinorCode,
        result.data,
      );
    }
  };

  const categoryMinorCheck = (code, categoryMinorList) => {
    const result = categoryMinorList.find(
      (arr) =>
        arr.categoryStateMinorBig.categoryStateMinorCode === Number(code),
    );

    dispatch({
      type: "categoryMinorListCode",
      payload: result.categoryStateMinorSmall[0].categoryStateMinorCode,
    });

    dispatch({
      type: "categoryMinorListAndList",
      payload: result?.categoryStateMinorSmall ?? [],
    });
  };

  // 게시글 생성하기
  const createNotice = async () => {
    // 서버에서 DTO로 받을 예정
    // 어떤 카테고리인지 확인하기
    const data = new FormData();
    data.append("code", sessionStorage.getItem("userCode")); // 사용자 코드
    data.append("categoryMajor", state.textState); // 게시글 메이져 카테고리
    data.append("categoryMinor", state.categoryMinorCode); // 게시글 마이너 카테고리
    data.append("categoryMinorList", state.categoryMinorListCode); // 게시글 마이너 리스트 ( 이거 이름을 어떻게 지어야할지 모르겠음; )
    data.append("productName", state.productName); // 상품 이름
    data.append("productPrice", state.productPrice); // 상품 가격
    data.append("productFree", state.productCheck); // 상품 무료로 나눌꺼냐의 대한 조건
    // data.append("zonecode" , state.zonecode)                        // 지번?
    // data.append("roadAddress" , state.roadAddress)                  // 검색주소
    // data.append("detailAddress" , state.addressDetail)              // 상세주소
    data.append("productInfo", state.productInfo); // 상품설명란
    Array.from(imgList).forEach((img) => {
      data.append("imgs", img);
    });

    console.log(data.get("code"));
    console.log(data.get("categoryMajor"));
    console.log(data.get("categoryMinor"));
    console.log(data.get("categoryMinorList"));
    console.log(data.get("productName"));
    console.log(data.get("productPrice"));
    console.log(data.get("productFree"));
    console.log(data.get("productInfo"));

    if (
      state.productName == "" ||
      state.productPrice == "" ||
      state.productInfo == ""
    ) {
      alert("입력란에 기재해주세요.");
      return;
    }
    if (imgList.length <= 0) {
      alert("사진 최소 한장이라도 넣어주세요.");
      return;
    }

    await noticeCreateAPI(data);
    alert("생성 되었습니다.");
    productCreateClose();
  };

  return (
    <>
      <div id="jogoProductCreate" onClick={productCreateClose}>
        <div id="jogoProductBox" onClick={(e) => e.stopPropagation()}>
          <div id="jogoProductHeader">
            <div id="headerH1">
              Step {stepState} : 카테고리 선택하기{" "}
              {textState != "" ? <span id="textState">[{textState}]</span> : ""}
            </div>
            <div id="headerClose" onClick={productCreateClose}>
              <IoMdCloseCircleOutline />
            </div>
          </div>
          {stepState == 1 && (
            <div id="jogoProductCenter">
              {categoryMajorList.map((str, index) => (
                <JogoProductCategory
                  // index가 아니라 code
                  nextStep={() => {
                    nextStep(str);
                  }}
                  key={index}
                  productText={str.categoryStateMajorText}
                />
              ))}
            </div>
          )}
          {stepState == 2 && (
            <div id="jogoProductCenter">
              <div id="jogoProductCenterBox">
                <div id="jogoProductCenterBox2">
                  {imgList.length > 0 ? (
                    <div>
                      <label htmlFor="img">
                        <div id="imgBoxTrue">
                          <img
                            src={URL.createObjectURL(imgList[numState])}
                          ></img>
                        </div>
                      </label>
                      <div id="imgList">
                        {Array.from(imgList).map((list, index) => {
                          return (
                            <div>
                              <img
                                onClick={() => {
                                  dispatch({
                                    type: "numState",
                                    payload: index,
                                  });
                                }}
                                src={URL.createObjectURL(list)}
                              ></img>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <label htmlFor="img">
                      <div id="imgBox">
                        <div id="imgBoxIcon">
                          <FaCamera></FaCamera>
                        </div>
                        <div>이미지를 등록해주세요.</div>
                        <div>(최대 5장까지 가능)</div>
                      </div>
                    </label>
                  )}
                  <input
                    type="file"
                    id="img"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      if (e.target.files.length > 5) {
                        alert("최대 4장만 가능합니다.");
                        return;
                      }
                      dispatch({ type: "imgList", payload: e.target.files });
                    }}
                  ></input>

                  <div id="centerRight">
                    <div id="selectBox">
                      <div id="name">하위 카테고리</div>
                      <div id="select">
                        <select
                          onChange={(e) => {
                            (categoryMinorCheck(
                              e.target.value,
                              categoryMinorList,
                            ),
                              dispatch({
                                type: "categoryMinorCode",
                                payload: e.target.value,
                              }));
                          }}
                        >
                          {categoryMinorList.map((arr, index) => (
                            <option
                              key={index}
                              value={
                                arr.categoryStateMinorBig.categoryStateMinorCode
                              }
                            >
                              {arr.categoryStateMinorBig.categoryStateMinorText}
                            </option>
                          ))}
                        </select>
                        <select
                          onChange={(e) => {
                            dispatch({
                              type: "categoryMinorListCode",
                              payload: e.target.value,
                            });
                          }}
                        >
                          {categoryMinorListAndList != "" ? (
                            categoryMinorListAndList?.map((arr, index) => (
                              <option
                                key={index}
                                value={arr?.categoryStateMinorCode}
                              >
                                {arr?.categoryStateMinorText}
                              </option>
                            ))
                          ) : (
                            <option>------</option>
                          )}
                        </select>
                      </div>
                    </div>
                    <div id="productName">
                      <div id="name">상품명</div>
                      <InputTag
                        PHText={"상품명을 입력해주세요.."}
                        val={state.productName}
                        chage={(e) => {
                          dispatch({
                            type: "productName",
                            payload: e.target.value,
                          });
                        }}
                      ></InputTag>
                    </div>
                    <div id="price">
                      <div id="priceBox">
                        <div id="name">가격</div>
                        <div id="priceBoxNanum">
                          <div id="Na">무료나눔 체크</div>
                          <input
                            type="checkbox"
                            id="priceButton"
                            onClick={() => {
                              dispatch({ type: "productCheck" });
                            }}
                          />
                        </div>
                      </div>
                      <InputTag
                        PHText={"가격을 입력해주세요.."}
                        TText={"text"}
                        boo={state.productCheck ? "" : null}
                        val={state.productCheck ? "무료" : state.productPrice}
                        chage={(e) => {
                          const value = e.target.value.replace(/,/g, "");

                          if (/^[1-9][0-9]*$|^$/.test(value)) {
                            dispatch({
                              type: "productPrice",
                              payload:
                                value === ""
                                  ? ""
                                  : Number(value).toLocaleString("en-US"),
                            });
                          }
                        }}
                      ></InputTag>
                    </div>
                    {/* <div id="name">거래장소</div>
                                    <div id="addressBox">
                                        <InputTag PHText={zonecode != "" ? zonecode : "주소를 검색해주세요."} onClick={() => document.getElementById("addressAPI").click()}></InputTag>
                                        <div id="addressButton"><AddressOpenAPI addressAPI="addressAPI" state={state} dispatch={dispatch}></AddressOpenAPI></div>
                                    </div>
                                    <div id="selectAddress">
                                        <div>선택한 주소</div>
                                        <span>{roadAddress != null && <>{roadAddress}</>}</span>
                                    </div>
                                    <div id="addressDetail">
                                        <InputTag 
                                            PHText={"상세주소를 입력해주세요."}
                                            val={state.addressDetail}
                                            chage={(e)=>{
                                                dispatch({type:"addressDetail", payload:e.target.value})
                                            }}
                                        ></InputTag>
                                    </div> */}
                  </div>
                </div>
                <div id="htmlEditH1">설명란</div>
                <textarea
                  id="htmlEdit"
                  value={state.productInfo}
                  onChange={(e) => {
                    dispatch({ type: "productInfo", payload: e.target.value });
                  }}
                ></textarea>
              </div>
              <div id="jogoProductCenterButton">
                <div
                  id="productBack"
                  onClick={() => {
                    dispatch({ type: "prevCategory" });
                  }}
                >
                  뒤로가기
                </div>
                <div id="productCreate" onClick={createNotice}>
                  생성하기
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JogoProductCreate;
