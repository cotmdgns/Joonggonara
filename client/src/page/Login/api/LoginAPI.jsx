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
export const userLoginAPI = async (data) => {
  return await instance.post("/userLogin",data);
};