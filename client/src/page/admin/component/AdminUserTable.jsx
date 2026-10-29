import "../css/adminUserManagement.scss"

// 사용자 관리에서 사용할 컴포넌트 테이블
const AdminUserTable = (userInfo) => {
    // userInfo는 데이터를 통째로 받은다음 여기서 해체 후 정리해서 넣을 것
    return(
        <>
        <table className="managementTable">
            <thead className="managementTableH">
                <tr>
                    <th id="number">넘버</th>
                    <th>이름</th>
                    <th>아이디</th>
                    <th id="date">생성날짜</th>
                    <th id="date">삭제날짜</th>
                    <th id="date">정지날짜</th>
                </tr>
            </thead>
            <tbody className="managementTableB">
                <tr>
                    <td>1</td>
                    <td>채승훈</td>
                    <td>gd</td>
                    <td>gd</td>
                    <td>gd</td>
                    <td>gd</td>
                </tr>
            </tbody>
        </table>

        <div id="paging">
            <div className="pageB">◀</div>
            <div className="pageB">1</div>
            <div className="pageB">▶</div>
        </div>
        <div>
            <div>사용자 검색</div>
            <input type="text"></input>
        </div>
        </>
    )
}

export default AdminUserTable;