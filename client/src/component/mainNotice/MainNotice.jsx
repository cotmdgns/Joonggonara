import "./css/MainNotice.scss";

// 이미지

// 아이콘
import { FaRegHeart } from "react-icons/fa"; // 빈하트
import { FaHeart } from "react-icons/fa"; // 하트
import {
  subscribeNoticeCreateAPI,
  subscribeNoticeDeleteAPI,
} from "../../page/product/api/productAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainNotice = ({
  list,
  gotoDetailProduct,
  pageNum,
  searchNoticeSelect,
  userAddressSelect,
  newNotificationSelect,
}) => {
    const navigate = useNavigate();

    const [loading,setLoading] = useState(false)
  // 좋아요 누르기 버튼
  const noticeLike = async () => {
    if(loading) return;

    try{
      setLoading(true)
      if(sessionStorage.getItem("token") == null || sessionStorage.getItem("token") == undefined){
        alert("로그인을 해주세요.")
        navigate("/login")
        return
      }
      const data = {
        noticeCode: list.jgnoticeCode,
        userCode: sessionStorage.getItem("userCode"),
        whoUserCode : list.userCode,
      };
      await subscribeNoticeCreateAPI(data);

      
      if (typeof userAddressSelect === "function") {
          await userAddressSelect();
      }

      if (typeof newNotificationSelect === "function") {
          await newNotificationSelect();
      }

      if(pageNum != null){
        // 이건 페이징 
        await searchNoticeSelect(pageNum);
      }
    }catch{

    }finally{
      setLoading(false)
    }




  };
  // 좋아요 삭제
  const noticeLikeFalse = async () => {

    if(loading) return;
      if(sessionStorage.getItem("token") == null || sessionStorage.getItem("token") == undefined){
        alert("로그인을 해주세요.")
        navigate("/login")
        return
      }
      const data = {
        jGNoticeCode: list.jgnoticeCode,
        userCode: sessionStorage.getItem("userCode"),
      };
      await subscribeNoticeDeleteAPI(data);


      if (typeof userAddressSelect === "function") {
          await userAddressSelect();
      }

      if (typeof newNotificationSelect === "function") {
          await newNotificationSelect();
      }
      
      if(pageNum != null){
        await searchNoticeSelect(pageNum);
      }
    try{
      setLoading(true)

    }catch{

    }finally{
      setLoading(false)
    }



  };
  
  return (
    <>
      <div
        id="mainNotice"
        onClick={() => {
          gotoDetailProduct(list.jgnoticeCode);
        }}
      >
        <img
          src={list.firstImgName}
          id="mainNoticeImg"
        />
        <>
          <div id="mainNoticeText">{list.jgnoticeTitle}</div>
          <div id="mainNoticePrice">
            {list.jgnoticeProductPrice <= 0
              ? "무료 나눔"
              : list.jgnoticeProductPrice}
          </div>
          <div id="mainNoticeTime">{list.jgnoticeCreate?.substring(0, 10)}</div>
          <div id="mainNoticeTime">
            {list.address1} {list.address2}
          </div>
          <div id="mainNoticeIcon">
            {sessionStorage.getItem("userCode") !== String(list.userCode) ? (
              list.checkBoo ? (
                <>
                  <FaRegHeart
                    style={{ color: "red" }}
                    onClick={(e) => {
                      noticeLike(list.jgnoticeCode);
                      e.stopPropagation();
                    }}
                  />
                </>
              ) : (
                <FaHeart
                  style={{ color: "red" }}
                  onClick={(e) => {
                    noticeLikeFalse(list.jgnoticeCode);
                    e.stopPropagation();
                  }}
                />
              )
            ) : (
              <></>
            )}
          </div>
        </>
        {list.jgnoticeSaleBoo && <div id="saleBox">판매완료</div>}
      </div>
    </>
  );
};

export default MainNotice;
