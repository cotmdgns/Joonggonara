import "./css/adminPage.scss"

// 아이콘
import { GrUserPolice } from "react-icons/gr";// 신고누적
import { FaUserFriends } from "react-icons/fa"; // 사용자
import { SiNotion } from "react-icons/si"; // 게시글

const AdminPage = () => {
    return (
        <>
            <div id="adminPage">
                <div id="adminPageHeader">사용자 대시보드</div>
                <div id="adminPageUserInfo">
                    <div id="adminPageTotalUser">
                        <div>
                            <div>총사용자</div>
                            <div>3566</div>
                        </div>
                        <div><FaUserFriends></FaUserFriends></div>
                    </div>
                    <div id="adminPageTotalNotice">
                        <div>
                            <div>총 게시글</div>
                            <div>2256</div>
                        </div>
                        <div><SiNotion></SiNotion></div>
                    </div>
                    <div id="adminPageTotalDeclaration">
                        <div>
                            <div>신고현황</div>
                            <div>26</div>
                        </div>
                        <div><GrUserPolice> </GrUserPolice></div>
                    </div>
                </div>
                <div>
                    <div>신규게시글</div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default AdminPage;