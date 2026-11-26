import axios from "axios";
import UrlState from "../../../component/UrlState";

const instance = axios.create({
  // baseURL: "http://localhost:8080/api/userInfo",
    // baseURL: "https://joonggonara.onrender.com/api/userInfo",        // render 주소
    baseURL: `${UrlState.url}/api/userInfo`,    
});

const instanceAPI = axios.create({
  // baseURL: "http://localhost:8080/api/login",
    // baseURL: "https://joonggonara.onrender.com/api/login",        // render 주소
    baseURL: `${UrlState.url}/api/login`,    
});


instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 주소 API [ 정상 작동 ]
export const userLoginAPI = async (data) => {
  return await instance.post("/userLogin",data);
};


export const naverLoginButtonAPI = async () =>{
  return await instanceAPI.get("/naver/login")
}