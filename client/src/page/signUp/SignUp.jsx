// 이미지
import loginImg from "../../img/loginImg.png"

// scss
import "./css/SignUp.scss"

// 아이콘
import { RiKakaoTalkFill } from "react-icons/ri"; // 카카오
import { FaGoogle } from "react-icons/fa"; // 구글
import { SiNaver } from "react-icons/si"; // 네이보
import AddressOpenAPI from "../../component/AddressOpenAPI";
//sign api
import { addressAPI,addressDetailAPI, IdCheckAPI, userIdCreateAPI } from "./api/SignUpAPI";

// 리액트
import { useNavigate } from "react-router-dom";
import { useEffect ,useReducer} from "react";

// 컴포넌트
import InputTag from "../../component/inputTag/InputTag";
import { initiaSignUpReduser, SignUpReduser } from "./reduser/SignUpReduser";

const SignUp = () =>{
    
    // 네이게이션
    const navigate = useNavigate();
    // 회원가입 전역관리 리듀서
    const [state,dispatch] = useReducer(SignUpReduser,initiaSignUpReduser)
    const {
        // 주소 데이터
        addressData,            // 주소 데이터
        addressDetailData,      // 주소 상세 데이터
        userAddress ,/* 사용자 주소 (상세) ex) 헤안대로..  */ 
        userAddressDetail ,       // 사용자 상세 주소
        // 회원 정보
        userId,                 // 사용자 아이디
        userPwd,                // 사용자 패스워드
        userName ,              // 사용자 이름
        userNickName,           // 사용자 닉네임
        userEmail ,             // 시용자 이메일
        userIdCheck ,           // 사용자 아이디 체크

        // 정규표현식 조건 여부
        userIdBoo,                // 사용자 아이디 조건여부
        userPwdBoo,               // 사용자 패스워드 조건여부
        userNameBoo,              // 사용자 이름 조건여부
        userNcikNameBoo,          // 사용자 닉네임 조건여부
        userEmailBoo,             // 시용자 이메일 조건여부
        userAddressDetailBoo,       // 사용자 상세 주소 조건여부

        // 정규표현식 조건 여부 텍스트
        userIdText,                // 사용자 아이디 조건여부 텍스트 
        userPwdText,               // 사용자 패스워드 조건여부 텍스트
        userNameText,              // 사용자 이름 조건여부 텍스트
        userNcikNameText,           // 사용자 닉네임 조건여부 텍스트
        userEmailText,             // 시용자 이메일 조건여부 텍스트
        userAddressDetailText,       // 사용자 상세 주소 조건여부 텍스트

    } = state;
    // 회원가입
    const loginPage = () =>{
        navigate("/login")
    }
    // 홈
    const homePage = () =>{
        navigate("/")
    }


    // 아이디 중복체크  [ 정상 작동 ]
    const IdCheckButtonAPI = async () =>{
        const result = await IdCheckAPI(userId);
        if(userIdBoo && !result.data){
            dispatch({type:"idCheckBooTrue"})
            alert("사용 가능한 아이디 입니다.")
        }else{
            dispatch({type:"idCheckBooFalse"})
            alert("제대로 입력 후 눌러주세요")
        }    
    }

    // 회원가입하기 [ 정상 작동 ]
    const createUser = async () =>{
        // 회원가입 로그인 관리
        const data ={
        "userId" : userId,                
        "userPwd" : userPwd,                
        "userName" : userName ,   
        "userNickname" : userNickName,           
        "userEmail" : userEmail ,            
        "userAddressDetail" : userAddressDetail,     
        "userAddress" : userAddress,  
        "addressData" : addressData,
        "addressDetailData" : addressDetailData,           
        }
        // boo 조건 관리
        const dataBoo = {
            "userIdBoo" : userIdBoo,               
            "userPwdBoo" : userPwdBoo,              
            "userNameBoo" : userNameBoo,              
            "userEmailBoo" : userEmailBoo,             
            "userNcikNameBoo" : userNcikNameBoo,
            "userAddressDetailBoo" : userAddressDetailBoo,      
        }


        // 1차 조건
        if(!userIdCheck){
            return alert("아이디 중복체크 해주세요.");
        }
        // 2차 조건
        for (const i in data) {
            if (!data[i] || data[i].trim() === "") {
                console.log(data[i])
                return alert("빈칸없이 입력해주세요");
            }
        }
        // 3차 조건
        for (const i in dataBoo) {
            if (!dataBoo[i]) {
                return alert("조건에 맞지 않습니다.");
            }
        }

        // 최종적으로 되면 바로 나가기 [ 정상 작동 ]
        if(window.confirm("정말로 생성하시겠습니까?")){
            const result = await userIdCreateAPI(data);
            if(result.data){
                alert("가입 승인")
                navigate("/login")
            }else{
                alert("존재하는 아이디 입니다.")
            }
        }


    }

    // 페이지 로딩 시작
    useEffect(()=>{
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
                                <InputTag 
                                    WText="269px" 
                                    TText="text" 
                                    PHText="ID"
                                    val={userId}
                                    chage={(e)=>{
                                        dispatch({type:"idCheck",payload:e.target.value})
                                    }}
                                />
                                <div onClick={() => IdCheckButtonAPI()} id="idCheckButton">중복확인</div>
                                {
                                userIdBoo === null ? 
                                <></> 
                                 :
                                userIdBoo ? 
                                    <div id="check"></div> 
                                :
                                    <div id="check" style={userIdBoo ? null:{color : "red"}}>{userIdText}</div>
                                }
                            </div>
                            <div id="pwdCheck"
                            ><InputTag 
                                TText="password" 
                                PHText="Password"
                                val={userPwd}
                                chage={(e)=>{
                                    dispatch({type:"pwdCheck",payload:e.target.value})
                                }}
                            />
                            {
                            userPwdBoo === null ? 
                            <></> 
                                :
                            userPwdBoo ? 
                                <div id="check"></div> 
                            :
                                <div id="check" style={userPwdBoo ? null:{color : "red"}}>{userPwdText}</div>
                            }
                            </div>

                            <div id="nameCheck">
                                <InputTag 
                                    TText="text" 
                                    PHText="Name"
                                    val={userName}
                                    chage={(e)=>{
                                        dispatch({type:"nameCheck",payload:e.target.value})
                                    }}
                                />
                                {
                                userNameBoo === null ? 
                                <></> 
                                    :
                                userNameBoo ? 
                                    <div id="check"></div> 
                                :
                                    <div id="check" style={userNameBoo ? null:{color : "red"}}>{userNameText}</div>
                                }
                            </div>
                            {/* 여기여기 */}
                            <div id="nickNameCheck">
                                <InputTag 
                                    TText="text" 
                                    PHText="nickName"
                                    val={userNickName}
                                    chage={(e)=>{
                                        dispatch({type:"nicknameCheck",payload:e.target.value})
                                    }}
                                />
                                {
                                userNcikNameBoo === null ? 
                                <></> 
                                    :
                                userNcikNameBoo ? 
                                    <div id="check"></div> 
                                :
                                    <div id="check" style={userNcikNameBoo ? null:{color : "red"}}>{userNcikNameText}</div>
                                }
                            </div>
                            <div id="emailCheck">
                                <InputTag 
                                    TText="text" 
                                    PHText="Email"
                                    val={userEmail}
                                    chage={(e)=>{
                                        dispatch({type:"emailCheck",payload:e.target.value})
                                    }}
                                />
                                {
                                userEmailBoo === null ? 
                                <></> 
                                    :
                                userEmailBoo ? 
                                    <div id="check"></div> 
                                :
                                    <div id="check" style={userEmailBoo ? null:{color : "red"}}>{userEmailText}</div>
                                }
                            </div>
                        <div id="addressBox">
                            <InputTag WText={"260px"}PHText={userAddress == null ? "주소를 검색해주세요." : userAddress} onClick={() => document.getElementById("addressAPI").click()}></InputTag>
                            <div id="addressButton"><AddressOpenAPI addressAPI="addressAPI" state={state} dispatch={dispatch}></AddressOpenAPI></div>
                        </div>
                        <div id="addressCheck"
                        ><InputTag 
                                TText="text" 
                                PHText="DetailAddress"
                                val={userAddressDetail}
                                chage={(e)=>{
                                    dispatch({type:"userAddressSava",payload:e.target.value})
                                }}
                                />
                        </div>
                    </div>
                    <div id="createButton" onClick={() => createUser()}>Create</div>   
                    <div id="signUpText" onClick={loginPage}>Login</div>
                    <div id="homeText" onClick={homePage}>Home</div>
                </div>
            </div>
        </>
    )
}

export default SignUp;