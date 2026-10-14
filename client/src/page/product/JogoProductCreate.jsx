// 아이콘
import { IoMdCloseCircleOutline } from "react-icons/io"; 

// 컴포넌트
import JogoProductCategory from "./component/JogoProductCategory";

// 리액트
import { useReducer } from "react";

// css
import "./css/JogoProduct.scss"

// 리듀서
import { initiaJogoProductReduser, JogoProductReduser } from "./reduser/JogoProductReduser";


const JogoProductCreate = ({productCreateClose}) => {
    const arr = ["디지털","디지털","디지털","디지털","디지털","디지털"]
    
    // 리듀서
    const [state,dispatch] = useReducer(JogoProductReduser,initiaJogoProductReduser)
    const {stepState} = state;

    // 다음 step으로
    const nextStep = (index) =>{
        dispatch({type : "nextCategory"})
    }
    
    return (
        <>
            <div id="jogoProductCreate" onClick={productCreateClose}>
                <div id="jogoProductBox" onClick={(e) => e.stopPropagation()}>
                    <div id="jogoProductHeader">
                        <div id="headerH1">Step {stepState} : 카테고리 선택하기</div>
                        <div id="headerClose" onClick={productCreateClose}><IoMdCloseCircleOutline/></div>
                    </div>
                    <div id="jogoProductCenter">
                        {arr.map((str,index)=>(
                            <JogoProductCategory
                            // index가 아니라 code 
                            onClick={()=>{nextStep(index)}}
                            key={index} productText={str}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JogoProductCreate;