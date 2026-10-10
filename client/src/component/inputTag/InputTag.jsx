const InputTag = ({TText,PHText,WText}) =>{
    const cssStyle ={
        //default ( 디폴트 값, 변경 안됨 )
        "padding" : "10px",
        "margin-bottom" : "15px",
        "border" : "1px solid rgb(168, 168, 168)",
        "border-radius" : "5px",

        //correction possible ( 변경 가능 )
        "width" : WText != null ? WText : "100%"

    }
    const inputStyle ={
        "type" : TText != null ? TText : "컴포넌트에 입력해주세요",
        "placeholder" : PHText != null ? PHText : "컴포넌트에 입력해주세요",
    }

    
    return (
        <>
            <div>
                <input 
                    type={inputStyle.type} 
                    placeholder={inputStyle.placeholder}
                    style={cssStyle}/>
            </div>
        </>
    )
}

export default InputTag;