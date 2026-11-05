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
  },
);

// 공지사항 배너사용중인 리스트 가져오기
export const mainBannerSelectAPI = async () => {
  return await instance.get("/mainBannerSelectList");
};

// 모달창 카테고리 메이저 리스트 가져오기
export const categoryMajorListAPI = async () => {
  return await instance.get("/categoryMajorList");
};

// 모달창 카테고리 마이너 리스트 관련된거 싹다 가져오기
export const categoryMinorListAPI = async (code) => {
  return await instance.get(`/categoryMinorList/${code}`);
};

//////////////// 검색용 API
// 상품 및 카테고리로 검색하기 (DTO로 보내고 DTO로 받기)

// 일주일안으로 생성된 데이터 확인하기

// 내 지역으로 해서 주변 상품 뽑아주기
