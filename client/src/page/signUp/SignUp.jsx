// 이미지
import loginImg from "../../img/loginImg.png"

// scss
import "./css/SignUp.scss"

// 아이콘
import { RiKakaoTalkFill } from "react-icons/ri"; // 카카오
import { FaGoogle } from "react-icons/fa"; // 구글
import { SiNaver } from "react-icons/si"; // 네이보

//sign api
import { addressAPI,addressDetailAPI } from "./api/SignUpAPI";

// 리액트
import { useNavigate } from "react-router-dom";
import { useEffect ,useReducer} from "react";

// 컴포넌트
import InputTag from "../../component/inputTag/InputTag";
import { initiaSignUpReduser, SignUpReduser } from "./reduser/SignUpReduser";

const SignUp = () =>{
    // 정규표현식
    const idRegex = /^[a-zA-Z]{5,}$/;
    const passwordRegex = /^.{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;          
    
    
    
    // 네이게이션
    const navigate = useNavigate();
    // 회원가입 전역관리 리듀서
    const [state,dispatch] = useReducer(SignUpReduser,initiaSignUpReduser)
    const {addressArr,addressDetailArr} = state;
    // 회원가입
    const loginPage = () =>{
        navigate("/login")
    }
    // 홈
    const homePage = () =>{
        navigate("/")
    }

    // DB에 있는 주소 데이터 [ 정상작동중 ]
    const DBAddressInfo = async () =>{
        const result = await addressAPI()
        dispatch({type:"addressArr", paylod:result.data})
    }
    // 옵션값 체인지 했을 떄 반응하기 [ 정상작동중 ]
    const OptiononChange = async (code) =>{
        const result = await addressDetailAPI(code)
        if(code != 0){
          dispatch({type:"addressDetailArr", paylod:result.data})
        }else{
          dispatch({type:"addressDetailArrDefault"})
        }
    }
    const IdCheckButtonAPI = () =>{

    }

    // 페이지 로딩 시작
    useEffect(()=>{
        DBAddressInfo()
    },[])

    return (
        <>
            <div id="signImgBox">
                <img src={loginImg} id="signImg"/>
                    <div id="signBox">
                        <div id="signHeader">
                            <div id="signHeaderText">회원 가입</div>
                        </div>
                        <div  id="signCenter">
                            <div id="idCheck">
                                <InputTag WText="469px" TText="text" PHText="ID"/>
                                <div id="idCheckButton">중복확인</div>
                            </div>
                            <div><InputTag TText="password" PHText="Password"/></div>
                            <div><InputTag TText="text" PHText="Name"/></div>
                            <div><InputTag TText="text" PHText="Email"/></div>
                        <div id="addressBox">
                            <select id="address" onChange={(e) => OptiononChange(e.target.value)}>
                                <option value="0">전체</option>
                                {addressArr.map((arr,index)=>(
                                    <option value={arr.addressCode} key={index}>{arr.addressName}</option>
                                ))}
                            </select>
                            <div id="addressSpace"></div>
                            <select id="address">
                                {/* {arr2 != null ? 
                                arr2.map((arr,index)=>(
                                    <option key={index}>{arr}</option>
                                ))
                                :
                                <option>------</option>
                                } */}
                                {addressDetailArr.length > 0 ? 
                                addressDetailArr.map((arr,index)=>(
                                    <option value={arr.addressDetailCode} key={index}>{arr.addressDetailName}</option>
                                ))
                                :
                                    <option>------</option>
                                }
                            </select>
                        </div>
                        <div><InputTag TText="text" PHText="DetailAddress"/></div>
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