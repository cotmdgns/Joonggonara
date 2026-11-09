import { useNavigate, useParams } from "react-router-dom";

import "./css/JogoProduct.scss";
import { GoChevronRight } from "react-icons/go";
import MainNotice from "../../component/mainNotice/MainNotice";
import { searchNoticeSelectAPI } from "./api/productAPI";
import { useEffect, useReducer } from "react";
import {
  initiaJogoProductReduser,
  JogoProductReduser,
} from "./reduser/JogoProductReduser";

const JogoProduct = () => {
  const navigate = useNavigate();
  // 아니 이거 상상이상으로 편한데;;
  // 이걸로 api 호출해서 데이터 가져온 다음 전역관리하기
  const { category, category2, category3 } = useParams(); // 자동으로 디코딩되어 들어옴
  const [state, dispatch] = useReducer(
    JogoProductReduser,
    initiaJogoProductReduser,
  );

  // 상세페이지 이동
  const gotoDetailProduct = (code) => {
    navigate(`/jogoProductDetail/product/${code}`);
  };

  // 검색한 리스트
  // 페이징 넣어야 함
  const searchNoticeSelect = async () => {
    const data = {
      search: "", // 검색용
      title1: category ?? "",
      title2: category2 ?? "",
      title3: category3 ?? "",
      price1: "", // 금액에서 ~
      price2: "", // ~ 금액까지
      address1: "", // 지역 (서울, 경기도, 대전, 대구... )
      address2: "", // 지역 (강남, 서초, 성남 ... )
    };
    const result = await searchNoticeSelectAPI(data);
    dispatch({ type: "selectNotificationList", payload: result.data });
  };


  useEffect(() => {
    searchNoticeSelect();
  }, [category, category2, category3]);

  return (
    <div id="JogoProductBody">
      {category3 != undefined ? (
        <div id="JogoProductH1">
          선택된 카테고리:<span>{category.replaceAll("&", "/")}</span>
          <span>
            <GoChevronRight />
          </span>
          <span>
            {category2.replaceAll("&", "/")}
            <GoChevronRight />
          </span>
          <span>{category3.replaceAll("&", "/")}</span>
        </div>
      ) : category2 != undefined ? (
        // 둘 다 있음
        <div id="JogoProductH1">
          선택된 카테고리:<span>{category.replaceAll("&", "/")}</span>
          <span>
            <GoChevronRight />
          </span>
          <span>{category2.replaceAll("&", "/")}</span>
        </div>
      ) : (
        // 하나만 있음
        <div id="JogoProductH1">
          선택된 카테고리:<span>{category.replaceAll("&", "/")}</span>
        </div>
      )}

      <div id="JogoProductCenter">
        <div id="mainNoticeBox">
          {state.selectNotificationList.map((list, index) => (
            <MainNotice
              key={index}
              list={list}
              gotoDetailProduct={gotoDetailProduct}
            />
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
};

export default JogoProduct;
