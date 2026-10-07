import "../footer/css/Footer.scss"


const Footer = () =>{
    return (
        <>
        <div id="footerBack">
            <div id="footerBox">
                <div id="footerInfo">
                    <div id="footerH1">프로젝트</div>
                    <div id="footerInfoBox">
                        <div>시작 : 2026-09-28</div>
                        <div>끝 : 2026-10-14</div>
                        <div>인원 총 1명</div>
                        <div>채승훈</div>
                    </div>

                </div>
                <div id="footerInfo">
                    <div id="footerH1">개발 일정(프론트)</div>
                    <div id="footerInfoBox">
                        <div>1. 메인페이지 <span id="success">(2026-09-28 ~ 2026-10-07)</span></div>
                        <div>2. 로그인페이지</div>
                        <div>3. 상세페이지</div>
                        <div>4. 관리자페이지</div>
                        <div>5. 내정보페이지</div>
                        <div>6. 프로젝트 소개</div>
                        <div>7. 팝업창(모달)</div>
                        <div>8. 이벤트</div>
                        <div>9. 신고누적조회</div>
                        <div>10. 내 관심</div>
                        <div>11. 상품 올리기</div>
                        <div>12. 공지사항</div>
                    </div>
                </div>
                <div id="footerInfo">
                    <div id="footerH1">개발 일정(백)</div>
                    <div id="footerInfoBox">
                        <div>1. 회원가입</div>
                        <div>2. 로그인</div>
                        <div>3. 게시글 CRUD</div>
                        <div>4. 게시글 좋아요</div>
                        <div>5. 게시글 찜</div>
                        <div>6. 댓글 CRUD</div>
                        <div>7. 사용자 경기 및 정지</div>
                        <div>8. 팝업기능</div>
                        <div>9. 페이지관리</div>
                    </div>
                </div>
                <div id="footerInfo">
                    <div id="footerH1">ERD</div>
                    <div id="footerInfoBox">
                        <div>모달창 띄우기</div>
                    </div>
                </div>
            </div>
        </div>
           
        </>
    )
}

export default Footer;