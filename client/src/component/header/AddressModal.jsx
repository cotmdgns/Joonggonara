const AddressModal = () =>{
    const address = ["서울특별시","부산광역시","대구광역시","인천광역시","광주광역시","대전광역시","울산광역시","세종특별자치시","경기도","강원특별자치도","충청북도","충청남도"]
    return (
        <>
            <div id="addressModal">
                {address.map((add,index)=>{
                    return <div key={index}>{add}</div>
                })}
                
            </div>
        </>
    )
}


export default AddressModal;