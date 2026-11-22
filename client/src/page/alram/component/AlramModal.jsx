import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AlramModal = ({ alramClose }) => {
  const navigate = useNavigate();
  // 알람 상세페이지로 이동하기
  const gotoDetailPage = () => {
    alramClose();
    navigate("/alram");
  };

  useEffect(() => {
    const eventSource = new EventSource(
      "http://localhost:8080/api/alram/notification/connect/100",
    );

    eventSource.onmessage = (event) => {
      console.log("서버 메시지:", event.data);
    };

    eventSource.onerror = (error) => {
      console.log("SSE 연결 오류:", error);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      <div
        id="alramBox"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div id="">여기는 리스트가 올라올 자리임</div>
        <div
          id=""
          onClick={() => {
            gotoDetailPage();
          }}
        >
          알람페ㄴㄴ이지 이동
        </div>
      </div>
    </>
  );
};

export default AlramModal;
