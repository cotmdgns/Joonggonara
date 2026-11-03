// 아이콘
import { IoMdCloseCircleOutline } from "react-icons/io"; 

// 컴포넌트
import JogoProductCategory from "./component/JogoProductCategory";
import InputTag from "../../component/inputTag/InputTag";

// 리액트
import { useEffect, useReducer } from "react";

// css
import "./css/JogoProduct.scss"

// 리듀서
import { initiaJogoProductReduser, JogoProductReduser } from "./reduser/JogoProductReduser";
import { categoryMajorListAPI } from "../Main/api/MainAPI";


const JogoProductCreate = ({
    productCreateClose,
}) => {
    // 리듀서
    const [state,dispatch] = useReducer(JogoProductReduser,initiaJogoProductReduser)
    const {stepState,categoryMajorList} = state;
    // 카테고리 메이저 상품 리스트
    const categoryMajor = async () => {
        const result = await categoryMajorListAPI();
        console.log(result)
        dispatch({type:"categoryMajorList" , payload:result.data})
    }
    
    useEffect(()=>{
        categoryMajor();
    },[])

    // 다음 step으로
    const nextStep = (index) =>{
        dispatch({type : "nextCategory"})
    }
    // 이 부분이 마이너 부분으로 변경
    const arr1 = ["서울","서울","서울","서울","서울","서울","서울","서울","서울"]
    const arr2 = ["서울","서울","서울","서울","서울","서울","서울","서울","서울"]
    return (
        <>
            
            <div id="jogoProductCreate" onClick={productCreateClose}>

                <div id="jogoProductBox" onClick={(e) => e.stopPropagation()}>
                    <div id="jogoProductHeader">
                        <div id="headerH1">Step {stepState} : 카테고리 선택하기</div>
                        <div id="headerClose" onClick={productCreateClose}><IoMdCloseCircleOutline/></div>
                    </div>
                    {stepState == 1 && 
                    <div id="jogoProductCenter">
                        {categoryMajorList.map((str,index)=>(
                            <JogoProductCategory
                            // index가 아니라 code 
                            nextStep={() => { nextStep(index)}}
                            key={index} productText={str.categoryStateMajorText}
                            />
                        ))}
                    </div>           
                    }
                    {stepState == 2 && 
                    <div id="jogoProductCenter">
                        <div id="jogoProductCenterBox">
                            <div id="jogoProductCenterBox2">
                                <div id="img"></div>
                                <div id="centerRight">
                                    <div id="selectBox">
                                        <div id="name">하위 카테고리</div>
                                        <div id="select">
                                            <select>
                                                {arr1.map((arr,index)=>(
                                                    <option>{arr}</option>
                                                ))}
                                            </select>
                                            <select>
                                                {arr2 != null ? 
                                                arr2.map((arr,index)=>(
                                                    <option>{arr}</option>
                                                ))
                                                :
                                                <option>------</option>
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div id="productName">
                                        <div id="name">상품명</div>
                                        <InputTag PHText={"상품명을 입력해주세요.."}></InputTag>
                                    </div>
                                    <div id="price">
                                        <div id="priceBox">
                                            <div id="name">가격</div>
                                            <div id="priceBoxNanum">
                                                <div id="Na">무료나눔 체크</div>
                                                <input type="checkbox" id="priceButton"/>
                                            </div>
                                        </div>
                                        <InputTag PHText={"가격을 입력해주세요.."}></InputTag>
                                    </div>
                                    <div id="productName">
                                        <div id="name">거래장소</div>
                                        <InputTag PHText={"주소api 사용할 예정"}></InputTag>
                                    </div>
                                </div>
                            </div>
                            <div id="htmlEditH1">설명란</div>
                            <textarea id="htmlEdit"></textarea>
                        </div>
                        <div id="jogoProductCenterButton">
                            <div id="productBack" onClick={()=> {dispatch({type:"prevCategory"})}}>뒤로가기</div>
                            <div id="productCreate">생성하기</div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default JogoProductCreate;