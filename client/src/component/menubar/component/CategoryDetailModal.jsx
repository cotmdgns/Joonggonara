const CategoryDetailModal = () =>{
    const arrStr1 = ["노트북/PC","반려동물","게임","취미","도서/음반/문구","가전제품","노트북/PC","반려동물","게임","취미","도서/음반/문구","가전제품"]
    const arrStr2 = ["노트북/PC","반려동물","게임"]

    return (
        <>
            <div id="categoryDetailModal">
                {arrStr1.map((arr,index)=>(
                    <div key={index} className="category">
                        <div className="categoryName">{arr}</div>
                        <div id="categoryDetailBox">
                            {arrStr2.map((arr2,index) => (
                                <div key={index} className="categoryDetail">{arr2}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategoryDetailModal;