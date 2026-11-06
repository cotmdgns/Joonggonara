// scss
import "./css/Menubar.scss";

// 아이콘
import { TfiMenu } from "react-icons/tfi";
import { FaPlusCircle } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

// 모달창 컴포넌트
import CategoryModal from "./component/CategoryModal";
import JogoProductCreate from "../../page/product/component/JogoProductCreate";


// 리액트
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

// 리듀서
import { MenubarReduser, initiaMenubarReduser } from "./reduser/MenubarReduser";
const Menubar = () => {
  //모달창 상태값
  const [state, dispatch] = useReducer(MenubarReduser, initiaMenubarReduser);
  const { categoryModalBoo,productModalState,stepState } = state;

  const navi = useNavigate();
  //// 모달창
  // 상품 모달창 띄우기
  const productCerate = () =>{
    const token = sessionStorage.getItem("token");
    if(!token){
      alert("로그인을 하셔야 이용 가능합니다.")
      navi("/login")
      return
    }
    dispatch({type:"productCreateTrue"})
  }
  // 상품 모달창 닫기
  const productCreateClose = () =>{
    dispatch({type:"productCreateFalse"})
  }
  ////
  // 공지사항 페이지 이동하기
    const gotoMoveNotification = () =>{
      navi("/notification?pageNum=1")
  }
  return (
    <>
      <div id="MenubarBack">
        <div id="MenubarBox">
          <div
            id="MenubarFirst"
            onMouseEnter={() => dispatch({ type: "MenubarTrue" })}
            onMouseLeave={() => dispatch({ type: "MenubarFalse" })}
          >
            <div id="MenubarIcon">
              <TfiMenu />
            </div>
            <div id="MenubarText">카테고리</div>
            {categoryModalBoo && 
            <CategoryModal 
              state={state}
              dispatch={dispatch}
              navi={navi}
            />
            }
          </div>
          <div id="Menubar" onClick={()=>{productCerate()}}>
            <span><FaPlusCircle/></span>
            상품 올리기
          </div>
          {/* 너가 상품이구나? */}
          {productModalState && 
          <JogoProductCreate 
            productCreateClose={productCreateClose}
            state={state}
            dispatch={dispatch}
          />}
          <div id="Menubar" onClick={()=>{gotoMoveNotification()}}>
            <span><TfiMenuAlt/></span>
            공지사항
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
