import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/main",
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

// 상품 등록하기
export const noticeCreateAPI = async (data) => {
  return await instance.post("/noticeCreate",data);
};