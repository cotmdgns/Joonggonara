import "./css/JogoProduct.scss"
import { GoChevronRight } from "react-icons/go";
// 상세페이지
const JogoProductDetail = () =>{
    return (
        <>
            <div id="JogoProductDetailBody">
                <div id="JogoProductDetailImg">나는 이미지</div>
                <div id="JogoProductDetailInfo">
                    <div>
                        <div id="JogoProductDetailInfoH2">여기는 코드를 받고 그걸로 경로 가져올꺼임<GoChevronRight/></div>
                        <div id="JogoProductDetailInfoText">[오버홀/올제치] RADO Silver Horse 빈티지 오토매틱 시계</div>
                        <div id="JogoProductDetailInfoPrice">65,000원</div>
                        <div id="JogoProductDetailInfoDate">2시간 전</div>     
                    </div>
                    <div id="JogoProductbutton">
                        <div id="buttonCreate">저장하기</div> 
                        <div id="buttonDelete">신고하기</div>       
                        <div id="buttonInsert">구매하기</div>       
                    </div>
                </div>
            </div>
            <div id="JogoProductDetailBody2">
                <div>사용자 이름 : </div>
                <div>현재 별점 : </div>
                <div>마지막 거래일 :  </div>
                <div>총거래 : </div>
                <div id="JogoProductDetailInfoWiche">거래 장소 : <span>서울특별시 어디어동 어디호 213호</span></div>
            </div>

            <div id="JogoProductDetailBody2">
                <div id="JogoProductDetailInfoTitle">상품설명</div>
                <div id="JogoProductDetailInfoBox">나는 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야 설명란이야!</div>
            </div>
        </>
    )
}

export default JogoProductDetail;