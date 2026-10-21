import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/userInfo",
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
export const addressAPI = async (data) => {
  return await instance.get("/addressAPI");
};

// 주소 상세 API [ 정상 작동 ]
export const addressDetailAPI = async (name) => {
  return await instance.get(`/addressDetailAPI/${name}`);
};

// 회원가입 API [ 정상 작동]
export const userIdCreateAPI = async (data) => {
  return await instance.post("/userIdCreate",data)
}

// 아이디 체크 API [ 정상작동 ]
export const IdCheckAPI = async (userId) =>{
  return await instance.post("/idCheckAPI",{userId:userId})
}