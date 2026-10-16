
//css
import "../css/AdminNotificationManagement.scss"

// 리액트
import { useParams,useLocation,useNavigate} from "react-router-dom";
import { useState } from "react";


// 공지사항 디테일 부분
const AdminNotification = () =>{
    // 네비
    const navigate = useNavigate();
    // 파라미터 가져오기
    // undefined로 체크해서 있냐 없냐고 확인하기
    // 1. 생성페이지
    // 2. 상세페이지
    // 3. 수정페이지


    // 그럼 일반 사용자페이지에서는 보이지 말아야 할것들이 잇는데 그건 어떻게 막지?
    // 세션값에 사용자가 admin이 아니라면?
    // 안보이고 admin이 맞다면 보여지게??????
    // 그러면 세션값을 수정할 수 있자나
    // 공지사항 페이지는 이걸로 끝낼 수 있는거네??
    // 물론 좀 다르긴하겠다만



    // 어쩌피 나중에 리덕스 만들어서 전역관리 해야함
    // 데이터 저정하고 해야하니깐

    // 생성,상세 까지는 생각했었는데 생각해보니깐 수정도 필요하네??


    const param = useParams()           // 어드민 페이지에서 생성 or 상세 구분용
    const location = useLocation()      // 어드민 페이지 or 사용자 페이지 구분용
    console.log(location.pathname.includes("layoutAdmin"))
    console.log(param.code == undefined)
    
    // 상태값이고 임시방편으로 사용중임
    const [boo,setBoo] = useState(false)
    const bannerBoo = () => {
        setBoo(!boo)
    }

    // 뒤로가기 ㅋㅋ;;
    const notificationBack = () =>{
        navigate(`/layoutAdmin/adminNotificationManagement`);
    }
    return(
        <>
            {param.code != undefined ? 
            <div>
                {/* 상세페이지 */}
                <div>공지사항 {param.code == undefined ? "생성":"상세"} 페이지</div>
                <div>배너 활성화 버튼</div>
                <div>
                    <div>배너(main) 이미지</div>
                    <div>배너(main) 제목</div>
                </div>
                <div>
                    <div>배너 제목</div>
                    <div>배너 내용</div>
                </div>
                <div>
                    <div>취소하기</div>
                    <div>생성하기</div>
                </div>
            </div>            
            :
            <div id="notificationDetailBox">
                {/* 생성페이지 [ 일반페이지 일 시 조건 걸기] */}
                <div id="notificationDetailBoxHeader">공지사항 {param.code == undefined ? "생성":"상세"} 페이지</div>
                <div id="notificationDetailBoxCenter">   
                    {/* <div><input text="text" placeholder="공지사항 제목"></input></div>
                    <div><input text="text" placeholder="에디터 사용할 예정"></input></div> */}
                    <input text="text" placeholder="공지사항 제목"></input>
                    <input text="text" placeholder="에디터 사용할 예정"></input>
                </div>
                {/* 사용여부에 따라 달라짐 */}
                {boo ? 
                <div id="bannerBoo">
                    <div id="bannerH1">메인 배너</div>
                    <div id="notificationDetailBanner">
                        <div id="bannerImg">배너(main) 이미지</div>
                        <div id="bannerInfo">
                            <div id="bannerTitleInfo">#크기는 280x280으로 설정해주세요</div>
                            <input id="bannerTitle" type="text" placeholder="배너(main) 제목"></input>
                        </div>
                    </div>
                </div>            
                : 
                <></>
                }

                <div id="notificationDetailFooter">
                    <div id={boo ? "buttonTrue" : "buttonFalse"} onClick={()=>{bannerBoo()}}>{boo ? "활성화" : "비활성화"}</div>
                    <div id="close" onClick={() => {notificationBack()}}>취소하기</div>
                    <div id="create" >생성하기</div>
                </div>
            </div>
            }
        </>
    )
}

export default AdminNotification;