import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

import "./css/JogoProduct.scss";
import { GoChevronRight } from "react-icons/go";
import MainNotice from "../../component/mainNotice/MainNotice";
import { address1API, address2API, searchNoticeSelectAPI } from "./api/productAPI";
import { useEffect, useReducer } from "react";
import {
  initiaJogoProductReduser,
  JogoProductReduser,
} from "./reduser/JogoProductReduser";
import { CiSearch } from "react-icons/ci";
import { CiRedo } from "react-icons/ci";

const JogoProduct = () => {
    // 파라미터 페이지
  const [searchParams,setSearchParams] = useSearchParams();
  const pageNum = Number(searchParams.get("pageNum") || 1);
  const pageStr = searchParams.get("search") || "";
  
  const navigate = useNavigate();
  // 아니 이거 상상이상으로 편한데;;
  // 이걸로 api 호출해서 데이터 가져온 다음 전역관리하기
  const { category, category2, category3 } = useParams(); // 자동으로 디코딩되어 들어옴
  const [state, dispatch] = useReducer(
    JogoProductReduser,
    initiaJogoProductReduser,
  );
  
  const location = useLocation();

  // 상세페이지 이동
  const gotoDetailProduct = (code) => {
    navigate(`/jogoProductDetail/product/${code}`);
  };

  // 검색한 리스트
  // 페이징 넣어야 함
  const searchNoticeSelect = async (code) => {
    console.log(code)
    const data = {
      userCode : sessionStorage.getItem("userCode"),
      search: state.search.trim() || pageStr,
      num: code == undefined ? 1 : code, // 검색용
      title1: category ?? "",
      title2: category2 ?? "",
      title3: category3 ?? "",
      price1: state.price1, // 금액에서 ~
      price2: state.price2, // ~ 금액까지
      address1: state.address1, // 지역 (서울, 경기도, 대전, 대구... )  // 이거는 사용자들이 저장한 위치에 따라
      address2: state.address2, // 지역 (강남, 서초, 성남 ... )        // 이거는 사용자들이 저장한 위치에 따라
    };

    const params = new URLSearchParams(searchParams);

    params.set("pageNum", String(data.num));
    params.set("search", data.search.trim());
    setSearchParams(params);

    if(Number(state.price1) > Number(state.price2)){
      alert("최소 금액이 최대 금액보다 높습니다.")
      return
    }

    const result = await searchNoticeSelectAPI(data);

    dispatch({ type: "selectNotificationList", payload: result.data.noticeDTOS });
    dispatch({ type: "pageMake", payload: result.data.pageMake });
  };


  useEffect(() => {
    searchNoticeSelect(pageNum);
    resetButton()
  }, [category, category2, category3]);

  
  useEffect(() => {
    searchNoticeSelect(pageNum);
  }, [pageNum, pageStr]);

  useEffect(()=>{
    address1()
  },[])
  // 주소 가져오기
  const address1 =  async () =>{
    const result = await address1API();
    dispatch({type:"address1Data", payload : result.data})
  }

  const address2 =  async (data) =>{
    const result = await address2API(data);
    const reset= ["전체"]
    dispatch({type:"address2Data", payload: reset});
    dispatch({type:"address2Data", payload : result.data})
  }

  // 초기화
  const resetButton = () =>{
    dispatch({type : "resetButton"})
    searchNoticeSelect()
  }



    const createButton = () =>{
        const result = []
        for (let i = state.pageMake.startPage; i <= state.pageMake.endPage; i++) {
            if(pageNum === i){
             result.push(
                <button
                    type="button"
                    key={i}
                    className="active"
                    onClick={() => {setSearchParams({ pageNum: String(i)}),searchNoticeSelect(i)}}
                >
                    {i}
                </button>
            );               
            }else{
                result.push(
                <button
                    type="button"
                    key={i}
                    onClick={() => {setSearchParams({ pageNum: String(i) }),searchNoticeSelect(i)}}
                >
                    {i}
                </button>
            );
            }

        }
        return result;
    }

  return (
    <div id="JogoProductBody">
      {
        location.pathname.includes("weekly") ? 
          <div id="JogoProductH1">
            선택된 카테고리:<span>우리 동네 상품</span>
          </div>
        : location.pathname.includes("recommend") ? 
          <div id="JogoProductH1">
            선택된 카테고리:<span>추천 상품</span>
          </div>
        : category3 != undefined ? (
          <div id="JogoProductH1">
            선택된 카테고리:<span>{category?.replaceAll("&", "/")}</span>
            <span>
              <GoChevronRight />
            </span>
            <span>
              {category2.replaceAll("&", "/")}
              <GoChevronRight />
            </span>
            <span style={{"color" : "red"}}>{category3?.replaceAll("&", "/")}</span>
          </div>
        ) : category2 != undefined ? (
          // 둘 다 있음
          <div id="JogoProductH1">
            선택된 카테고리:<span>{category?.replaceAll("&", "/")}</span>
            <span>
              <GoChevronRight />
            </span>
            <span  style={{"color" : "red"}}>{category2?.replaceAll("&", "/")}</span>
          </div>
        ) : (
          // 하나만 있음
          <div id="JogoProductH1">
            선택된 카테고리:<span  style={{"color" : "red"}}>{category?.replaceAll("&", "/")}</span>
          </div>
        )
      }
      {!location.pathname.includes("weekly") && !location.pathname.includes("recommend") && 
      <div id="searchBox">
        <div id="searchBoxLeft">
          <div id="searchBoxLeftDiv">
            <div id="leftH3">상풍명</div>
            <div id="leftInput"><input value={state.search} onChange={(e)=>{
              dispatch({type:"search" , payload : e.target.value})
            }}></input></div>
          </div>
          <div id="searchBoxLeftDiv">
            <div id="leftH3">거래 지역</div>
            <select value={state.address1} onChange={(e)=>{
              dispatch({type : "address1" , payload : e.target.value})
              address2(e.target.value)
            }}>
              <option>전체</option>
              {state.address1Data.map((data,index)=>{
                return(
                  <option key={index}>{data}</option>    
                )
              })}
            </select>
          </div>
          <div id="searchBoxLeftDiv">
            <div id="leftH3">거래 지역</div>
            <select value={state.address2} onChange={(e)=>{
              dispatch({type:"address2", payload : e.target.value})
            }}>
              <option>전체</option>
              {state.address2Data.map((data,index)=>{
                return (
                  <option key={index}>{data}</option>   
                )
              })}
            </select>
          </div>
          <div id="searchBoxLeftDiv">
            <div id="leftH3">최소 가격</div>
            <div id="leftInput"><input value={state.price1} onChange={(e)=>{
              dispatch({type:"price1", payload : e.target.value.replace(/[^0-9]/g, "")})
            }}></input>원<div>~</div></div>
          </div>
          <div id="searchBoxLeftDiv">
            <div id="leftH3">최대 가격</div>
            <div id="leftInput"><input value={state.price2} onChange={(e)=>{
              dispatch({type:"price2", payload : e.target.value.replace(/[^0-9]/g, "")})
            }}></input>원</div>
          </div>
        </div>
        <div id="searchBoxRight">
          <div id="searchBoxRightSearch" onClick={()=>{searchNoticeSelect()}}><CiSearch></CiSearch>검색</div>
          <div id="searchBoxRightRollback" onClick={()=>{resetButton()}}><CiRedo></CiRedo>초기화</div>
        </div>
      </div>
      }
      
      <div id="JogoProductCenter">
        <div id="mainNoticeBox">
          {state.selectNotificationList.map((list, index) => (
            <MainNotice
              key={index}
              list={list}
              pageNum={pageNum}
              searchNoticeSelect={searchNoticeSelect}
              gotoDetailProduct={gotoDetailProduct}
            />
          ))}
        </div>
      </div>
        {/* 페이지네이션 */}
        <div className="pagination">
            {state.pageMake.prev &&
            <button type="button" className="pageArrow"
            onClick={() => {setSearchParams({ pageNum: String(state.pageMake.startPage - 1) }),searchNoticeSelect(state.pageMake.startPage - 1)}}
            >
                &lt;
            </button>
            }
            {createButton()}
            {state.pageMake.next &&
            <button type="button" className="pageArrow"
            onClick={() => {setSearchParams({ pageNum: String(state.pageMake.endPage + 1) }),searchNoticeSelect(state.pageMake.endPage + 1)}}
            >
                &gt; 
            </button>
            }
        </div>
    </div>
  );
};

export default JogoProduct;
