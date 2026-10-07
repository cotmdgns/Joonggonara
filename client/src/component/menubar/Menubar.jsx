// scss
import "./css/Menubar.scss"

// 아이콘 
import { TfiMenu } from "react-icons/tfi";

// 모달창 컴포넌트
import CategoryModal from "./component/CategoryModal";

// 리액트
import { useReducer } from "react";

// 리듀서
import { MenubarReduser,initiaMenubarReduser } from "./reduser/MenubarReduser";

const Menubar = () => {
    //모달창 상태값
    const[state,dispatch] = useReducer(MenubarReduser,initiaMenubarReduser)
    const{categoryModalBoo} = state;

    return (
        <>
        <div id="MenubarBack">
            <div id="MenubarBox">
                <div 
                    id="MenubarFirst" 
                    onMouseEnter={()=> dispatch({type:"MenubarTrue"})} 
                    onMouseLeave={()=> dispatch({type:"MenubarFalse"})}
                >
                    <div id="MenubarIcon"><TfiMenu/></div>
                    <div id="MenubarText">카테고리</div>
                    {categoryModalBoo && <CategoryModal />}
                </div>
                <div id="Menubar">이벤트</div>
                <div id="Menubar">신고누적조회</div>
                <div id="Menubar">공지사항</div>
                <div id="Menubar">상품 올리기</div>
            </div>
        </div>
        </>
    )
}

export default Menubar;