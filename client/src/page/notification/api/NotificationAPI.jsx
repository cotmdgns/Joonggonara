import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/notification",
});

// 공지사항 리스트 가져오기
export const selectNotificationAPI = async (code)=>{
    return await instance.get("/selectNotification",{
        params: {
            code: code
        }
    })
}

// 공지사항 상세 페이지 이동하기
export const selectNotificationDetailAPI = async (code)=>{
    return await instance.get(`/selectNotificationDetail/${code}`)
}