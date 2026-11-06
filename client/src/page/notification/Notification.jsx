
// scss
import { useEffect,useState } from "react";
import { selectNotificationAPI,selectNotificationDetailAPI } from "./api/NotificationAPI";
import "./css/Notification.scss"
import { useNavigate, useSearchParams } from "react-router-dom";

const Notification = () =>{
    const navigate = useNavigate()
    // 공지사항 페이지는 사실상 조회만 할 예정이라 굳이 리덕스로 관리할 필요 없을거 같음
    const[list,setList] = useState([])          // 리스트 상태값
    const[pagingData,setPagingData] = useState("")      // 페이징 정보
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNum = Number(searchParams.get("pageNum") || 1);

    // 공지사항 상세정보 가져오기
    const selectNotification = async () =>{
        const result = await selectNotificationAPI(pageNum)
        setList(result.data.notificationManagementList)
        setPagingData(result.data.pageMake)
        createButton()
    } 

    // 공지사항 상세 디테일
    const notificationButton = (code) => {
        navigate(`/notification/notificationDetail/${code}`);
    };


    // 버튼 생성하기
    // 이럴줄 알았으면 따로 페이징만 가능한 컴포넌트 하나 만들어 둘껄..
    const createButton = () => {
        const result = [];
        for (let i = 1; i <= pagingData.endPage; i++) {
        if (pageNum === i) {
            result.push(
            <div
                key={i}
                className="active"
                onClick={() => setSearchParams({ pageNum: String(i) })}
            >
                {i}
            </div>,
            );
        } else {
            result.push(
            <div key={i} onClick={() => setSearchParams({ pageNum: String(i) })}>
                {i}
            </div>,
            );
        }
        }
        return result;
    };


    // 왼쪽으로 이동
    const leftButton = () => {
        setSearchParams({ pageNum: pagingData.startPage - 1 });
    };

    // 오른쪽으로 이동
    const rightButton = () => {
        setSearchParams({ pageNum: pagingData.endPage + 1 });
    };

    useEffect(()=>{
        selectNotification()
    },[])

    useEffect(() => {
        selectNotification();
    }, [pageNum]);
    return (
    <div id="notificationBox">
      <div id="notification">
        <div id="notificationHeader">공지사항</div>
        <div id="notificationCenter">
          {/* 테이블 css 바꾸기 */}
          <div className="notificationTableBox">
            <table className="notificationTable">
              <thead>
                <tr>
                  <th className="number">번호</th>
                  <th className="title">제목</th>
                  <th>만든이</th>
                  <th>생성날짜</th>
                </tr>
              </thead>
              <tbody className="managementTableB">

                    {list.map((item,index)=>{
                        return (
                        <>
                        <tr key={index} onClick={()=>{
                            notificationButton(item.notificationManagementCode)
                        }}>
                            <td>{item.notificationManagementCode}</td>
                            <td>{item.notificationManagementTitle}</td>
                            <td>{item.userName}</td>
                            <td>{item?.notificationManagementCreate?.substring(0,10)}</td>
                        </tr>
                        </>
                        )
                    })}

              </tbody>
            </table>
          </div>

          <div id="paging">
            {pagingData.prev && (
              <div
                className="pageB"
                onClick={() => {
                  leftButton();
                }}
              >
                ◀
              </div>
            )}

            {createButton()}
            {pagingData.next && (
              <div
                className="pageB"
                onClick={() => {
                  rightButton();
                }}
              >
                ▶
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    )
}

export default Notification;