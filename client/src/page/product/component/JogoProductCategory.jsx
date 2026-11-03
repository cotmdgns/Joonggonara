const JogoProductCategory = ({productImg,productText,nextStep}) =>{
    return (
        <>
            <div className="productCategoryBox" onClick={nextStep}>
                <div id="categoryText">{productText}</div>
            </div>
        </>
    )
}

export default JogoProductCategory;