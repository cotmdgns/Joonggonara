import "./css/MyNotice.scss";

// 이미지

// 아이콘
import { FaRegHeart } from "react-icons/fa"; // 빈하트
import { FaHeart } from "react-icons/fa"; // 하트


const MyNotice = ({ list, gotoDetailProduct }) => {
  // 좋아요 누르기 버튼
  const noticeLike = () => {
    alert(list.jgnoticeCode);
  };
  console.log("테스트")
  console.log(list)
  // 상품 디테일 페이지 이동 [ 하트 누르면 같이 넘어가니깐 이거 정리 ]
  return (
    <>
      <div
        id="myNotice"
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
          <div id="mainNoticeTime">{list?.jgnoticeCreate?.substring(0,10)}</div>
          <div id="mainNoticeIcon" onClick={(e)=>{
            noticeLike();
            e.stopPropagation();
          }}>
            {list.checkBoo ? 
            <FaHeart style={{"color":"red"}}/>
            :
            <FaRegHeart style={{"color":"red"}}/>
            }
          </div>
        </> 
        {list.jgnoticeDelect != null ? <div id="saleBox">삭제됨</div> : list.jgnoticeSaleBoo && <div id="saleBox">판매완료</div>}
      </div>
    </>
  );
};

export default MyNotice;
