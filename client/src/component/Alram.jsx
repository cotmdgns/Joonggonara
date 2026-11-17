import { useEffect } from "react";

const Alram = () =>{
    useEffect(() => {

        const eventSource = new EventSource(
            "http://localhost:8080/api/alram/notification/connect/100"
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
        <div id="alramBox">
            SSE 테스트
        </div>
    );
}

export default Alram;