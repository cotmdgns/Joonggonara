//css
import "../css/AdminNotificationManagement.scss";

// 리액트
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import ReactQuill from "react-quill-new";
import Editor from "./Editor";
import {
  AdminNotificationReduser,
  initiaAdminNotificationReduser,
} from "../reduser/AdminNotificationReduser";
import { notificationManagementCreateAPI } from "../api/AdminPageAPI";

// 공지사항 디테일 부분
const AdminNotification = () => {
  // 네비
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    AdminNotificationReduser,
    initiaAdminNotificationReduser,
  );
  const { bannerBooState, textEditor, title, baanerImg, bannerFile } = state;

  const param = useParams(); // 어드민 페이지에서 생성 or 상세 구분용
  const location = useLocation(); // 어드민 페이지 or 사용자 페이지 구분용

  // 서버에 가져가서 생성할 공지사항 데이터

  useEffect(() => {
    dispatch({
      type: "pageState",
      payload: location.pathname.includes("update"),
    });
  }, [location.pathname]);

  // 뒤로가기
  const notificationBack = () => {
    navigate(`/layoutAdmin/adminNotificationManagement`);
  };
  // 생성하기
  const notificationCreate = async () => {
    const userCode = sessionStorage.getItem("userCode");
    console.log(userCode);
    const formData = new FormData();
    formData.append("userCode", userCode);
    formData.append("title", title);
    formData.append("textEditor", textEditor);
    formData.append("bannerBooState", bannerBooState);
    formData.append("bannerFile", bannerFile);

    await notificationManagementCreateAPI(formData);

    // 생성 후 페이지 이동
    // navigate(`/layoutAdmin/adminNotificationManagement`);
  };
  // 삭제하기
  const notificationDelete = () => {
    alert("삭제하기");
  };
  // 생성하기
  const notificationUpdate = (code) => {
    navigate(
      `/layoutAdmin/adminNotificationManagement/AdminNotification/update/${code}`,
    );
  };

  // 수정 -> 상세로 뒤로가기
  const notificationUpdateClose = (code) => {
    navigate(
      `/layoutAdmin/adminNotificationManagement/AdminNotification/${code}`,
    );
  };

  // 수정완료
  const notificationUpdateReal = (code) => {
    navigate(`/layoutAdmin/adminNotificationManagement`);
  };

  return (
    <>
      {param.code != undefined ? (
        !bannerBooState && param.code != undefined ? (
          <div id="notificationDetailBox">
            {/* 상세페이지 [ 일반페이지 일 시 조건 걸기] */}
            <div id="notificationDetailBoxHeader">공지사항 상세 페이지</div>
            <div id="notificationDetailBoxCenter">
              <div id="title" text="text">
                공지사항 제목
              </div>
              <Editor></Editor>
            </div>
            {/* 사용여부에 따라 달라짐 */}
            {bannerBooState ? (
              <div id="bannerBoo">
                <div id="bannerH1">메인 배너</div>
                <div id="notificationDetailBanner">
                  <div id="bannerImg">배너(main) 이미지</div>
                  <div id="bannerInfo">
                    <div id="bannerTitleInfo">
                      #크기는 280x280으로 설정해주세요
                    </div>
                    <input
                      id="bannerTitle"
                      type="text"
                      placeholder="배너(main) 제목"
                    ></input>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div id="notificationDetailFooter">
              <div id={bannerBooState ? "buttonTrueReal" : "buttonFalseRela"}>
                {bannerBooState ? "활성화" : "비활성화"}
              </div>
              <div
                id="close"
                onClick={() => {
                  notificationBack();
                }}
              >
                뒤로가기
              </div>
              <div
                id="create"
                onClick={() => {
                  notificationUpdate(1);
                }}
              >
                수정하기
              </div>
              <div
                id="delete"
                onClick={() => {
                  notificationDelete();
                }}
              >
                삭제하기
              </div>
            </div>
          </div>
        ) : (
          <div id="notificationDetailBox">
            {/* 수정페이지 [ 일반페이지 일 시 조건 걸기] */}
            <div id="notificationDetailBoxHeader">공지사항 수정 페이지</div>
            <div id="notificationDetailBoxCenter">
              <input id="title" text="text" placeholder="공지사항 제목"></input>
              <Editor></Editor>
            </div>
            {/* 사용여부에 따라 달라짐 */}
            {bannerBooState ? (
              <div id="bannerBoo">
                <div id="bannerH1">메인 배너</div>
                <div id="notificationDetailBanner">
                  <div id="bannerImg">배너(main) 이미지</div>
                  <div id="bannerInfo">
                    <div id="bannerTitleInfo">
                      #크기는 280x280으로 설정해주세요
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div id="notificationDetailFooter">
              <div id={bannerBooState ? "buttonTrueReal" : "buttonFalseRela"}>
                {bannerBooState ? "활성화" : "비활성화"}
              </div>
              <div
                id="close"
                onClick={() => {
                  notificationUpdateClose(1);
                }}
              >
                뒤로가기
              </div>
              <div
                id="create"
                onClick={() => {
                  notificationUpdateReal(1);
                }}
              >
                수정완료
              </div>
            </div>
          </div>
        )
      ) : (
        <div id="notificationDetailBox">
          {/* 생성페이지 [ 일반페이지 일 시 조건 걸기] */}
          <div id="notificationDetailBoxHeader">공지사항 생성 페이지</div>
          <div id="notificationDetailBoxCenter">
            <input
              id="title"
              text="text"
              placeholder="공지사항 제목"
              value={title}
              onChange={(e) => {
                dispatch({ type: "titleState", payload: e.target.value });
              }}
            ></input>
            <Editor textEditor={textEditor} dispatch={dispatch}></Editor>
          </div>
          {/* 사용여부에 따라 달라짐 */}
          {bannerBooState ? (
            <div id="bannerBoo">
              <div id="bannerH1">메인 배너</div>
              <div id="notificationDetailBanner">
                <div id="bannerImg">
                  <img src={baanerImg}></img>
                </div>
                <div id="bannerInfo">
                  <div id="bannerTitleInfo">
                    #크기는 280x280으로 설정해주세요
                  </div>
                  {/*
                  <input
                    id="bannerTitle"
                    type="text"
                    placeholder="배너(main) 제목"
                  ></input>
                  */}
                  <div id="bannerImgPush">
                    <input
                      type="file"
                      placeholder="이미지 추가하기"
                      onChange={(e) => {
                        const file = e.target.files[0];

                        if (file) {
                          dispatch({
                            type: "imgState",
                            payload: {
                              preview: URL.createObjectURL(file),
                              file: file,
                            },
                          });
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div id="notificationDetailFooter">
            <div
              id={bannerBooState ? "buttonTrue" : "buttonFalse"}
              onClick={() => {
                dispatch({ type: "bannerBooState" });
              }}
            >
              {bannerBooState ? "배너 활성화" : "배너 비활성화"}
            </div>
            <div
              id="close"
              onClick={() => {
                notificationBack();
              }}
            >
              취소하기
            </div>
            <div
              id="create"
              onClick={() => {
                notificationCreate();
              }}
            >
              생성하기
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminNotification;
