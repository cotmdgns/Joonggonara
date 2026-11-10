import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/notice",
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

// 신고하기
export const createDeclarationButtonAPI = async (data) =>{
  return await instance.post("/createDeclarationButton",data);
}

// 찜 상태값 [ 정상작동 ]
export const subscribeNoticeSelectAPI = async (data) =>{
  return await instance.get("/subscribeNoticeSelect",{
    params : {
        jGNoticeCode: data.jGNoticeCode,
        userCode: data.userCode,
    }
  });
}

// 찜하기 [ 정상작동 ]
export const subscribeNoticeCreateAPI = async (data) =>{
  return await instance.post("/subscribeNoticeCreate",data);
}

// 찜취소 [ 정상작동 ]
export const subscribeNoticeDeleteAPI = async (data) =>{
  return await instance.post("/subscribeNoticeDelete",data);
}

// 구매하기 saleJGNotice
export const saleJGNoticeAPI = async (data) =>{
  return await instance.post("/saleJGNotice",data);
}

// 댓글 생성

// 댓글 조회

// 댓글 수정

// 댓글 삭제

