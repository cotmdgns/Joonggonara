import "../footer/css/Footer.scss"


const Footer = () =>{
    return (
        <>
        <div id="footerBack">
            <div id="footerBox">
                <div id="footerInfoFirst">
                    <div id="footerH1">프로젝트</div>
                    <div id="footerInfoBox">
                        <div>시작 : 2026-09-28</div>
                        <div>끝 : 2026-10-14</div>
                        <div>인원 총 1명</div>
                        <div>채승훈</div>
                    </div>

                </div>
                <div id="footerInfoFront">
                    <div id="footerH1">개발 일정(프론트)</div>
                    <div id="footerInfoBox">
                        <div>메인페이지 <span id="success">(2026-09-28 ~ 10-07)</span></div>
                        <div>회원가입페이지 <span id="success">(2026-10-07 ~ 10-07)</span></div>
                        <div>로그인 페이지 <span id="success">(2026-10-07 ~ 10-07)</span></div>
                        <div>상세페이지</div>
                        <div>관리자페이지</div>
                        <div>내정보페이지</div>
                        <div>프로젝트 소개</div>
                        <div>팝업창(모달)</div>
                        <div>신고누적조회</div>
                        <div>내 관심</div>
                        <div>상품 올리기</div>
                        <div>공지사항</div>
                    </div>
                </div>
                <div id="footerInfoBack">
                    <div id="footerH1">개발 일정(백)</div>
                    <div id="footerInfoBox">
                        <div>회원가입</div>
                        <div>로그인</div>
                        <div>게시글 CRUD</div>
                        <div>게시글 좋아요</div>
                        <div>게시글 찜</div>
                        <div>댓글 CRUD</div>
                        <div>사용자 경기 및 정지</div>
                        <div>팝업기능</div>
                        <div>페이지관리</div>
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