//css
import "./css/adminUserManagement.scss"

// 테이블 컴포넌트
import AdminUserManagementModal from "./component/AdminUserManagementModal";

// 아이콘
import { FaUser } from "react-icons/fa";            // 전체
import { FaUserCheck } from "react-icons/fa";       // 정상
import { FaUserSlash } from "react-icons/fa";       // 정지된
import { IoTrashBinSharp } from "react-icons/io5";  // 삭제된

import { useState } from "react";
import { color } from "chart.js/helpers";
// 관리자 페이지 [ 사용자 관리 ]
const AdminUserManagement = () =>{

    const userModal = () =>{

    }
    return (
        <>          
        <div id="management">
            <div id="managementHeader">
                <div id="managementHeaderH1">사용자 관리</div>
                <div id="managementHeaderInfo">사용자를 검색하고, 관리할 수 있습니다.</div>
            </div>
            <div id="managementInfo"> {/* 사용자 정보 박스 */}
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(184, 175, 244)"}}>
                        <div style={{background : "rgb(80, 56, 234)",color:"white"}}><FaUser></FaUser></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">전체 사용자</div>
                        <div id="managementInfoBoxRigthCount">1200</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(138, 231, 150)"}}>
                        <div style={{background : "rgb(60, 215, 80)",color:"white"}}><FaUserCheck></FaUserCheck></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">정상 사용자</div>
                        <div id="managementInfoBoxRigthCount">1150</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(243, 203, 143)"}}>
                        <div style={{background : "rgb(248, 165, 41)",color:"white"}}><FaUserSlash></FaUserSlash></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">정지된 사용자</div>
                        <div id="managementInfoBoxRigthCount">23</div>
                    </div>
                </div>
                <div id="managementInfoBox">
                    <div id="managementInfoBoxLeft" style={{background : "rgb(241, 120, 120)"}}>
                        <div style={{background : "rgb(229, 43, 43)",color:"white"}}><IoTrashBinSharp></IoTrashBinSharp></div>
                    </div>
                    <div id="managementInfoBoxRigth">
                        <div id="managementInfoBoxRigthH3">삭제된 사용자</div>
                        <div id="managementInfoBoxRigthCount">27</div>
                    </div>
                </div>
            </div>
             <div id="managementInfoTable">
                <div id="managementInfoTableSearch">
                    <input id="managementInfoTableSearchInput" type="text" placeholder="검색할 아이디를 입력.."/>
                    <div>
                        <select id="managementInfoTableSearchSelect">
                            <option value="all">전체 등급</option>
                            <option value="admin">관리자 등급</option>
                            <option value="nomal">일반 등급</option>
                        </select>
                        <select id="managementInfoTableSearchSelect">
                            <option>전체 상태</option>
                            <option>정상 사용자</option>
                            <option>정지된 사용자</option>
                            <option>삭제한 사용자</option>
                        </select>
                        <button id="managementInfoTableSearchButton">검색</button>
                    </div>
                </div>
                {/* <div id="managementInfoTableBox">
                    <table id="managementInfoTableBoxTable">
                        <thead >
                            <tr>
                                <th id="check"><input type="checkbox"/></th>
                                <th id="number">넘버</th>
                                <th>이름</th>
                                <th>아이디</th>
                                <th id="date">생성날짜</th>
                                <th id="date">삭제날짜</th>
                                <th id="date">정지날짜</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <th id="check"><input type="checkbox"/></th>
                                <td>1</td>
                                <td>채승훈</td>
                                <td>gd</td>
                                <td>gd</td>
                                <td>gd</td>
                                <td>gd</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
                <div className="managementInfoTableBox">
                    <table className="managementInfoTable">
                        <thead>
                            <tr>
                                <th className="check">
                                    <input type="checkbox" />
                                </th>
                                <th className="number">번호</th>
                                <th>이름</th>
                                <th>아이디</th>
                                <th>가입일</th>
                                <th>삭제일</th>
                                <th>정지일</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr onClick={()=>{userModal()}}>
                                <td className="check">
                                    <input type="checkbox" />
                                </td>
                                <td className="number">1</td>
                                <td>채승훈</td>
                                <td>gd</td>
                                <td>2026-10-21</td>
                                <td>
                                    <span className="statusBadge deleted">2026-10-28</span>
                                </td>
                                <td>
                                    <span className="statusBadge suspended">2026-10-27</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* 페이지네이션 */}
                    <div className="managementPagination">
                        <span className="totalCount">
                            총 <strong>1,248</strong>명의 사용자
                        </span>

                        <div className="pageButtons">
                            <button type="button" className="pageArrow">
                                &lt;
                            </button>
                            <button type="button" className="active">1</button>
                            <button type="button">2</button>
                            <button type="button" className="pageArrow">
                                    
                            </button>
                        </div>
                    </div>
                </div>
             </div>
        </div>  
        </>
    )
}


export default AdminUserManagement;