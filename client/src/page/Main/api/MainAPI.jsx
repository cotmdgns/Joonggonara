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


// 공지사항 배너사용중인 리스트 가져오기
export const mainBannerSelectAPI = async () => {
  return await instance.get("/mainBannerSelectList");
};

// 공지사항 배너사용중인 리스트 가져오기  
export const categoryMajorListAPI = async () => {
  return await instance.get("/categoryMajorList");
};

export const categoryMinorListAPI = async (code) => {
  return await instance.get(`/categoryMinorList/${code}`);
};

