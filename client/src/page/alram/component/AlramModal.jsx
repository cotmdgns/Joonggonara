import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectAlramModalAPI, stateUpadateAPI } from "../api/AlramAPI";
  import { IoMdAlarm } from "react-icons/io";


import { HiOutlineSpeakerphone } from "react-icons/hi"; // 공지사항 아이콘
import { GiPoliceOfficerHead } from "react-icons/gi"; // 신고 접수 아이콘
import { BsCartCheck } from "react-icons/bs";         // 상품 구매 아이콘
import { FaRegThumbsUp } from "react-icons/fa";       // 공지사항
import { IoCloseCircleOutline } from "react-icons/io5";     

const AlramModal = ({ alramClose,selectAlram }) => {
  const navigate = useNavigate();
  const [list,setList] = useState([])
  // 알람 상세페이지로 이동하기
  const gotoDetailPage = () => {
    alramClose();
    navigate("/alram?pageNum=1");
  };

  const selectAlramModal = async () =>{
    const userCode = sessionStorage.getItem("userCode");
    const result = await selectAlramModalAPI(userCode);
    setList(result.data)
    
  }  

  const stateUpadate = async (code) =>{
    await stateUpadateAPI(code)
     selectAlramModal()
     selectAlram()
  }

  useEffect(()=>{
    selectAlramModal()
  },[])

  // useEffect(() => {
  //   const eventSource = new EventSource(
  //     "http://localhost:8080/api/alram/notification/connect/100",
  //   );

  //   eventSource.onmessage = (event) => {
  //     console.log("서버 메시지:", event.data);
  //   };

  //   eventSource.onerror = (error) => {
  //     console.log("SSE 연결 오류:", error);
  //   };

  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  return (
    <>
      <div
        id="alramBox"
        onClick={(e) => {e.stopPropagation();}}
      > 
      <div id="alramHeader">
        <div id="alramHeader1"><IoMdAlarm></IoMdAlarm>알람</div>
        <div  id="alramHeader2" onClick={()=>{
          alramClose()
        }}><IoCloseCircleOutline></IoCloseCircleOutline></div>
      </div>
      <div div id="alramList">
        {list.map((data,index)=>{
          return(
          <>
            <div id={!data.alramList.alramState ? "alramData" : "alramDataFalse"} 
              onClick={()=>{stateUpadate(data.alramList.alramCode)}}
            key={index}>  
                {data.alramList.alramTitle == "좋아요" ? 
                <>                
                  <div id="alramIconGood"><FaRegThumbsUp/></div> 
                  <div id="alramBody">
                    <div id="alramInfo">상품에 좋아요가 눌렸어요!</div>
                    <div id="alramInfo2">{data.userName}님께서 <span id="title">좋아요</span>를 누르셨어요!</div>
                  </div>
                </>
                :
                data.alramList.alramTitle == "게시글" ? 
                <>
                  <div id="alramIconNotice"><BsCartCheck/></div> 
                  <div id="alramBody">
                    <div id="alramInfo">상품이 구매되었습니다.</div>
                    <div id="alramInfo2">{data.userName}님께서 <span id="title">[{data.alramTitle}]</span>를 구매하셨습니다!</div>
                  </div>
                </>
   
                :
                data.alramList.alramTitle == "신고" ? 
                <>
                  <div id="alramIconSingo"><GiPoliceOfficerHead/></div>
                  <div id="alramBody">
                    <div id="alramInfo">사용자 신고 안내</div>
                    <div id="alramInfo2">정상적으로 {data.alramTitle}</div>
                  </div>
                </>
                :
                data.alramList.alramTitle == "공지사항" &&
                <>
                <div id="alramIconGonggi"><HiOutlineSpeakerphone/></div>
                  <div id="alramBody">
                    <div id="alramInfo">공지사항 안내</div>
                    <div id="alramInfo2"><span id="title">{data.alramTitle}</span> 새로은 공지가 올라왔습니다.</div>
                  </div>
                </>
                }
              <div id="alramDate">{data.alramList.alramCreate?.substring(0,10)}</div>
            </div>
          </>)
        })}
      </div>

        <div
          id="alramButton"
          onClick={() => {gotoDetailPage();}}
        >
          알람페이지 이동
        </div>
      </div>
    </>
  );
};

export default AlramModal;
