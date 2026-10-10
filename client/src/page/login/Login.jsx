// 이미지
import loginImg from "../../img/loginImg.png"

// scss
import "./css/Login.scss"

// 아이콘
import { RiKakaoTalkFill } from "react-icons/ri"; // 카카오
import { FaGoogle } from "react-icons/fa"; // 구글
import { SiNaver } from "react-icons/si"; // 네이보


// 리액트
import { useNavigate } from "react-router-dom";

// 컴포넌트
import InputTag from "../../component/inputTag/InputTag";

const Login = () =>{
    const navigate = useNavigate(   );
    // 회원가입
    const signUpPage = () =>{
        navigate("/signUp")
    }
    // 홈
    const homePage = () =>{
        navigate("/")
    }

    // 카카오 로그인
    // 네이버 로그인
    // 구글 로그인
    return (
        <>
            <div id="loginImgBox">
                <img src={loginImg} id="loginImg"/>
                <div id="loginBox">
 
                    <div id="loginHeader">
                        <div id="loginHeaderText">로그인</div>
                    </div>
                    <div  id="loginCenter">
                        <div><InputTag TText="text" PHText="Email"/></div>
                        <div><InputTag TText="password" PHText="Password"/></div>
                    </div>
                    <div id="socialBox">Social Login</div>
                    <div  id="loginFooter">
                        <div><RiKakaoTalkFill/></div>
                        <div><FaGoogle/></div>
                        <div><SiNaver/></div>
                    </div>
                    <div id="signUpText" onClick={signUpPage}>Sign Up</div>
                    <div id="homeText" onClick={homePage}>Home</div>
                </div>
            </div>
        </>
    )
}

export default Login;