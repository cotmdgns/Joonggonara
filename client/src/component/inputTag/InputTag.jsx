import { MdHeight } from "react-icons/md";

const InputTag = ({TText,PHText,WText,val,chage,col,bor}) =>{
    const cssStyle ={
        //default ( 디폴트 값, 변경 안됨 )
        "padding" : "10px",
        "marginBottom" : "15px",
        "borderRadius" : "5px",

        //correction possible ( 변경 가능 )
        "width" : WText != null ? WText : "100%",
        "color" : col != null ? col : "black",
        // "border" : bor ? "1px solid rgb(39, 235, 82)" :"1px solid rgb(168, 168, 168)" ,
        "border" : "1px solid rgb(168, 168, 168)" ,

    }
    const inputStyle ={
        "type" : TText != null ? TText : "컴포넌트에 입력해주세요",
        "placeholder" : PHText != null ? PHText : "컴포넌트에 입력해주세요",
    }

    
    return (
        <>
            <div >
                <input 
                    onChange={chage}
                    value={val}
                    type={inputStyle.type} 
                    placeholder={inputStyle.placeholder}
                    style={cssStyle}/>
            </div>
        </>
    )
}

export default InputTag;