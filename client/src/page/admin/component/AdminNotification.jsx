//css
import "../css/AdminNotificationManagement.scss";
import "react-quill-new/dist/quill.snow.css";

// 리액트
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import ReactQuill from "react-quill-new";
import Editor from "./Editor";
import {
  AdminNotificationReduser,
  initiaAdminNotificationReduser,
} from "../reduser/AdminNotificationReduser";
import { notificationManagementCreateAPI,notificationManagementDeleteAPI,notificationManagementSelectDetailAPI, notificationManagementUpdateAPI } from "../api/AdminPageAPI";

// 공지사항 디테일 부분
const AdminNotification = () => {
  // 네비
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    AdminNotificationReduser,
    initiaAdminNotificationReduser,
  );
  const { titleUpdateState,textEditorUpdateState,notificationDetail,bannerBooState, textEditor, updateBoo,title, baanerImg, bannerFile } = state;

  const param = useParams(); // 어드민 페이지에서 생성 or 상세 구분용
  const location = useLocation(); // 어드민 페이지 or 사용자 페이지 구분용

  // 서버에 가져가서 생성할 공지사항 데이터


  // 뒤로가기 [ 정상작동 ]
  const notificationBack = () => {
    navigate(`/layoutAdmin/adminNotificationManagement`);
  };
  // 생성하기 [ 정상작동 ]
  const notificationCreate = async () => {
    const userCode = sessionStorage.getItem("userCode");

    const formData = new FormData();

    if(bannerBooState){
      formData.append("userCode", userCode);
      formData.append("title", title);
      formData.append("textEditor", textEditor);
      formData.append("bannerBooState", bannerBooState);
      formData.append("bannerFile", bannerFile);
    }else{
      formData.append("userCode", userCode);
      formData.append("title", title);
      formData.append("textEditor", textEditor);
      formData.append("bannerBooState", bannerBooState);
    }
    if(title == null || title == ""){
      alert("제목을 입력해주세요.")
      return;
    }
    if(textEditor == null || textEditor == ""){
      alert("내용을 입력해주세요.")
      return;
    }
    await notificationManagementCreateAPI(formData);
    // 생성 후 페이지 이동
    navigate(`/layoutAdmin/adminNotificationManagement`);
  };
  // 공지사항 삭제하기  [ 정상작동 ]
  const notificationDelete = async () => {
    let code = param.code;
    await notificationManagementDeleteAPI(code)
    alert("삭제완료");
    navigate(`/layoutAdmin/adminNotificationManagement`);
  };

  // 수정하기
  const notificationUpdate = () => {
    let code = param.code;
    navigate(
      `/layoutAdmin/adminNotificationManagement/AdminNotification/update/${code}`,
    );
    dispatch({type:"updateBoo" , payload : location.pathname.includes("update")})
  };

  // 수정 -> 상세로 뒤로가기
  const notificationUpdateClose = (code) => {
    navigate(
      `/layoutAdmin/adminNotificationManagement/AdminNotification/${code}`,
    );
  };

  // 수정완료
  const notificationUpdateReal = async () => {

    const userCode = sessionStorage.getItem("userCode");
    const formData = new FormData();

    formData.append("userCode", userCode);
    formData.append("title", titleUpdateState);
    formData.append("textEditor", textEditorUpdateState);
    if(titleUpdateState == null || titleUpdateState == ""){
      alert("제목이 비어있습니다.")
      return;
    }
    if(textEditorUpdateState == null || textEditorUpdateState == ""){
      alert("내용이 비어있습니다.")
      return; 
    } 
    alert("수정되었습니다.")
    await notificationManagementUpdateAPI(formData)
    // navigate(`/layoutAdmin/adminNotificationManagement`);
  };

  // 공지사항 코드로 디테일 정보 조회하기 
  const notificationManagementSelectDetail = async () =>{
    let code = param.code;
    const result = await notificationManagementSelectDetailAPI(code);
    dispatch({type:"notificationDetail",payload:result.data});
    dispatch({type:"textEditorUpdateState",payload:result.data.notificationManagementText});
    dispatch({type:"titleUpdateState",payload:result.data.notificationManagementTitle});
    
  }
  useEffect(()=>{
    notificationManagementSelectDetail()
  },[])

  useEffect(()=>{
    console.log("디테일 정보 확인하기")
    console.log(notificationDetail)
  },[notificationDetail])

  useEffect(() => {
    dispatch({
      type: "pageState",
      payload: location.pathname.includes("update"),
    });
  }, [location.pathname]);

  return (
    <>
      {param.code != undefined ? (
        !updateBoo && param.code != undefined ? (
          <div id="notificationDetailBox">
            {/* 상세페이지 [ 일반페이지 일 시 조건 걸기] */}
            <div id="notificationDetailBoxHeader">공지사항 상세 페이지</div>
            <div id="notificationDetailBoxCenter">
              <div id="title" text="text">
                {notificationDetail.notificationManagementTitle}
              </div>
              <Editor 
                theme="snow"
                textEditor={notificationDetail.notificationManagementText}
                dispatch={dispatch}
                readOnly={true}
                modules={{ toolbar: false }}
              ></Editor>
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
              {notificationDetail.notificationManagementBoo ? 
              <div
                id="create"
                onClick={() => {
                  notificationUpdate();
                }}
              >
                수정하기
              </div>
              :
              <></>
              }
              {notificationDetail.notificationManagementBoo ?
              <div
                id="delete"
                onClick={() => {
                  notificationDelete();
                }}
              >
                삭제하기
              </div>
              :
              <></>
              }

            </div>
          </div>
        ) : (
          <div id="notificationDetailBox">
            {/* 수정페이지 [ 일반페이지 일 시 조건 걸기] */}
            <div id="notificationDetailBoxHeader">공지사항 수정 페이지</div>
            <div id="notificationDetailBoxCenter">
              <input 
                id="title" 
                text="text" 
                value={titleUpdateState}
                onChange={(e)=>{
                  dispatch({type:"titleUpdateState" , payload : e.target.value})
                }}
              ></input>
              <Editor
                mode="update"
                textEditorUpdate={textEditorUpdateState}
                dispatch={dispatch}
              />
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
