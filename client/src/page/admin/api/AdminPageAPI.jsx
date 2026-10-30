import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/admin",
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
////////////////////////////////////////////////
///// 메인 관리자 페이지
// 전체 이용자 [ 정상 작동 ]
export const mainSelectUseAllAPI = async () => {
  return await instance.get("/mainSelectUseAll");
};

// 전체 게시글 [ 정상 작동 ]
export const mainSelectNoticeAllAPI = async () => {
  return await instance.get("/mainSelectNoticeAll");
};

////////////////////////////////////////////////

////////////////////////////////////////////////
///// 메인 관리자 페이지
// 전체 사용자 가져오기
export const userALlSelectlAPI = async (data) => {
  return await instance.post("/userALlSelect",data);
};


  

////////////////////////////////////////////////

////////////////////////////////////////////////
//// 공지사항 관리자 페이지
// [ 어드민 ] 공지사항 전체 조회하기 [ 정상 작동 ]
export const adminNotificationManagementSelectAPI = (pageNum) => {
  return instance.get("adminNotificationManagementSelect", {
    params: {
      code: pageNum
    }
  });
};
// [ 어드민,일반 ] 공지사항 상세 페이지 조회하기  
export const notificationManagementSelectDetailAPI = async (code) => {
  return await instance.get(`/notificationManagementSelectDetail/${code}`);
};


// 공지사항 생성하기 [ 정상 작동 ]
export const notificationManagementCreateAPI = async (form) => {
  return await instance.post("/notificationManagementCreate", form);
};
// 공지사항 수정하기
export const notificationManagementUpdateAPI = async (form) => {
  return await instance.post("/notificationManagementUpdate", form);
};

// 공지사항 삭제하기
export const notificationManagementDeleteAPI = async (code) => {
  return await instance.post(`/notificationManagementDelete/${code}`);
};



////////////////////////////////////////////////

////////////////////////////////////////////////
//// 카테고리 관리자 페이지
// 모든 카테고리 가져오기
export const categoryStateAPI = async () => {
  return await instance.get("/CategoryState");
};

// 카테고리 메이저 생성하기 [ 정상 작동함 ]
export const categoryMajorCreateAPI = async (text) => {
  return await instance.post("/CategoryMajorCreate", {
    categoryStateMajorText: text,
  });
};
// 카테고리 메이저 삭제하기 [ 정상 작동 ]
export const categoryMajorDeleteAPI = async (code) => {
  return await instance.post(`/CategoryMajorDelete/${code}`);
};
// 카테고리 메이저 수정하기 [ 정상 작동 ]
export const categoryMajorUpdateAPI = async (data) => {
  return await instance.post(`/CategoryMajorUpdate`, data);
};

// 카테고리 마이너 리스트 [ 정상 작동 ]
export const CategoryMinorSelectAPI = async (data) => {
  return await instance.post(`/CategoryMinorSelect/${data}`);
};

// 카테고리 마이너 생성하기 [ 정상 작동 ]
export const categoryMinorCreateAPI = async (data) => {
  return await instance.post("/CategoryMinorCreate", data);
};
// 카테고리 마이너 삭제하기 [ 정상 작동 ]
export const categoryMinorDeleteAPI = async (code) => {
  return await instance.post(`/CategoryMinorDelete/${code}`);
};
////////////////////////////////////////////////////
