import { useEffect } from "react"
import { naverLoginAPI } from "./api/LoginAPI";
import { jwtDecode } from "jwt-decode";

const LoginNaver = (code) =>{

    const naverLogin = async (code) =>{
        const result = await naverLoginAPI(code)

        sessionStorage.setItem("token", result.data);

        console.log("서버 응답 데이터:", result.data);
        console.log("응답 타입:", typeof result.data);
        console.log("응답 상태:", result.status);


        const token = sessionStorage.getItem("token");
        const payloads = jwtDecode(token);
        sessionStorage.setItem("userId", payloads.userId);
        sessionStorage.setItem("userManager", payloads.userManager);
        sessionStorage.setItem("userCode", payloads.userCode);
        sessionStorage.setItem("userAddress", payloads.userAddress);

        window.location.replace("/");

    }

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        console.log("전달할 code:", code);
        console.log("code 타입:", typeof code);
        
        
        naverLogin(code)
    },[])

    return(
        <>
        <div>네이버 로그인 처리 중...</div>
        </>
    ) 
}

export default LoginNaver