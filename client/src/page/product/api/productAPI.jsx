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

// 상세 상품 검색하기 searchNoticeSelect
export const searchNoticeSelectAPI = async (data) => {
  return await instance.post("/searchNoticeSelect",data);
};

// 상품 코드로 정보 불러오기
export const selectProductDataAPI = async (code) =>{
  return await instance.get(`/selectProductData/${code}`)
}