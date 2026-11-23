import { useEffect, useState } from "react";
import "../alram/scss/Alram.scss";
import { selectAlramAPI } from "./api/AlramAPI";
import { useSearchParams } from "react-router-dom";
import { HiOutlineSpeakerphone } from "react-icons/hi"; // 공지사항 아이콘
import { GiPoliceOfficerHead } from "react-icons/gi"; // 신고 접수 아이콘
import { BsCartCheck } from "react-icons/bs";         // 상품 구매 아이콘
import { FaRegThumbsUp } from "react-icons/fa";       // 공지사항


const Alram = () => {
  const [list,setList] = useState([])
  const [total,setTotal] = useState("")
  const [state,setState] = useState(0)
  const [text,setText] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNum = Number(searchParams.get("pageNum") || 1);


  const selectAlram = async () =>{
    const data = {
      "userCode" : sessionStorage.getItem("userCode"),
      "title" : text,
      "pageNum":pageNum,
    }
    const result =  await selectAlramAPI(data);
    setList(result.data.alramList)
    setTotal(result.data)
  }
  console.log(list)

  useEffect(()=>{
    selectAlram();
  },[])



    const createButton = () => {
      const result = [];
      for (let i = total.pageMakerDTO?.startPage; i <= total.pageMakerDTO?.endPage; i++) {
        if (pageNum === i) {
          result.push(
            <div
              key={i}
              className="active"
              onClick={() => setSearchParams({ pageNum: String(i) })}
            >
              {i}
            </div>,
          );
        } else {
          result.push(
            <div key={i} onClick={() => setSearchParams({ pageNum: String(i) })}>
              {i}
            </div>,
          );
        }
      }
      return result;
    };
    useEffect(() => {
        selectAlram();
    }, [pageNum,text]);
  return (
    <>
      <div id="alramPage">
        <div id="alramBodyHeader">
          <div id="alramBodyH1">알람</div>
          <div id="alramBodyH1Info">
            해당 페이지에서 사용자에게 온 알람을 확인할 수 있습니다.
          </div>
        </div>
        <div id="alramBody">
          <div id={state == 0 ? "ture" : ""} onClick={()=>{setState(0), setText("")}}>전체 {total.noticeTotal + total.singoTotal + total.noticeSubTotal + total.gonggiTotal}</div>
          <div id={state == 1 ? "ture" : ""} onClick={()=>{setState(1), setText("게시글")}}>게시글 {total.noticeTotal}</div>
          <div id={state == 2 ? "ture" : ""} onClick={()=>{setState(2), setText("신고")}}>신고 {total.singoTotal}</div>
          <div id={state == 3 ? "ture" : ""} onClick={()=>{setState(3), setText("좋아요")}}>좋아요 {total.noticeSubTotal}</div>
          <div id={state == 4 ? "ture" : ""} onClick={()=>{setState(4), setText("공지사항")}}>공지사항 {total.gonggiTotal}</div>
        </div>

          {/* 여기서 반복문 */}
          {list.map((data,index)=>{
            return(
              <>
            <div id="alramPaging">
                <div id="alramPaging1">
                  <div id="alramPagingImg">이미지?</div>
                  <div>
                    <div>내가 올린 상품에 좋아요가 생겼어요!</div>
                    <div>[상품제목] 게시글에 또 다른 사용자가 좋요아 눌렀어요!</div>
                    <div>좋아요 알림</div>
                  </div>
                </div>
                <div id="alramPaging1">
                  <div>몇시간전</div>
                  <div>이미지</div>
                </div>
              </div>
              </>
            )
          })}
          <div className="pagination">
              {total.pageMakerDTO?.prev &&
              <button type="button" className="pageArrow">
                  &lt;
              </button>
              }
              {createButton()}
              {total.pageMakerDTO?.next &&
              <button type="button" className="pageArrow">
                  &gt; 
              </button>
              }
          </div>
      </div>
    </>
  );
};


//
export default Alram;
