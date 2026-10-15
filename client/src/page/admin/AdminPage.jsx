import "./css/adminPage.scss"

// 아이콘
import { GrUserPolice } from "react-icons/gr";// 신고누적
import { FaUserFriends } from "react-icons/fa"; // 사용자
import { SiNotion } from "react-icons/si"; // 게시글

// 컴포넌트
import ChartJsExample from "./chart/AdminChart";

const AdminPage = () => {
    return (
        <>
            <div id="adminPage">
                <div id="adminPageHeader">사용자 대시보드</div>
                <div id="adminPageUserInfo">
                    <div id="adminPageTotal">
                        <div id="adminPageTotalA"> 
                            <div>총사용자</div>
                            <div>3566</div>
                        </div>
                        <div id="icon1"><FaUserFriends></FaUserFriends></div>
                    </div>
                    <div id="adminPageTotal">
                        <div id="adminPageTotalA"> 
                            <div>총 게시글</div>
                            <div>2256</div>
                        </div>
                        <div id="icon2"><SiNotion></SiNotion></div>
                    </div>
                    <div id="adminPageTotal">
                        <div id="adminPageTotalA"> 
                            <div>신고현황</div>
                            <div>26</div>
                        </div>
                        <div id="icon3"><GrUserPolice> </GrUserPolice></div>
                    </div>
                </div>
                {/*리액트 차트 [여기에 DB 데이터 활용해서 넣을 예정]*/}
                <div><ChartJsExample></ChartJsExample></div>
            </div>
        </>
    )
}

export default AdminPage;