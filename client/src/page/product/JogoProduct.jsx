import { useNavigate, useParams } from "react-router-dom";

import "./css/JogoProduct.scss"
import { GoChevronRight } from "react-icons/go";
import MainNotice from "../../component/mainNotice/MainNotice";


const JogoProduct = () => {

    const navigate = useNavigate();
    // 아니 이거 상상이상으로 편한데;;
    // 이걸로 api 호출해서 데이터 가져온 다음 전역관리하기
    const { category,category2 } = useParams(); // 자동으로 디코딩되어 들어옴


    const notices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // 상세페이지 이동
    const gotoDetailProduct = (code) =>{
        navigate(`/jogoProductDetail/product/${code}`)
    }

    return (
        <div id="JogoProductBody">
            {category2 != undefined ? 
            // 둘 다 있음
            <div id="JogoProductH1">
                선택된 카테고리:<span>{category.replaceAll("&","/")}</span><span><GoChevronRight/></span><span>{category2.replaceAll("&","/")}</span>
            </div>            
            :
            // 하나만 있음
            <div id="JogoProductH1">
                선택된 카테고리:<span>{category.replaceAll("&","/")}</span>
            </div>
            }

            <div id="JogoProductCenter">
                <div id="mainNoticeBox">
                    {notices.map((num,index)=>(
                        <MainNotice key={index} number={num} gotoDetailProduct={gotoDetailProduct}/>
                    ))}
                </div>
            </div>
            <div id="JogoProductFooter">
                <div>왼쪽버튼</div>
                <div>1,2,3,4,5,6,7,8,9,</div>
                <div>오른쪽버튼</div>
            </div>
        </div>
    );
}

export default JogoProduct;