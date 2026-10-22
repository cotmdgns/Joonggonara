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
  }
);
////////////////////////////////////////////////
//// 카테고리 관리자 페이지
// 모든 카테고리 가져오기
export const categoryStateAPI = async () =>{
    return await instance.get("/CategoryState")
}

// 카테고리 메이저 생성하기
export const categoryMajorCreateAPI = async (data) =>{
    return await instance.post("/CategoryMajorCreate",data)
}
// 카테고리 메이저 삭제하기
export const categoryMajorDeleteAPI = async (code) =>{
    return await instance.post(`/CategoryMajorDelete/${code}`)
}


// 카테고리 마이너 생성하기
export const categoryMinorCreateAPI = async (data) =>{
    return await instance.post("/CategoryMinorCreate",data)
}
// 카테고리 마이너 삭제하기
export const categoryMinorDeleteAPI = async (code) =>{
    return await instance.post(`/CategoryMinorDelete${code}`)
}
////////////////////////////////////////////////////

