import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/userInfo",
});


// 주소 API
export const addressAPI = async (data) => {
  return await instance.get("/addressAPI");
};

// 주소 상세 API
export const addressDetailAPI = async (code) => {
  return await instance.get(`/addressDetailAPI/${code}`);
};


// 아이디 체크 API
export const IdCheckAPI = async (id) =>{
  return await instance.post("IdCheckAPI",id)
}