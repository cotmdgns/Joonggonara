    import axios from "axios";

    const instance = axios.create({
    baseURL: "http://localhost:8080/api/myPage",
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
    // 사용자 정보 가져오기
    export const selectUserInfoAPI = async (code) => {
        return await instance.post(`/selectUserInfo/${code}`);
    }

    // /* 전체 상품 리스트 */
    export const selectUserProductAPI = async (code)=>{
        return await instance.get(`/selectUserProduct/${code}`)
    }
        
    // /* 구메 내역 */
    export const purchaseHistoryProductAPI = async (code)=>{
        return await instance.get(`/purchaseHistoryProduct/${code}`)
    }
            
    // /* 관심 상품 */
    export const interestProductAPI = async (code)=>{
        return await instance.get(`/interestProduct/${code}`)
    }

    // /* 판매 중 */
    export const saleProductAPI = async (code)=>{
        return await instance.get(`/saleProduct/${code}`)
    }

    // /* 구매 완료 */
    export const buyProductAPI = async (code)=>{
        return await instance.get(`/buyProduct/${code}`)
    }

    // /* 무료 나눔 */
    export const freeProductAPI = async (code)=>{
        return await instance.get(`/freeProduct/${code}`)
    }


    // /* 사용자 정보 업데이트  */
    export const userProfileUpdateAPI = async (data)=>{
        return await instance.post("/userProfileUpdate" , data)
    }
