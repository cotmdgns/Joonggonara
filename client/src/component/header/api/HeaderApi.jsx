import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
});

export const addressApi = async () => {
    return await instance.get("address");
}

export const addressDetailApi = async () => {
    return await instance.get("addressDetail");
}