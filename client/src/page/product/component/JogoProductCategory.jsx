const JogoProductCategory = ({productImg,productText}) =>{
    return (
        <>
            <div className="productCategoryBox">
                <div id="categoryImg">이미지</div>
                <div id="categoryText">{productText}</div>
            </div>
        </>
    )
}

export default JogoProductCategory;