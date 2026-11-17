import "./css/MainNotice.scss";

// 이미지

// 아이콘
import { FaRegHeart } from "react-icons/fa"; // 빈하트
import { FaHeart } from "react-icons/fa"; // 하트
import { subscribeNoticeCreateAPI, subscribeNoticeDeleteAPI } from "../../page/product/api/productAPI";


const MainNotice = ({ list, gotoDetailProduct ,pageNum,searchNoticeSelect}) => {

  // 좋아요 누르기 버튼
  const noticeLike = async (www) => {
    const data = {
        jGNoticeCode : list.jgnoticeCode,
        userCode : sessionStorage.getItem("userCode"),
    }
    console.log(data)
    console.log(www)
    await subscribeNoticeCreateAPI(data)
    await searchNoticeSelect(pageNum)
  };

  const noticeLikeFalse = async (www) => {
    const data = {
        jGNoticeCode : list.jgnoticeCode,
        userCode : sessionStorage.getItem("userCode"),
    }
    console.log(data)
    console.log(www)
    await subscribeNoticeDeleteAPI(data)
    await searchNoticeSelect(pageNum)
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
          src={`http://localhost:8080/notice/${list.jgnoticeCode}/${list.firstImgName}`}
          id="mainNoticeImg"
        />
        <>
          <div id="mainNoticeText">{list.jgnoticeTitle}</div>
          <div id="mainNoticePrice">{list.jgnoticeProductPrice <= 0 ? "무료 나눔":list.jgnoticeProductPrice }</div>
          <div id="mainNoticeTime">{list.jgnoticeCreate?.substring(0,10)}</div>
          <div id="mainNoticeTime">{list.address1} {list.address2}</div>
          <div id="mainNoticeIcon">
            {sessionStorage.getItem("userCode") !== String(list.userCode) ? 
              list.checkBoo ? 
              <>
              <FaRegHeart style={{"color":"red"}} onClick={(e)=>{
                noticeLike(list.jgnoticeCode);
                e.stopPropagation();
               }}/>
              </>

              :
                <FaHeart style={{"color":"red"}} onClick={(e)=>{
                noticeLikeFalse(list.jgnoticeCode);
                e.stopPropagation();  
              }}/>
              :
              <></>
            }
          </div>
        </> 
        {list.jgnoticeSaleBoo && <div id="saleBox">판매완료</div>}
      </div>
    </>
  );
};

export default MainNotice;
