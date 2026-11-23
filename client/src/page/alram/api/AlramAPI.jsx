import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/alram",
});

// 모달에서 사용하는 데이터 리스트 [[ 정상작동 ]]
export const selectAlramModalAPI = async (code) =>{
  return await instance.get(`/selectAlramModal/${code}`);
}

// 얼마나 남았는지에 대한 토탈값
export const alramTotalAPI = async (code) =>{
  return await instance.get(`/alramTotal/${code}`);
}


// 디테일 페이지에서 사용할 데이터 리스트 [[ 정상작동 ]]
export const selectAlramAPI = async (data) =>{
  return await instance.get("/selectAlram", {
    params: {
      userCode: data.userCode,
      pageNum: data.pageNum,
      title: data.title,
    },
  });
}

// 알람 확인 상태값 보내기    [[ 정상작동 ]]
export const stateUpadateAPI = async (code) =>{
  return await instance.post(`/stateUpadate/${code}`);
}