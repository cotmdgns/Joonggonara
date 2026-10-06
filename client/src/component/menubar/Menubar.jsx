import "./css/Menubar.scss"
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiMenu } from "react-icons/tfi";
import CategoryModal from "./component/CategoryModal";
import { useState } from "react";

const Menubar = () => {
    //모달창 상태값
    const[boo,setBoo] = useState(true)
    return (
        <>
            <div id="MenubarBox">
                <div 
                    id="MenubarFirst" 
                    onMouseEnter={()=> setBoo(!boo)} 
                    onMouseLeave={()=> setBoo(!boo)}
                >
                    <div id="MenubarIcon"><TfiMenu/></div>
                    <div>카테고리</div>
                </div>
                <div id="Menubar">이벤트</div>
                <div id="Menubar">유저조회</div>
                <div id="Menubar">읽을거리</div>
                <div id="Menubar">내 관심</div>
            </div>
            {/*modal 창*/}
            {boo ? <CategoryModal/> : <></>}
            
        </>
    )
}

export default Menubar;