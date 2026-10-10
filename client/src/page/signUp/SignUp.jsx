// 이미지
import loginImg from "../../img/loginImg.png"

// scss
import "./css/SignUp.scss"

// 아이콘
import { RiKakaoTalkFill } from "react-icons/ri"; // 카카오
import { FaGoogle } from "react-icons/fa"; // 구글
import { SiNaver } from "react-icons/si"; // 네이보


// 리액트
import { useNavigate } from "react-router-dom";

// 컴포넌트
import InputTag from "../../component/inputTag/InputTag";

const SignUp = () =>{
    const navigate = useNavigate(   );
    // 회원가입
    const loginPage = () =>{
        navigate("/login")
    }
    // 홈
    const homePage = () =>{
        navigate("/")
    }

    // 나중에 API 통해서 데이터 가져올 예정
    const arr1 = ["서울","서울","서울","서울","서울","서울","서울","서울","서울"]
    const arr2 = ["서울","서울","서울","서울","서울","서울","서울","서울","서울"]

    // 카카오 로그인
    // 네이버 로그인
    // 구글 로그인
    return (
        <>
            <div id="signImgBox">
                <img src={loginImg} id="signImg"/>
                <div id="signBox">
                    <div id="signHeader">
                        <div id="signHeaderText">회원 가입</div>
                    </div>
                    <div  id="signCenter">
                        <div><InputTag TText="text" PHText="Email"/></div>
                        <div><InputTag TText="password" PHText="Password"/></div>
                        <div><InputTag TText="text" PHText="Name"/></div>
                    </div>
                    <div id="addressBox">
                        <select id="address">
                            {arr1.map((arr,index)=>(
                                <option>{arr}</option>
                            ))}
                        </select>
                        <div id="addressSpace"></div>
                        <select id="address">
                            {arr2 != null ? 
                            arr2.map((arr,index)=>(
                                <option>{arr}</option>
                            ))
                            :
                            <option>------</option>
                            }
                        </select>
                    </div>
                    <div id="createButton">Create</div>   
                    <div id="signUpText" onClick={loginPage}>Login</div>
                    <div id="homeText" onClick={homePage}>Home</div>
                </div>
            </div>
        </>
    )
}

export default SignUp;