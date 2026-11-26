import axios from "axios";
import UrlState from "../../../component/UrlState";

const instance = axios.create({
//   baseURL: "http://localhost:8080/api/notification",
    //   baseURL: "https://joonggonara.onrender.com/api/notification",        // render 주소
    baseURL: `${UrlState.url}/api/notification`, 
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